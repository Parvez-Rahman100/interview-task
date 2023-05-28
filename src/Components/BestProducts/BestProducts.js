import React from "react";
import { data } from "../../Data/Data";
import Products from "./Products";

const BestProducts = () => {
  return (
    <div className="containers ">
      <h1 className="text-center text-5xl font-semibold text-[#25282B] mb-6 mt-16">
        Best Products
      </h1>
      <div className="flex justify-center items-center mb-14 ">
        <p className="cursor-pointer ml-5 text-2xl font-semibold text-[#606060]">
          All
        </p>
        <p className="cursor-pointer ml-5 text-2xl font-semibold text-[#558B2F]">
          Garden
        </p>
        <p className="cursor-pointer ml-5 text-2xl font-semibold text-[#606060]">
          Home Design
        </p>
        <p className="cursor-pointer ml-5 text-2xl font-semibold text-[#606060]">
          Office Design
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {data.slice(0, 4).map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
