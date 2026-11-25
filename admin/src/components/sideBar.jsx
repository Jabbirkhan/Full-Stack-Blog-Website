// version 2 
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../context/context';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance.js';
import { set } from 'lodash';
import { useLocation } from "react-router-dom";

const SideBar = () => {

  const {setAuthState, navigate} = useContext(Context);

  const [visible, setVisible] = useState(false);
  const location = useLocation();
    if(location.pathname === '/login' || location.pathname === '/forget-password') {
        return null;
    }

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post('/api/v1/admin/logout', {}, { withCredentials: true }); // POST accept three parameters, but GET accept only two parameters, so we pass an empty object as the second parameter
      if (response.data.success) {
        toast.success(response.data.message || "Logged out successfully");
        setAuthState('unauthenticated');
        navigate('/login');
      }
    } catch (error) {
     toast.error(error.response?.data?.message); 
    }
  }

  return (
    <aside aria-label='aside-bar'>

      {/* Desktop Sidebar */}
      <div className='hidden sm:block fixed top-0 left-0 bg-white p-2 px-[20px] h-screen w-52'>

        {/* Sidebar menu */}
        <nav aria-label='navbar' className='flex flex-col justify-start items-start'>

          <div className='flex justify-start items-center gap-1 mb-5'>
            <div className='bg-blue-500 w-8 h-10 rounded-md'></div>
            <div className='flex flex-col'>
              <h2 className='text-xl font-bold uppercase'>Bloggish</h2>
              <p className='text-sm text-gray-500 font-medium uppercase'>Admin Panel</p>
            </div>
          </div>

          <div>
            <p className='text-gray-600 text-xs mb-2'>Management</p>
          </div>

          <ul className='flex flex-col gap-1 w-full'>
            <NavLink to='/' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Blog</NavLink>
            <NavLink to='/blogs' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Blogs</NavLink>
            <NavLink to='/addlinks' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Links</NavLink>
            <NavLink to='/links' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Links</NavLink>
            <NavLink to='/addpolicies' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Policy</NavLink>
            <NavLink to='/policies' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Policies</NavLink>
            <NavLink to='/addprinciple' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Principle</NavLink>
            <NavLink to='/principles' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Principles</NavLink>
            <NavLink to='/addinformation' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Information</NavLink>
            <NavLink to='/information' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Information</NavLink>
          </ul>

        </nav>

        {/* logout button */}
        <div className='w-full absolute bottom-0 left-0 flex justify-between items-center p-2 bg-gray-300'>

          <div className='flex items-center gap-2'>
            <p className='text-sm text-gray-500'>Super Admin</p>
          </div>

          <div>
              <FaSignOutAlt onClick={handleLogout} className='text-red-500 cursor-pointer' />
          </div>

        </div>

      </div>


      {/* Mobile Hamburger */}
      <div className='sm:hidden fixed top-3 left-1 text-xl py-3 px-3 hover:text-blue-600 transition-all duration-200'>
        <FaBars onClick={() => setVisible(true)} />
      </div>

      {/* Overlay */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setVisible(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-white p-2 px-[20px] z-50 transform transition-transform duration-300 sm:hidden
        ${visible ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Sidebar menu */}
        <nav className='flex flex-col justify-start items-start'>

          <div className='flex justify-start items-center gap-1 mb-10'>
            <div className='bg-blue-500 w-8 h-10 rounded-md'></div>
            <div className='flex flex-col'>
              <h2 className='text-xl font-bold uppercase'>Bloggish</h2>
              <p className='text-sm text-gray-500 font-medium uppercase'>Admin Panel</p>
            </div>
          </div>

          <div>
            <p className='text-gray-600 text-xs mb-2'>Management</p>
          </div>

          <ul className='flex flex-col gap-1 w-full'>
            <NavLink to='/' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Blog</NavLink>
            <NavLink to='/blogs' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Blogs</NavLink>
            <NavLink to='/addlinks' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Links</NavLink>
            <NavLink to='/links' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Links</NavLink>
            <NavLink to='/addpolicies' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Policy</NavLink>
            <NavLink to='/policies' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Policies</NavLink>
            <NavLink to='/addprinciple' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Principle</NavLink>
            <NavLink to='/principles' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Principles</NavLink>
            <NavLink to='/addinformation' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>Add Information</NavLink>
            <NavLink to='/information' className='hover:bg-blue-600 hover:text-white rounded-md px-2 py-[5px] transition-all duration-300'>All Information</NavLink>
          </ul>

          {/* logout button */}
          <div className='w-full absolute bottom-0 left-0 flex justify-between items-center p-2 bg-gray-300'>

            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-full bg-blue-400 flex justify-center items-center text-white'>A</div>
              <div className='flex flex-col'>
                <h2 className='text-base font-semibold'>Alex carry</h2>
                <p className='text-sm text-gray-500'>Super Admin</p>
              </div>
            </div>

            <div>
              <FaSignOutAlt onClick={handleLogout} className='text-red-500 cursor-pointer' />
            </div>

          </div>

        </nav>

      </div>

    </aside>
  )
}

export default SideBar
