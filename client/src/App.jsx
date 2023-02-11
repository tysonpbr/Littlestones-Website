import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

import { About, Contact, Gallery, Home, Services } from './pages';
import { iconFacebook, iconTwitter, iconInstagram } from './assets';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      {
        // Navbar
      }
      <nav className="px-2 sm:px-4 py-2.5 bg-white fixed w-full z-20 top-0 left-0 sm: drop-shadow-md md:drop-shadow-md lg:drop-shadow-sm">
        <div className="flex flex-wrap justify-between md:place-content-center">
          <Link to='/' className="pl-4 pt-0 md:pt-6 md:pb-4">
              <span className="text-4xl md:text-6xl lg:text-5xl w-full lg:flex lg:w-auto font-bold lg:font-normal whitespace-nowrap uppercase">Littlestones Creations</span>
          </Link>
          <div className="relative inline-block">
            <button onClick={toggle} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          {isOpen && (
            <ul className="relative w-full z-10 bg-white font-normal tracking-widest text-black flex flex-col items-center py-3">
              <li className="py-3 hover:bg-gray-300 w-full flex justify-center">
                <Link to='/' className="font-sans" onClick={toggle}>Home</Link>
              </li>
              <li className="py-3 hover:bg-gray-300 w-full flex justify-center">
                <Link to='/about' className="font-sans" onClick={toggle}>About</Link>
              </li>
              <li className="py-3 hover:bg-gray-300 w-full flex justify-center">
                <Link to='/gallery' className="font-sans" onClick={toggle}>Gallery</Link>
              </li>
              <li className="py-3 hover:bg-gray-300 w-full flex justify-center">
                <Link to='/services' className="font-sans" onClick={toggle}>Sercives</Link>
              </li>
              <li className="py-3 hover:bg-gray-300 w-full flex justify-center">
                <Link to='/contact' className="font-sans" onClick={toggle}>Contact</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="flex flex-wrap justify-between md:place-content-center tracking-widest">
          <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-16 md:mt-0 text-md md:border-0 bg-transparent">
              <li>
                <NavLink to='/' className={
                  ({ isActive }) => isActive ? 
                  "underline block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans" : 
                  "block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans"
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' className={
                  ({ isActive }) => isActive ? 
                  "underline block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans" : 
                  "block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans"
                }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/gallery' className={
                  ({ isActive }) => isActive ? 
                  "underline block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans" : 
                  "block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans"
                }>
                  Gallery
                </NavLink>
              </li>
              <li>
              <NavLink to='/services' className={
                  ({ isActive }) => isActive ? 
                  "underline block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans" : 
                  "block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans"
                }>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className={
                  ({ isActive }) => isActive ? 
                  "underline block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans" : 
                  "block py-2 pl-3 pr-4 rounded hover:underline md:hover:bg-transparent md:border-0 md:p-0 font-sans"
                }>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-between h-screen">
        {
          // Body
        }
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/services" element={<Services />}></Route>
          </Routes>
        </main>
        {
          // Footer
        }
        <footer className="bg-gray-100 py-8 shadow-2xl relative">
          <div className='flex justify-center'>
            <a href="https://www.facebook.com/">
              <img src={iconFacebook} />
            </a>
            <a href="https://www.instagram.com/">
              <img src={iconInstagram} />
            </a>
            <a href="https://www.twitter.com/">
              <img src={iconTwitter} />
            </a>
          </div>
          <div className='flex justify-center'>
            <span className='text-xl font-bold'>LITTLESTONES CREATIONS</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
