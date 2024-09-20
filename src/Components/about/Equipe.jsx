import { Outlet } from "react-router-dom";
import img1 from "../../assets/person.jpg";
import img2 from "../../assets/person2.png";
import img3 from "../../assets/person3.png";
import Pic2 from "../../assets/propos2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
function Equipe() {
  const persons = [
    {
      id: 1,
      name: "Zane Sorell",
      image: img1,
      title: "Fondatrice et Directrice de Seelo",
      description:
        "Claire, fondatrice de Seelo, dirige l'équipe avec 15 ans d'expérience en écologie et une passion pour la biodiversité.",
      child2: <FaLinkedin size={15} />,
      child1: <SiResearchgate size={15} />,
    },
    {
      id: 2,
      name: "Maya Mathy",
      image: img3,
      title: "Chercheur en Biologie",
      description:
        "Dr. Lefèvre, expert en écosystèmes terrestres, enrichit Seelo avec des données essentielles pour notre base de connaissances.",
      child2: <FaLinkedin size={15} />,
      child1: <SiResearchgate size={15} />,
    },
    {
      id: 3,
      name: "Alexis Jensen",
      image: img2,
      title: "Ingénieure en Intelligence Artificielle",
      description:
        "Sophie développe les algorithmes IA de Seelo pour reconnaître et cataloguer les espèces, alliant technologie et passion pour la nature.",
      child2: <FaLinkedin size={15} />,
      child1: <FaGithub size={15} />,
    },
  ];

  return (
    <>
      <div className="relative bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
        <img
          src={Pic2}
          className="absolute md:top-64 top-8 md:-left-20 md:h-72 md:w-72 h-20 w-20 -translate-x-8 -translate-y-8"
          alt="Top left image"
        />

        <h1 className="text-4xl font-bold text-center mb-6">
          Notre Équipe Dévouée
        </h1>

        <p className="text-lg text-center mb-12">
          Découvrez les Experts Derrière la Mission de Seelo pour Protéger la
          Biodiversité
        </p>

        <div className="lg:flex flex-col lg:flex-row justify-center items-center gap-6">
          {persons.map((person) => (
            <div
              key={person.id}
              className="relative w-full sm:w-1/2 mb-10 lg:mb-0 lg:w-1/4 lg:h-[500px] mx-auto lg:mx-0 h-[500px] bg-cover bg-center p-4 rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${person.image})` }}
            >
              <div className="bg-white p-6 md:mt-60 h-56 mt-60 rounded-lg text-start">
                <h2 className="text-xl font-bold mb-1">{person.name}</h2>
                <p className="text-gray-700 text-md font-semibold mb-2">
                  {person.title}
                </p>
                <p className="text-gray-600 mb-3 text-justify text-sm">
                  {person.description}
                </p>

                <div className="flex gap-2 ">
                  <h1 className="text-gray-400 ">{person.child1}</h1>
                  <h1 className="text-gray-400 ">{person.child2}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Equipe;
