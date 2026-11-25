import React, { lazy, Suspense, useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../context/context';
import { FaHeart, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Loader from '../components/loader';
import axiosInstance from '../utils/axiosInstance.js';
const SwiperComponent = lazy(()=> import('../components/swiperComponent'))

const Detail = () => {
  const { id } = useParams();
  const { blogs, token, backendUrl } = useContext(Context);

  const [like, setLike] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  // const blog = blogs.find((blog) => blog._id === id);
  // const relatedBlogs = blogs.filter((b) => b.category === blog?.category && b._id !== blog._id);

  const blog = useMemo(()=>{
    return blogs.find((blog) => blog._id === id);
  }, [id, blogs]);

  const relatedBlogs = useMemo(()=>{
    if (!blog) return [];
    return blogs.filter((b) => b.category === blog?.category && b._id !== blog._id);
  }, [blogs, blog]);

  const optimizeImage = blog?.image ? blog.image.replace("/upload/", "/upload/w_400,h_400,c_fill,q_auto,f_auto/") : "";

  useEffect(() => {
    if (blog) {
      gettingAllLikes();
    }
  }, [blog]);

  if (!blog) {
    return <Loader />;
  }

  const readingTime = blog ? Math.ceil(blog.description.split(' ').length / 200) : 0;

  const handleShare = async (platform) => {
    if (!blog) return;

    try {
      // 1️⃣ Prepare the content to copy
      const shareText = `
        ${blog.title}

        ${blog.description.replace(/<[^>]+>/g, '').slice(0, 200)}...

        Read more: ${window.location.href}
      `;

      // 2️⃣ Copy text to clipboard
      await navigator.clipboard.writeText(shareText);

      // 3️⃣ Try to copy the image (if supported)
      try {
        // Approach 1: Using Clipboard API with Blob (modern browsers)
        const res = await fetch(blog.image, { mode: 'cors' }); // ensure cross-origin safe
        const blob = await res.blob();
        if (navigator.clipboard.write) {
          await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob })
          ]);
        }
      } catch (err) {
        console.warn("Image copy not supported:", err);
      }

      toast.success("Blog copied! You can now paste it on " + platform);

      // 4️⃣ Open platform in new tab safely
      let url = "";
      switch (platform) {
        case "linkedin":
          url = "https://www.linkedin.com/feed/";
          break;
        case "instagram":
          url = "https://www.instagram.com/";
          break;
        case "twitter":
          url = "https://twitter.com/intent/tweet";
          break;
        default:
          toast.info("Platform not supported");
          return;
      }

      window.open(url, "_blank", "noopener,noreferrer");

    } catch (error) {
      toast.error("Failed to copy or open platform");
    }
  };

  const gettingAllLikes = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/user/alllikes/${blog._id}`, { withCredentials: true });
      if (response.data.success) {
        setLike(response.data.userLiked);
        setTotalLikes(response.data.totalLikes)
        // console.log("Fetched likes. User liked:", response.data.userLiked, "Total Likes:", response.data.totalLikes);
      }
    } catch (error) {
      toast.error(error.response?.data?.error)
    }
  }

  const toggleLike = async () => {
    try {
      // const response = await axios.post(`${backendUrl}/api/v1/like/togglelike/${blog._id}`, { like: !like }, { headers: { Authorization: `Bearer ${token}` } }); // This is for Approach 2 in like Controller toggleLike function
      const response = await axiosInstance.post(`/api/v1/user/togglelike/${blog._id}`, {}, { withCredentials: true });
      if (response.data.success) {
        setLike(response.data.userLiked);
        setTotalLikes(response.data.totalLikes);
        toast.success(response.data.message || (response.data.userLiked ? "Liked!" : "Unliked!"));
        // console.log("Like toggled. New state:", response.data.userLiked, "Total Likes:", response.data.totalLikes);
      }
    } catch (error) {
      toast.error(error.response?.data?.error);
    }
  };


  return blog && (
    <main aria-label='detail-page'>

      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 pt-8">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={optimizeImage} alt={blog.title} className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover" loading='lazy' />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{blog.title}</h1>

            {/* Author info */}
            <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-gray-500">
              <span className="text-blue-600 font-medium">{blog.category}</span>
              <span>-</span>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              <span>-</span>
              {/* // find a better way to calculate read time */}
              {/* // Assuming an average reading speed of 200 words per minute */}
              <span>{readingTime} min read</span>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {blog.authorName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{blog.authorName}</p>
                  <p className="text-sm text-gray-500">{blog.authorProfession}</p>
                </div>
              </div>
              <div className='flex gap-2 items-center border border-1 border-gray-200 rounded-lg px-3 py-1'>
                <p className='text-xl'>{totalLikes}</p>
                <FaHeart
                  onClick={toggleLike}
                  className={`inline-block ml-1 ${like ? 'text-blue-600' : 'text-gray-500'} text-2xl cursor-pointer`} />
              </div>
            </div>

            {/* Article Body */}
            <div className="mt-10 space-y-6 text-gray-700">
              <p dangerouslySetInnerHTML={{ __html: blog.description }} />
            </div>

            {/* Social media share buttons */}
            <div className='flex flex-col max-w-6xl mx-auto py-5 mt-10 gap-3'>
              <h3 className='text-xl font-semibold'>Share on social media</h3>
              <div className='flex gap-2'>
                <div onClick={() => handleShare("linkedin")}>
                  <FaLinkedin className='text-2xl text-gray-500 hover:text-blue-600 cursor-pointer' />
                </div>
                <div onClick={() => handleShare("instagram")}>
                  <FaInstagram className='text-2xl text-gray-500 hover:text-blue-600 cursor-pointer' />
                </div>
                <div onClick={() => handleShare("twitter")}>
                  <FaTwitter className='text-2xl text-gray-500 hover:text-blue-600 cursor-pointer' />
                </div>
              </div>
            </div>

            {/* Related Blogs Section */}
            {relatedBlogs.length > 0 && (
              <div>
                <h3 className='text-3xl font-bold text-black'>Related Blogs</h3>
                <Suspense fallback={<Loader message="Component is loading"/>}>
                  <SwiperComponent blogs={relatedBlogs} />
                </Suspense>
              </div>
            )}

            {/* Subscription Section */}
            {/* <div className="mt-14 bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Enjoyed this blog post and want more? Subscribe to our newsletter!
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Join 20,000+ readers and get the latest tech insights delivered
                directly to your inbox.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="px-4 py-3 rounded-lg text-black w-full sm:w-80 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
                  Join Now
                </button>
              </div>
            </div> */}

          </div>

        </div>

      </div>

    </main>
  )
}

export default Detail
