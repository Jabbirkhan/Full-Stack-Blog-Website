import React, { useMemo, useRef, useState } from 'react'
import { useContext } from 'react';
import { Context } from '../context/context';
import { toast } from "react-toastify";
import Loader from "./../components/loader";
import JoditEditor from 'jodit-react';
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import axiosInstance from '../utils/axiosInstance.js';

const AddBlog = () => {
  const { authState, navigate, setBlogs } = useContext(Context);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [latest, setLatest] = useState(false);
  const [authorName, setAuthorName] = useState('Jabbir Khan');
  const [authorProfession, setAuthorProfession] = useState('Full Stack Developer');
  const [linkedInUrl, setLinkedInUrl] = useState('https://www.linkedin.com/in/jabbir-khan-1aab001b0/');
  const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com/@jabbirkhan');
  const [category, setCategory] = useState('Frontend');
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const editor = useRef(null);

  const config = useMemo(() => ({
    readonly: false,
    iframe: false,
    placeholder: 'Write blog description...',
    minHeight: 300,
    maxHeight: 300,

    uploader: {
      insertImageAsBase64URI: true // THIS is the key
    },

    // Paste options
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,

    defaultActionOnPaste: "insert_as_html", // 🔥 IMPORTANT

    pasteHTMLActionList: [
      { value: 'insert_as_html', text: 'Keep formatting' },
      { value: 'insert_as_text', text: 'Plain text' }
    ],

    cleanHTML: {
      cleanOnPaste: false // 🔥 disable aggressive cleaning
    },

    // Custom buttons
    buttons: [
      'bold', 'italic', 'underline', '|',
      'ul', 'ol', '|',
      'image', 'video', '|',
      'link', '|',
      'code', 'source', '|',
      {
        name: 'insertJS',
        iconURL: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        exec: (editor) => {
          editor.s.insertHTML(`
        <pre><code class="language-javascript"> // Write your JavaScript code here
        </code></pre>
      `);
        }
      }
    ],

    // Highlight.js integration
    events: {
      afterSetMode: () => {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightElement(block);
        });
      }
    }

  }), []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (authState !== 'authenticated') {
        return navigate('/login');
      }
      setLoading(true);
      const formData = new FormData();

      formData.append('title', title);
      formData.append('description', description);
      formData.append('latest', latest);
      formData.append('authorName', authorName);
      formData.append('authorProfession', authorProfession);
      formData.append('linkedInUrl', linkedInUrl);
      formData.append('youtubeUrl', youtubeUrl);
      formData.append('category', category);
      image && formData.append('image', image);

      const response = await axiosInstance.post('/api/v1/admin/addblog', formData, { withCredentials: true });
      if (response.data.success) {
        setBlogs((prev)=> [...prev, response.data.blog]);
        toast.success(response.data.message || "Blog uploaded successfully");
        navigate('/blogs');
        setTitle('')
        setDescription('')
        setLatest(false);
        setAuthorName('')
        setAuthorProfession('')
        setLinkedInUrl('')
        setYoutubeUrl('')
        setCategory('Frontend');
        setImage(null);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  if(loading){
    return <Loader />
  }

  return (
    <main aria-label='add-blog-page' className='px-10 py-3 h-screen'>

      <form onSubmit={onSubmitHandler}>
        {/* upper section  */}
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>

          <div>
            <h2 className='text-2xl font-bold'>Add New Blog</h2>
            <p className='text-gray-500'>Create and publish a new article to your audience</p>
          </div>

          <button type='submit' className='max-w-40 px-4 py-0 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200'>
            Publish blog
          </button>

        </div>

        {/* middle section  */}
        <div className='flex flex-col md:flex-row md:justify-between md:items-start mt-[10px] gap-2 sm:gap-5 mb-[20px]'>

          <div className='basis-4/5 max-w-[800px] bg-white p-[20px] rounded-md'>
            <h2 className='text-xl font-semibold mb-2'>Post Content</h2>

            <div>
              <div className='flex flex-col items-start mb-2'>
                <label htmlFor="title" className='text-gray-600 font-semibold mb-1'>Blog Title</label>
                <input
                  className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  id='title'
                  placeholder='Write blog title here ...'
                  required
                />
              </div>

              <div className='flex flex-col items-start mb-2'>
                <label className='text-gray-600 font-semibold mb-1'>Blog Description</label>
                <div className='w-full overflow-hidden' >
                  <JoditEditor
                    ref={editor}
                    value={description}
                    config={config}
                    onChange={newContent => setDescription(newContent)}
                  />
                </div>

              </div>

            </div>

          </div>

          <div className='basis-1/5'>

            <div className='p-2 rounded-md bg-white mb-2'>
              <h2 className='text-gray-600 font-semibold mb-1'>Featured Image</h2>
              <div>
                <label htmlFor="image">
                  {!image ?
                    <div className='flex justify-center items-center text-center rounded-sm h-[100px] w-full bg-gray-300 hover:bg-gray-400 transition-all duration-200 text-white cursor-pointer'>Select Image</div>
                    : <img src={URL.createObjectURL(image)} className='w-full h-[100px] object-cover' alt="blog-image" />
                  }
                  <input type="file" id='image' onChange={(e) => setImage(e.target.files[0])} hidden />
                </label>
              </div>
            </div>

            <div className='p-2 rounded-md bg-white mb-2'>
              <h2 className='text-gray-600 font-semibold mb-1'>Setting</h2>
              <div className='p-1 bg-blue-200 rounded-md flex flex-col justify-start items-start'>
                <div className='flex flex-col justify-start items-start'>
                  <h2 className='md:text-sm lg:text-base font-medium text-gray-800'>Latest Blog</h2>
                  <p className='text-gray-600 text-xs line-clamp-2'>Feature this blog on homepage</p>
                </div>
                <div className='relative my-1 w-[40px] h-[20px]'>
                  <input
                    type="checkbox"
                    onChange={(e) => setLatest(e.target.checked)}
                    checked={latest}
                    className='peer absolute w-full h-full opacity-0 cursor-pointer'
                  />
                  <div className='w-full h-full bg-gray-300 rounded-full transition-colors peer-checked:bg-green-500'></div>
                  <div className='absolute top-[2px] left-[2px] w-[16px] h-[16px] bg-white rounded-full transition-all peer-checked:translate-x-[20px]'></div>
                </div>
              </div>
            </div>

            <div className='w-full bg-white p-2'>
              <h2 className='text-gray-600 font-semibold mb-1'>Select Category</h2>
              <select onChange={(e) => setCategory(e.target.value)} id='category' className='w-full px-2 py-2 ring-1 ring-gray-300'>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="System Design">System Design</option>
              </select>
            </div>

          </div>

        </div>

        {/* bottom section  */}
        <div className='bg-white p-[20px] rounded-md'>
          <div>
            <h2 className='text-xl font-medium mb-1 text-gray-800'>Author Information</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2'>
              <div className='flex flex-col items-start mb-2'>
                <label htmlFor="name" className='text-gray-600 font-semibold mb-1'>Name</label>
                <input
                  type="text"
                  className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                  id='name'
                  onChange={(e) => setAuthorName(e.target.value)}
                  value={authorName}
                  placeholder='Author name ...'
                  required
                  autoComplete='off'
                />
              </div>
              <div className='flex flex-col items-start mb-2'>
                <label htmlFor="profession" className='text-gray-600 font-semibold mb-1'>Profession</label>
                <input
                  type="text"
                  className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                  id='profession'
                  onChange={(e) => setAuthorProfession(e.target.value)}
                  value={authorProfession}
                  placeholder='Author Profession e.g Developer, Digital Marketing ...'
                  required
                  autoComplete='off'
                />
              </div>
              <div className='flex flex-col items-start mb-2'>
                <label htmlFor="linkedInUrl" className='text-gray-600 font-semibold mb-1'>LinkedIn Url</label>
                <input
                  type="url"
                  className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                  id='linkedInUrl'
                  onChange={(e) => setLinkedInUrl(e.target.value)}
                  value={linkedInUrl}
                  placeholder='LinkedIn Url ...'
                  required
                  autoComplete='off'
                />
              </div>
              <div className='flex flex-col items-start mb-2'>
                <label htmlFor="youtubeUrl" className='text-gray-600 font-semibold mb-1'>YouTube Url</label>
                <input
                  type="url"
                  className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                  id='youtubeUrl'
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  value={youtubeUrl}
                  placeholder='YouTube Url ...'
                  required
                  autoComplete='off'
                />
              </div>
            </div>

          </div>
        </div>
      </form>

    </main>
  )
}

export default AddBlog
