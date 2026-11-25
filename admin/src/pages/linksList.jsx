import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { Context } from '../context/context';
import { toast } from 'react-toastify';
import Loader from '../components/loader';
import axiosInstance from '../utils/axiosInstance.js';

const LinksList = () => {

    const { authState, setSocialLinks } = useContext(Context);
    const [links, setLinks] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchLinks = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/api/v1/admin/alllinks', { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message);
                setLinks(response.data.links);
                setSocialLinks(response.data.links);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated' && links.length === 0) {
            fetchLinks();
        }
    }, [authState, links.length]);

    // if (links.length === 0) {
    //     return
    //     (
    //         <div className='w-full h-screen flex justify-center items-center'>
    //             <div className='flex flex-col'>
    //                 <h2 className='mb-5'>No links exist yet</h2>
    //                 <Link to='/addlinks' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>+ Add new links</Link>
    //             </div>
    //         </div>
    //     )
    // }

    if (loading || links.length === 0) {
        return <Loader />
    }

    return (
        <main aria-label='links-page' className='p-2 sm:p-3 md:p-5 h-screen'>

            <div className='flex justify-between items-center flex-wrap py-3 px-1 sm:px-5 bg-white mb-3 mt-6 sm:mt-0 gap-2'>
                <h2 className='text-xl font-bold'>Links List</h2>
                <Link to='/addlinks' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>+ Add new links</Link>
            </div>

            <section aria-label='all-links' className='ring-1 ring-gray-300 rounded-md my-3'>
                <div className='flex justify-around items-center p-2 gap-1 bg-gray-300 border-b border-gray-500'>
                    <h3 className='text-gray-800'>Platform Name</h3>
                    <h3 className='text-gray-800'>Platform Link</h3>
                    <h3 className='text-gray-800'>Action</h3>
                </div>
                <div className='py-3 px-2'>
                    {links.map((link, index) => (
                        <div key={index} >

                            <div className='flex justify-around items-center my-2'>
                                <h1 className='font-semibold line-clamp-1'>YouTube</h1>
                                <p className='text-gray-600 line-clamp-1'>{link.youtubeUrl}</p>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updatelinks/${link._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>

                            <div className='flex justify-around items-center my-2'>
                                <h1 className='font-semibold line-clamp-1'>Instagram</h1>
                                <p className='text-gray-600 line-clamp-1'>{link.instagramUrl}</p>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updatelinks/${link._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>

                            <div className='flex justify-around items-center my-2'>
                                <h1 className='font-semibold line-clamp-1'>LinkedIn</h1>
                                <p className='text-gray-600 line-clamp-1'>{link.linkedInUrl}</p>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updatelinks/${link._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}

export default LinksList
