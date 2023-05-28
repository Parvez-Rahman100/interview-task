import React from "react";

import { data } from "../../Data/Data";
import Tops from "./Tops";

const TopRated = () => {
  return (
    <div className="containers">
      <h1 className="text-center text-5xl font-semibold text-[#25282B] mb-6 mt-16">
        Top Rated Products
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {data.slice(0, 6).map((product) => (
          <Tops key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
