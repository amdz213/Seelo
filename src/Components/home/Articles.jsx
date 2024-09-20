import { useEffect, useState } from "react";
import pic1 from "../../assets/Ar1.png";
import pic2 from "../../assets/Ar2.png";
import pic3 from "../../assets/Ar3.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { formatDate, getBlogsData, paginateArray } from "../../utils/helpers";

function Articles() {
  const [blogs,setBlogs]=useState([]);
  const [filteredData,setFilteredData]=useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const pages = Math.round(blogs?.length / 3);
 console.log(pages);
  const handlNext = async () => {
      if (page < pages) {
          setFilteredData(await paginateArray(blogs, parseInt(limit), parseInt(page) + 1));
          setLimit(parseInt(limit))
          setPage(parseInt(page) + 1)
      }
  }
  const handlPrev = async () => {
      if (page !== 1) {
          setFilteredData(await paginateArray(blogs, parseInt(limit), parseInt(page) - 1));
          setLimit(parseInt(limit))
          setPage(parseInt(page) - 1)
      }
  }
  console.log(blogs);
  useEffect(() => {
    const getData= async ()=>{
      setBlogs(await getBlogsData());
    }
    getData();
  }, []);

  useEffect(() => {
    if (blogs?.length > 0) {
      const getDataForPagination = async () => {
          setFilteredData(await paginateArray(blogs, limit, page))
      }
      getDataForPagination();
  }
  }, [blogs]);
  const Articles = [
    {
      id: 1,
      title:
        "Préserver la biodiversité : Une nécessité pour l'avenir de notre planète",
      description:
        "La biodiversité, essentielle à la vie sur Terre, est menacée par la déforestation, la pollution et le changement climatique. Cet article souligne l'importance de préserver la biodiversité, les menaces auxquelles elle est confrontée, et les actions nécessaires pour un avenir durable.",
      image: pic1,
      date: "01 avril 2024",
      button: "Biodiversité",
    },
    {
      id: 2,
      title: "Espèces invasives : Une menace pour la biodiversité mondiale",
      description:
        "Les espèces invasives représentent une menace majeure pour la biodiversité mondiale, perturbant les écosystèmes, la faune et la santé humaine. Cet article explore leurs caractéristiques, leurs impacts, et les stratégies de gestion et de prévention.",
      image: pic2,
      date: "16 avril 2024",
      button: "Biodiversité",
    },
    {
      id: 3,
      title: "Randonnée : Une aventure au cœur de la nature",
      description:
        "La randonnée offre une aventure immersive pour explorer des paysages époustouflants, se connecter avec la nature et se revitaliser mentalement et physiquement. Cet article traite des bienfaits de la randonnée pour la santé, des différents types de randonnée, des destinations populaires, ainsi que des conseils essentiels pour la préparation et la sécurité",
      image: pic3,
      date: "19 avril 2024",
      button: "Loisir",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen  p-6 bg-articlescolor">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Articles récents
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Perspectives et discussions sur la biodiversité et la conservation
            de l'environnement
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid max-w-7xl    grid-cols-1 mx-auto  lg:grid-cols-3 gap-8">
          {filteredData?.length>0 && filteredData.map((card) => (
            <div
              key={card.id}
              className="relative mt-10 mx-auto md:mt-0 md:w-[400px]  p-6 flex flex-col items-center"
            >
              <div className="relative bg-white p-2  w-full h-72 rounded-2xl shadow-2xl md:w-48 md:h-48 lg:w-full lg:h-60 mb-4">
                <img
                  src={card.image}
                  alt="Article"
                  className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-60 md:h-60 "
                />
              </div>

              <div className=" my-4">
                <div className="flex justify-between items-center">
                  <span className="block text-gray-500 mb-2 text-sm md:text-base">
                    {formatDate(card.created_at)}
                  </span>
                  <button className="bg-[#3AA465] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                  Biodiversité
                  </button>
                </div>
                <h2 className="text-xl text-center md:text-start mt-5 md:text-2xl font-bold mb-4">
                  {card.title}
                </h2>
                <div 
  className="text-gray-700 text-center md:text-start mb-4 text-sm md:text-base"
  dangerouslySetInnerHTML={{ __html: card.description }}
></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end md:justify-start max-w-7xl ml-8 md:mx-auto mx-auto ">
          <div className="flex space-x-3">
            <button onClick={handlPrev} className="p-3 rounded-md lg:ml-5 w-20 bg-[#3AA465]  flex justify-center items-center hover:bg-gray-300 transition">
              <FaArrowLeft size={20} className="text-white " />
            </button>

            <button className="p-3 rounded-md w-20 bg-gray-400  flex justify-center items-center hover:bg-gray-300 transition">
              <FaArrowRight onClick={handlNext} size={20} className="text-white " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
