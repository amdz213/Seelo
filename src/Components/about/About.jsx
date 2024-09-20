import React from "react";
import pic1 from "../../assets/about.png";
import pic2 from "../../assets/propos1.png";
import { Outlet } from "react-router-dom";
function About() {
  return (
    <>
      <div className="relative h-screen bg-aboutbg ">
        <div
          style={{ backgroundImage: `url(${pic2})` }}
          className="absolute top-14 -left-10  w-[240px] h-1/2 bg-no-repeat bg-contain
          sm:w-[400px] sm:h-[400px] sm:top-[30px] sm:left-[10px] transition-all duration-700"
        ></div>
        <div
          style={{ backgroundImage: `url(${pic1})` }}
          className="absolute -bottom-40 right-0 w-[240px] h-1/2 bg-no-repeat bg-contain
          sm:w-[600px] sm:h-[700px] sm:bottom-[10px] sm:right-[10px] transition-all duration-700"
        ></div>

        <div className="relative flex items-center mx-6 justify-center h-full sm:flex-col-reverse">
          <div className="w-full md:max-w-2xl h-96 md:h-80 p-6 rounded-lg shadow-lg bg-boxcolor  sm:w-[90%] sm:-ml-80 sm:mt-10 sm:pt-10 sm:pb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              À propos de nous
            </h1>
            <p className="text-gray-600 text-justify font-medium mt-4 text-xl">
              Bienvenue sur Seelo ! <br /> Ce projet fait partie de l'évaluation
              pour l'obtention du titre professionnel CDUI. Tout le projet Seelo
              est fictif. Si vous êtes intéressé par un projet similaire,
              veuillez consulter <span className="underline">Pl@ntNet.</span>
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default About;
