"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feed from "@/components/Feed";
import AppContext from "@/context/AppContext";
import { useState } from "react";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";

const Home = () => {
  const [submiting, setSubmiting] = useState(false);
  const [addCarpet, setAddCarpet] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(45);
  const [height, setHeight] = useState(null);
  const [carpetType, setCarpetType] = useState(null);
  const [carpets, setCarpets] = useState([]);
  const [navToggleContext, setNavToggleContext] = useState(true);

  const toggleAnimataion = navToggleContext
    ? "lg:grid hidden col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar "
    : "col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar  ";

  const { data: session } = useSession();

  const createCarpet = async (e) => {
    e.preventDefault();
    setSubmiting(true);

    try {
      const response = await fetch("api/carpet/new", {
        method: "POST",
        body: JSON.stringify(carpets),
      });
    } catch (error) {}
  };

  return (
    <AppContext.Provider value={{ navToggleContext, setNavToggleContext }}>
      <div className="flex justify-center items-center absolute h-screen z-10 top-0 bottom-0 left-0 right-0">
        <Form
          type="Create"
          submiting={submiting}
          setSubmiting={setSubmiting}
          userId={session?.user.id}
        />
      </div>
      <div className="h-screen overflow-y-scroll  hide-scrollbar blur-sm">
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
    </AppContext.Provider>
  );
};

export default Home;
