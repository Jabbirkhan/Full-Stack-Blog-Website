import React, { useState } from 'react'
import { useContext } from 'react';
import { Context } from '../context/context';
import { toast } from "react-toastify";
import Loader from "../components/loader";
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useMemo } from 'react';
import axiosInstance from '../utils/axiosInstance.js';

const UpdateLinks = () => {

    const { authState, navigate, socialLinks } = useContext(Context);
    const { id } = useParams();

    // const link = socialLinks.find((l) => l._id === id);
    const link = useMemo(()=> {
        return socialLinks.find((l) => l._id === id);
    },[id, socialLinks]); 

    if (!link) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='flex flex-col'>
                    <h2 className='mb-5'>links are not found</h2>
                    <Link to='/addlinks' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>Add Links</Link>
                </div>
            </div>
        );
    }

    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [instagramUrl, setInstagramUrl] = useState('');
    const [linkedInUrl, setLinkedInUrl] = useState('');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (link) {
            setYoutubeUrl(link.youtubeUrl || '');
            setInstagramUrl(link.instagramUrl || '');
            setLinkedInUrl(link.linkedInUrl || '');
        }
    }, [link]);

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

            const response = await axiosInstance.patch(`/api/v1/admin/updatelinks/${id}`, payload, { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message || "Links updated successfully");
                navigate('/links');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Links update failed!");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <main aria-label='update-links-page' className='px-10 py-3 h-screen'>

            <form onSubmit={onSubmitHandler}>
                {/* upper section  */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>

                    <div>
                        <h2 className='text-2xl font-bold'>Social links</h2>
                        <p className='text-gray-500'>Social platforms for your audience</p>
                    </div>

                    <button type='submit' className='max-w-40 px-4 py-0 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200'>
                        Update links
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
                            <label htmlFor="youtubeUrl" className='text-gray-600 font-semibold mb-1'>Instagram Url</label>
                            <input
                                type="url"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400'
                                id='youtubeUrl'
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

export default UpdateLinks
