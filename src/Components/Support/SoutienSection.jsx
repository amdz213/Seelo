import React from 'react'
import soutien from '../../assets/soutien.png'
import proporight from '../../assets/proporight.png'
import { Outlet } from 'react-router-dom'

function SoutienSection() {
  return (
    <>
<div className="overflow-x-hidden">
      <h1 className="text-center font-semibold mt-20 text-3xl md:text-4xl py-4">
        Soutien Participatif
      </h1>

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12">
     
        <div className="md:w-1/3 w-full mb-6 md:mb-0">
          <img
            src={soutien}
            alt="Left Side"
            className="w-full h-auto object-cover"
          />
        </div>

     
        <div className="md:w-1/2 w-full space-y-4">
          <h3 className="text-lg md:text-2xl font-semibold">
            Impliquez-vous dans le Suivi de la Biodiversité
          </h3>
          <p className="text-base md:text-lg">
            "Contribuez en collectant des données sur la biodiversité lors de
            vos randonnées et missions civiques."
          </p>
          <h3 className="text-md md:text-lg font-semibold">Comment ça marche</h3>
          <ul className="list-disc list-inside">
            <li>Inscrivez-vous : Cliquez sur "Rejoindre un Projet".</li>
            <li>Choisissez une Mission : Participez à des missions locales ou mondiales.</li>
            <li>Collectez des Données : Suivez nos guides pour recueillir des informations.</li>
            <li>Soumettez vos Données : Téléchargez vos observations via l'application ou le site.</li>
          </ul>
          <button className="bg-[#27A259] text-white px-4 py-2 rounded-full">
            Rejoindre un Projet
          </button>
        </div>

        <div className="absolute hidden lg:block lg:-right-40 lg:top-4 w-60 h-60">
          <img
            src={proporight}
            alt="Corner Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
    <Outlet/> 
    </>
  )
}

export default SoutienSection