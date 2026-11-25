import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { Context } from '../context/context';
import { toast } from 'react-toastify';
import Loader from '../components/loader';
import axiosInstance from '../utils/axiosInstance.js';

const InfoList = () => {

    const { authState, setAllInformation } = useContext(Context);
    const [information, setInformation] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchInformation = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/api/v1/admin/allinformation', { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message);
                setInformation(response.data.information);
                setAllInformation(response.data.information);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated' && information.length === 0) {
            fetchInformation();
        }
    }, [authState, information.length]);

    // if (information.length === 0) {
    //     return 
    //     (
    //         <div className='w-full h-screen flex justify-center items-center'>
    //             <div className='flex flex-col'>
    //                 <h2 className='mb-5'>No information exist yet</h2>
    //                 <Link to='/addinformation' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>+ Add Information</Link>
    //             </div>
    //         </div>
    //     )
    // }

    if (loading || information.length === 0) {
        return <Loader />
    }

    return (
        <main aria-label='information-list' className='p-2 sm:p-3 md:p-5 h-screen'>

            <div className='flex justify-between items-center flex-wrap py-3 px-1 sm:px-5 bg-white mb-3 mt-6 sm:mt-0 gap-2'>
                <h2 className='text-xl font-bold'>Information List</h2>
                <Link to='/addprinciple' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>+ Add Principle</Link>
            </div>

            <section aria-label='all-policies' className='ring-1 ring-gray-300 rounded-md my-3'>
                <div className='flex justify-between items-center p-2 gap-1 bg-gray-300 border-b border-gray-500'>
                    <h3 className='text-gray-800'>Information</h3>
                    <h3 className='text-gray-800'>Action</h3>
                </div>
                <div className='py-3 px-2'>
                    {information.map((i, index) => (
                        <div key={index} >

                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>About page heading</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.heading}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>About page description</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.description}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>About page mission</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.mission}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>About page vission</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.vission}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>Contact page email</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.email}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>Contact page phone</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.phone}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>Contact page office timing</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.officeTiming}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>Contact page office address</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.officeAddress}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>Contact page POBOX address</h1>
                                    <p className='text-gray-600 line-clamp-1'>{i.poboxAddress}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateinformation/${i._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
                                </div>
                            </div>
                            <hr />

                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}

export default InfoList
