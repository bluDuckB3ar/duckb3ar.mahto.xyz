"use client"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
    if (isExpanded) {
      window.location.href = '/'
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-bear text-black shadow-lg">
      <div className="flex items-center space-x-4 p-5">
        <Link href="/" onClick={handleClick}>
          <img src="/duckb3ar-logo.svg" alt="Duckb3ar Logo" />
          <h1 className="text-md font-bold">duckb3ar</h1>
        </Link>
       
      </div>
      <div className="hidden md:flex flex-row gap-4 m-2">
        <Link href="/about" className=" border-black p-4 font-bold">About</Link>
        <Link href="/blog" className=" border-black p-4 font-bold">Blog</Link>
        <Link href="/contact" className=" border-black p-4 font-bold">Contact</Link>
        <Link href="/support" className=" border-black p-4 font-bold">Support</Link>
      </div>
      <div className="flex items-center space-x-4 p-5 md:hidden">
        <button className="text-3xl font-bold" onClick={handleClick}>
          {isExpanded ? 'Close' : 'Menu'}
        </button>
        <div className={`${isExpanded ? 'flex' : 'hidden'} flex-col items-start space-y-6`}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



