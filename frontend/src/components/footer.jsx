import { useContext } from 'react';
import { FaArrowUp, FaBookOpen, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";
import { Context } from '../context/context';

const Footer = () => {

  const { links } = useContext(Context);
  const location = useLocation();

  // Hide navbar on login page
  if (location.pathname === '/login' || location.pathname === '/forget-password' || location.pathname === '/verify-email' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service') {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: "0", left: "0", behavior: "smooth" });
  }

  return (
    <footer aria-label='footer' className='bg-black text-white h-auto'>

      <div className='px-[3%] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-10 mt-20 relative'>

        <div>
          <Link to='/' onClick={scrollToTop} className='flex gap-2 items-center mb-5'>
            <FaBookOpen className='text-3xl p-1 text-white font-bold bg-blue-500 rounded-md' />
            <p className='text-2xl font-bold'>Bloggish</p>
          </Link>
          <p className='text-base text-gray-400 sm:max-w-[200px]'>The ultimate destination of curious minds. We bring you high quality stories and insight across technology, lifestyle and global trends.</p>
        </div>

        <section aria-label='quick-links'>
          <h2 className='text-xl font-medium mb-5'>Quick Links</h2>
          <ul className='flex flex-col gap-3 text-gray-400'>
            {location.pathname == '/' ?
              <a href='#latest-blogs' className='hover:text-white transition-all duration-200'>Latest Blogs</a>
              :
              <Link className='hover:text-white transition-all duration-200' to='/' onClick={scrollToTop}>Latest Blogs</Link>
            }
            <Link className='hover:text-white transition-all duration-200' to='/' onClick={scrollToTop}>Trending Topic</Link>
          </ul>
        </section>

        <section aria-label='company-information'>
          <h2 className='text-xl font-medium mb-5'>Company</h2>
          <ul className='flex flex-col gap-3 text-gray-400'>
            <Link className='hover:text-white transition-all duration-200' to='/about' onClick={scrollToTop}>About Us</Link>
            <Link className='hover:text-white transition-all duration-200' to='/contact' onClick={scrollToTop}>Contact Support</Link>
            <Link className='hover:text-white transition-all duration-200' to='/privacy-policy' onClick={scrollToTop}>Privacy Policy</Link>
            <Link className='hover:text-white transition-all duration-200' to='/terms-of-service' onClick={scrollToTop}>Terms of Service</Link>
          </ul>
        </section>

        {/* <div>
          <h2 className='text-xl font-medium mb-5'>Subscribe</h2>
          <p className='text-base text-gray-400 mb-3'>Get the best stories delivered to your inbox every week.</p>
          <div className='flex flex-col'>
            <input className='bg-gray-700 pl-2 mb-3 rounded-md py-2 outline-none' type="email" placeholder='Enter your email' />
            <button className='bg-blue-600 text-white font-medium rounded-md py-2 border-none transition-all duration-200 hover:bg-blue-700'>Join Newsletter</button>
          </div>
        </div> */}

        <section aria-label='social-media-links'>
          <h2 className='text-xl font-medium mb-5'>Follow Us</h2>
            {links.map((link, index) => (
              <div key={index} className='flex gap-3'>
                <a href={link.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <FaYoutube className='text-2xl text-gray-400 hover:text-blue-600 transition-all duration-200 cursor-pointer' />
                </a>
                <a href={link.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className='text-2xl text-gray-400 hover:text-blue-600 transition-all duration-200 cursor-pointer' />
                </a>
                <a href={link.linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='text-2xl text-gray-400 hover:text-blue-600 transition-all duration-200 cursor-pointer' />
                </a>
              </div>
            ))}
        </section>

        <div onClick={() => scrollToTop()} className='absolute top-10 right-5 w-[30px] h-[30px] border border-1 border-white rounded-full hover:bg-blue-500 cursor-pointer flex items-center justify-center'>
          <FaArrowUp className='text-sm text-white' />
        </div>

      </div>

      <hr />

      <div className='px-[3%] py-3 flex items-center justify-center'>
        <p className='text-gray-400'>@ {new Date().getFullYear()} BloggishGroup. All right reserved</p>
      </div>

    </footer>
  )
}

export default Footer
