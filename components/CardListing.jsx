import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useSession } from "next-auth/react";
import Card from "./Card";
import CarpetContext from "@/context/CarpetContext";
import { useContext } from "react";
import CardSlider from "./CardSlider";

const CardListing = () => {
  const [loading, setLoading] = useState(true);
  const [carpets, setCarpets] = useState([]);
  const { data: session } = useSession();
  const carpetContext = useContext(CarpetContext);

  useEffect(() => {
    const getCarpets = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user.id}/carpets`);
        const data = await response.json();
        carpetContext.setCarpetsQuery(data);
        setLoading(false);
      } catch (error) {}
    };
    if (session?.user.id) getCarpets();
  }, [session?.user.id]);
  return (
    <div>
      {!loading && carpetContext.carpetsQuery.length == 0 && <Card />}
      {loading ? (
        <Spinner loading={true}></Spinner>
      ) : (
        <CardSlider cards={carpetContext.carpetsQuery}/>
      )}
    </div>
  );
};

export default CardListing;
