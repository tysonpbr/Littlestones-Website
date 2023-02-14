import React from 'react'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

const Services = () => {
  return (
    <div  className="pt-topsm md:pt-topmd lg:pt-top">
      <div className="md:pt-4 w-full flex flex-col lg:flex-row justify justify-center items-center md:px-16">
        <div className="flex flex-col justify justify-center">
          <span className="w-full flex text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black pt-6 pb-4 lg:pb-8 px-8">What We Offer</span>
          <ul className="px-8 py-0 w-full lg:max-w-4xl flex flex-col gap-2">
              <li>
                <p className="font-sans">- I am a driven individual with a love for adventure and new experiences.</p>
              </li>
              <li>
                <p className="font-sans">- I am a driven individual with a love for adventure and new experiences.</p>
              </li>
              <li>
                <p className="font-sans">- I am a driven individual with a love for adventure and new experiences.</p>
              </li>
              <li>
                <p className="font-sans">- I am a driven individual with a love for adventure and new experiences.</p>
              </li>
              <li>
                <p className="font-sans">- I am a driven individual with a love for adventure and new experiences.</p>
              </li>
            </ul>
          <Link to='/contact' className="p-8 lg:pt-12">
            <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services