import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "App", href: "#app" },
    { name: "Features", href: "#features" },
    { name: "Our Story", href: "#about" },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto relative flex items-center justify-between w-full max-w-5xl px-3 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.08)] ring-1 ring-white/60 transition-all hover:shadow-[0_8px_40px_rgba(30,136,229,0.12)] hover:bg-white/95">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 pl-3 group">
          <div className="relative w-9 h-9 overflow-hidden rounded-full ring-2 ring-white shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/missugram-logo.jpg"
              alt="Miss U Gram Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-heading text-lg font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors">
            Miss U Gram
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-white/40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-white hover:bg-primary transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 pr-1">
          <Link
            href="#download"
            className="hidden md:flex bg-primary text-white font-body px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Download App
          </Link>

          {/* Mobile Menu Logic (Client Component) */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
