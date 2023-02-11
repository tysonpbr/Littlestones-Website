import React, { useState } from 'react';

import { contact1 } from '../assets/';
import { FormField } from '../components';

const Contact = () => {
  const [form, setForm] = useState({ 
    name:'',
    email:'',
    message:'',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="pt-topsm md:pt-topmd lg:pt-top">
      <div className="w-full flex flex-col lg:flex-row justify justify-center items-center md:px-16">
        <span className="w-full flex lg:hidden text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black py-6 px-8">Get in touch</span>
        <div className="hidden lg:flex flex-col justify justify-center px-8">
          <span className="w-full flex text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black py-6">Get in touch</span>
          <form className="py-0 max-w-xl font-sans space-y-3">
            <FormField 
              labelName="Name"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField 
              labelName="Email"
              type="text"
              name="email"
              placeholder="Your email address"
              value={form.email}
              handleChange={handleChange}
            />
            <FormField 
              labelName="Message"
              type="text"
              name="message"
              placeholder="Enter your message"
              value={form.message}
              handleChange={handleChange}
            />
          </form>
          <div className="py-8 flex justify-left">
            <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full flex justify-center font-bold tracking-widest text-xl">Submit</button>
          </div>
        </div>
        <img src={contact1} className="px-8 lg:pl-12 lg:max-w-xl asp" />
        <div className="flex lg:hidden flex-col pt-8 w-full px-8">
          <form className="py-0 max-w-xl font-sans space-y-3">
            <FormField 
              labelName="Name"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField 
              labelName="Email"
              type="text"
              name="email"
              placeholder="Your email address"
              value={form.email}
              handleChange={handleChange}
            />
            <FormField 
              labelName="Message"
              type="text"
              name="message"
              placeholder="Enter your message"
              value={form.message}
              handleChange={handleChange}
            />
          </form>
          <div className="pt-8 flex">
            <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 flex justify-center font-bold tracking-widest text-xl w-full">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact