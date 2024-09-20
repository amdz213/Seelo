import React from "react";
import backgroundImage1 from "../../assets/blog1.png";
import backgroundImage2 from "../../assets/blog2.png";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <>
      <div className="relative w-full   min-h-screen bg-boxcolor flex flex-col sm:flex-row items-center justify-center overflow-hidden">
        <div className="absolute lg:-left-20 -left-20 bottom-0 w-1/2 h-1/3 sm:w-1/3 sm:h-full">
          <img
            src={backgroundImage2}
            alt="Left Background"
            className="w-full h-full "
          />
        </div>

        <div className="absolute -bottom-10 -right-24 lg:-right-96 w-2/3 h-1/3 sm:w-2/3 sm:h-screen">
          <img
            src={backgroundImage1}
            alt="Right Background"
            className="w-full h-full "
          />
        </div>

        <div className="relative bg-boxcolor bg-opacity-0 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Préserver la biodiversité, un Impératif pour l'avenir de notre
            planète
          </h1>

          <div className="flex justify-between font-semibold max-w-72">
            <p className="text-gray-700 mb-2">01 avril 2024</p>
            <p className="text-gray-700 mb-2"> Biodiversité</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            Introduction:
          </h2>
          <p className="text-gray-600">
            La biodiversité est la toile de fond de la vie sur Terre. Elle
            englobe la variété des formes de vie, des écosystèmes et des
            processus écologiques qui interagissent pour soutenir la vie sur
            notre planète. Cependant, cette biodiversité est aujourd'hui menacée
            par une série de facteurs, allant de la déforestation à la pollution
            en passant par le changement climatique. Dans cet article, nous
            examinerons l'importance cruciale de préserver la biodiversité, les
            principales menaces qui pèsent sur elle et les actions que nous
            pouvons entreprendre pour assurer un avenir durable pour notre
            planète.
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Blog;
