import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E6E2D8] text-[#000000]">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-serif mb-6">
            Aroma Dades
          </h3>
          <p className="leading-relaxed max-w-sm">
            Écolodge authentique niché au cœur de la vallée des Dades,
            offrant calme, nature et hospitalité berbère.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>Vallée des Dades, Maroc</li>
            <li>+212 6 XX XX XX XX</li>
            <li>contact@aromadades.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6">
            Suivez-nous
          </h4>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#5a3b26] py-6 text-center text-sm">
        © {new Date().getFullYear()} Aroma Dades — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
