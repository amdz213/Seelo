import React from "react";
import pic1 from "../../assets/suport1.png";
import pic2 from "../../assets/support2.png";
import leaf from "../../assets/propos1.png";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import { Link, Outlet } from "react-router-dom";
function Support() {
  const cards = [
    {
      id: 1,
      name: " Faire un Don",
      title: "Faire un don unique ou mensuel",
      description:
        "Aidez-nous en faisant un don ponctuel ou récurrent pour soutenir la préservation de la biodiversité.",
      button: "Don unique",
      photo: image1,
    },
    {
      id: 2,
      name: "Devenez un Donateur Premium",
      title: "Exclusive Premium Donor Benefits",
      description:
        "Soutenez-nous et profitez d'avantages exclusifs : accès anticipé, newsletters VIP, et événements privés.",
      button: "Devenir Donateur Premium",
      photo: image2,
    },
    {
      id: 3,
      name: " Objectifs de Collecte de Fonds",
      title: "Voyez ce que vos dons permettent de réaliser",
      description:
        "Vos dons aident à développer des outils de reconnaissance des espèces basés sur l'IA pour mieux protéger la biodiversité.",
      button: "Contribuer à nos Objectifs",
      photo: image3,
    },
  ];
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <img
          src={pic1}
          className="absolute bottom-0 left-0 w-72 h-72 bg-cover bg-left hidden lg:block"
          alt="Left Background"
        />

        <img
          src={pic2}
          className="absolute top-20 lg:right-0 lg:w-[400px] lg:h-[450px] bg-right hidden lg:block"
          alt="Right Background"
        />

        <img
          src={leaf}
          alt="Leaf"
          className="absolute top-44 hidden lg:block -left-32 w-60 h-60"
        />

        <div className="relative  text-center px-4 mt-20 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl font-bold mb-10">
            Soutien Financier
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl items-center gap-12 justify-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-6 rounded-sm  w-[378px] h-[439px]  shadow-2xl"
              >
                <img
                  src={card.photo}
                  alt="Card 1"
                  className="w-full h-40  rounded-t-lg"
                />
                <h2 className="text-md  mt-4">{card.title}</h2>
                <p className="text-black text-lg font-semibold">{card.name}</p>
                <p className="mt-2 text-gray-700">{card.description}</p>
                <Link target="_blank" to="https://www.leetchi.com/fr/cagnotte/creer?utm_source=google&utm_medium=cpc&utm_campaign=lca_marque_leetchi&utm_term=search_brand&utm_content=%7B%7Bdefault_text%7D%7D&gad_source=1&gbraid=0AAAAADxO86qE-RxRJSVtN3ZTdiKuqcmMC&gclid=CjwKCAjw0aS3BhA3EiwAKaD2ZfBJMMFN-J-XZCYNJuSzCLAyTZzIA4yC_zMFfs4cW9Ka7mG3un9WVRoCI2QQAvD_BwE">
                  <button className="mt-4 bg-[#27A259] text-white py-2 px-4 rounded-full">
                    {card.button}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Support;
