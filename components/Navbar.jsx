"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/assets/images/profile.jpg";
const Navbar = () => {
  const [notif, setNotif] = useState(true);
  return (
    <div className="flex justify-between  mt-1 mx-2 ">
      <div className="flex space-x-1 mx-4 mt-3 border-b border-b-gray-300">
        <p className="font-bold text-myBlack">
          Today,{new Date().toLocaleString("en-US", { day: "2-digit" })}
        </p>
        <p className="font-bold text-myBlack">
          {new Date().toLocaleString("en-US", { month: "long" })}
        </p>
      </div>
      <div className="flex justify-center items-center space-x-5">
        <Link href={""}>
          <button
            onClick={() => setLoggedIn((prevState) => !prevState)}
            type="button"
            className=" group relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-myRed hover:bg-myBlack rounded-lg"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            <span className="sr-only">Notifications</span>
            {notif ? (
              <div className="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"></div>
            ) : null}
          </button>
        </Link>

        <Image
          className="rounded-full h-12 w-12"
          src={profile}
          width={0}
          height={0}
          alt="profileImage"
        />

        <div className="flex flex-col justify-start items-start">
          <p className="font-bold font-mono  text-myBlack opacity-50 text-left">
            Ali
          </p>
          <p className="font-bold font-mono  text-myBlack opacity-50">
            Coding Js
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 bg-myBlack rounded-full"
          color="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
