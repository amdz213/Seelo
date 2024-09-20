import React from "react";
import Logo from "../assets/logo.png";
function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-0 lg:grid-cols-5 items-center lg:gap-y-16">
              <div className="col-span-1 lg:col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Abonnez-vous à notre Newsletter
                  </h2>

                  <p className="mt-4 text-justify text-gray-500">
                    Abonnez-vous pour les Mises à Jour : Restez informé des
                    dernières nouvelles pour les investisseurs, des résultats
                    financiers et des annonces en vous abonnant à notre
                    newsletter.
                  </p>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-3">
                <form className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Entrez votre email"
                      className="w-full border border-gray-300 py-2 px-4 h-20 rounded-l-lg focus:outline-none  sm:text-sm"
                    />
                    <button className=" bg-[#3AA465] px-8 py-2 text-sm font-bold uppercase  text-white transition hover:bg-green-600 rounded-r-lg">
                      S'abonner
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-100 pt-4">
            <div className="flex justify-between items-center">
              <img src={Logo} className="h-6" alt="" />

              <ul className="mt-2 flex  gap-2 text-xs sm:mt-0 sm:flex-row sm:gap-6 lg:justify-end">
                <li className="text-gray-700 transition hover:opacity-75">
                  Legal Notice
                </li>

                <li className="text-gray-700 transition hover:opacity-75">
                  Terms of Use
                </li>

                <li className="text-gray-700 transition hover:opacity-75">
                  Cookie Management
                </li>
                <li className="text-gray-700 transition hover:opacity-75">
                  404
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
