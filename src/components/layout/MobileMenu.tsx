"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "App", href: "#app" },
    { name: "Features", href: "#features" },
    { name: "Our Story", href: "#about" },
  ];

  return (
    <>
      <button
        className="md:hidden p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-3xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 mt-12 items-center text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-gray-900 active:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-16 h-1 bg-gray-100 rounded-full my-4" />
            <button className="bg-primary text-white font-body px-8 py-3 rounded-full text-lg font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
              Download App
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
