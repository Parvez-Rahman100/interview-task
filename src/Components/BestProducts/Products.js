import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const Products = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="card bg-[#F5F5F5] cursor-pointer h-[430px] ">
      <figure className="px-10 pt-10">
        <img src={img} alt="product" className="rounded-xl h-[230px]" />
      </figure>
      <div className="flex justify-center items-center mt-10 text-yellow-400">
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Products;
