import React from 'react'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

import { homepage1, about1, about2, downArrow, img4, img6, img7 } from '../assets';

const Home = () => {
  return (
    <div className="">
      <div className="h-screen w-full overflow-hidden flex justify-center place-items-center">
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
      <div className="flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="w-full py-8 md:py-16 lg:py-0 flex flex-col justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex md:hidden lg:flex flex-col self-start lg:self-end">
              <span className="px-10 lg:px-24 text-left lg:text-right w-full text-4xl md:text-6xl lg:text-6xl font-bold md:font-normal tracking-widest text-Black">Littlestones</span>
              <span className="px-10 lg:px-24 text-left lg:text-right w-full text-4xl md:text-6xl lg:text-6xl font-bold md:font-normal tracking-widest text-Black">Creations</span>
            </div>
            <div className="hidden md:flex lg:hidden flex-col self-start lg:self-end">
              <span className="px-10 lg:px-24 text-left lg:text-right w-full text-4xl md:text-6xl lg:text-6xl font-bold md:font-normal tracking-widest text-Black">Littlestones Creations</span>
            </div>
            <div className="flex self-start lg:self-end">
              <p className="px-10 lg:px-24 w-full lg:max-w-2xl font-sans text-justify">
                I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity
                for growth and discovery. My outgoing personality and infectious smile have earned me many friends and I am proud to have such a supportive network 
                of people in my life. Although I lead a busy lifestyle, I always make time for those who are important to me. Whether it's climbing mountains, 
                discovering new cultures, or just having a quiet night in, I approach each experience with a positive outlook and a thirst for knowledge.
              </p>
            </div>
            <div className="w-full flex lg:hidden self-end">
              <Link to='/about' className="self-end w-full px-10 lg:px-24">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full lg:w-48 flex justify-center font-bold tracking-widest text-xl">Learn More</button>
              </Link>
            </div>
            <div className="hidden lg:flex self-end">
              <Link to='/about' className="self-end w-full px-10 lg:px-24">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full lg:w-48 flex justify-center font-bold tracking-widest text-xl">Learn More</button>
              </Link>
            </div>
          </div>
          <div className='px-6 lg:px-0 w-full'>
            <div className="flex justify-center content-center overflow-hidden">
              <img src={about1} className="min-w-full min-h-full shrink-0" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center">
          <div className="w-full px-6 lg:px-0 flex justify-center content-center overflow-hidden">
            <img src={img6} className="min-w-full min-h-full shrink-0" />
          </div>
          <div className="w-full py-8 md:py-16 lg:py-0 flex flex-col justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex self-start">
              <span className="px-10 lg:px-24 w-full text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black">Our Work</span>
            </div>
            <div className="flex self-start">
              <p className="px-10 lg:px-24 w-full lg:max-w-2xl font-sans text-justify">
              I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity
                for growth and discovery. My outgoing personality and infectious smile have earned me many friends.
              </p>
            </div>
            <div className="w-full flex self-start">
              <Link to='/gallery' className="w-full px-10 lg:px-24">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full lg:w-48 flex justify-center font-bold tracking-widest text-xl">Gallery</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-8 md:py-16 lg:py-0 justify-center">
          <div className="w-full flex flex-col justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex flex-col self-start lg:self-end">
              <span className="px-10 lg:px-24 text-right w-full text-3xl md:text-6xl lg:text-6xl font-bold md:font-normal tracking-widest text-Black">What We Do</span>
            </div>
            <div className="flex self-start lg:self-end">
              <p className="px-10 lg:px-24 w-full lg:max-w-2xl font-sans text-justify">
                I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity
                for growth and discovery. My outgoing personality and infectious smile have earned me many friends.
              </p>
            </div>
            <div className="w-full flex lg:hidden flex-row justify-center lg:justify-end lg:self-end gap-8 px-10 lg:px-24">
              <Link to='/services' className="w-full">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full lg:w-48 flex justify-center font-bold tracking-widest text-xl">Services</button>
              </Link>
              <Link to='/contact' className="w-full">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full lg:w-48 flex justify-center font-bold tracking-widest text-xl">Contact</button>
              </Link>
            </div>
            <div className="hidden lg:flex flex-row justify-center lg:justify-end lg:self-end gap-8 px-10 lg:px-24">
              <Link to='/services' className="w-full">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full lg:w-48 flex justify-center font-bold tracking-widest text-xl">Services</button>
              </Link>
              <Link to='/contact' className="w-full">
                <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-full lg:w-48 flex justify-center font-bold tracking-widest text-xl">Contact</button>
              </Link>
            </div>
          </div>
          <div className='w-full px-6 lg:px-0 pt-8 md:pt-16 lg:pt-0'>
            <div className="flex justify-center content-center overflow-hidden">
              <img src={img7} className="min-w-full min-h-full shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home