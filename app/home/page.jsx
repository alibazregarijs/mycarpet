"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import sectionBackground from "../../public/assets/images/sectionBackground.jpg";

const Home = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 ">
      <div className="col-span-2 row-span-12  h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar ">
        <Sidebar />
      </div>
      <div className="col-span-10 row-span-12 h-screen bg-myWhite rounded-2xl ">
        <Navbar />
        <div className="flex justify-center relative items-center  ">
          <Image
            src={sectionBackground}
            width={0}
            height={0}
            alt="carpet"
            className="h-36 w-full mx-5 mt-3 rounded-xl "
          />
          <div className="absolute mx-5 mt-3 rounded-xl flex space-y-5 flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlaySection"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
