import React, { useState, useContext } from "react";
import { FaGoogle, FaGithub, FaStar } from "react-icons/fa";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiShield, FiArrowRight } from "react-icons/fi";
import { Context } from "../context/context";
import { toast } from "react-toastify";
import Loader from "../components/loader";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance.js";
import { Link } from "react-router-dom";

const Login = () => {

  const { backendUrl, navigate, setAuthState } = useContext(Context);

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const googleAuth = () => {
    // const origin = window.location.origin;
    // window.location.href = `${backendUrl}/api/v1/user/google?state=${origin}`;
    window.location.href = `${backendUrl}/api/v1/user/google`;
  };

  const githubAuth = () => {
    // const origin = window.location.origin;
    // window.location.href = `${backendUrl}/api/v1/user/github?state=${origin}`;
    window.location.href = `${backendUrl}/api/v1/user/github`;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {

      if (state === "Login") {

        setLoading(true);

        const response = await axiosInstance.post(`/api/v1/user/login`,{ email, password },
          { withCredentials: true }
        );

        if (response.data.success) {
          setAuthState("authenticated");
          toast.success(response.data.message || "Login successful");
          navigate("/");
        }

      } else {

        if(!privacyChecked) {
          toast.error("Please agree to the Privacy Policy and Terms of Service");
          return;
        }

        setLoading(true);

        const response = await axios.post(`${backendUrl}/api/v1/user/register`,{ name, email, password });

        if (response.data.success) {
          toast.success(response.data.message || "Registration successful");
          setState("Login");
        }
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center px-4 py-8 sm:px-6">

      {/* Background Decorative Orbs */}

      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />


      {/* Background Grid */}

      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />


      {/* Main Container */}

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/30 overflow-hidden">

        {/* Left Information Panel */}

        <div className="hidden lg:flex relative min-h-[680px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 text-white overflow-hidden">

          {/* Decorative Shapes */}

          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white/10" />

          <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-white/5 blur-xl" />


          <div className="relative z-10 flex flex-col justify-between w-full">

            {/* Brand */}

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                <FaStar size={22} />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  YourPlatform
                </h1>

                <p className="text-xs text-blue-100/70">
                  Simple. Secure. Reliable.
                </p>
              </div>

            </div>


            {/* Main Message */}

            <div className="max-w-md">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium mb-5">
                <FiShield size={14} />
                Secure Authentication
              </div>

              <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Everything you need, right at your fingertips.
              </h2>

              <p className="text-blue-100/80 leading-relaxed text-sm xl:text-base">
                Sign in to your account and continue your journey.
                Your information is protected with secure and reliable
                authentication.
              </p>


              {/* Features */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <FiShield size={16} />
                  </div>

                  <span className="text-sm text-blue-50">
                    Secure account protection
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <FiArrowRight size={16} />
                  </div>

                  <span className="text-sm text-blue-50">
                    Fast and seamless access
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <FaStar size={16} />
                  </div>

                  <span className="text-sm text-blue-50">
                    Personalized experience
                  </span>
                </div>

              </div>

            </div>


            {/* Footer */}

            <p className="text-xs text-blue-100/50">
              Your privacy and security matter to us.
            </p>

          </div>

        </div>


        {/* Right Login Panel */}

        <div className="w-full flex items-center justify-center p-6 sm:p-10 lg:p-12">

          <div className="w-full max-w-md">

            {/* Mobile Brand */}

            <div className="lg:hidden flex items-center gap-3 mb-8">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FaStar size={22} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  YourPlatform
                </h1>

                <p className="text-xs text-slate-500">
                  Simple. Secure. Reliable.
                </p>
              </div>

            </div>


            {/* Header */}

            <div className="mb-7">

              <p className="text-sm font-semibold text-blue-600 mb-2">
                {state === "Login" ? "Welcome back" : "Get started"}
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {state === "Login" ? "Welcome Back!" : "Create an Account"}
              </h2>

              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                {state === "Login"
                  ? "Enter your credentials to access your account."
                  : "Create your account and start using our platform."}
              </p>

            </div>


            {/* Social Login */}

            <div className="space-y-3">

              <button
                type="button"
                onClick={googleAuth}
                className="w-full flex items-center justify-center gap-3 border border-slate-200 bg-white rounded-xl py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FaGoogle className="text-red-500" size={17} />
                Continue with Google
              </button>

              <button
                type="button"
                onClick={githubAuth}
                className="w-full flex items-center justify-center gap-3 border border-slate-200 bg-white rounded-xl py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-200 cursor-pointer"
              >
                <FaGithub size={18} />
                Continue with GitHub
              </button>

            </div>


            {/* Divider */}

            <div className="flex items-center gap-4 my-6">

              <div className="flex-1 h-px bg-slate-200" />

              <span className="text-[11px] text-slate-400 uppercase tracking-wider whitespace-nowrap">
                Or continue with email
              </span>

              <div className="flex-1 h-px bg-slate-200" />

            </div>


            {/* Form */}

            <form onSubmit={onSubmitHandler} className="space-y-5">

              {/* Name */}

              {state === "Register" && (

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>

                  <div className="relative">

                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="Enter your name"
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
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

                  {state === "Login" && (

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
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>

                </div>

              </div>
              
              {/* privacy policy and terms of service */}
              {state === 'Register' && <div>
                <input
                  type="checkbox"
                  id="privacy-terms"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="privacy-terms" className="text-sm text-gray-600">
                  I agree to the
                  <Link to='/privacy-policy' className="text-blue-600 px-1 hover:underline">
                    Privacy Policy
                  </Link>
                  and
                  <Link to='/terms-of-service' className="text-blue-600 px-1 hover:underline">
                    Terms of Service
                  </Link>
                </label>
              </div>}


              {/* Submit */}

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >

                {state === "Login" ? "Login to your account" : "Create your account"}

                <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />

              </button>

            </form>


            {/* Switch Login/Register */}

            {state === "Login" ? (

              <p className="text-center text-sm text-slate-500 mt-6">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setState("Register")}
                  className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition cursor-pointer"
                >
                  Create an account
                </button>
              </p>

            ) : (

              <p className="text-center text-sm text-slate-500 mt-6">
                I have an account?{" "}
                <button
                  type="button"
                  onClick={() => setState("Login")}
                  className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition cursor-pointer"
                >
                  Login
                </button>
              </p>

            )}


            {/* Security */}

            <div className="flex items-center justify-center gap-2 mt-7 pt-5 border-t border-slate-100">

              <FiShield size={14} className="text-blue-500" />

              <p className="text-xs text-slate-400">
                Your information is securely protected
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;