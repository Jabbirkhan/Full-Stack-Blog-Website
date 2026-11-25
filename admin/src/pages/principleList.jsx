import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { Context } from '../context/context';
import { toast } from 'react-toastify';
import Loader from '../components/loader';
import axiosInstance from '../utils/axiosInstance.js';

const PrincipleList = () => {

    const { authState, setAllPrinciples } = useContext(Context);
    const [principles, setPrinciples] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchPrinciples = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/api/v1/admin/allprinciples', { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message);
                setPrinciples(response.data.principles);
                setAllPrinciples(response.data.principles);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (authState === 'authenticated' && principles.length === 0) {
            fetchPrinciples();
        }
    }, [authState, principles.length]);

    // if (principles.length === 0) {
    //     return
    //     (
    //         <div className='w-full h-screen flex justify-center items-center'>
    //             <div className='flex flex-col'>
    //                 <h2 className='mb-5'>No principle exist yet</h2>
    //                 <Link to='/addprinciple' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>+ Add Principle</Link>
    //             </div>
    //         </div>
    //     )
    // }

    if (loading || principles.length === 0) {
        return <Loader />
    }

    return (
        <main aria-label='principles-list' className='p-2 sm:p-3 md:p-5 h-screen'>

            <div className='flex justify-between items-center flex-wrap py-3 px-1 sm:px-5 bg-white mb-3 mt-6 sm:mt-0 gap-2'>
                <h2 className='text-xl font-bold'>Principles List</h2>
                <Link to='/addprinciple' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>+ Add Principle</Link>
            </div>

            <section aria-label='all-policies' className='ring-1 ring-gray-300 rounded-md my-3'>
                <div className='flex justify-between items-center p-2 gap-1 bg-gray-300 border-b border-gray-500'>
                    <h3 className='text-gray-800'>Principle</h3>
                    <h3 className='text-gray-800'>Action</h3>
                </div>
                <div className='py-3 px-2'>
                    {principles.map((p, index) => (
                        <div key={index} >

                            <div className='flex justify-between items-center gap-5 sm:gap-10 md:gap-20 my-2'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold line-clamp-1'>{p.heading}</h1>
                                    <p className='text-gray-600 line-clamp-1'>{p.description}</p>
                                </div>
                                <div className='mr-[10px] flex gap-2'>
                                    <Link to={`/updateprinciple/${p._id}`} className='text-blue-400 hover:text-blue-700 transition-all duration-200 cursor-pointer'><FaEdit /></Link>
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

export default PrincipleList
