import { Apple, Play } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] bg-primary overflow-hidden px-6 py-20 text-center">
           
           {/* Decorative Blobs */}
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
           <div className="absolute bottom-[-50%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

           <div className="relative z-10 space-y-8 max-w-2xl mx-auto text-white">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Carry memories with you. <br/>
                Share what you feel. <br/>
                <span className="text-blue-100">Heal in your own way.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
                  <Apple className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-3 bg-black/20 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-bold shadow-lg border border-white/20 hover:bg-black/30 hover:scale-105 active:scale-95 transition-all">
                  <Play className="w-6 h-6 fill-current" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider opacity-60">Get it on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
