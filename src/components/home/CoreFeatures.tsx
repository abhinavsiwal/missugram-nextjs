import { Shield, Lock, Heart, Users, Share2, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Respectful Community",
    desc: "A safe environment moderated for kindness and empathy.",
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Private Sanctuaries",
    desc: "Control who sees your memories with granular privacy tools.",
    icon: Lock,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Forever Tributes",
    desc: "Digital memorials that never fade, kept active for generations.",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "Family Circles",
    desc: "Create dedicated groups for family members to share together.",
    icon: Users,
    color: "text-violet-500",
    bg: "bg-violet-50"
  }
];

export default function CoreFeatures() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-50/50 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-20">
           
           {/* Left: Features Stack */}
           <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest">
                    <Zap className="w-3 h-3 fill-current" />
                    Core Capabilities
                 </div>
                 <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Tools designed for <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                       eternal connection.
                    </span>
                 </h2>
                 <p className="font-body text-lg text-gray-500 max-w-lg">
                    Every feature is built with sensitivity and permanence in mind, ensuring your memories are honored exactly how you wish.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {features.map((item, idx) => (
                    <div key={idx} className="group p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                       <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-6 h-6" />
                       </div>
                       <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                       </h3>
                       <p className="text-sm text-gray-500 leading-relaxed">
                          {item.desc}
                       </p>
                    </div>
                 ))}
              </div>
           </div>

           {/* Right: Premium App Visual */}
           <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
              
              {/* Dynamic Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[90px] rounded-full pointer-events-none" />

              {/* Phone Frame */}
              <div className="relative z-10 w-[300px] sm:w-[380px] bg-gray-900 p-3 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-800 transition-transform duration-500 hover:-translate-y-2">
                 {/* Inner Content (Screen) */}
                 <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-950">
                    <Image 
                       src="/Missugram Profile Image.png" 
                       alt="App Profile Interface" 
                       width={450} 
                       height={900} 
                       className="w-full h-auto object-cover"
                    />
                 </div>
              </div>

           </div>

        </div>

      </div>
    </section>
  );
}
