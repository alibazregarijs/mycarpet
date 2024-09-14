import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const OrderListing = () => {
  const [loading, setLoading] = useState(false);
  const [carpets, setCarpets] = useState([]);

  useEffect(() => {
    const getCarpets = async () => {
      try {
        const response = await fetch("/api/carpet");
        const data = await response.json();
        setCarpets(data);
      } catch (error) {}
    };
    getCarpets();
  }, []);
  return (
    <div>
      <div className="flex items-center">
        <h2 className="text-md  text-myBlack font-bold">Your Carpet</h2>
      </div>
      <div className="mt-5 border bg-myBlack rounded-lg">
        <Card situation={"complete"} carpetName={"Mashhad"} time={2} />
      </div>
      <div className="mt-1 border bg-myBlack rounded-lg">
        <Card situation={"Incomplete"} carpetName={"Ahvaz"} time={60} />
      </div>
    </div>
  );
};

export default OrderListing;
