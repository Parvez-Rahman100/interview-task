import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className=" mb-24">
      <div className="carousel w--full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={hero} alt="" className="w-[1920px]  bg-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent text-[#5D8834] hover:bg-[#5D8834] hover:text-white border-[#5D8834] "
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#5D8834]  ">
              ❯
            </a>
          </div>
          <div className=" absolute top-1/4 bottom-2/4 left-72">
            <p className="font-medium text-[#5D8834] text-3xl mb-5">
              Summer Collection 2023
            </p>
            <p className=" font-bold text-5xl">
              Plants Gonna Make
              <br />
              People Happy
            </p>
            <div className=" mt-12">
              <button className="btn bg-[#5D8834]">Shop Now</button>
              <button className="btn ml-5 bg-transparent border-[#5D8834] text-[#5D8834] hover:bg-[#5D8834] hover:text-white">
                Explorer Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
