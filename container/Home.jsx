import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4 ">
      <div className="col-span-4  bg-amber-400 p-5 rounded-xl">sidebar</div>
      <div className="col-span-8  bg-amber-400 p-5 rounded-xl">main</div>
    </div>
  );
};

export default Home;
