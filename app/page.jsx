import { Inter } from "next/font/google";
import background from "../public/assets/images/background.jpg";
import Image from "next/image";
import { Roboto } from "next/font/google";

import { signIn, auth } from "./api/auth/auth";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="  w-full h-full">
        <Image
          src={background}
          className="w-full h-full object-cover"
          width={0}
          height={0}
          alt="background"
        />
        {/* <img className="w-full h-full object-cover" src={profilePic}></img> */}

        <div className="absolute flex space-y-5 flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <h1
            className={` text-white  shadow-xl font-bold md:text-7xl  text-4xl `}
          >
            Welcome To Mycarpet
          </h1>
          <div className=" flex justify-center items-center w-1/2 shadow-2xl">
            <h1 className={`text-white text-center ${roboto.className}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo a
              quibusdam mollitia, cumque aperiam veritatis saepe fugiat
              dignissimos sint aspernatur explicabo laboriosam qui optio
              voluptatibus natus ad nesciunt rerum labore.
            </h1>
          </div>
          <div>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button className="bg-myRed hover:A91D3A text-white font-semibold py-2 px-4 border border-myRed rounded shadow">
                Sign In With Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
