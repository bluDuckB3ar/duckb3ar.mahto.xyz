"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const navLinks = [
    { href: "/about", text: "about", hoverClass: "hover:bg-duck-yellow hover:text-duck-night" },
    { href: "/blog", text: "blog", hoverClass: "hover:bg-duck-yellow hover:text-duck-night" },
    { href: "/contact", text: "contact", hoverClass: "hover:bg-duck-red hover:text-duck-night" },
    { href: "/support", text: "support",  hoverClass: "hover:bg-duck-blue hover:text-duck-night" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-screen flex items-center justify-between bg-duck-night text-white shadow-lg h-8 py-2 ">
      <div clh-8ame="flex items-center space-x-4 ">
        <Link href="/" onClick={() => setExpanded(false)} className="flex items-center">
      
          <h1 className="text-md font-bold text-white ml-2">duckb3ar</h1>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-duck-night bg-transparent px-6 font-medium text-white transition-all duration-100 ${
            expanded ? 'translate-x-[3px] translate-y-[3px] [box-shadow:0px_0px_rgb(82_82_82)]' : '[box-shadow:5px_5px_rgb(82_82_82)]'
          }`}
          onClick={toggleExpanded}
        >
          {expanded ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div className={`absolute top-full left-0 w-full bg-duck-night md:static md:w-auto md:bg-transparent ${expanded ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col items-start space-y-4 p-5 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`flex items-center justify-center px-3 py-2 rounded transition-colors duration-200 ${link.hoverClass}`}
              onClick={() => setExpanded(false)}
            >
              <span className="mr-2">{link.text}</span>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
