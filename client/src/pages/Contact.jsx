import React, { useState } from 'react';

import { contact1 } from '../assets/';
import { FormField, FormFieldLarge } from '../components';

const Contact = () => {
  const [form, setForm] = useState({ 
    name:'',
    email:'',
    message:'',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    if (!sent) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }
  const handleSubmit = async (e) => {
    if (form.name && form.email && form.message) {
      try {
        setSent(true);
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            body: form.message,
          }),
        });

        const data = await response.json();
        console.log(data);
        
      } catch (err) {
        alert(err);
      } 
    }
  }

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
            <FormFieldLarge
              labelName="Message"
              type="text"
              name="message"
              placeholder="Enter your message"
              value={form.message}
              handleChange={handleChange}
            />
          </form>
          <div className="py-8 flex justify-left">
            {!sent ? (
              <button onClick={handleSubmit} className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 flex justify-center font-bold tracking-widest text-xl w-full">Submit</button>
            ) : (
              <button className="text-white p-4 bg-zinc-700 flex justify-center font-bold tracking-widest text-xl w-full">Message Submitted!</button>
            )}
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
            <FormFieldLarge 
              labelName="Message"
              type="text"
              name="message"
              placeholder="Enter your message"
              value={form.message}
              handleChange={handleChange}
            />
          </form>
          <div className="pt-8 flex">
            {!sent ? (
              <button onClick={handleSubmit} className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 flex justify-center font-bold tracking-widest text-xl w-full">Submit</button>
            ) : (
              <button className="text-white p-4 bg-zinc-700 flex justify-center font-bold tracking-widest text-xl w-full">Message Submitted!</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact