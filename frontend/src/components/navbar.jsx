import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaArrowLeft, FaBookOpen, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { Context } from '../context/context'
import { toast } from 'react-toastify'
import axiosInstance from '../utils/axiosInstance.js'
import Loader from './loader.jsx'

const Navbar = () => {

  const { authState, setAuthState, navigate, userProfile } = useContext(Context);
  const profile = userProfile || {};
  const [visible, setVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const location = useLocation();

  // Hide navbar on login page
  if (location.pathname === '/login' || location.pathname === '/forget-password' || location.pathname === '/verify-email' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service') {
    return null;
  }

  const logoutHandler = async () => {
    try {
      const response = await axiosInstance.post('/api/v1/user/logout', {}, { withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.message || "Logout successful");
        setAuthState('unauthenticated');
        navigate('/login');
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  const sendOtpForEmailVerification = async () => {
    try {
      if (authState !== 'authenticated') {
        return navigate('/login');
      }

      setLoader(true);
      const response = await axiosInstance.get('/api/v1/user/send-verify-email-otp', { withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/verify-email');
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  if (loader) {
    return <Loader />
  }

  return (
    <header aria-label='header' className='w-full px-[3%] p-4 bg-white text-black relative'>
      <nav aria-label='navbar' className='flex justify-between items-center'>
        <Link to='/' className='flex gap-2 items-center justify-between'>
          <FaBookOpen className='text-3xl p-1 text-white bg-blue-500 rounded-md' />
          <p className='text-2xl font-bold'>Bloggish</p>
        </Link>
        <ul className='hidden sm:flex justify-between items-center gap-4'>
          <NavLink to='/' className='hover:text-blue-400 transition-all duration-300'>Home</NavLink>
          <NavLink to='/blogs' className='hover:text-blue-400 transition-all duration-300'>Blogs</NavLink>
          <NavLink to='/about' className='hover:text-blue-400 transition-all duration-300'>About</NavLink>
          <NavLink to='/contact' className='hover:text-blue-400 transition-all duration-300'>Contact</NavLink>
          <div className='group relative w-full'>
            <FaUserCircle className='text-4xl hidden sm:flex hover:text-blue-400 transition-all duration-200 cursor-pointer' />
            <div className='w-[150px] absolute z-10 hidden group-hover:block top-9 right-0 bg-white shadow-md p-1 text-sm'>
              <div className='w-full flex flex-col gap-2'>
                <Link className='hover:text-blue-400 px-4 transition-all duration-200 cursor-pointer'>Profile</Link>
                {profile.isAccountVerified ? (
                  <p className="hover:text-blue-400 px-4 transition-all duration-200 cursor-ointer">
                    Verified
                  </p>
                ) : (
                  <p
                    onClick={sendOtpForEmailVerification}
                    className="hover:text-blue-400 px-4 transition-all duration-200 cursor-pointer"
                  >
                    Verify email
                  </p>
                )}
                <Link onClick={logoutHandler} className='hover:text-blue-400 px-4 transition-all duration-200 cursor-pointer'>{authState === 'authenticated' ? 'Logout' : 'Login'}</Link>
              </div>
            </div>
          </div>
        </ul>
        <FaBars onClick={() => setVisible(true)} className='text-2xl sm:hidden cursor-pointer' />
      </nav>
      <div className={`absolute ${visible ? 'w-full' : 'w-0'} overflow-hidden z-10 top-0 left-0 h-screen bg-white flex flex-col justify-start items-left transition-all duration-300 sm:hidden`}>
        <div className='p-4 flex justify-start items-center gap-2 border-b-2'>
          <FaArrowLeft className='text-2xl cursor-pointer' onClick={() => setVisible(false)} />
          <p className='text-xl' onClick={() => setVisible(false)}>Back</p>
        </div>
        <ul className='flex flex-col justify-start items-left gap-4 p-4'>
          <NavLink to='/' onClick={() => setVisible(false)} className='hover:text-blue-400 transition-all duration-300'>Home</NavLink>
          <NavLink to='/blogs' onClick={() => setVisible(false)} className='hover:text-blue-400 transition-all duration-300'>Blogs</NavLink>
          <NavLink to='/about' onClick={() => setVisible(false)} className='hover:text-blue-400 transition-all duration-300'>About</NavLink>
          <NavLink to='/contact' onClick={() => setVisible(false)} className='hover:text-blue-400 transition-all duration-300'>Contact</NavLink>
          {/* <Link to='/login' onClick={()=>setVisible(false)}><button className='bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-700 transition-all duration-300'>Login</button></Link> */}
          <NavLink to='/login' className='flex items-center justify-between gap-2'>
            {authState !== 'authenticated' ?
              <button className='w-fulll flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300'>Login</button>
              :
              <button onClick={logoutHandler} className='w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300'>Logout<FaSignOutAlt className='text-base' /></button>
            }
          </NavLink>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
