import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SwiperComponent = ({ blogs }) => {
    const scrollTop = window.scrollTo({ top: "0", left: "0", behavior: "smooth" });
    return (
        <section id='latest-blogs'>
            <div className='px-[3%]'>

                <div className='flex items-center justify-end mt-[50px]'>

                    <div className={`flex items-center justify-end ${blogs.length < 3 ? 'hidden' : ''}`}>
                        <div className='flex gap-[20px]'>
                            <div className='p-2 border border-1 border-gray-300 rounded-full'>
                                <FaArrowLeft className='custom-prev text-base text-gray-500 cursor-pointer hover:text-blue-600 transition-all duration-200' />
                            </div>
                            <div className='p-2 border border-1 border-gray-300 rounded-full'>
                                <FaArrowRight className='custom-next text-base text-gray-500 cursor-pointer hover:text-blue-600 transition-all duration-200' />
                            </div>
                        </div>
                    </div>

                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        }
                    }}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    {
                        blogs.map((blog, index) => (
                            <SwiperSlide key={index} className='flex p-2 mb-5' style={{ width: 'auto', height: 'auto' }}>
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
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default SwiperComponent
