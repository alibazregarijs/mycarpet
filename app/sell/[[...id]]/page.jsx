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
import { Counter } from "@/components/Counter";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
register();

const Home = ({ params }) => {
  const [submiting, setSubmiting] = useState(false);
  const [navToggleContext, setNavToggleContext] = useState(true);
  const [blurContext, setBlurContext] = useState(false);
  const [carpetsQuery, setCarpetsQuery] = useState([]);
  const { data: session } = useSession();
  const [product, setProduct] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState(0);

  const router = useRouter();
  const productId = params.id[0];
  const toggleAnimataion = navToggleContext
    ? "lg:grid hidden col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar "
    : "col-span-2  row-span-12 min-h-screen  bg-myBlack overflow-y-scroll  hide-scrollbar  ";

  const blurClass = blurContext && "blur-sm";
  const addCarpetFormClass = blurContext
    ? "flex justify-center items-center z-10 absolute h-screen top-0 bottom-0 left-0 right-0"
    : "hidden";

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`http://localhost:8000/Products/${productId}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, []);

  const buy = async (e) => {
    e.preventDefault();
    setSubmiting(true);
    try {
      const response = await fetch("api/sell/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          name: product.name,
          price: product.price * product.meter * product.quantity,
          description: product.description,
          quantity: product.quantity,
          meter: product.meter,
        }),
      });
      if (response.ok) {
        const response = await fetch(
          `http://localhost:8000/Products/${productId}`
        );
        const data = await response.json();
        data["inStore"] = data["inStore"] - currentValue;

        const res = await fetch(`http://localhost:8000/Products/${productId}`, {
          method: "PUT",
          body: JSON.stringify({
            name: data["name"],
            price: data["price"],
            description: data["description"],
            inStore: data["inStore"],
            image: data["image"],
          }),
        });
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                {loading ? (
                  <Spinner loading={true} />
                ) : (
                  <div className="grid grid-cols-12 gap-4 row-span-12 ">
                    <div className="col-span-5 mx-5 text-center items-center justify-center ">
                      <img
                        src={product.image}
                        className="h-96 w-full  mt-3 rounded-md  shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                        alt=""
                      />
                    </div>
                    <div className="col-span-7 text-center mt-2  items-center justify-center ">
                      <div className="flex flex-col space-y-4 items-center justify-center ">
                        <h1 className="  hover:A91D3A text-black  py-2 px-4 border border-myRed rounded-full  shadow-md font-bold text-2xl">
                          {product.name} The Best Carpet
                        </h1>
                        <h3 className="font-bold text-xl text-transform: uppercase">
                          The Best Carpet Gallery In Iran We Produce The Best
                          Carpets
                        </h3>

                        <p className="text-center">{product.description}</p>
                        <div className="counterNumber">
                          <Counter
                            inStore={product.inStore}
                            currentValue={currentValue}
                            setCurrentValue={setCurrentValue}
                          />
                        </div>
                        <button
                          onClick={buy}
                          disabled={submiting}
                          className="bg-myRed hover:A91D3A text-white font-semibold py-2 px-4 border border-myRed rounded shadow"
                        >
                          {submiting ? `Submiting...` : "Buy This Carpet Now !"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CarpetContext.Provider>
      </BlurContext.Provider>
    </AppContext.Provider>
  );
};

export default Home;
