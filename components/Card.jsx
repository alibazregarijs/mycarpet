import React from "react";

const Card = ({ index = 0, carpet }) => {
  return (
    <section>
      {carpet ? (
        <div
          key={index}
          className="flex flex-col mt-1     bg-myBlack rounded-lg"
        >
          <div className="flex justify-between mx-3 items-center mt-2  ">
            <p className="opacity-50 cursor-pointer text-sm text-white">
              Quantity : {carpet.quantity}
            </p>
            <div className="flex justify-center items-center space-x-1 ">
              <h2 className="text-sm  text-white font-semibold">Completed</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex mt-1 mx-3">
            <p className="text-white">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex justify-between items-center space-x-1 m-3">
            <div className="flex mt-1 space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 opacity-50  text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="opacity-50 text-white cursor-pointer text-sm ">
                {45}Min
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-myRed hover:bg-myWhite hover:text-myBlack  font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <div key={index} className="flex flex-col  mt-1  bg-myBlack rounded-lg">
          <div className="flex justify-between mx-3 items-center mt-1  ">
            <p className="opacity-50 cursor-pointer text-sm text-white"></p>
            <div className="flex justify-center items-center space-x-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex mt-1 mx-3">
            <p className="text-white">you haven't add any carpet </p>
          </div>
          <div className="flex justify-between items-center space-x-1 m-3">
            <div className="flex mt-1 space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 opacity-50  text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="opacity-50 text-white cursor-pointer text-sm "></p>
            </div>
            <button
              type="submit"
              className="text-white bg-myRed hover:bg-myWhite hover:text-myBlack  font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Card;
