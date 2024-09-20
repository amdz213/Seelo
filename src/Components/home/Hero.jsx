import React from "react";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import { Link, Outlet } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="bg-herocolor md:h-screen h-full  border-2 border-gray-300 shadow-sm p-6 md:flex  lg:justify-between">
        <div className="relative w-full lg:w-1/2 md:order-2 ">
          <img
            src={hero1}
            alt="Right Side"
            className="w-full ml-8 lg:ml-32 mt-10 lg:h-[440px] lg:w-[440px] "
          />
          <div className=" absolute bottom-0 left-0 lg:w-[70%] md:top-60 md:bottom-96   lg:top-[400px] lg:bottom-0 lg:h-[20%] bg-opacity-80 lg:flex items-center justify-center bg-[#ebf5f1] rounded-lg">
            <div className="text-black p-4">
              <h2 className="text-sm lg:text-xl font-semibold">
                Déverrouillez l'avenir de la conservation
              </h2>
              <p className="mt-1 text-sm lg:text-xl">
                Rejoignez une communauté de passionnés de la nature engagée à
                protéger la planète.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full lg:w-1/2 lg:order-1 p-4">
          <div className="relative lg:-top-20  md:top-2  -top-[450px] -left-20 md:-left-24 flex items-start">
            <img
              src={hero2}
              alt="Left Top"
              className="h-44 w-44 lg:h-72 lg:w-72 "
            />
          </div>

          {/* Content */}
          <div className="-mt-40 lg:-mt-24 md:-mt-8 lg:pl-28">
            <h1 className="text-md font-semibold mb-2 ">
              Rejoignez une communauté engagée pour notre planète
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Renforcer la conservation de la biodiversité grâce à l'IA
            </h1>
            <p className="mt-2 text-xl text-gray-700">
              Rejoignez-nous pour préserver la nature avec Seelo, votre
              compagnon alimenté par l'IA pour surveiller et protéger la
              biodiversité de notre planète.
            </p>
            <Link to="/support">
              <button className="mt-4 px-6 py-3 text-lg font-medium bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                Support Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Hero;
