import React from "react";

const CarpetListings = (carpets) => {
  return carpets.map((carpet, index) => (
    <div key={index}>
      {carpet.quantity && carpet.height && (
        <div key={index}>
          <div className="flex justify-between space-x-4 items-center mt-5 border p-2 rounded-lg shadow-2xl ">
            <div className="flex">
              <h2 className="font-bold font-mono  text-myBlack ">
                Quantity:{carpet.quantity}
              </h2>
            </div>
            <div className="flex">
              <h2 className="font-bold font-mono  text-myBlack ">
                Meter:{carpet.height}
              </h2>
            </div>
            <div className="flex">
              <p className="font-bold font-mono  text-myBlack">
                $:{carpet.price}
              </p>
            </div>
            <button
              onClick={(e) => remove(e, carpet.id)}
              className="bg-myRed   hover:A91D3A text-white font-semibold mx-2 py-1 px-2 border border-myRed rounded shadow"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  ));
};

export default CarpetListings;
