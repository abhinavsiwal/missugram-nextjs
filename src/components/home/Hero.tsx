import Image from "next/image";
import Link from "next/link";
import { Download, Play, ChevronRight, Apple } from "lucide-react";
import { VideoModal } from "@/components/ui/video-modal";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-start pt-28 md:pt-32 overflow-hidden bg-white">
      
      {/* 1. ATMOSPHERE & LIGHTING */}
      <div className="absolute inset-0 pointer-events-none">
         {/* The "Digital Horizon" - Grounding Glow */}
         <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(30,136,229,0.15)_0%,transparent_70%)] blur-[100px]" />
         
         {/* Top Light */}
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.05)_0%,transparent_70%)] blur-[80px]" />
         
         {/* Subtle Grid Floor */}
         <div className="absolute bottom-0 w-full h-[40vh] opacity-[0.4] bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" 
              style={{ transform: 'perspective(1000px) rotateX(60deg) scale(1.5)' }}
         />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center h-full">
        
        {/* 2. TEXT CONTENT (TOP SECTION) */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center space-y-6 animate-fade-in-up">
           
           {/* New Version Badge */}
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest">v2.0 Now Available</span>
           </div>

           {/* Cinematic Headline */}
           <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[0.95]">
             Where <br className="md:hidden" />
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-violet-600">
               Memories
             </span>{" "}
             Live On.
           </h1>

           {/* Subheading */}
           <p className="font-body text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
             A timeless sanctuary to honor loved ones, share stories, and heal together. 
             <span className="hidden sm:inline"> Built for privacy, connection, and emotional well-being.</span>
           </p>



           {/* CTAs */}
           <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-body px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-gray-900/20 hover:bg-black hover:scale-105 transition-all duration-300">
                <Apple className="w-4 h-4 mb-0.5" />
                <span>One-Click Install</span>
              </button>

              <VideoModal videoId="NxYLnEQTk74">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 font-body px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm cursor-pointer">
                    Watch the Film
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                </button>
              </VideoModal>
           </div>
        </div>

        {/* 3. THE RISING ARTIFACT (BOTTOM SECTION) */}
        <div className="flex-1 w-full flex items-end justify-center relative mt-8 lg:mt-12">
            
            {/* Main Phone Image */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[500px] z-20">
               
               {/* Reflection/Shadow Base */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-black/20 blur-xl rounded-[100%]" />

               <Image
                 src="/missugram-hero.png"
                 alt="Miss U Gram App Interface"
                 width={500}
                 height={1000}
                 className="w-full h-auto object-contain drop-shadow-2xl animate-float-delayed"
                 priority
               />

               {/* Floating Glass Widgets (Parallax effect) */}
               <div className="absolute top-[30%] -left-4 sm:-left-12 p-3 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl animate-float hidden md:block">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-xl">🕊️</div>
                     <div>
                        <div className="text-xs font-bold text-gray-800">In Loving Memory</div>
                        <div className="text-[10px] text-gray-500">Shared just now</div>
                     </div>
                  </div>
               </div>

               <div className="absolute top-[50%] -right-4 sm:-right-16 p-3 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl animate-float-delayed hidden md:block" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white" />)}
                     </div>
                     <span className="text-[10px] font-bold text-gray-600 pl-1">Generic Family</span>
                  </div>
               </div>

            </div>
        </div>

      </div>
    </section>
  );
}
