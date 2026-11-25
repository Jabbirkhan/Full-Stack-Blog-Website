import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { assets } from "./../assets/assets";

const Hero = () => {
  const scrollTop = window.scrollTo({ top: "0", left: "0", behavior: "smooth" });
  return (
    // <div className='bg-[url(src/assets/theme2.jpg)] bg-no-repeat bg-center bg-cover h-[430px] sm:h-[500px]'>
    <section aria-label='hero-section' className='bg-no-repeat bg-center bg-cover h-[430px] sm:h-[500px]' style={{backgroundImage: `url(${assets.theme2})`}}>
      <div className='flex flex-col gap-5 justify-start items-start h-[100%] pl-[3%] pt-[6%]'>
          <p className='bg-opacity-[50%] bg-blue-300 text-white p-2 rounded-md text-xs font-bold uppercase'>Curated Perspective</p>
        <h1 className='max-w-4xl text-2xl sm:text-3xl md:text-5xl font-bold text-white'>Learn, Build, and Master Modern <span className='text-blue-700'>Software Development</span></h1>
        <p className='text-xl text-white text-left max-w-[800px]'>
          A focused platform for developers and students to understand frontend, backend, system design, DevOps, and AI without noise or unnecessary complexity.
        </p>
        <div className='sm:flex space-y-4 sm:space-y-0 sm:gap-4'>
          <NavLink to='/blogs' onClick={scrollTop} className='bg-blue-600 hover:bg-blue-700 transition-all duration-200 px-5 py-3 rounded-lg text-white font-bold border-none flex items-center gap-2 justify-center'>Start Reading <FaArrowRight/> </NavLink>
          <NavLink to='/blogs' onClick={scrollTop} className='bg-black bg-opacity-[20%] border-2 border-white hover:bg-blue-700 transition-all duration-200 px-5 py-3 rounded-lg text-white font-bold'>Browse Topics</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
