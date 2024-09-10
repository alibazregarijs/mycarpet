import React from "react";
import sectionBackground from "../public/assets/images/sectionBackground.jpg"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center relative items-center  ">
      <Image
        src={sectionBackground}
        width={0}
        height={0}
        alt="carpet"
        className="h-36 w-full mx-5 mt-3 rounded-xl "
      />
      <h1 className="absolute z-10 left-10 top-10 text-white font-sans font-extrabold text-2xl">
        Clean Your Carpet
      </h1>
      <p className="absolute z-10 left-10 bottom-15 text-white font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing 
        tempora.
      </p>
      <button
        type="submit"
        className="z-10 left-10 bottom-5 text-myBlack absolute  bg-myWhite hover:bg-myBlack hover:text-myWhite focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
      >
        Place An Order
      </button>

      <div className="absolute mx-5 mt-3 rounded-xl flex space-y-5 flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlaySection"></div>
    </div>
  );
};

export default Hero;
