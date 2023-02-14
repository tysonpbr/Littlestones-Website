import React from 'react'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

import { homepage1, about1, about2, downArrow, gallery1, gallery2, gallery3 } from '../assets';

const Home = () => {
  return (
    <div className="">
      <div className="h-screen w-full overflow-hidden flex justify-center place-items-center lg:mb-12">
        <img src={homepage1} className="blur-sm lg:blur w-auto h-screen lg:h-auto max-w-none lg:min-w-homeLg min-h-home lg:min-h-homeLg pt-topsmHome md:pt-topmdHome lg:pt-topHome" />
        <p className='absolute text-3xl md:text-5xl lg:text-7xl font-bold lg:font-normal text-center max-w-xs md:max-w-sm lg:max-w-xl'>I'm not superstitious, but I am a little stitious</p>
        <div className='absolute max-w-lg pt-64 lg:pt-96'>
          <a href="#scroll" className='flex flex-col justify-center place-items-center'>
            <p className='text-xl md:text-xl lg:text-3xl font-bold text-center'>See More</p>
            <img src={downArrow} className="animate-bounce"/>
          </a>
        </div>
      </div>
      <div className="absolute mt-scrollsm md:mt-scrollmd lg:mt-scrolllg">
        <div id='scroll'></div>
      </div>
      <div>
        <div className="md:pt-4 w-full flex flex-col lg:flex-row justify justify-center items-center md:px-16">
          <div className="flex flex-col justify justify-center">
            <span className="w-full flex text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black pt-6 pb-4 lg:pb-12 px-8">Dunder Mifflin</span>
            <p className="px-8 py-0 w-full lg:max-w-xl font-sans">
              I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity
              for growth and discovery. My outgoing personality and infectious smile have earned me many friends and I am proud to have such a supportive network 
              of people in my life. Although I lead a busy lifestyle, I always make time for those who are important to me. Whether it's climbing mountains, 
              discovering new cultures, or just having a quiet night in, I approach each experience with a positive outlook and a thirst for knowledge.
            </p>
            <Link to='/about' className="p-8 lg:pt-12">
              <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">Learn More</button>
            </Link>
          </div>
          <img src={about1} className="px-8 lg:pl-12 w-full lg:max-w-xl" />
        </div>
        <div className="pt-16 pb-8 lg:mx-16 lg:my-8">
          <div className="bg-zinc-700 flex justify-center place-items-center">
            <p className='text-white py-16 px-8 md:px-24 lg:px-64 text-4xl md:text-6xl lg:text-7xl'>Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.</p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify justify-center items-center md:px-16 md:pt-0">
          <img src={about2} className="hidden lg:flex p-8 lg:pl-12 lg:max-w-xl" />
          <div className="flex flex-col justify justify-center">
            <span className="w-full flex text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black pt-6 pb-4 lg:pb-12 px-8">My Passion</span>
            <p className="px-8 py-0 w-full lg:max-w-xl font-sans">
              I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity 
              for growth and discovery. My outgoing personality and infectious smile have earned me many friends and I am proud to have such a supportive network 
              of people in my life. Although I lead a busy lifestyle, I always make time for those who are important to me. Whether it's climbing mountains, 
              discovering new cultures, or just having a quiet night in, I approach each experience with a positive outlook and a thirst for knowledge. I am 
              confident in my abilities and determined to reach my goals, but I never lose sight of the importance of having fun and enjoying the journey.
            </p>
            <Link to='/gallery' className="px-8 pt-8 lg:pb-8 lg:pt-12">
              <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">See Gallery</button>
            </Link>
          </div>
          <img src={about2} className="flex lg:hidden p-8 lg:pl-12 w-full lg:max-w-xl" />
        </div>
        <div className="pt-8 lg:mx-16 my-8 hidden lg:flex">
          <div className="bg-zinc-700 flex justify-center place-items-center gap-16 p-16">
            <img src={gallery1} className="lg:max-h-64" />
            <img src={gallery2} className="lg:max-h-64" />
            <img src={gallery3} className="lg:max-h-64" />
          </div>
        </div>
        <div className='w-full flex justify justify-center items-center lg:pt-8 pb-16 md:px-16'>
          <div className='flex flex-col justify justify-start items-start gap-8 px-8'>
            <div className='flex flex-col lg:flex-row justify justify-start items-start gap-8 lg:gap-16'>
              <span className="text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black">What We Do</span>
              <div className='flex flex-row gap-8'>
                <Link to='/services' className="">
                  <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">See Our Services</button>
                </Link>
                <Link to='/contact' className="hidden md:flex">
                  <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">Contact Us</button>
                </Link>
              </div>
            </div>
            <div>
              <p className="lg:max-w-4xl font-sans">
                I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity 
                for growth and discovery. My outgoing personality and infectious smile have earned me many friends and I am proud to have such a supportive network 
                of people in my life. Although I lead a busy lifestyle, I always make time for those who are important to me. Whether it's climbing mountains, 
                discovering new cultures, or just having a quiet night in, I approach each experience with a positive outlook and a thirst for knowledge. I am 
                confident in my abilities and determined to reach my goals, but I never lose sight of the importance of having fun and enjoying the journey.
              </p>
            </div>
            <Link to='/contact' className="flex md:hidden">
              <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home