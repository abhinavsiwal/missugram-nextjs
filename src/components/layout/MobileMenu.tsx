"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Facebook, Instagram, Twitter, ArrowRight, Download, Sparkles } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "App Features", href: "#features" },
    { name: "Our Story", href: "#about" },
    { name: "Support", href: "#" },
  ];

  return (
    <>
      <button
        className="md:hidden p-2.5 rounded-full bg-gray-100/50 hover:bg-gray-200/50 text-gray-900 transition-colors border border-white/20"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {mounted && createPortal(
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-[99] bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          />

          {/* Futuristic Light Glass Drawer */}
          <div
            className={`fixed top-0 right-0 z-[100] h-[100dvh] w-full max-w-sm bg-white/95 backdrop-blur-2xl border-l border-white/60 shadow-[0_0_50px_rgba(0,0,0,0.1)] transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) flex flex-col overflow-hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Ambient Glows (Subtle for Light Mode) */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-violet-100/50 blur-[100px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl font-bold tracking-tight text-gray-900">
                  Miss U Gram
                </span>
                <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              </div>
              <button
                className="p-2 rounded-full bg-gray-100/80 hover:bg-gray-200 text-gray-900 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="relative z-10 flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-8">
              
              {/* Navigation */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group relative overflow-hidden rounded-xl p-4 transition-all hover:bg-gray-50 border border-transparent hover:border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between relative z-10">
                       <span className="text-xl font-heading font-medium text-gray-600 group-hover:text-primary transition-colors">
                         {link.name}
                       </span>
                       <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Socials */}
              <div className="space-y-4 mt-auto">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Connect With Us</p>
                 <div className="flex gap-3 px-4">
                    <SocialIcon icon={Facebook} />
                    <SocialIcon icon={Instagram} />
                    <SocialIcon icon={Twitter} />
                 </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="relative z-10 p-6 border-t border-gray-100 bg-gray-50/50 shrink-0 safe-bottom">
              <button className="w-full relative overflow-hidden flex items-center justify-center gap-3 bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 group transition-all active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                   <Download className="w-5 h-5" />
                   Download App
                </span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out" />
              </button>
            </div>

          </div>
        </>,
        document.body
      )}
    </>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
}
