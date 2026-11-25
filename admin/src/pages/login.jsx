import React, { useState } from 'react'
import { useContext } from 'react'
import { FiShield, FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiArrowRight, FiCheckCircle, FiSettings } from 'react-icons/fi'
import { Context } from '../context/context'
import { toast } from 'react-toastify'
import Loader from '../components/loader'
import axiosInstance from '../utils/axiosInstance.js'

const Login = () => {

  const { navigate, setAuthState } = useContext(Context)

  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, setState] = useState('login')

  const [loading, setLoading] = useState(false)

  const onSubmithandler = async (e) => {
    e.preventDefault()

    try {

      if (state === 'login') {

        setLoading(true)

        const response = await axiosInstance.post(
          '/api/v1/admin/login',
          { email, password },
          { withCredentials: true }
        )

        if (response.data.success) {
          setAuthState('authenticated')
          toast.success(response.data.message || "Admin login successfully")
          navigate('/')
        }

      } else {

        setLoading(true)

        const response = await axiosInstance.post(
          '/api/v1/admin/register',
          { name, email, password },
          { withCredentials: true }
        )

        if (response.data.success) {
          toast.success(response.data.message || "Admin register successfully")
          setState('login')
        }
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loader />

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-4 py-8 sm:px-6">

      {/* Background Effects */}

      <div className="absolute -top-40 -left-40 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />


      {/* Background Grid */}

      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />


      {/* Main Card */}

      <div className="relative z-10 w-full max-w-5xl min-h-[650px] bg-white rounded-3xl shadow-2xl shadow-black/40 overflow-hidden grid lg:grid-cols-2">

        {/* Left Panel */}

        <div className="hidden lg:flex relative bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-12 text-white overflow-hidden">

          {/* Decorative Circles */}

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-blue-500/10" />

          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-blue-500/10" />

          <div className="absolute top-1/2 right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />


          <div className="relative z-10 flex flex-col justify-between w-full">

            {/* Brand */}

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FiShield size={22} />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  AdminPanel
                </h1>

                <p className="text-xs text-slate-400">
                  Administration System
                </p>
              </div>

            </div>


            {/* Main Content */}

            <div className="max-w-md">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-5">
                <FiSettings size={14} />
                Administrator Access
              </div>

              <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Control your platform from one place.
              </h2>

              <p className="text-slate-400 leading-relaxed text-sm xl:text-base">
                Access your administration dashboard to manage
                users, content, settings and other important
                platform operations.
              </p>


              {/* Features */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                    <FiShield size={16} className="text-blue-400" />
                  </div>

                  <span className="text-sm text-slate-300">
                    Protected administrator access
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                    <FiSettings size={16} className="text-blue-400" />
                  </div>

                  <span className="text-sm text-slate-300">
                    Centralized platform management
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                    <FiCheckCircle size={16} className="text-blue-400" />
                  </div>

                  <span className="text-sm text-slate-300">
                    Secure authentication
                  </span>

                </div>

              </div>

            </div>


            {/* Footer */}

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <FiShield size={14} />
              <span>Authorized administrators only</span>
            </div>

          </div>

        </div>


        {/* Right Panel */}

        <div className="w-full flex items-center justify-center p-6 sm:p-10 lg:p-12">

          <div className="w-full max-w-md">

            {/* Mobile Brand */}

            <div className="lg:hidden flex items-center gap-3 mb-8">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FiShield size={22} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  AdminPanel
                </h1>

                <p className="text-xs text-slate-500">
                  Administration System
                </p>
              </div>

            </div>


            {/* Header */}

            <div className="mb-8">

              <p className="text-sm font-semibold text-blue-600 mb-2">
                {state === 'login' ? 'Welcome back' : 'Administrator registration'}
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {state === 'login' ? 'Admin Login' : 'Create Admin Account'}
              </h2>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {state === 'login'
                  ? 'Sign in to access your administration dashboard.'
                  : 'Create your administrator account to continue.'}
              </p>

            </div>


            {/* Form */}

            <form onSubmit={onSubmithandler} className="flex flex-col gap-5">

              {/* Name */}

              {state !== 'login' && (

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>

                  <div className="relative">

                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="Enter your full name"
                      required
                    />

                  </div>

                </div>

              )}


              {/* Email */}

              <div>

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="admin@example.com"
                    required
                  />

                </div>

              </div>


              {/* Password */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>

                  {state === "login" && (

                    <button
                      type="button"
                      onClick={() => navigate('/forget-password')}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline transition cursor-pointer"
                    >
                      Forgot password?
                    </button>

                  )}

                </div>


                <div className="relative">

                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>

                </div>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="group w-full mt-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >

                {state === 'login' ? 'Login to Dashboard' : 'Create Admin Account'}

                <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />

              </button>


              {/* Switch */}

              <div className="text-center pt-1">

                {state === 'login' ? (

                  <p className="text-sm text-slate-500">
                    Don't have an admin account?{" "}
                    <button
                      type="button"
                      onClick={() => setState('register')}
                      className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition cursor-pointer"
                    >
                      Register
                    </button>
                  </p>

                ) : (

                  <p className="text-sm text-slate-500">
                    Already have an admin account?{" "}
                    <button
                      type="button"
                      onClick={() => setState('login')}
                      className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition cursor-pointer"
                    >
                      Login
                    </button>
                  </p>

                )}

              </div>

            </form>


            {/* Security Footer */}

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-center gap-2">

              <FiShield size={14} className="text-blue-500" />

              <p className="text-xs text-slate-400">
                Secure administrator authentication
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login
