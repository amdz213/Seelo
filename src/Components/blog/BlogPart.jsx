import React from "react";
import pic from "../../assets/dragonfly.png";
import pic1 from "../../assets/proporight.png";
import pic3 from "../../assets/propos1.png";
import pic2 from "../../assets/propos2.png";
import Card from "./Card";
import { Outlet } from "react-router-dom";

function BlogPart() {
  return (
    <>
      <div className="flex flex-col items-center pb-20 justify-center bg-boxcolor min-h-screen p-4 overflow-x-hidden">
        <div className="relative w-full h-full">
          <img
            src={pic2}
            alt="Top Left"
            className="absolute md:-top-20 md:pt-20 -top-0 sm:-top-32 -left-28 md:-left-20 lg:-left-52 w-44 sm:w-32 md:w-48 lg:w-96 h-auto object-cover"
          />

          <img
            src={pic1}
            alt="Bottom Right"
            className="absolute -bottom-[340px]  lg:flex sm:-bottom-32 md:-bottom-48 lg:-bottom-[500px] -right-20    md:-right-20 lg:-right-36 w-24 sm:w-32 md:w-48 lg:w-60 h-auto object-cover"
          />

          <img
            src={pic3}
            alt="Bottom Right"
            className="absolute lg:top-[800px] flex flex-row-reverse lg:flex-row-reverse -left-40 w-24 sm:w-32 md:w-48 lg:w-60 h-auto object-cover"
          />
        </div>

        <div className="relative max-w-7xl w-full pt-8 md:pt-20 flex flex-col-reverse md:flex-row-reverse justify-between">
          <div className="relative w-full md:w-1/2 px-3">
            <img src={pic} alt="Large" className="w-full h-96  " />
          </div>

          <div className="flex-1 md:pr-10 md:ml-6 md:mt-0 p-4 md:p-0">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold my-4">
              L'importance de la biodiversité
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700">
              La biodiversité est essentielle à la santé et à la résilience des
              écosystèmes. Elle contribue à la régulation du climat, à la
              purification de l'air et de l'eau, à la pollinisation des cultures
              et à la fourniture de médicaments et d'aliments. De plus, elle est
              source d'inspiration pour l'innovation scientifique et
              technologique, offrant des solutions aux défis auxquels l'humanité
              est confrontée. En préservant la biodiversité, nous préservons
              également notre propre existence et celle des générations futures.
            </p>
          </div>
        </div>
        <Card />
      </div>
      <Outlet />
    </>
  );
}

export default BlogPart;
