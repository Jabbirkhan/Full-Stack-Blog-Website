import React, { useState } from 'react'
import { useContext } from 'react';
import { Context } from '../context/context';
import { toast } from "react-toastify";
import Loader from "../components/loader";
import axiosInstance from '../utils/axiosInstance.js';

const AddInfo = () => {

    const { authState, navigate } = useContext(Context);

    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [mission, setMission] = useState('');
    const [vission, setVission] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [officeTiming, setOfficeTiming] = useState('');
    const [officeAddress, setOfficeAddress] = useState('');
    const [poboxAddress, setPoboxAddress] = useState('');

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
                description,
                mission,
                vission,
                email,
                phone,
                officeTiming,
                officeAddress,
                poboxAddress,
            }

            const response = await axiosInstance.post('/api/v1/admin/addinformation', payload, { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message || "Information uploaded successfully");
                setHeading('');
                setDescription('');
                setMission('');
                setVission('');
                setEmail('');
                setPhone('');
                setOfficeTiming('');
                setOfficeAddress('');
                setPoboxAddress('');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Information upload failed!");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <main aria-label='add-information' className='px-10 py-3 h-screen'>

            <form onSubmit={onSubmitHandler}>
                {/* upper section  */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>

                    <div>
                        <h2 className='text-2xl font-bold'>Add Information</h2>
                        <p className='text-gray-500'>Add Information on about and Contact page for your audience</p>
                    </div>

                    <button type='submit' className='max-w-40 px-4 py-0 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200'>
                        Add Information
                    </button>

                </div>

                {/* bottom section  */}
                <div className='bg-white p-[20px] rounded-md'>

                    <h2 className='text-xl font-medium mb-1 text-gray-800'>Company Information</h2>
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
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="mission" className='text-gray-600 font-semibold mb-1'>Mission</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='mission'
                                onChange={(e) => setMission(e.target.value)}
                                value={mission}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="vission" className='text-gray-600 font-semibold mb-1'>Vission</label>
                            <textarea
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='vission'
                                onChange={(e) => setVission(e.target.value)}
                                value={vission}
                                rows={5}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            ></textarea>
                        </div>

                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="email" className='text-gray-600 font-semibold mb-1'>Email</label>
                            <input 
                                type="email"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            />
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="phone" className='text-gray-600 font-semibold mb-1'>Phone</label>
                            <input 
                                type="number"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='phone'
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                placeholder='Write here ...'
                                required
                                autoComplete='off'
                            />
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="timing" className='text-gray-600 font-semibold mb-1'>Office Timing</label>
                            <input 
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='timing'
                                onChange={(e) => setOfficeTiming(e.target.value)}
                                value={officeTiming}
                                placeholder='Mon–Fri, 9am to 6pm PST ...'
                                required
                                autoComplete='off'
                            />
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="address" className='text-gray-600 font-semibold mb-1'>Office Address</label>
                            <input 
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='address'
                                onChange={(e) => setOfficeAddress(e.target.value)}
                                value={officeAddress}
                                placeholder='Pakistan, Province Punjab, District Vehari ...'
                                required
                                autoComplete='off'
                            />
                        </div>
                        
                        <div className='flex flex-col items-start mb-2'>
                            <label htmlFor="pobox-address" className='text-gray-600 font-semibold mb-1'>POBOX Address</label>
                            <input 
                                type="text"
                                className='w-full bg-gray-200 rounded-md outline-none border-none px-4 py-2 ring-1 ring-gray-300 hover:ring-1 hover:ring-gray-400 resize-none'
                                id='pobox-address'
                                onChange={(e) => setPoboxAddress(e.target.value)}
                                value={poboxAddress}
                                placeholder='POBOX Vehari 61100 ...'
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

export default AddInfo
