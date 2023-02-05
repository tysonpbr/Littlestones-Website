import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets/';
import { About, Contact, Gallery, Home, Services } from './pages';

function App() {
  return (
    <BrowserRouter>
      {
        // Navbar
      }
      <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to='/' className="flex items-center">
              <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Buisness Name</span>
          </Link>
          <div class="flex">
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent">
              <li>
                <Link to='/' className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-white dark:hover:text-gray-300 md:dark:hover:bg-transparent">Home</Link>
              </li>
              <li>
                <Link to='/about' className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-white dark:hover:text-gray-300 md:dark:hover:bg-transparent">About</Link>
              </li>
              <li>
                <Link to='/gallery' className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-white dark:hover:text-gray-300 md:dark:hover:bg-transparent">Gallery</Link>
              </li>
              <li>
                <Link to='/services' className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-white dark:hover:text-gray-300 md:dark:hover:bg-transparent">Sercives</Link>
              </li>
              <li>
                <Link to='/contact' className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-white dark:hover:text-gray-300 md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {
        // Body
      }
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
