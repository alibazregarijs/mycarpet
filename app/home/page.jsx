"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feed from "@/components/Feed";
import { useEffect, useState } from "react";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import AppContext from "@/context/AppContext";
import BlurContext from "@/context/BlurContext";
import CarpetContext from "@/context/CarpetContext";
import { time } from "../../utils/getTime";

const Home = () => {
  const [submiting, setSubmiting] = useState(false);
  const [navToggleContext, setNavToggleContext] = useState(true);
  const [blurContext, setBlurContext] = useState(false);
  const [carpetsQuery, setCarpetsQuery] = useState([]);
  const { data: session } = useSession();

  const toggleAnimataion = navToggleContext
    ? "lg:grid hidden col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar "
    : "col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar  ";

  const blurClass = blurContext && "blur-sm";
  const addCarpetFormClass = blurContext
    ? "flex justify-center items-center z-10 absolute h-screen top-0 bottom-0 left-0 right-0"
    : "hidden";

  return (
    <AppContext.Provider value={{ navToggleContext, setNavToggleContext }}>
      <BlurContext.Provider value={{ setBlurContext, blurContext }}>
        <CarpetContext.Provider value={{ carpetsQuery, setCarpetsQuery }}>
          <div className={addCarpetFormClass}>
            <Form
              type="Create"
              submiting={submiting}
              setSubmiting={setSubmiting}
              userId={session?.user.id}
            />
          </div>
          <div
            className={`h-screen overflow-y-scroll  hide-scrollbar ${blurClass}`}
          >
            <div className="lg:grid grid-cols-12 grid-rows-12 ">
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
        </CarpetContext.Provider>
      </BlurContext.Provider>
    </AppContext.Provider>
  );
};

export default Home;
