"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [dropMenu, setDropMenu] = useState({ name: "", situation: false });
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
              width={110}
              height={110}
              alt="logo"
              className="bg-myBlack "
            />
          </div>
        </div>

        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search For"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-myRed hover:bg-myBlack focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex justify-between m-2 mt-5 ">
          <h2 className=" text-sm  text-myWhite font-bold">Updates</h2>
          {dropMenu.situation && dropMenu.name === "update" ? (
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400 cursor-pointer"
              onClick={() =>
                setDropMenu({ ...dropMenu, name: "", situation: false })
              }
            />
          ) : (
            <ChevronUpIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400 cursor-pointer"
              onClick={() =>
                setDropMenu({ ...dropMenu, name: "update", situation: true })
              }
            />
          )}
        </div>
        {dropMenu.name === "update" && (
          <div className="flex mx-5 animate-slide-in">
            <ul className="space-y-3 mt-2">
              <Link href={"#"} to={""} className="">
                <li className="text-myWhite opacity-50 cursor-pointer">
                  Coffee
                </li>
              </Link>
              <Link href={"#"} to={""} className="border">
                <li className="text-myWhite opacity-50 cursor-pointer">Tea</li>
              </Link>
              <Link href={"#"} to={""} className="border">
                <li className="text-myWhite opacity-50 cursor-pointer">
                  Carpet
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-10 row-span-12 h-screen bg-myWhite  ">main</div>
    </div>
  );
};

export default Home;
