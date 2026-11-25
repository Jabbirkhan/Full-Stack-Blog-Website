import React, { useState } from 'react'
import { useContext } from 'react'
import { FaYoutube, FaInstagram, FaLinkedin, FaGreaterThan } from 'react-icons/fa'
import { Context } from '../context/context'
import axiosInstance from '../utils/axiosInstance.js'
import { toast } from 'react-toastify'
import Loader from '../components/loader.jsx'

const Contact = () => {

  const { links, information, authState, navigate } = useContext(Context);

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const sendContactMessage = async (e) => {
    e.preventDefault();
    try {
      if (authState !== 'authenticated') {
        return navigate('/login');
      }

      setLoader(true);
      const response = await axiosInstance.post(`/api/v1/user/send-contact-message`, { name, subject, message },{ withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.message);
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
    <div>

      <div className="min-h-screen bg-gray-50 text-gray-900">

        {/* Content */}
        <main aria-label='contact-page' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className='flex flex-col sm:flex-row gap-3 sm:gap-10'>

            {/* Left section  */}
            <div className='grid sm:grid-cols-1 basis-2/3'>

              <div>
                <p className="flex gap-2 items-center text-sm text-gray-500 mb-4">
                  Home <FaGreaterThan className='text-xs font-extralight' /> Contact Us
                </p>

                <h1 className="text-3xl sm:text-4xl font-bold mb-6">Get in touch</h1>

                <p className="text-gray-600 mb-8 max-w-2xl">
                  Have questions, feedback, or collaboration ideas? Feel free to reach out — we’d love to hear from you.
                </p>
              </div>

              <form onSubmit={sendContactMessage} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John"
                      onChange={(e) => setName(e.target.value)} value={name}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> */}

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select onChange={(e) => setSubject(e.target.value)} value={subject} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value='' disabled>Select a subject</option>
                    <option value='general-inquiry'>General Inquiry</option>
                    <option value='support'>Support</option>
                    <option value='partnership'>Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-lg"
                >
                  Send Message
                </button>
              </form>

            </div>

            {/* Right Info Section */}
            {information.map((info, index) => (
              <aside key={index} aria-label='contact-information' className="bg-white rounded-2xl shadow-md p-8 h-fit basis-1/3">

                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Prefer other ways to reach us? Use the information below or find
                  us on social media.
                </p>

                <div className="space-y-6 text-sm">
                  <div>
                    <p className="font-medium">Email us</p>
                    <p className="text-gray-600">{info.email}</p>
                    <p className="text-gray-400 text-xs">Response within 48 hours</p>
                  </div>

                  <div>
                    <p className="font-medium">Call us</p>
                    <p className="text-gray-600">{info.phone}</p>
                    <p className="text-gray-400 text-xs">{info.officeTiming}</p>
                  </div>

                  <div>
                    <p className="font-medium">Our Office</p>
                    <p className="text-gray-600">
                      {info.officeAddress}
                      <br />
                      {info.poboxAddress}
                    </p>
                    <a href="https://www.google.com/maps/place/Vehari,+Pakistan/@30.048418,72.3129358,13z/data=!3m1!4b1!4m6!3m5!1s0x393cea9efdd0497d:0xdd4be5baafe2fc1d!8m2!3d30.0442982!4d72.3441343!16zL20vMDlncnY2?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                      View on Map
                    </a>
                  </div>
                </div>

                <div className="mt-8 border-t pt-6">
                  <p className="text-xs text-gray-400 mb-4 tracking-widest">FOLLOW US</p>
                  {links.map((link, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-200 rounded-full flex items-center justify-center">
                        <a href={link.youtubeUrl} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                      </div>
                      <div className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-200 rounded-full flex items-center justify-center">
                        <a href={link.instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                      </div>
                      <div className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-200 rounded-full flex items-center justify-center">
                        <a href={link.linkedInUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                      </div>
                    </div>
                  ))}
                </div>

              </aside>
            ))}

          </div>

          {/* Map Section */}
          {/* <div className="mt-16">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb"
                alt="Map"
                className="w-full h-72 sm:h-96 object-cover grayscale"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white shadow-xl rounded-2xl p-6 text-center w-72">
                  <div className="w-10 h-10 bg-blue-600 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-semibold">Bloggish HQ</h3>
                  <p className="text-gray-600 text-sm">
                    123 Media Ave, San Francisco
                  </p>
                </div>
              </div>
            </div>
          </div> */}

        </main>

      </div>

    </div>
  )
}

export default Contact
