import { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { Context } from '../context/context';
import axiosInstance from '../utils/axiosInstance.js';
import Loader from '../components/loader.jsx';
import { FiMail, FiShield, FiArrowRight, FiLock } from 'react-icons/fi';

const VerifyEmail = () => {

    const { authState, navigate, fetchUserProfile } = useContext(Context);
    const [otp, setOtp] = useState('');

    const [loader, setLoader] = useState(false);

    const onSubmitHandler = async () => {
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }

            setLoader(true);
            const response = await axiosInstance.post('/api/v1/user/verify-email-otp', { otp }, { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message);
                fetchUserProfile();
                navigate('/');
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
        <div className='relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 sm:px-6'>

            {/* Background Decorations */}
            <div className='absolute -top-32 -left-32 w-96 h-96 bg-blue-200/50 rounded-full blur-[120px] pointer-events-none'></div>
            <div className='absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/50 rounded-full blur-[120px] pointer-events-none'></div>

            <div className='relative w-full max-w-md'>

                {/* Heading */}
                <div className='text-center mb-8'>
                    <div className='w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-blue-100 border border-blue-200 shadow-lg shadow-blue-100 mb-5'>
                        <FiMail className='text-blue-600 text-2xl' />
                    </div>

                    <h1 className='text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight'>
                        Verify Your Email
                    </h1>

                    <p className='text-slate-500 text-sm mt-3 leading-relaxed'>
                        One more step to secure your account. Enter the verification code sent to your email address.
                    </p>
                </div>

                {/* Verification Card */}
                <div className='bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 p-6 sm:p-8'>

                    <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 mb-5'>
                        <FiShield className='text-indigo-600 text-xl' />
                    </div>

                    <h2 className='text-xl font-semibold text-slate-900'>
                        Email Verification
                    </h2>

                    <p className='text-sm text-slate-500 mt-2 mb-6 leading-relaxed'>
                        Please check your email. We have sent you a verification OTP.
                    </p>

                    <div className='flex flex-col gap-2 mb-5'>
                        <label className='text-sm font-medium text-slate-700'>
                            Verification Code
                        </label>

                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.trim())}
                            className='w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                            placeholder='Enter verification OTP'
                        />
                    </div>

                    <button
                        onClick={() => onSubmitHandler()}
                        className='w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all duration-200 cursor-pointer'
                    >
                        Verify Email
                        <FiArrowRight size={18} />
                    </button>

                    <div className='flex items-center justify-center gap-2 mt-6 pt-5 border-t border-slate-100'>
                        <FiLock className='text-emerald-600' size={14} />
                        <p className='text-xs text-slate-400'>
                            Your account information is protected and secure.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default VerifyEmail;
