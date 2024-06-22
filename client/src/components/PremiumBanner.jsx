import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";


const PremiumBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 py-2 px-4 flex items-center justify-center">
      <MdOutlineShoppingCart className="text-xl text-black  mr-2" />
      <p className="text-base text-black font-bold">
        Assine uma conta premium para acessar artigos e conteúdos exclusivos.{' '}
        <a
          href="#"
          className="underline font-bold text-black hover:text-gray-900 transition duration-300"
        >
          Conheça nossos planos
        </a>
      </p>
    </div>
  );
};

export default PremiumBanner;

