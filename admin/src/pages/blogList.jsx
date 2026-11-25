import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../components/pagination.jsx';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import { debounce, set } from 'lodash';
import { Context } from '../context/context';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance.js';
import Loader from '../components/loader.jsx';

const BlogList = () => {

  const { authState, setAllBlogs } = useContext(Context);

  const [word, setWord] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [totalBlogs, setTotalBlogs] = useState([]);

  // const blogCstegories = useMemo(() => {
  //   return [...new Set(allBlogs.map(blog => blog.category))];
  // }, [blogs]);

  // Approach 1. Basic title search
  // const handleSearch = (text) => {
  //   setWord(text);
  //   setCurrentPage(1);
  // }

  // Approach 2. Using useCallback hook for debounce search
  // const deb = useCallback(
  //   debounce((text) => setWord(text), 1000), []
  // )
  // const handleSearch = (text) => {
  //   deb(text);
  //   setCurrentPage(1);
  // }

  // Approach 3. Advance and simple way to implement debouncing
  const handleSearch = useMemo(() =>
    debounce((text) => {
      setWord(text);
      setPage(1);
    }, 1000), []
  );

  useEffect(() => {
    return () => {
      handleSearch.cancel(); 
    };
  }, [handleSearch]);

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setPage(1);
  }

  // const filteredblogs = useMemo(() => {
  //   let blogsCopy = word || selectedCategry ? [...allBlogs] : [...blogs];

  //   if (word) {
  //     blogsCopy = blogsCopy.filter((blog) => blog.title.toLowerCase().includes(word.toLowerCase()));
  //   }

  //   if (selectedCategry) {
  //     blogsCopy = blogsCopy.filter((blog) => blog.category === selectedCategry);
  //   }

  //   return blogsCopy;
  // }, [word, selectedCategry, allBlogs]);


  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axiosInstance.delete(`/api/v1/admin/deleteblog/${id}`, { withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.message);
        setBlogs(blogs.filter((blog) => blog._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  const fetchingBlogs = async (page) => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      params.append('page', page);
      params.append('limit', 1);

      if (selectedCategory) {
        params.append('category', selectedCategory);
      }

      if (word) {
        params.append('search', word);
      }

      const response = await axiosInstance.get(`/api/v1/admin/allblogs?${params.toString()}`, { withCredentials: true });
      if (response.data.success) {
        setBlogs(response.data.blogs);
        setAllBlogs(response.data.blogs);
        setCategories(response.data.categories);
        setTotalBlogs(response.data.totalBlogs);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Fetch all blogs failed!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (authState === 'authenticated') {
      fetchingBlogs(page);
    }
  }, [authState, page, selectedCategory, word]);

  // if (blogs.length === 0) {
  //   return (
  //     <div className='w-full h-screen flex justify-center items-center'>
  //       <div className='flex flex-col'>
  //         <h2 className='mb-5'>No blogs exist yet</h2>
  //         <Link to='/' className='px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200'>+ Create new blog</Link>
  //       </div>
  //     </div>
  //   );
  // }

  if(loading || blogs.length === 0) {
    return <Loader />;
  }

  if (blogs.length === 0) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col'>
          <h2 className='mb-5'>No matching blogs found</h2>
          <Link to='/blogs'>Blog List</Link>
        </div>
      </div>
    );
  }

  return (
    <main aria-label='blogs-page' className='p-2 sm:p-3 md:p-5 h-screen'>

      <div className='flex justify-between items-center flex-wrap py-3 px-1 sm:px-5 bg-white mb-3 mt-6 sm:mt-0 gap-2'>
        <h2 className='text-xl font-bold'>Blog List</h2>
        <Link to='/' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>+ Create new blog</Link>
      </div>

      <section aria-label='blogs-categories' className='flex justify-between items-center flex-wrap mb-3 gap-2'>
        <input onChange={(e) => {
          handleSearch(e.target.value);
          setSearchInput(e.target.value);
        }} value={searchInput} className='flex-1 bg-white p-2 ring-1 ring-gray-200' type="text" placeholder='Search blog here...' />
        <select onChange={(e) => handleCategory(e.target.value)} className='p-2 ring-1 ring-gray-200 bg-white'>
          <option value="">All</option>
          {
            categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))
          }
        </select>
      </section>

      <section aria-label='all-blogs' className='ring-1 ring-gray-300 rounded-md my-3'>
        <div className='flex justify-between items-center p-2 gap-1 bg-gray-300 border-b border-gray-500'>
          <h3 className='text-gray-800 hidden sm:block'>Thumbnail</h3>
          <h3 className='text-gray-800'>Title</h3>
          <h3 className='text-gray-800 hidden sm:block'>Publish Date</h3>
          <h3 className='text-gray-800'>Actions</h3>
        </div>
        {blogs.map((blog, index) => (
          <div key={index} className='flex justify-between items-center py-3 px-2 gap-2'>
            <img src={blog.image ? blog.image.replace("/upload/", "/upload/w_400/") : blog.image} className='rounded-full ring-1 ring-gray-200 object-cover w-[50px] h-[50px] hidden sm:block' alt="blog-image" />
            <div className='flex flex-col justify-start items-start max-w-[200px]'>
              <h1 className='font-semibold line-clamp-1'>{blog.title}</h1>
              <p className='text-gray-600 line-clamp-1' dangerouslySetInnerHTML={{__html: blog.description}}></p>
            </div>
            <div className='hidden sm:block justify-start w-[180px]'>
              <p>Jun, 10 2026</p>
            </div>
            <div className='mr-[10px] flex gap-2'>
              <p className='text-red-400 hover:text-red-700 transition-all duration-200 cursor-pointer'>
                <FaRegTrashAlt onClick={() => handleDelete(blog._id)} />
              </p>
              <Link to={`/updateBlog/${blog._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
            </div>
          </div>
        ))}
      </section>

      <div>
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      </div>

    </main>
  )
}

export default BlogList
