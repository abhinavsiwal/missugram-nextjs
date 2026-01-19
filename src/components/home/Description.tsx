import { Heart, Feather, Sun, Users, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Description() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            The Sanctuary
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
             A place to feel, <br/>
             remember, and <span className="text-blue-600">reconnect.</span>
          </h2>
          <p className="font-body text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
             Miss-U-Gram isn't social media. It's a dedicated digital space designed for the depth of human emotion, honoring the past while healing the present.
          </p>
        </div>

        {/* The Sanctuary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           
           {/* Card 1: Meaningful Posts (Tall Left - 5 cols) */}
           <div className="lg:col-span-5 h-[600px] lg:h-auto bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl overflow-hidden relative group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
              
              <div className="relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Feather className="w-6 h-6" />
                 </div>
                 <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Meaningful Posts</h3>
                 <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    Share memories that matter. No noise, just tributes that carry weight and love.
                 </p>
              </div>

              {/* Image Container - Floating Up */}
              <div className="relative z-10 mt-8 flex-1 flex items-end justify-center">
                 <div className="relative w-full max-w-[280px] transition-transform duration-700 group-hover:-translate-y-4">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full" />
                    <Image 
                      src="/Missugram Post Background Removed.png" 
                      alt="Miss U Gram Post" 
                      width={400} 
                      height={600}
                      className="w-full h-auto drop-shadow-2xl"
                    />
                 </div>
              </div>
           </div>

           {/* Right Column Stack (7 cols) */}
           <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Card 2: Human Connection (Wide Top) */}
              <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group min-h-[300px] flex items-center">
                 {/* Chat Image Sliding In */}
                 <div className="absolute right-[-40px] md:right-[-20px] top-[10%] w-[350px] md:w-[450px] transition-transform duration-700 group-hover:-translate-x-4 opacity-90">
                    <Image 
                      src="/Missugram Chat Background Removed.png" 
                      alt="Miss U Gram Chat" 
                      width={600} 
                      height={400}
                      className="w-full h-auto drop-shadow-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                 </div>

                 <div className="relative z-10 max-w-xs">
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 backdrop-blur-sm">
                       <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">Human Connection</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                       Connect through shared empathy. A private space to support each other when words aren't enough.
                    </p>
                    <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-blue-300 transition-colors">
                       Start a conversation <ArrowUpRight className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              {/* Bottom Split Row */}
              <div className="h-[280px] grid grid-cols-1 md:grid-cols-2 gap-6">
                 
                 {/* Card 3: Daily Comfort */}
                 <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-lg relative overflow-hidden group">
                    <div className="absolute right-[-20px] bottom-[-20px] w-40 opacity-40 group-hover:opacity-80 transition-all duration-500 rotate-12 group-hover:rotate-0">
                       <Image src="/Missugram Quotes.png" alt="Quotes" width={200} height={200} />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                       <div className="w-10 h-10 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
                          <Sun className="w-5 h-5" />
                       </div>
                       <div>
                          <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">Daily Comfort</h3>
                          <p className="text-gray-500 text-xs">Healing quotes & reflections.</p>
                       </div>
                    </div>
                 </div>

                 {/* Card 4: Honor (Iconic) */}
                 <div className="bg-blue-600 rounded-[2.5rem] p-8 relative overflow-hidden group flex flex-col justify-between text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover:opacity-100" />
                    
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                       <Heart className="w-5 h-5 fill-white" />
                    </div>
                    
                    <div>
                       <h3 className="font-heading text-xl font-bold mb-1">Honor & Remember</h3>
                       <p className="text-blue-100 text-xs">Keep their light shining forever.</p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] font-heading font-bold opacity-10 pointer-events-none text-white">
                       &
                    </div>
                 </div>

              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
