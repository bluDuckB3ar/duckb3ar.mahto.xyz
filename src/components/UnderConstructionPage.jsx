"use client"
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

const UnderConstructionPage = ({ children, backTo = "/" }) => {
  const size = {
    fontSize: `${Math.min(window.innerWidth, window.innerHeight) * 0.05}px`,
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />

      <div className="text-center" style={size}>
        Oh quak... this page is currently under construction...
      </div>

      <Link href={backTo}>
        <span className="text-center underline" style={size}>
          Go back home
        </span>
      </Link>

      {children}
    </div>
  );
};

export default UnderConstructionPage;


