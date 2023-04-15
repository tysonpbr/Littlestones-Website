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
        const response = await fetch('https://littlestones-creations.onrender.com/api/contact', {
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
      <div className="hidden lg:flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className="w-full flex justify-center content-center overflow-hidden">
            <img src={contact1} className="min-w-full min-h-full shrink-0" />
          </div>
          <div className="w-full flex flex-col justify-center gap-12">
            <div className="flex self-start">
              <span className="px-24 w-full text-7xl font-normal tracking-widest text-Black">Get In Touch</span>
            </div>
            <div className="flex flex-col gap-8 self-start">
              <form className="px-24 w-full max-w-2xl font-sans space-y-3">
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
              <div className="px-24 w-full max-w-2xl flex justify-left">
                {!sent ? (
                  <button onClick={handleSubmit} className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 flex justify-center font-bold tracking-widest text-xl w-full">Submit</button>
                ) : (
                  <button className="text-white p-4 bg-zinc-700 flex justify-center font-bold tracking-widest text-xl w-full">Message Submitted!</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:hidden flex-col justify justify-center items-center">
        <span className="w-full flex text-3xl md:text-6xl font-bold md:font-normal tracking-widest text-Black py-6 px-8">Get in touch</span>
        <div className="flex flex-col pb-8 w-full px-8">
          <form className="py-0 w-full font-sans space-y-3">
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