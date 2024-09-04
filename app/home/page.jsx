"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 ">
      <div className="col-span-2 row-span-12  h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar ">
        <Sidebar />
      </div>
      <div className="col-span-10 row-span-12 h-screen bg-myWhite rounded-2xl ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
