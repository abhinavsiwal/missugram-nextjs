import { Heart, Users, Camera, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const personas = [
  {
    title: "The Grieving",
    subtitle: "Finding Peace",
    description: "For those seeking a safe harbor to process loss, express emotions, and find comfort in a supportive space.",
    image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=800&auto=format&fit=crop", // Solitary/Peaceful forest mist
    icon: Heart,
    color: "bg-rose-500"
  },
  {
    title: "The Supporter",
    subtitle: "Being There",
    description: "For friends and family who want to show they care, offer silence or words, and stand by loved ones.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop", // Friends sunset
    icon: Users,
    color: "bg-blue-500"
  },
  {
    title: "The Memory Keeper",
    subtitle: "Preserving Legacy",
    description: "For those who want to ensure that stories, photos, and the essence of a loved one never fade away.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop", // Holding a photo/journal
    icon: Camera,
    color: "bg-amber-500"
  },
  {
    title: "The Seeker",
    subtitle: "Daily Inspiration",
    description: "For anyone looking for daily quotes, affirmations, and a quiet digital corner to reflect and recharge.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", // Sunrise/Peace
    icon: Sparkles,
    color: "bg-violet-500"
  }
];

export default function TargetAudience() {
  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      
      {/* Dark Ambient Background */}
      <div className="absolute inset-0 bg-gray-900">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">Who We Serve</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Built for every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">healing journey.</span>
              </h2>
              <p className="font-body text-gray-400 text-lg leading-relaxed">
                Whether you are grieving, supporting, or simply remembering, Miss-U-Gram gives you the tools to honor life in your own way.
              </p>
           </div>
           
           <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-white hover:bg-white hover:text-gray-900 transition-all font-bold text-sm">
              Read community stories <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        {/* Persona Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {personas.map((item, idx) => (
             <div 
               key={idx} 
               className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl"
             >
                {/* Background Image */}
                <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   
                   <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                   </div>

                   <span className="text-gray-300 text-xs font-bold uppercase tracking-wider mb-2 block">{item.subtitle}</span>
                   <h3 className="font-heading text-2xl font-bold text-white mb-3">{item.title}</h3>
                   
                   <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                      <div className="overflow-hidden">
                         <p className="text-gray-300 text-sm leading-relaxed pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                            {item.description}
                         </p>
                      </div>
                   </div>

                   {/* Active Line */}
                   <div className={`h-1 w-12 ${item.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
