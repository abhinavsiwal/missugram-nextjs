import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-gray-900">Miss U Gram</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed max-w-xs">
              A private, digital space to honor loved ones, find comfort, and keep memories alive forever.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-blue-100 transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-100 transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-100 transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Application</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">Download App</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Premium</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Community Guidelines</Link></li>
              <li className="flex items-center gap-2">
                 <Mail className="w-4 h-4 text-gray-400" />
                 <a href="mailto:support@missugram.com" className="hover:text-primary transition-colors">support@missugram.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-xs text-gray-400 font-medium">
             &copy; {new Date().getFullYear()} Miss U Gram LLC. All rights reserved.
           </p>
           <p className="text-xs text-gray-400 flex items-center gap-1">
             Made with <Heart className="w-3 h-3 text-red-400 fill-current" /> for healing.
           </p>
        </div>
      </div>
    </footer>
  );
}
