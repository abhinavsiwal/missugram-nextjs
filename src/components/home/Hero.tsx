import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 self-center md:self-start bg-white/50 backdrop-blur-sm border border-blue-100 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium tracking-wide font-body">
              Now Available on iOS & Android
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-secondary">
            Transforming Memories into <br className="hidden md:block" />
            <span className="text-primary">Digital Legacies.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            A safe, healing space to honor, share, and remember your loved ones. 
            Create a timeless tribute and keep their spirit alive forever, completely free.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <button className="group w-full sm:w-auto bg-primary text-white font-body px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
              <Download size={20} />
              <span>Download App</span>
            </button>
            <Link
              href="#about"
              className="group w-full sm:w-auto bg-white text-secondary border border-border font-body px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust/Social Proof */}
          <div className="pt-8 flex items-center justify-center md:justify-start gap-4">
             <div className="flex -space-x-3">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for user avatars */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white" />
                 </div>
               ))}
             </div>
             <p className="font-body text-sm font-medium text-gray-500">
               Trusted by <span className="text-secondary font-bold">10,000+</span> families
             </p>
          </div>
        </div>

        {/* Visual Content (Right Side) */}
        <div className="flex-1 w-full max-w-[500px] md:max-w-none relative z-10">
          <div className="relative aspect-[4/5] md:aspect-square w-full">
            {/* Main Phone/App Mockup Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-[2rem] shadow-2xl border border-white/50 overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-2 border border-dashed border-gray-300 rounded-[1.8rem]" />
               <div className="text-center p-8">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl mx-auto mb-4 flex items-center justify-center text-primary">
                    <span className="font-heading font-bold text-3xl">M</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-secondary mb-2">App Interface</h3>
                  <p className="text-gray-500 font-body text-sm">
                    Interactive Preview Coming Soon
                  </p>
                  
                  {/* Floating Elements Animation */}
                  <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-xl shadow-lg rotate-12 animate-bounce delay-75 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-20 left-10 w-12 h-12 bg-blue-500/10 rounded-full shadow-sm -rotate-6 animate-pulse md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
               
               {/* Use the actual image if suitable, else keep placeholder design */}
              <Image
                src="/missugram-hero.webp"
                alt="App Interface Preview"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
