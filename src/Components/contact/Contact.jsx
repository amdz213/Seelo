import React from "react";
import pic1 from "../../assets/suport1.png";
import pic2 from "../../assets/support2.png";
import leaf from "../../assets/propos1.png";
import leaf2 from "../../assets/img.png";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <img
          src={pic1}
          className="absolute bottom-0 left-0 lg:w-72 lg:h-72 md:w-52 md:h-52 h-40 w-40 bg-cover bg-left lg:block"
          alt="Left Background"
        />
        <img
          src={pic2}
          className="absolute -right-5 top-28 lg:right-0 lg:w-[400px] md:w-[300px] md:h-[350px] w-36 h-36 lg:h-[450px] bg-right lg:block"
          alt="Right Background"
        />
        <img
          src={leaf}
          alt="Leaf"
          className="absolute md:top-44 top-28 -left-24 md:-left-40 md:w-60 h-36 md:h-60"
        />
        <img
          src={leaf2}
          alt="Leaf"
          className="absolute md:bottom-0 -bottom-20 -right-28 w-60 h-60"
        />
        <h1 className="md:text-4xl text-3xl font-semibold">Contactez-nous</h1>
        <h2 className="md:text-xl font-medium text-lg ">
          Entrons en contact !
        </h2>

        <div className="relative  w-full max-w-md  p-8 shadow-lg rounded-lg">
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-black py-2 placeholder:text-black placeholder:font-semibold focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full border-b-2 border-black py-2 placeholder:text-black placeholder:font-semibold focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border-b-2 border-black py-2 placeholder:text-black placeholder:font-semibold focus:outline-none"
              />
            </div>

            <div className="mb-6 flex items-center">
              <input type="checkbox" id="agree" className="mr-2" />
              <label htmlFor="agree" className="text-gray-700">
                Je souhaite recevoir la newsletter
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-200"
            >
              Envoyer
            </button>
          </form>
          <div className="mt-6 justify-center flex space-x-4">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />

            <FaYoutube />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
