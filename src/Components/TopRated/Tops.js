import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const Tops = ({ product }) => {
  const { img, price, name } = product;

  return (
    <div className=" mt-14">
      <div className="card card-side   h-[200px]">
        <figure>
          <img src={img} alt="img" />
        </figure>
        <div className="card-body bg-[#F1F1F1]">
          <div className="flex justify-center items-center mt-10 text-yellow-400">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Tops;
