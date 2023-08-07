/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'



export default function Navbar() {

  const [navDropdown, setNavDropdown] = useState(false)

  return (
      <nav className="bg-[#fcfaf7] dark:bg-gray-900 z-10 min-w-full h-[100px] flex relative">
        <div className="flex flex-wrap items-center justify-between p-4 w-[100%] h-[100%]">
          <a className="flex items-center mr-auto">
              <img src='https://i.imgur.com/9yaCBx5.png' className="h-10 ml-[2vw]" alt="Flowbite Logo" />
          </a>
          <button onClick={() => setNavDropdown(!navDropdown)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className={`${navDropdown ? '' : 'hidden'} w-full mr-[2vw] md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#fcfaf7]">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fbb041] md:p-0">ALDER</a>
              </li>
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fbb041] md:p-0">WORK</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fbb041] md:p-0 ">SERVICES</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fbb041] md:p-0">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}