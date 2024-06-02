'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const EmailCard = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message:  e.target.message.value,
        };
        
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };

        
        const response = await fetch(endpoint, options);

        
        if (response.status === 200) {
          setEmailSubmitted(true);
        }
        else {
          setEmailSubmitted(true)
        }
      };


    
    return (
    <div className='mt-5 lg:mt-0'>
        {emailSubmitted ? (
          <div className="flex flex-col rounded-md border-2 border-[#33353F] bg-[#18191E] p-5 text-center" >
            <p className="text-green-500 text-2xl">
              Message Sent!
            </p>
            <p className='text-green-500 text-md my-4'>
              Thank you for reaching out! I will be contacting you soon!
            </p>
          </div>
        ) : (
            <form className="flex flex-col rounded-md border-2 border-[#33353F] bg-[#18191E] p-5" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
                >
                Your Email
                </label>
                <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#282b38] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@email.com"
                />
            </div>
            <div className="mb-6">
                <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
                >
                Subject
                </label>
                <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#282b38] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                />
            </div>
            <div className="mb-6">
                <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
                >
                Message
                </label>
                <textarea
                name="message"
                id="message"
                className="bg-[#282b38] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                />
            </div>
            <motion.button
                type="submit"
                className="bg-gradient-to-br from-[#1a2766] via-[#ae1b1e] to-[#fc9f32] text-white font-medium py-2.5 px-5 rounded-lg w-[50%] self-center"
                whileHover={{ 
                    scale: 1.10,
                    transition: {duration: 0.2},
                  }}
                  transition={{ duration: 0.2 }}
            >
              Send Message
            </motion.button>
            </form>
        )}
    </div>
    )
}

export default EmailCard
