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
  price,
  height,
  setQuantity,
  setPrice,
  setHeight,
}) => {
  let myFormRef = useRef(null);
  const clearForm = () => {
    myFormRef.reset();
  };

  const remove = (e, id) => {
    e.preventDefault();
    const index = carpets.findIndex((element) => element.id === id);
    if (id !== -1) {
      setCarpets((oldCarpets) => [...oldCarpets, carpets.splice(index, 1)]);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(carpets.length + 1, "id");
    if (quantity > 0) {
      setCarpets((carpets) => [
        ...carpets,
        {
          id: carpets.length + 1,
          quantity: quantity,
          price: price * height * quantity,
          height: height,
        },
      ]);
      setAddCarpet(true);
    } else {
      console.log("salam");
      toast.error("the quantity of carpet must be bigger than 0", {
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
            <div className="flex  justify-center mt-5  h-12 ">
              <button
                disabled={height < 1 || quantity < 1}
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
          <div>
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
        ))}
      {addCarpet && (
        <div className="flex  flex-row-reverse  mt-5   h-12">
          <button
            onClick={() => setAddCarpet(true)}
            disabled={submiting}
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
