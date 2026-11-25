import React, { useState } from 'react'
import { useContext } from 'react';
import { Context } from '../context/context';
import { toast } from "react-toastify";
import Loader from "../components/loader";
import axiosInstance from '../utils/axiosInstance.js';

const AddLinks = () => {

    const { authState, navigate } = useContext(Context);

    const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com');
    const [instagramUrl, setInstagramUrl] = useState('https://www.instagram.com');
    const [linkedInUrl, setLinkedInUrl] = useState('https://www.linkedin.com');

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }
            setLoading(true);

            const payload = {
                youtubeUrl,
                instagramUrl,
                linkedInUrl
            }

            const response = await axiosInstance.post('/api/v1/admin/addlinks', payload, { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message || "Links uploaded successfully");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Links upload failed!");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <main aria-label='add-links-page' className='px-10 py-3 h-screen'>

            <form onSubmit={onSubmitHandler}>
                {/* upper section  */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>

                    <div>
                        <h2 className='text-2xl font-bold'>Add Social links</h2>
                        <p className='text-gray-500'>Social platforms for your audience</p>
                    </div>

                    <button type='submit' className='max-w-40 px-4 py-0 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200'>
                        Add links
                    </button>

                </div>

                {/* bottom section  */}
                <div className='bg-white p-[20px] rounded-md'>

                    <h2 className='text-xl font-medium mb-1 text-gray-800'>Social Links</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2'>

                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="youtubeUrl" className='text-gray-600 font-semibold mb-1'>YouTube Url</label>
                            <input
                                type="url"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                                id='youtubeUrl'
                                onChange={(e) => setYoutubeUrl(e.target.value)}
                                value={youtubeUrl}
                                placeholder='YouTube Url ...'
                                required
                                autoComplete='off'
                            />
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="instagramUrl" className='text-gray-600 font-semibold mb-1'>Instagram Url</label>
                            <input
                                type="url"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                                id='instagramUrl'
                                onChange={(e) => setInstagramUrl(e.target.value)}
                                value={instagramUrl}
                                placeholder='Instagram Url ...'
                                required
                                autoComplete='off'
                            />
                        </div>

                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="linkedInUrl" className='text-gray-600 font-semibold mb-1'>LinkedIn Url</label>
                            <input
                                type="url"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                                id='linkedInUrl'
                                onChange={(e) => setLinkedInUrl(e.target.value)}
                                value={linkedInUrl}
                                placeholder='LinkedIn Url ...'
                                required
                                autoComplete='off'
                            />
                        </div>

                    </div>
                </div>

            </form>

        </main>
    )
}

export default AddLinks
