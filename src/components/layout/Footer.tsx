import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-white">Miss U Gram</h2>
            <p className="font-body text-gray-400 leading-relaxed">
              Preserving memories, connecting hearts. A digital home for the ones we miss the most.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="mt-1 shrink-0" />
                <span>support@missugram.com</span>
              </li>
              <li className="text-gray-400">
                123 Memorial Lane,<br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Miss U Gram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
