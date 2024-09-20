import React from "react";
import Pic from "../../assets/image62.png";
import pic1 from "../../assets/img.png";
import { FaImages } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
function FormSectin() {
  return (
    <>
      <div className="bg-articlescolor py-12 px-4 relative overflow-hidden">
        <div className="lg:px-10 px-3 mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-[600px] flex items-center justify-center">
            <img
              src={Pic}
              alt="Sample"
              className="md:-mt-32 -mt-12  mr-24 w-full h-full"
            />
          </div>

          <div className="w-full md:w-[720px] p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-bold mb-4">
              Partagez Vos Histoires et Photos
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Partagez vos photos et histoires en remplissant le formulaire
              ci-dessous.
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border-b border-black py-2 placeholder:text-black placeholder:font-semibold px-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="Nom"
                  placeholder="Nom"
                  className="w-full border-b border-black py-2 px-3 placeholder:text-black placeholder:font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="Titre de l'Histoire"
                  placeholder="Titre de l'Histoire"
                  className="w-full border-b border-black py-2 px-3 placeholder:text-black placeholder:font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <textarea
                  id="Description de l'Histoire"
                  placeholder="Description de l'Histoire"
                  rows="3"
                  className="w-full border-b border-black py-2 px-3 placeholder:text-black placeholder:font-semibold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative  items-center justify-center w-full border-dashed border-2 border-articlescolor py-3 px-2 rounded-lg  cursor-pointer hover:bg-gray-50 transition">
                    <FaImages size={30} className="mx-auto" />

                    <div className="text-center flex md:gap-3 mt-4 items-center justify-center">
                      <h2 className="text-xs md:text-lg  font-semibold text-[#088586]">
                        Cliquez pour télécharger
                      </h2>
                      <p className="text-gray-600 text-xs lg:text-lg">
                        Glissez-déposez pour partager votre photo de profil
                      </p>
                    </div>
                    <p className="text-gray-600 text-xs py-5 text-center lg:text-lg">
                      JPG, JPEG, PNG de moins de 1 Mo
                    </p>

                    <input
                      type="file"
                      id="file-upload"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 flex items-center">
                <input type="checkbox" id="agree" className="mr-2" />
                <label
                  htmlFor="agree"
                  className="text-gray-700 text-sm md:text-lg"
                >
                  J'autorise le partage public de mon contenu.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Partagez Votre Expérience
              </button>
            </form>

            <div className="mt-6 justify-center flex space-x-4">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="absolute hidden lg:flex bottom-96  -right-10 md:-right-20 md:w-[200px]  md:h-[200px]">
          <img
            src={pic1}
            alt="Right Side Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
}

export default FormSectin;
