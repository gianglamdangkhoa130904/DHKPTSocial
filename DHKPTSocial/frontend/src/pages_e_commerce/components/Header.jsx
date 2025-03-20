"use client";
import React from "react";
import HeaderTop from "./HeaderTop";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-solid border-b-zinc-300 z-50 shadow-md">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <HeaderTop />
      <div className="flex justify-center">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
