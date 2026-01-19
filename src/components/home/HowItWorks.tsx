import { PenTool, HeartHandshake, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PenTool,
    title: "Create",
    subtitle: "Share Your Story",
    description: "Post memories, quotes, tributes, and personal reflections in a dedicated space.",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-400",
    light: "bg-blue-50"
  },
  {
    step: "02",
    icon: HeartHandshake,
    title: "Connect",
    subtitle: "Find Support",
    description: "Engage with others through empathy, reactions, and shared understanding.",
    color: "bg-violet-500",
    gradient: "from-violet-500 to-fuchsia-400",
    light: "bg-violet-50"
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Heal",
    subtitle: "Inner Peace",
    description: "Build a personal digital sanctuary for comfort, remembrance, and daily inspiration.",
    color: "bg-amber-500",
    gradient: "from-amber-400 to-orange-400",
    light: "bg-amber-50"
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
           <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
             Your Journey to Healing
           </h2>
           <p className="font-body text-xl text-gray-500">
             Three simple steps to preserve memories and find connection.
           </p>
        </div>

        {/* The Holographic Pipeline */}
        <div className="relative">
           
           {/* Central Beam (Desktop) */}
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shimmer" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
              {steps.map((item, idx) => (
                 <div key={idx} className="group relative">
                    
                    {/* Glass Prism Card */}
                    <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 text-center h-full flex flex-col items-center">
                       
                       {/* Floating Step Badge */}
                       <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full ${item.light} border border-white text-xs font-bold uppercase tracking-widest ${item.color.replace('bg-', 'text-')} shadow-sm`}>
                          Step {item.step}
                       </div>

                       {/* Icon Orb */}
                       <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                             <item.icon className={`w-8 h-8 ${item.color.replace('bg-', 'text-')}`} />
                          </div>
                       </div>

                       {/* Content */}
                       <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                          {item.title}
                       </h3>
                       <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${item.color.replace('bg-', 'text-')} opacity-60`}>
                          {item.subtitle}
                       </p>
                       <p className="font-body text-gray-500 leading-relaxed text-sm">
                          {item.description}
                       </p>

                       {/* Active State Glow */}
                       <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                    </div>

                 </div>
              ))}
           </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
           <button className="inline-flex items-center gap-2 text-gray-900 font-bold border-b-2 border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
              Start your journey today <ArrowRight className="w-4 h-4" />
           </button>
        </div>

      </div>
    </section>
  );
}
