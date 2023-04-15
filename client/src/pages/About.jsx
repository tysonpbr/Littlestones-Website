import React from 'react'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

import { about1, about2 } from '../assets/';

const About = () => {
  return (
    <div className="pt-topsm md:pt-topmd lg:pt-top">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="w-full flex flex-col justify-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-16 lg:py-0">
            <div className="flex self-start lg:self-end">
              <span className="px-10 lg:px-24 w-full text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black">About Us</span>
            </div>
            <div className="flex self-end">
              <p className="px-10 lg:px-24 w-full lg:max-w-2xl font-sans text-justify">
                I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity
                for growth and discovery. My outgoing personality and infectious smile have earned me many friends and I am proud to have such a supportive network 
                of people in my life. Although I lead a busy lifestyle, I always make time for those who are important to me. Whether it's climbing mountains, 
                discovering new cultures, or just having a quiet night in, I approach each experience with a positive outlook and a thirst for knowledge.
              </p>
            </div>
            <div className="hidden lg:flex self-end">
              <Link to='/contact' className="px-10 lg:px-24">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">Contact Us</button>
              </Link>
            </div>
            <div className="w-full flex lg:hidden self-end">
              <Link to='/contact' className="w-full px-10 lg:px-24">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full flex justify-center font-bold tracking-widest text-xl">Contact Us</button>
              </Link>
            </div>
          </div>
          <div className='w-full px-6 lg:px-0'>
            <div className="flex justify-center content-center overflow-hidden">
              <img src={about1} className="min-w-full min-h-full shrink-0" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center">
          <div className="pb-8 lg:pb-0 px-6 lg:px-0 w-full flex justify-center content-center overflow-hidden">
            <img src={about2} className="min-w-full min-h-full shrink-0" />
          </div>
          <div className="w-full flex flex-col justify-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-16 lg:py-0">
            <div className="flex self-start">
              <span className="px-10 lg:px-24 w-full text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black">Our Passion</span>
            </div>
            <div className="flex self-start">
              <p className="px-10 lg:px-24 w-full lg:max-w-2xl font-sans text-justify">
                I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity
                for growth and discovery. My outgoing personality and infectious smile have earned me many friends and I am proud to have such a supportive network 
                of people in my life. Although I lead a busy lifestyle, I always make time for those who are important to me. Whether it's climbing mountains, 
                discovering new cultures, or just having a quiet night in, I approach each experience with a positive outlook and a thirst for knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About