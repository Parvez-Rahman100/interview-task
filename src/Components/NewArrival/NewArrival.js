import React from "react";
import { data } from "../../Data/Data";
import Card from "./Card";

const NewArrival = () => {
  return (
    <div className="containers">
      <h1 className="text-center text-5xl font-semibold text-[#25282B] mb-6">
        New Arrival
      </h1>
      <div className="flex justify-center items-center mb-14 ">
        <p className="cursor-pointer ml-5 text-2xl font-semibold text-[#606060]">
          Top Rated
        </p>
        <p className="cursor-pointer ml-5 text-2xl font-semibold text-[#558B2F]">
          Tranding
        </p>
        <p className="cursor-pointer ml-5 text-2xl font-semibold text-[#606060]">
          Best Seller
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-7">
        <button className="btn bg-[#5D8834] font-medium text-lg">
          See All Products
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
