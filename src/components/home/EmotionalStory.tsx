import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

export default function EmotionalStory() {
  return (
    <section className="py-40 relative overflow-hidden bg-black flex items-center justify-center min-h-[80vh]">
      
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop"
          alt="Starry Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
         
         <div className="inline-flex items-center gap-2 mb-10 opacity-70">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400" />
         </div>

         <div className="relative mb-12">
            <Quote className="w-20 h-20 text-white/5 absolute -top-10 -left-10 transform -scale-x-100" />
            
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl">
              "Miss-U-Gram exists to remind us: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-300 to-indigo-300 animate-gradient-x">
                 connection never fades.
              </span>"
            </h2>
            
            <Quote className="w-20 h-20 text-white/5 absolute -bottom-10 -right-10" />
         </div>

         <div className="relative">
            <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
            
            <p className="font-body text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto backdrop-blur-sm">
              Memory is more than just the past—it’s a living presence. It’s the comfort in old photos, the peace in shared stories, and the love that stays. Here, every post is a tribute, and every reaction is a hug across time.
            </p>
         </div>

      </div>
      
    </section>
  );
}
