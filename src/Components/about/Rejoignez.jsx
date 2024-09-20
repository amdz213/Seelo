import React from "react";
import pic from "../../assets/image48.png";
function Rejoignez() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-[#3AA465] text-white ">
        <div className="flex flex-col justify-center items-start md:w-2/3 p-8 md:px-10">
          <h1 className="text-4xl font-bold mb-4">Rejoignez Nous</h1>
          <p className="text-lg mb-6">
            Nous vous invitons à rejoindre notre communauté et à participer à
            notre mission de protection de la biodiversité. Que vous soyez un
            passionné de plein air, un scientifique ou simplement curieux de
            découvrir le monde qui vous entoure, il y a une place pour vous chez
            Seelo. Rejoignez-nous dès aujourd'hui et ensemble, faisons une
            différence pour notre planète !
          </p>
          <button className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            En savoir plus
          </button>
        </div>

        <div className="md:w-1/3 flex items-center justify-center ">
          <img
            src={pic}
            alt="Nature"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Rejoignez;
