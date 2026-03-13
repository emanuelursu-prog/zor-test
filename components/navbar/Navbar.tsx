"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { title: "Acasă", href: "/" },
    { title: "Servicii", href: "/servicii" },
    { title: "Tracking", href: "/tracking" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/zor-logo.png"
            alt="ZOR Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-900">PostaRomana</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              className="hover:text-red-600 transition"
            >
              {l.title}
            </Link>
          ))}
        </div>

        {/* CTA button desktop */}
        <div className="hidden md:flex">
          <button className="bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-700 transition shadow-sm">
            Trimite colet
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="w-6 h-6 text-gray-900" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col items-center px-6 py-4 gap-4 text-center">
            {links.map((l, i) => (
              <Link
                key={i}
                href={l.href}
                className="text-gray-700 font-medium hover:text-red-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {l.title}
              </Link>
            ))}

            <button className="bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-700 transition shadow-sm mt-2">
              Trimite colet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
