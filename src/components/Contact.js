import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-teal-400 text-black">
      {/* Contact Header */}
      <div className="flex-grow flex flex-col justify-center items-center pt-10">
        <h2 className="text-4xl py-2 font-bold">Contact Me</h2>

        {/* Contact Info */}
        <div className="flex justify-center items-center space-x-5 px-10 mb-3">
          {/* Email */}
          <div className="text-center">
            <div className="text-1xl mb-1">📧</div>
            <p className="text-sm">sarathchandhan19@gmail.com</p>
          </div>
          {/* Phone */}
          <div className="text-center">
            <div className="text-1xl mb-1">📞</div>
            <p className="text-sm">+91 7659854417</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-2/3 bg-teal-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Get in touch with me.</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
