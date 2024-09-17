import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useSession } from "next-auth/react";
import Card from "./Card";

const CardListing = () => {
  const [loading, setLoading] = useState(true);
  const [carpets, setCarpets] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const getCarpets = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user.id}/carpets`);
        const data = await response.json();
        setCarpets(data);
        setLoading(false);
      } catch (error) {}
    };
    if (session?.user.id) getCarpets();
  }, [session?.user.id]);
  return (
    <section>
      {!loading && carpets.length == 0 && <Card />}
      {loading ? (
        <Spinner loading={true}></Spinner>
      ) : (
        carpets.map((carpet) =>
          carpet.carpet.map((c, index) => (
            <Card key={index} index={index} carpet={c} />
          ))
        )
      )}
    </section>
  );
};

export default CardListing;
