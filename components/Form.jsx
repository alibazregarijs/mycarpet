import React from "react";

const Form = ({ type, carpet, setCarpet, submiting, handleSubmiting }) => {
  return (
    <div className="flex flex-col  gap-3 glassmorphism shadow-lg">
      <div className="flex justify-center items-center gap-3 ">
        <div className="flex justify-center items-center">
          <form class="max-w-sm mx-auto">
            <label
              for="number-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Carpet Qauntity:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              required
            />
          </form>
        </div>
        <div className="flex justify-center items-center">
          <form class="max-w-sm mx-auto">
            <label
              for="number-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Height:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Meter"
              required
            />
          </form>
        </div>

        <div className="flex justify-center items-center">
          <form class="flex flex-col max-w-sm mx-auto">
            <label
              for="number-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price:
            </label>

            <p className="text-center my-2">2000$</p>
          </form>
        </div>
        <div className="flex mt-5 mx-3  h-12 ">
          <button className="bg-myRed   hover:A91D3A text-white font-semibold py-2 px-4 border border-myRed rounded shadow">
            Add
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 border p-2 rounded-lg shadow-2xl ">
        <h1 className="font-bold font-mono  text-myBlack ">Mashhad Carpet </h1>
        <h2 className="font-bold font-mono  text-myBlack ">12 Meter </h2>
        <p className="font-bold font-mono  text-myBlack">2000$</p>
      </div>
    </div>
  );
};

export default Form;
