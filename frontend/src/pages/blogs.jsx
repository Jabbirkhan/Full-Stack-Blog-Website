import React, { useContext, useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../components/pagination'
import { Context } from '../context/context'
import { assets } from '../assets/assets';
import axiosInstance from '../utils/axiosInstance.js';
import { toast } from 'react-toastify';
import Loader from '../components/loader';

const Blogs = () => {

  const { authState } = useContext(Context);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  // const blogCategories = useMemo(() => {
  //   return [...new Set(allBlogs.map(blog => blog.category))];
  // }, [allBlogs]);


  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setPage(1);
  }

  const resetCategory = () => {
    setSelectedCategory(null);
    setPage(1);
  }

  // const filteredBlogs = useMemo(() => {
  //   return selectedCategory ? allBlogs.filter((blog) => blog.category === selectedCategory) : blogs;
  // }, [selectedCategory, allBlogs]);

  // Fetching blogs 
  const fetchBlogs = async (page) => {
    try {
      setLoading(true);

      const params = new URLSearchParams();
      params.append('page', page);
      params.append('limit', 8);

      if (selectedCategory) {
        params.append('category', selectedCategory);
      }

      const response = await axiosInstance.get(`/api/v1/user/allblogs?${params.toString()}`, { withCredentials: true });
      if (response.data.success) {
        setBlogs(response.data.blogs);
        setCategories(response.data.categories);
        setTotalBlogs(response.data.totalBlogs);
        setTotalPages(response.data.totalPages);
        setPage(response.data.currentPage);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (authState === 'authenticated') {
      fetchBlogs(page);
    }
  }, [authState, page, selectedCategory]);

  const scrollTop = window.scrollTo({ top: "0", left: "0", behavior: "smooth" });

  // if (blogs.length === 0) {
  //   return <div className='flex justify-center items-center w-full h-screen'>
  //     <div className='flex flex-col gap-2'>
  //       <p className='text-center text-gray-600'>No blog found. Please check back later</p>
  //       <Link to='/' className='text-white bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-600 transition-all duration-200'>Go to home</Link>
  //     </div>
  //   </div>
  // }

  if (loading || blogs.length === 0) {
    return <Loader />;
  }

  return (
    <main aria-label='blogs-page' className='px-[3%]'>

      {/* <section className='h-[250px] sm:h-[300px] bg-center bg-cover bg-no-repeat flex items-center justify-center' style={{ backgroundImage: `url(${assets.theme1})` }}>
        <h1 className='max-w-4xl mx-auto text-center text-xl sm:text-2xl md:text-4xl font-bold text-white p-2'>
          Explore Technical Blogs
        </h1>
      </section> */}

      <div className='flex flex-col justify-center items-left my-[30px]'>
        <h3 className='text-3xl font-bold text-black'>All Blogs</h3>
        <p className='text-base text-gray-500'>
          Practical guides, deep dives, and real-world concepts across full-stack development, system design, and AI.
        </p>
      </div>

      <section aria-label='blogs-categories' className='flex flex-wrap items-center justify-start gap-1 sm:gap-2'>
        <button onClick={() => resetCategory()} className={`${selectedCategory === null ? "bg-blue-600 text-white" : ""} px-4 py-2 border border-1 border-gray-500 rounded-md hover:text-white hover:bg-blue-600 transition-all duration-200`}>
          All
        </button>
        {
          categories.map((cat, index) => (
            <button key={index} onClick={() => handleCategoryClick(cat)} className={`${selectedCategory === cat ? "bg-blue-600 text-white" : ""} px-4 py-2 border border-1 border-gray-500 rounded-md hover:text-white hover:bg-blue-600 transition-all duration-200`}>
              {cat}
            </button>
          ))
        }
      </section>

      <section aria-label='all-blogs' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-5 my-5'>
        {
          blogs.map((blog, index) => (
            <Link to={`/detail/${blog._id}`} key={index} onClick={scrollTop} className="group block h-full cursor-pointer">

              <article className="relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                {/* Image */}

                <div className="relative overflow-hidden h-[230px] sm:h-[250px]">

                  <img
                    src={blog.image ? blog.image.replace("/upload/", "/upload/w_600/") : blog.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    alt={blog.title.slice(0, 10)}
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />


                  {/* Category */}

                  <div className="absolute top-4 left-4">

                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-blue-600 shadow-lg">
                      {blog.category}
                    </span>

                  </div>


                  {/* Latest Badge */}

                  {blog.latest && (

                    <div className="absolute top-4 right-4">

                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Latest
                      </span>

                    </div>

                  )}


                  {/* Read Button */}

                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                    <span className="text-lg group-hover:translate-x-0.5 transition-transform duration-300">
                      →
                    </span>

                  </div>

                </div>


                {/* Content */}

                <div className="p-5">

                  {/* Date */}

                  <div className="flex items-center justify-between mb-3">

                    <span className="text-xs font-medium text-slate-400">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>

                    <span className="text-xs text-slate-400">
                      Article
                    </span>

                  </div>


                  {/* Title */}

                  <h2 className="text-xl font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h2>


                  {/* Description */}

                  <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{__html: blog.descriptio}}/>

                  {/* Author */}

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">

                    <div className="flex items-center gap-3 min-w-0">

                      {/* Avatar */}

                      <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                        {blog.authorName?.charAt(0)?.toUpperCase()}
                      </div>


                      <div className="min-w-0">

                        <p className="text-sm font-semibold text-slate-800 truncate">
                          {blog.authorName}
                        </p>

                        <p className="text-xs text-slate-400 truncate">
                          {blog.authorProfession}
                        </p>

                      </div>

                    </div>


                    {/* Read More */}

                    <div className="shrink-0 flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all duration-300">

                      Read

                      <span className="text-base">
                        →
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            </Link>
          ))
        }
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

export default Blogs
