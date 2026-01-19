import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Heart, ArrowRight, Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900 pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/20 rounded-[100%] blur-[120px] pointer-events-none -mt-40" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top: Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
           
           {/* Brand Column (4 cols) */}
           <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                 <h3 className="font-heading text-4xl font-bold tracking-tight text-white">Miss U Gram</h3>
                 <p className="font-body text-gray-400 text-lg leading-relaxed max-w-sm">
                    A digital sanctuary for eternal connections. Honoring the past, healing the present, and preserving memories for the future.
                 </p>
              </div>
              
              <div className="flex gap-4">
                 <SocialLink icon={Facebook} href="#" label="Facebook" />
                 <SocialLink icon={Instagram} href="#" label="Instagram" />
                 <SocialLink icon={Twitter} href="#" label="Twitter" />
                 <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
              </div>
           </div>

           {/* Newsletter Column (4 cols) - Centered in visual flow */}
           <div className="lg:col-span-4 lg:mx-auto w-full max-w-sm">
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                 Subscribe to updates
              </h4>
              <div className="relative">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                 />
                 <button className="absolute right-1.5 top-1.5 p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                 Join our community of over 50,000 members. No spam, ever.
              </p>
           </div>

           {/* Links Column (4 cols) - Split into 2 */}
           <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                 <h4 className="font-bold text-white mb-6">Explore</h4>
                 <ul className="space-y-4 text-sm text-gray-400">
                    <li><FooterLink href="#">Features</FooterLink></li>
                    <li><FooterLink href="#">Our Story</FooterLink></li>
                    <li><FooterLink href="#">Pricing</FooterLink></li>
                    <li><FooterLink href="#">Download</FooterLink></li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-white mb-6">Support</h4>
                 <ul className="space-y-4 text-sm text-gray-400">
                    <li><FooterLink href="#">Help Center</FooterLink></li>
                    <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                    <li><FooterLink href="#">Terms of Service</FooterLink></li>
                    <li><FooterLink href="#">Contact Us</FooterLink></li>
                 </ul>
              </div>
           </div>

        </div>

        {/* Bottom: Copyright & Signature */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-gray-500 text-sm font-medium">
             &copy; {new Date().getFullYear()} Miss U Gram LLC. All rights reserved.
           </p>
           
           <div className="flex items-center gap-8">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</a>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                 <span>Made with</span>
                 <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse-slow" />
                 <span>in New York</span>
              </div>
           </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
   return (
      <Link 
         href={href} 
         aria-label={label}
         className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group"
      >
         <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </Link>
   )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
   return (
      <Link href={href} className="hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-1 group">
         {children}
      </Link>
   )
}
