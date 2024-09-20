import React from "react";
import pic from "../../assets/propos.png";
import pic1 from "../../assets/proporight.png";
import pic2 from "../../assets/propos2.png";
import { Outlet } from "react-router-dom";
function Propos() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  overflow-x-hidden">
        <div className="relative w-full h-full">
          <img
            src={pic2}
            alt="Top Left"
            className="absolute md:-top-20 -top-20 sm:-top-32 -left-20 md:-left-20 lg:-left-44 w-44 sm:w-32 md:w-48 lg:w-96 h-auto object-cover"
          />

          <img
            src={pic1}
            alt="Bottom Right"
            className="absolute -bottom-60 sm:-bottom-32 md:-bottom-48 lg:-bottom-[500px] -right-14 md:-right-20 lg:-right-36 w-24 sm:w-32 md:w-48 lg:w-60 h-auto object-cover"
          />
        </div>

        <div className="relative max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Large Image */}
          <div className="relative">
            <img src={pic} alt="Large" className="w-full max-w-lg" />
            <div className="absolute md:top-96 top-60 md:left-80 left-10 right-3 md:w-[600px] bg-green-600 text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">Notre Mission</h2>
              <p>
                Chez Seelo, notre mission est de faciliter la préservation de la
                biodiversité grâce à une plateforme accessible où les passionnés
                peuvent partager des connaissances, découvrir des espèces, et
                contribuer à la protection de notre planète.
              </p>
            </div>
          </div>

          <div className="flex-1 p-6 rounded-lg md:ml-6 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">À propos de nous</h2>
            <p className="text-gray-700">
              Seelo est un projet fictif pour l’évaluation CDUI, mené par une
              équipe passionnée de chercheurs et d'experts en IA. Découvrez des
              projets similaires sur Pl@ntNet.
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Propos;
