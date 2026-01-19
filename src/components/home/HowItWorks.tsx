import { PenTool, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PenTool,
    title: "Create",
    description: "Post memories, quotes, tributes, and personal reflections.",
    color: "from-blue-400 to-indigo-400",
    shadow: "shadow-blue-200"
  },
  {
    step: "02",
    icon: HeartHandshake,
    title: "Connect",
    description: "Engage with others through support, reactions, and shared emotions.",
    color: "from-indigo-400 to-violet-400",
    shadow: "shadow-indigo-200"
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Heal",
    description: "Build a personal space of comfort, remembrance, and inspiration.",
    color: "from-violet-400 to-fuchsia-400",
    shadow: "shadow-violet-200"
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]" />
         <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-sm text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
             Seamless Journey
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Miss-U-Gram Works
          </h2>
          <p className="font-body text-lg text-gray-500">
            A simple, guided path to preserving memories and finding your peace.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relativer">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-gray-200 -z-10" />

          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_-15px_rgba(30,136,229,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
            >
              
              {/* Holographic Number Background */}
              <div className="absolute -right-6 -bottom-10 text-[10rem] font-bold text-gray-50/80 pointer-events-none select-none transition-transform group-hover:scale-110 duration-700">
                {item.step}
              </div>

              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg ${item.shadow} mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                   <item.icon className="w-7 h-7 text-gray-800" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed relative z-10">
                {item.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                 Explore <ArrowRight className="w-4 h-4" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
