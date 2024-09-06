import React from "react";
import em1 from "../public/assets/images/em1.jpg";
import em2 from "../public/assets/images/em2.jpg";
import em3 from "../public/assets/images/em3.jpg";
import Image from "next/image";
import Slider from "@/components/Slider";
import Card from "./Card";

const Feed = () => {
  return (
    <div>
      <div className="flex justify-between mx-5 mt-4">
        <div className="flex space-x-5 justify-center">
          <p className="font-sans border-l-4 border-myRed"></p>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold font-mono  text-myBlack opacity-50">
              Quantity Of Carpet
            </h3>
            <h3 className="font-bold font-mono  text-myBlack ">16</h3>
          </div>
          {/* SECOND DIV */}
          <p className="font-sans border-l-4 border-myRed "></p>
          <div className="flex flex-col  justify-center">
            <h3 className="font-bold font-mono  text-myBlack opacity-50">
              User Added
            </h3>
            <h3 className="font-bold font-mono  text-myBlack ">10</h3>
          </div>
          {/* THIRD DIV */}
          <p className="font-sans border-l-4 border-myRed "></p>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold font-mono  text-myBlack opacity-50">
              Employees
            </h3>
            <h3 className="font-bold font-mono  text-myBlack ">10</h3>
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <div className="flex justify-center items-center relative w-52">
            <Image
              className=" rounded-full h-12 w-12 absolute right-25 z-30 "
              src={em1}
              width={90}
              height={90}
              alt="employee"
            />
            <Image
              className=" rounded-full h-12 w-12 absolute right-12 z-20 "
              src={em2}
              width={90}
              height={90}
              alt="employee"
            />
            <Image
              className=" rounded-full h-12 w-12 absolute right-5 z-10   "
              src={em3}
              width={90}
              height={90}
              alt="employee"
            />
          </div>
          <div className="flex justify-center items-center border-l-2 mx-3 p-5 border-myRed ">
            <p></p>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              class="flex  text-myBlack border-2 border-myRed focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-black mx-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Add Carpet
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-10 space-x-5 mx-5 ">
        <div className="col-span-6">
          <div className="flex justify-between items-center">
            <h2 className="text-md  text-myBlack font-bold">Recent Carpets</h2>
            <p className="opacity-50 cursor-pointer text-sm">View All</p>
          </div>
          <div className="flex justify-between items-center mt-5">
            <Slider />
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex items-center">
            <h2 className="text-md  text-myBlack font-bold">Your Carpet</h2>
          </div>
          <div className="mt-5 border bg-myBlack rounded-lg">
            <Card situation={"complete"} carpetName={"Mashhad"} time={2} />
          </div>
          <div className="mt-1 border bg-myBlack rounded-lg">
            <Card situation={"Incomplete"} carpetName={"Ahvaz"} time={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
