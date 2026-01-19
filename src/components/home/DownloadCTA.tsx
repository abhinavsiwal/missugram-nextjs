import { Apple, Play, QrCode, ArrowRight } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      
      {/* Aurora Background */}
      <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-blue-50 via-indigo-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
         
         <div className="relative rounded-[3rem] bg-gray-900 overflow-hidden shadow-2xl">
            
            {/* Dark Aurora Inside Card */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
               
               {/* Left: Text & Buttons */}
               <div className="p-8 md:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 font-bold text-xs uppercase tracking-widest mb-8 w-fit backdrop-blur-md">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                     Available Now
                  </div>
                  
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Carry your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                       sanctuary
                    </span> with you.
                  </h2>
                  
                  <p className="font-body text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
                    Download Miss-U-Gram to find comfort, share memories, and stay connected wherever life takes you.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <a 
                        href="https://apps.apple.com/us/app/miss-u-gram/id1330297631" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center group"
                     >
                        <Apple className="w-6 h-6" />
                        <div className="text-left leading-tight">
                           <div className="text-[10px] uppercase tracking-wider opacity-60">Download on the</div>
                           <div className="text-lg group-hover:text-blue-600 transition-colors">App Store</div>
                        </div>
                     </a>
                     
                     <a 
                        href="https://play.google.com/store/apps/details?id=com.miss_u_gram" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white/5 backdrop-blur-md text-white px-6 py-3.5 rounded-xl font-bold shadow-lg border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
                     >
                        <Play className="w-6 h-6 fill-current" />
                        <div className="text-left leading-tight">
                           <div className="text-[10px] uppercase tracking-wider opacity-60">Get it on</div>
                           <div className="text-lg">Google Play</div>
                        </div>
                     </a>
                  </div>
               </div>

               {/* Right: QR Code / Visual */}
               <div className="relative border-t lg:border-t-0 lg:border-l border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-16 flex flex-col items-center justify-center text-center">
                  
                  <div className="relative w-64 h-64 bg-white rounded-3xl p-4 shadow-2xl mb-8 group cursor-pointer transition-transform hover:scale-105 duration-500">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                     <div className="relative z-10 w-full h-full border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50">
                        <QrCode className="w-24 h-24 text-gray-900 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                        <span className="absolute text-xs font-bold text-gray-400 group-hover:opacity-0 transition-opacity">QR Code Placeholder</span>
                     </div>
                     {/* Corner Accents */}
                     <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-xl -translate-x-1 -translate-y-1" />
                     <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-xl translate-x-1 -translate-y-1" />
                     <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-xl -translate-x-1 translate-y-1" />
                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-xl translate-x-1 translate-y-1" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Scan to Download</h3>
                  <p className="text-gray-400 text-sm mb-6">
                     Point your camera to start your journey instantly.
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
                     iOS & Android Compatible <ArrowRight className="w-3 h-3" />
                  </div>

               </div>

            </div>

         </div>

      </div>
    </section>
  );
}
