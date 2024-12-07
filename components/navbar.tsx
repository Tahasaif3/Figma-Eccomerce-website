"use client"

import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri"
import { CiSearch, CiHeart } from "react-icons/ci"
import { IoCartOutline } from "react-icons/io5"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <header className="bg-white border-b shadow-sm mx-auto flex flex-col">
        {/* Top Banner */}
        <div className="bg-black text-white py-2 text-center flex flex-wrap justify-center items-center px-4 sm:px-8 w-full text-xs sm:text-sm">
          <div className="text-center flex-1 mb-2 sm:mb-0">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link href="#" className="font-semibold ml-2 hover:underline text-slate-300">
              ShopNow
            </Link>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="text-white text-sm font-normal leading-[20px]">English</div>
            <RiArrowDropDownLine className="text-white text-3xl" />
          </div>
        </div>

        {/* Navbar */}
        <div className="flex justify-between items-center px-4 sm:px-8 lg:px-44 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Exclusive</h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <Link href="/" className="text-slate-500 no-underline hover:text-black hover:underline">Home</Link>
            <Link href="/Contact" className="text-slate-500 no-underline hover:text-black hover:underline">Contact</Link>
            <Link href="/About" className="text-slate-500 no-underline hover:text-black hover:underline">About</Link>
            <Link href="/Signup" className="text-slate-500 no-underline hover:text-black hover:underline">Signup</Link>
          </nav>

          {/* Search bar with icon */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-slate-100 outline-none text-sm w-full"
              />
              <CiSearch />
            </div>
          <Link href={"/Wishlist"}><CiHeart className="text-2xl" /></Link>  
          <Link href={"/Cart"}><IoCartOutline className="text-2xl" /></Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 flex flex-col space-y-2">
            <Link href="/" className="text-slate-500 no-underline hover:text-black hover:underline">Home</Link>
            <Link href="/Contact" className="text-slate-500 no-underline hover:text-black hover:underline">Contact</Link>
            <Link href="/About" className="text-slate-500 no-underline hover:text-black hover:underline">About</Link>
            <Link href="/Signup" className="text-slate-500 no-underline hover:text-black hover:underline">Signup</Link>
            <div className="flex items-center bg-slate-100 rounded-md px-3 py-2 mt-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-slate-100 outline-none text-sm w-full"
              />
              <CiSearch />
            </div>
            <div className="flex justify-start space-x-4 mt-2">
            <Link href={"/Wishlist"}><CiHeart className="text-2xl" /></Link>  
            <Link href={"/Cart"}><IoCartOutline className="text-2xl" /></Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  )
}

