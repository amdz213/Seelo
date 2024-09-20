import React from "react";
import leftImage from "../../assets/Notre.png";
import cornerImage from "../../assets/bird.png";
import { Outlet } from "react-router-dom";

const NotreSection = () => {
  return (
    <>
      <div className="relative h-[550px] md:h-[400px] flex flex-col  sm:flex-row-reverse bg-articlescolor">
        <div className="absolute inset-0">
          <img
            src={leftImage}
            className="absolute -bottom-0 right-0 w-60 h-60 md:w-[500px] md:h-[500px] object-cover sm:-top-32 sm:left-0 sm:-bottom-20"
            alt="Left Side"
          />
        </div>

        <div className="relative md:flex flex-col items-center justify-center w-full sm:w-1/2 h-full p-6 sm:p-12">
          <div
            className="absolute -top-10 right-0 w-32 h-32 sm:w-44 sm:h-44 bg-cover bg-center "
            style={{ backgroundImage: `url(${cornerImage})` }}
          ></div>

          <div className="relative text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Mission
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              Chez Seelo, nous croyons en la puissance de l’humain et de la
              technologie pour préserver la biodiversité. Notre mission est de
              créer une plateforme accessible à tous, où les passionnés de
              nature peuvent partager leurs connaissances, découvrir de
              nouvelles espèces, et contribuer à la protection de notre planète.
              Notre base de données, en constante évolution, est ouverte à la
              communauté de la recherche et soutient les initiatives européennes
              pour développer des outils efficaces de conservation de la
              biodiversité.
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NotreSection;
