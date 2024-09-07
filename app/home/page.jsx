"use client";
import react from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feed from "@/components/Feed";
import AppContext from "@/context/AppContext";
import { useState } from "react";

const Home = () => {
  const [navToggleContext, setNavToggleContext] = useState(true);
  const toggleAnimataion = navToggleContext
    ? "lg:grid hidden col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar "
    : "col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar  ";

  return (
    <AppContext.Provider value={{ navToggleContext, setNavToggleContext }}>
      <div className="h-screen overflow-y-scroll  hide-scrollbar">
        <div className="lg:grid grid-cols-12 grid-rows-12 ">
          {console.log(navToggleContext)}
          {navToggleContext ? (
            <div className={toggleAnimataion}>
              <Sidebar />
            </div>
          ) : (
            <div
              className={`col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar animate-slide-down`}
            >
              <Sidebar />
            </div>
          )}

          <div className="col-span-10 row-span-12 bg-myWhite rounded-2xl ">
            <Navbar />
            <Hero />
            <Feed />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Home;
