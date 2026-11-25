import React, { lazy, Suspense, useContext, useMemo } from 'react'
import Hero from '../components/hero'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'
import Loader from '../components/loader'
// import SwiperComponent from '../components/swiperComponent'
// import TopBlogs from '../components/topBlogs'
const TopBlogs = lazy(() => import('../components/topBlogs'))
const SwiperComponent = lazy(() => import('../components/swiperComponent'))

const Home = () => {

  const { blogs } = useContext(Context);

  const latestBlogs = useMemo(() => {
    return blogs.filter((blog) => blog.latest === true)
  }, [blogs]);

  // if (blogs.length === 0) {
  //   return <div className='flex justify-center items-center w-full h-screen'>
  //     <div className='flex flex-col gap-2'>
  //       <p className='text-center text-gray-600'>No blog found. Please check back later</p>
  //       <Link to='/blogs' className='text-white bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-600 transition-all duration-200'>Go to blogs</Link>
  //     </div>
  //   </div>
  // }

  if(blogs.length === 0){
    return <Loader />
  }

  return (
    <main aria-label='home-page'>

      <Suspense fallback={<Loader />}>
        <Hero />

        <div className='flex flex-col items-center justify-center px-[3%] mt-[50px]'>
          <h3 className='text-3xl font-bold text-black'>Latest Blogs</h3>
          <p className='text-base text-gray-500'>Freshly published insight from our top contributors</p>
        </div>

        <SwiperComponent blogs={latestBlogs} />
        <TopBlogs />

      </Suspense>

    </main>
  )
}

export default Home
