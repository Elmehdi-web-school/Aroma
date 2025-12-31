// import { Button } from "@/components/ui/button"
// import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import AROMA_LOGO from '../images/Untitled design.png';
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

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/A propos', label: 'A propos' },
  { to: '/gallerie', label: 'Gallerie' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {

  return (
    <header className="container mx-auto px-4 md:mx-auto select-none site-header">
      <div className="nav-bar grid grid-cols-3 items-center">
        {/* Left: logo */}
        <div className="flex items-center">
          <Link to="/" className="logo w-20 sm:w-28 h-auto object-contain">
            <img src={AROMA_LOGO} alt="Aroma Hotel logo" />
          </Link>
        </div>

        {/* Center: nav */}
        <div className="flex justify-center">
          <nav className="hidden sm:flex nav-container" aria-label="Primary">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link text-black transition-colors ${isActive ? 'font-medium' : ''}`
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
        <div className="flex items-center justify-end gap-4">
          <a
            href="https://www.booking.com/hotel/ma/ecolodge-aroma-dades.fr.html"
            className="booking-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Booking
          </a>
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger><FontAwesomeIcon icon={faBars} className="text-2xl mt-1"/></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

