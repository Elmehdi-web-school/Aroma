// import { Button } from "@/components/ui/button"
// import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import AROMA_LOGO from '../images/Untitled design.png';
import { NavLink, Link } from 'react-router-dom';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import FadeIn from "../components/FadeIn";

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/activities', label: 'Activities' },
  { to: '/sejour', label: 'Sejour' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/birds', label: 'Birds' },
  { to: '/About', label: 'About' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {

  return (
    <FadeIn>
    <header className="container sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm mx-auto px-4 md:mx-auto select-none site-header" >
      <div className="nav-bar grid grid-cols-3 items-center">
        {/* Left: logo */}
        <div className="flex items-center">
          <Link to="/" className="logo w-20 sm:w-28 h-auto object-contain">
            <img src="/images/untitled-design.webp" alt="Aroma Hotel logo" loading="lazy" decoding="async" />
          </Link>
        </div>

        {/* Center: nav */}
        <div className="flex justify-center">
          <nav className="hidden sm:flex nav-container" aria-label="Primary">
            <ul className="flex items-center gap-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link text-black text-sm transition-colors ${isActive ? 'font-medium' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right: actions */}
        <div className="hidden sm:flex items-center justify-end gap-4">
          <a
            href="https://www.booking.com/hotel/ma/ecolodge-aroma-dades.fr.html"
            className="booking-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Booking
          </a>
        </div>
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger><FontAwesomeIcon icon={faBars} className="text-2xl mt-1"/></SheetTrigger>
              <SheetContent className="bg-[#E6E2D8]">
                <SheetHeader>
                  <SheetTitle>Ecolodge AROMA DADES</SheetTitle>
                </SheetHeader>
                <div className="flex justify-center">
                  <nav aria-label="Primary">
                    <ul className="flex flex-col items-center gap-4">
                      {navItems.map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              `nav-link text-black transition-colors text-lg ${
                                isActive ? "font-medium" : ""
                              }`
                            }
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <SheetFooter>
                  <a
                    href="https://www.booking.com/hotel/ma/ecolodge-aroma-dades.fr.html"
                    className="p-4 mb-5 text-center bg-[#8B5A2B] text-[#ffff] rounded-full font-semibold hover:scale-105 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Booking
                  </a>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
      </div>
    </header>
    </FadeIn>
  );
};

export default Header;

