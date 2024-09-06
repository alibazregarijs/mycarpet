"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Feed from "@/components/Feed";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll  hide-scrollbar">
      <div className="lg:grid grid-cols-12 grid-rows-12 ">
        <div className="col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar ">
          <Sidebar />
        </div>
        <div className="col-span-10 row-span-12 bg-myWhite rounded-2xl ">
          <Navbar /> 
          <Hero />
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
