import React from "react";
import { Instagram } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#e9f2f1] -mb-10 text-[#000000]">
      {/* Top */}
      <div className="max-w-7xl mx-auto pl-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-40">
        {/* Brand */}
        <div>
          <img src="/images/untitled-design.webp" alt="Aroma Hotel logo" loading="lazy" decoding="async" className="w-20 sm:w-28 h-auto object-contain" />
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
          <div className="flex gap-2">
            <a
              target="_blank"
              href="https://www.instagram.com/ecolodge_aroma_dades?igsh=MWkzYWx0ODA0bWVwcg=="
              className="
                flex items-center gap-2
                text-[#E1306C]
                md:text-[#000000]
                md:hover:text-[#E1306C]
                transition
              "
            >
              <Instagram className="w-5" />
              Instagram
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
