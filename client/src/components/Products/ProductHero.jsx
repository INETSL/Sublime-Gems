import React from "react";
import img3 from "../../assets/home/bg.png";

export default function ProductHero() {
  return (
    <div className="relative no-arrows-slider">
      <div className="relative">
        <img src={img3} alt="sdsd" className="w-full h-[25rem] object-cover" />
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="font-castellar text-6xl">Banner</h2>
          <p className="font-cormorant text-2xl">Banner decription</p>
        </div>
      </div>
    </div>
  );
}
