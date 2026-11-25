import React, { useState } from 'react'
import { useContext } from 'react';
import { Context } from '../context/context';
import { toast } from "react-toastify";
import Loader from "../components/loader";
import axiosInstance from '../utils/axiosInstance.js';

const AddPolicy = () => {

    const { authState, navigate } = useContext(Context);

    const [introduction, setIntroduction] = useState('');
    const [policy1, setPolicy1] = useState('');
    const [policy2, setPolicy2] = useState('');
    const [policy3, setPolicy3] = useState('');
    const [policy4, setPolicy4] = useState('');
    const [policy5, setPolicy5] = useState('');
    const [policy6, setPolicy6] = useState('');

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }
            setLoading(true);

            const payload = {
                introduction,
                policy1,
                policy2,
                policy3,
                policy4,
                policy5,
                policy6,
            }

            const response = await axiosInstance.post('/api/v1/admin/addpolicies', payload, { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message || "Policy uploaded successfully");
                setIntroduction('');
                setPolicy1('');
                setPolicy2('');
                setPolicy3('');
                setPolicy4('');
                setPolicy5('');
                setPolicy6('');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Policy upload failed!");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <main aria-label='privacy-policy-page' className='px-10 py-3 h-screen'>

            <form onSubmit={onSubmitHandler}>
                {/* upper section  */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>

                    <div>
                        <h2 className='text-2xl font-bold'>Add Policies</h2>
                        <p className='text-gray-500'>Add policies for your audience</p>
                    </div>

                    <button type='submit' className='max-w-40 px-4 py-0 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200'>
                        Add Policy
                    </button>

                </div>

                {/* bottom section  */}
                <div className='bg-white p-[20px] rounded-md'>

                    <h2 className='text-xl font-medium mb-1 text-gray-800'>Privacy Policy</h2>
                    <div className='grid grid-cols-1 gap-2'>

                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="intro" className='text-gray-600 font-semibold mb-1'>Introduction</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='intro'
                                onChange={(e) => setIntroduction(e.target.value)}
                                value={introduction}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="policy1" className='text-gray-600 font-semibold mb-1'>Information we collect</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='policy1'
                                onChange={(e) => setPolicy1(e.target.value)}
                                value={policy1}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="policy2" className='text-gray-600 font-semibold mb-1'>How we use your information</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='policy2'
                                onChange={(e) => setPolicy2(e.target.value)}
                                value={policy2}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>

                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="policy3" className='text-gray-600 font-semibold mb-1'>Information Security</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='policy3'
                                onChange={(e) => setPolicy3(e.target.value)}
                                value={policy3}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="policy4" className='text-gray-600 font-semibold mb-1'>User Control</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='policy4'
                                onChange={(e) => setPolicy4(e.target.value)}
                                value={policy4}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="policy5" className='text-gray-600 font-semibold mb-1'>Third Party Services</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='policy5'
                                onChange={(e) => setPolicy5(e.target.value)}
                                value={policy5}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="policy6" className='text-gray-600 font-semibold mb-1'>Changes to this policy</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='policy6'
                                onChange={(e) => setPolicy6(e.target.value)}
                                value={policy6}
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

export default AddPolicy
