import React from "react";
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";

const Article = () => {
  return (
    <div className="containers">
      <h1 className="text-center text-5xl font-semibold text-[#25282B] mt-16">
        Read Our Article
      </h1>
      <div className="grid grid-cols-3 gap-7 mt-14">
        <div className="card  bg-base-100 ">
          <div className="card-body">
            <p className="text-[#558B2F]">February 15, 2023</p>
            <h2 className="card-title">House more beautiful</h2>
            <p className=" font-normal text-xs">
              There or are many the variations of passages of Lorem Ipsum or
              available, but the majority have but the majority have suffered
            </p>
            <div className="flex justify-start items-center mt-4">
              <img src={p1} alt="p1" />
              <div className="ml-3">
                <p className=" font-semibold ">Mr. Onsequat</p>
                <p className=" text-xs">Vesoz Admin</p>
              </div>
            </div>
          </div>
          <figure>
            <img src={art1} alt="art1" />
          </figure>
        </div>
        <div className="card  bg-base-100 ">
          <div className="card-body">
            <p className="text-[#558B2F]">February 10, 2023</p>
            <h2 className="card-title">Plants help make your house</h2>
            <p className=" font-normal text-xs">
              There or are many the variations of passages of Lorem Ipsum or
              available, but the majority have but the majority have suffered
            </p>
            <div className="flex justify-start items-center mt-4">
              <img src={p2} alt="p1" />
              <div className="ml-3">
                <p className=" font-semibold ">Mr. Onsequat</p>
                <p className=" text-xs">Vesoz Admin</p>
              </div>
            </div>
          </div>
          <figure>
            <img src={art2} alt="art2" />
          </figure>
        </div>
        <div className="card  bg-base-100">
          <div className="card-body">
            <p className="text-[#558B2F]">February 20, 2023</p>
            <h2 className="card-title">We know that buying Cars</h2>
            <p className=" font-normal text-xs">
              There or are many the variations of passages of Lorem Ipsum or
              available, but the majority have but the majority have suffered
            </p>
            <div className="flex justify-start items-center mt-4">
              <img src={p3} alt="p1" />
              <div className="ml-3">
                <p className=" font-semibold ">Mr. Onsequat</p>
                <p className=" text-xs">Vesoz Admin</p>
              </div>
            </div>
          </div>
          <figure>
            <img src={art3} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Article;
