// src/components/Layout.jsx
import React from 'react';
import { heroBackground } from "../assets";
import { BackgroundCircles } from "./design/Hero";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={heroBackground}
            className="w-full"
            width={1440}
            height={1800}
            alt="hero background"
          />
        </div> */}
        <BackgroundCircles className="adjusted-background-circles" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
