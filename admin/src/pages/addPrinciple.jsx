import React, { useState } from 'react'
import { useContext } from 'react';
import { Context } from '../context/context';
import { toast } from "react-toastify";
import Loader from "../components/loader";
import axiosInstance from '../utils/axiosInstance.js';

const AddPrinciple = () => {

    const { authState, navigate } = useContext(Context);

    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }
            setLoading(true);

            const payload = {
                heading,
                description
            }

            const response = await axiosInstance.post('/api/v1/admin/addprinciple', payload, { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message || "Principle uploaded successfully");
                setHeading('');
                setDescription('');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Principle upload failed!");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <main aria-label='add-principle-page' className='px-10 py-3 h-screen'>

            <form onSubmit={onSubmitHandler}>
                {/* upper section  */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>

                    <div>
                        <h2 className='text-2xl font-bold'>Add Principles</h2>
                        <p className='text-gray-500'>Add principles on about page for your audience</p>
                    </div>

                    <button type='submit' className='max-w-40 px-4 py-0 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200'>
                        Add Principle
                    </button>

                </div>

                {/* bottom section  */}
                <div className='bg-white p-[20px] rounded-md'>

                    <h2 className='text-xl font-medium mb-1 text-gray-800'>Company Principles</h2>
                    <div className='grid grid-cols-1 gap-2'>

                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="heading" className='text-gray-600 font-semibold mb-1'>Heading</label>
                            <input 
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='heading'
                                onChange={(e) => setHeading(e.target.value)}
                                value={heading}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            />
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="description" className='text-gray-600 font-semibold mb-1'>Description</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='description'
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>

                    </div>
                </div>

            </form>

        </main>
    )
}

export default AddPrinciple
