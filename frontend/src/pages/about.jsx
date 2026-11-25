import React from 'react'
import { useContext } from 'react';
import { Context } from '../context/context';

const About = () => {

  const { information, principles } = useContext(Context);

  return (
    <main aria-label='about-page' className="w-full bg-gray-50 text-gray-900">

      {/* About Section */}
      {information.map((info, index) => (
        <section key={index} aria-label='about-company' className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          
          <h2 className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            ABOUT THE PLATFORM
          </h2>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {info.heading}
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {info.description}
          </p>
          
        </section>
      ))}

      {/* Mission & Vision */}
      {information.map((info, index) => (
        <section key={index} className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">

            <section className="bg-gray-50 rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                {info.mission}
              </p>
            </section>

            <section className="bg-gray-50 rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                {info.vission}
              </p>
            </section>

          </div>
        </section>
      ))}

      {/* Values Section */}
      <section aria-label='company-principles' className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Principles That Guide Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything we build is driven by clarity, quality, and real-world relevance.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">

            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-left">
                <h3 className="font-semibold text-lg">{principle.heading}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {principle.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}

export default About;
