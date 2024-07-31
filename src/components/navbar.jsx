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
    <nav className="fixed top-0 left-0 w-screen flex items-center justify-between bg-duck-night text-white shadow-lg h-16 ">
      <div className="flex items-center space-x-4 ">
        <Link href="/" onClick={() => setExpanded(false)} className="flex items-center">
          <Image
            src="/public/logo.svg"
            alt="Duckb3ar Logo"
            width={500}
            height={500}
          />
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
          {expanded ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={`absolute top-full left-0 w-full bg-duck-night md:static md:w-auto md:bg-transparent ${expanded ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col items-start space-y-4 p-5 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`px-3 py-2 rounded transition-colors duration-200 ${link.hoverClass}`}
              onClick={() => setExpanded(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;