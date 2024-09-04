"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";
import Search from "./Search";

const Sidebar = () => {
  const [dropMenu, setDropMenu] = useState({ name: "", situation: false });
  return (
    <div>
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

      <div>
        <Search />
      </div>

      <div className="flex  cursor-pointer mx-3 mt-24 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <h2 className=" text-sm mx-1  text-myWhite font-bold">Add Carpet</h2>
      </div>

      <div className="flex justify-between my-2 mx-4 mt-20 ">
        <h2 className=" text-sm  text-myWhite font-bold">Updates</h2>
        {dropMenu.situation && dropMenu.name === "UPDATES" ? (
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
              setDropMenu({ ...dropMenu, name: "UPDATES", situation: true })
            }
          />
        )}
      </div>
      {dropMenu.name === "UPDATES" && (
        <div className="flex mx-5 animate-slide-in">
          <ul className="space-y-3 mt-2">
            <Link href={"#"} to={""} className="">
              <li className="text-myWhite opacity-50 cursor-pointer">Coffee</li>
            </Link>
            <Link href={"#"} to={""} className="border">
              <li className="text-myWhite opacity-50 cursor-pointer">Tea</li>
            </Link>
            <Link href={"#"} to={""} className="border">
              <li className="text-myWhite opacity-50 cursor-pointer">Carpet</li>
            </Link>
          </ul>
        </div>
      )}

      {dropMenu.name === "TMP" && (
        <div className="flex mx-5 animate-slide-in">
          <ul className="space-y-3 mt-2">
            <Link href={"#"} to={""} className="">
              <li className="text-myWhite opacity-50 cursor-pointer">Tmp</li>
            </Link>
            <Link href={"#"} to={""} className="border">
              <li className="text-myWhite opacity-50 cursor-pointer">Tmp</li>
            </Link>
            <Link href={"#"} to={""} className="border">
              <li className="text-myWhite opacity-50 cursor-pointer">Tmp</li>
            </Link>
          </ul>
        </div>
      )}
      {/* CARPET *****************************/}
      <div className="flex justify-between  my-2 mx-4 mt-20 ">
        <h2 className=" text-sm  text-myWhite  font-bold">Carpets</h2>
        {dropMenu.situation && dropMenu.name === "CARPETS" ? (
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
              setDropMenu({ ...dropMenu, name: "CARPETS", situation: true })
            }
          />
        )}
      </div>
      {dropMenu.name === "CARPETS" && (
        <div className="flex mx-5 animate-slide-in">
          <ul className="space-y-3 mt-2">
            <Link href={"#"} to={""} className="">
              <li className="text-myWhite opacity-50 cursor-pointer">
                Mashhad
              </li>
            </Link>
            <Link href={"#"} to={""} className="border">
              <li className="text-myWhite opacity-50 cursor-pointer">Glim</li>
            </Link>
            <Link href={"#"} to={""} className="border">
              <li className="text-myWhite opacity-50 cursor-pointer">Tehran</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
