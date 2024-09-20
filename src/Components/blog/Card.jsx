import React from "react";
import mantis from "../../assets/mantis.png";
import pic from "../../assets/dragonfly.png";

function Card() {
  return (
    <>
      <div className="w-full bg-boxcolor">
        <div className=" max-w-7xl w-full  mx-auto p-4 md:pt-28 flex flex-col-reverse md:flex-row justify-between">
          <div className=" w-full md:w-1/2">
            <img src={mantis} alt="Large" className="w-full h-96 " />
          </div>

          <div className="flex-1 md:pr-10 md:ml-6 md:mt-0  md:p-0">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold my-4">
              Conclusion
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700">
              Préserver la biodiversité est un impératif moral et écologique. En
              protégeant la diversité des formes de vie sur Terre, nous
              protégeons notre propre avenir ainsi que celui des millions
              d'espèces avec lesquelles nous partageons cette planète. En
              travaillant ensemble pour préserver la biodiversité, nous pouvons
              créer un avenir durable et équilibré pour toutes les formes de vie
              sur Terre.
            </p>
          </div>
        </div>

        <div className="relative max-w-7xl w-full  mx-auto  md:pt-20 flex flex-col-reverse md:flex-row-reverse justify-between">
          <div className="relative w-full md:w-1/2 px-4">
            <img src={pic} alt="Large" className="w-full h-96 " />
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
      </div>
    </>
  );
}

export default Card;
