import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'

const TopBlogs = () => {

  const { blogs } = useContext(Context);

  const topBlogsFiltered = useMemo(() => {
    return blogs.filter((blog) => blog.latest !== true)
  }, [blogs]);

  const topBlogs = topBlogsFiltered.slice(0, 8);

  if (topBlogs.length === 0) {
    return (
      <div className='flex justify-center items-center w-full h-screen'>
        <p className='text-lg text-gray-500'>No blogs found.</p>
      </div>
    );
  }

  const scrollTop = window.scrollTo({ top: "0", left: "0", behavior: "smooth" });

  return (
    <section aria-label='top-blogs' className='px-[3%]'>

      <div className='flex flex-col justify-center items-center my-[50px]'>
        <h3 className='text-3xl font-bold text-black'>Top Blogs</h3>
        <p className='text-base text-gray-500'>Our most popular and though provoking pieces curated just for you</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-5 my-5'>
        {
          topBlogs.map((blog, index) => (
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

                  <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{ __html: blog.descriptio }} />

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
      </div>

      <div className='w-full flex items-center justify-center'>
        <Link to='/blogs'
          onClick={() => window.scrollTo({ top: "0", left: "0", behavior: "smooth" })}
          className='text-white bg-blue-400 bg-opacity-[70%] px-3 py-2 rounded-md hover:bg-blue-400 transition-all duration-300 my-5'>
          See all blogs
        </Link>
      </div>

    </section>
  )
}

export default TopBlogs
