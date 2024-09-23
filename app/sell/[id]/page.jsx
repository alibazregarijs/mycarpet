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
import Image from "next/image";
import { register } from "swiper/element/bundle";
import carpet1 from "../../../public/assets/images/carpet1.jpg";

register();

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
                <div className="grid grid-cols-12 gap-4 row-span-12 ">
                  <div className="col-span-5 mx-5 text-center items-center justify-center ">
                    <Image
                      className="h-96 w-full  mt-3 rounded-md  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                      src={carpet1}
                      width={0}
                      height={0}
                      alt={""}
                    />
                  </div>
                  <div className="col-span-7 text-center mt-2  items-center justify-center ">
                    <div className="flex flex-col space-y-10 items-center justify-center ">
                      <h1 className="  hover:A91D3A text-black  py-2 px-4 border border-myRed rounded-full shadow-lg font-bold text-2xl">
                        Buy Without Any Hesitate
                      </h1>
                      <h3 className="font-bold text-xl text-transform: uppercase">
                        The Best Carpet Gallery In Iran We Produce The Best
                        Carpets
                      </h3>

                      <p className="text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Similique harum omnis hic alias ipsum asperiores
                        id, voluptate magni reprehenderit ipsam qui possimus
                        recusandae! Fuga nemo natus vel necessitatibus adipisci
                        velit provident veniam, quas voluptates possimus magnam
                        error recusandae, deserunt eaque, a eveniet temporibus.
                        Vel quibusdam ipsa assumenda cum, tempore consectetur
                        quia autem debitis possimus? Reiciendis perspiciatis
                        dolorem excepturi a repellat!
                      </p>
                      <button className="bg-myRed hover:A91D3A text-white font-semibold py-2 px-4 border border-myRed rounded shadow">
                        Buy This Carpet Now !
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarpetContext.Provider>
      </BlurContext.Provider>
    </AppContext.Provider>
  );
};

export default Home;
