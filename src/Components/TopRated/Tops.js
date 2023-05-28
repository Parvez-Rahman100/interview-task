import React from "react";
import { AiFillEye, AiTwotoneShopping, AiTwotoneStar } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";

const Tops = ({ product }) => {
  const { img, price, name } = product;

  return (
    <div className=" mt-14">
      <div className="card card-side   h-[200px]">
        <figure>
          <img src={img} alt="img" className="bg-[#F1F1F1]" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-start items-center mt-10 text-yellow-400">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="flex justify-start items-center text-[#25282B]">
            <GiSelfLove className="mr-4" />
            <AiTwotoneShopping className="mr-4" />
            <AiFillEye className="mr-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tops;
