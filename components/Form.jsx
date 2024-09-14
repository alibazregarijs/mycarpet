import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { IoIosCloseCircle } from "react-icons/io";
import BlurContext from "@/context/BlurContext";
import { useContext } from "react";
import CarpetListings from "./CarpetListings";

const Form = ({ type, userId }) => {
  const router = useRouter();
  const [carpet, setCarpet] = useState({ quantity: "", height: "", price: 45 });
  const [submiting, setSubmiting] = useState(false);
  const [carpets, setCarpets] = useState([]);
  const [addCarpet, setAddCarpet] = useState(false);
  const context = useContext(BlurContext);

  let myFormRef = useRef(null);
  const clearForm = () => {
    myFormRef.reset();
  };

  const formOverFlowClass =
    carpets.length >= 2
      ? "flex flex-col h-screen overflow-y-scroll hide-scrollbar  gap-3 glassmorphism shadow-lg"
      : "flex flex-col gap-3 glassmorphism shadow-lg";

  const createCarpet = async (e) => {
    e.preventDefault();
    setSubmiting(true);

    try {
      const response = await fetch("/api/carpet/new", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          carpets: carpets,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmiting(false);
    }
  };

  const remove = (e, id) => {
    e.preventDefault();
    const index = carpets.findIndex((element) => element.id === id);
    if (id !== -1) {
      setCarpets((oldCarpets) => [...oldCarpets, carpets.splice(index, 1)]);
    }
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    if (carpet.quantity > 0) {
      setCarpets((carpets) => [
        ...carpets,
        {
          id: carpets.length + 1,
          quantity: carpet.quantity,
          price: carpet.price * carpet.height * carpet.quantity,
          height: carpet.height,
        },
      ]);
    }
    setAddCarpet(true);
  };

  return (
    <div className={formOverFlowClass}>
      <div className="flex  flex-row-reverse">
        <IoIosCloseCircle
          onClick={() => context.setBlurContext(false)}
          className="cursor-pointer"
          color="white"
          fontSize={25}
        />
      </div>

      <div className="flex justify-center  items-center gap-3 ">
        <div className="flex justify-center  items-center ">
          <form
            ref={(el) => (myFormRef = el)}
            className="max-w-sm mx-auto space-y-2 "
          >
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium text-myWhite dark:text-white"
            >
              Qauntity:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              required
              onChange={(e) =>
                setCarpet({ ...carpet, quantity: e.target.value })
              }
            />
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium text-myWhite dark:text-white"
            >
              Height:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Meter"
              required
              onChange={(e) => setCarpet({ ...carpet, height: e.target.value })}
            />
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-myWhite dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setCarpet({ ...carpet, price: e.target.value })}
            >
              <option defaultValue={45} value={45}>
                Alashor 45 Toman Per Meter
              </option>
              <option value={25}>Nanoshor 25 Toman Per Meter</option>
            </select>
            <div className="flex  justify-center mt-5  h-12 ">
              <button
                disabled={carpet.height < 1 || carpet.quantity < 1}
                onClick={(e) => {
                  handleAddForm(e), clearForm();
                }}
                className="bg-myRed   hover:A91D3A text-white font-semibold py-2 px-4 border border-myRed rounded shadow"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>

      {addCarpet && CarpetListings(carpets)}
      {addCarpet && (
        <div className="flex  flex-row-reverse  mt-5   h-12">
          <button
            onClick={(e) => {
              setAddCarpet(true), createCarpet(e);
            }}
            // disabled={submiting}
            className="bg-myBlack   hover:A91D3A text-white font-semibold py-2 px-4 border border-myBlack rounded shadow"
          >
            {submiting ? `${type}...` : type}
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
