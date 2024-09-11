import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({
  type,
  carpets,
  setCarpets,
  addCarpet,
  setAddCarpet,
  submiting,
  handleSubmiting,
  quantity,
  carpetType,
  price,
  height,
  setQuantity,
  setPrice,
  setHeight,
  setCarpetType,
}) => {
  let myFormRef = useRef(null);
  const clearForm = () => {
    myFormRef.reset();
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(price, "price after add");

    if (quantity != 0) {
      setCarpets((carpets) => [
        ...carpets,
        {
          quantity: quantity,
          carpetType: carpetType,
          price: price * height,
          height: height,
        },
      ]);
      setAddCarpet(true);
    } else {
      toast.error("the quantity of carpet must be bigger than 0", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 20000,
      });
    }
  };

  return (
    <div className="flex flex-col  gap-3 glassmorphism shadow-lg">
      <div className="flex justify-center items-center gap-3 ">
        <div className="flex justify-center items-center ">
          <form
            ref={(el) => (myFormRef = el)}
            className="max-w-sm mx-auto space-y-2"
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
              onChange={(e) => setQuantity(e.target.value)}
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
              onChange={(e) => setHeight(e.target.value)}
            />
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-myWhite dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              value={price}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            >
              <option defaultValue={45} value={45}>
                Alashor 45 Toman Per Meter
              </option>
              <option value={25}>Nanoshor 25 Toman Per Meter</option>
            </select>
            <div className="flex flex-row-reverse mt-5  h-12 ">
              <button
                onClick={(e) => {
                  handleSubmitForm(e), clearForm();
                }}
                className="bg-myRed   hover:A91D3A text-white font-semibold py-2 px-4 border border-myRed rounded shadow"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>

      {addCarpet &&
        carpets.map((carpet, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mt-5 border p-2 rounded-lg shadow-2xl ">
              <h2 className="font-bold font-mono  text-myBlack ">
                {carpet.height} Meter
              </h2>
              <p className="font-bold font-mono  text-myBlack">
                {carpet.price} $
              </p>
            </div>
          </div>
        ))}
      {addCarpet && (
        <div className="flex  flex-row-reverse  mt-5   h-12">
          <button
            onClick={() => setAddCarpet(true)}
            className="bg-myBlack   hover:A91D3A text-white font-semibold py-2 px-4 border border-myBlack rounded shadow"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
