import React from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
const Home = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 ">
      <div className="col-span-2 row-span-12  h-screen  bg-myBlack ">
        <div className="flex justify-between items-center mx-2">
          <div>
            <h2 className=" text-white font-sans font-extrabold">Mycarpet</h2>
          </div>

          <div>
            <Image
              src={logo}
              width={120}
              height={120}
              alt="logo"
              className="bg-myBlack "
            />
          </div>
        </div>
      </div>
      <div className="col-span-10 row-span-12 h-screen bg-myWhite  ">main</div>
    </div>
  );
};

export default Home;
