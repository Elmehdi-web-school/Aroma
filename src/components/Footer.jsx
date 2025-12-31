import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Aroma Dades</h3>
          <p className="text-gray-300">
            Écolodge authentique dans la vallée des Dades, Maroc.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">Adresse : Vallée des Dades, Maroc</p>
          <p className="text-gray-300">Téléphone : +212 6 XX XX XX XX</p>
          <p className="text-gray-300">Email : contact@aromadades.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
        <p>&copy; 2024 Aroma Dades. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;