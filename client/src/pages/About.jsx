import React from 'react'

import { about1, about2 } from '../assets/';

const About = () => {
  return (
    <div  className="pt-topsm md:pt-topmd lg:pt-top">
      <div className="md:pt-4 w-full flex flex-col lg:flex-row justify justify-center items-center md:px-16">
        <div className="flex flex-col justify justify-center">
          <span className="w-full flex text-3xl md:text-6xl lg:text-7xl font-bold md:font-normal tracking-widest text-Black pt-6 pb-4 lg:pb-12 px-8">About Me</span>
          <p className="px-8 py-0 w-full lg:max-w-xl font-sans">
            I am a driven individual with a love for adventure and new experiences. I believe in making the most out of life and never missing an opportunity 
            for growth and discovery. My outgoing personality and infectious smile have earned me many friends and I am proud to have such a supportive network 
            of people in my life. Although I lead a busy lifestyle, I always make time for those who are important to me. Whether it's climbing mountains, 
            discovering new cultures, or just having a quiet night in, I approach each experience with a positive outlook and a thirst for knowledge.
          </p>
          <div className="p-8 lg:pt-12">
            <button className="text-white p-4 bg-zinc-700 hover:bg-zinc-800 w-48 flex justify-center font-bold tracking-widest text-xl">Contact Me</button>
          </div>
        </div>
        <img src={about1} className="px-8 lg:pl-12 w-full lg:max-w-xl" />
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
        </div>
        <img src={about2} className="flex lg:hidden p-8 lg:pl-12 w-full lg:max-w-xl" />
      </div>
    </div>
  )
}

export default About