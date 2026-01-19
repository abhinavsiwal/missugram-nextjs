import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Personal posts and tributes",
  "Private and public sharing",
  "Emotional feed and inspiration",
  "Community interaction",
  "Safe and respectful environment",
];

export default function CoreFeatures() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
           
           {/* Visual Side (App Preview) */}
           <div className="flex-1 w-full relative h-[500px] bg-gray-100 rounded-[3rem] overflow-hidden flex items-end justify-center group shadow-2xl">
               {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-violet-100" />
              
              {/* Pattern */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#1E88E5_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* Main Image */}
              <div className="relative z-10 w-[80%] transition-transform duration-700 hover:-translate-y-4">
                 <Image 
                   src="/Missugram Profile Image.png" 
                   alt="Miss U Gram Profile Interface" 
                   width={400} 
                   height={800} 
                   className="w-full h-auto drop-shadow-2xl"
                 />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 text-xs font-bold text-gray-600 animate-float-delayed">
                 ✨ Profile View
              </div>
           </div>

           {/* List Side */}
           <div className="flex-1 space-y-10">
              <h2 className="font-heading text-4xl font-bold text-secondary">
                Everything you need <br/>
                <span className="text-primary">to honor safely.</span>
              </h2>

              <ul className="space-y-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xl text-gray-700 font-body group-hover:text-gray-900 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
           </div>

        </div>
      </div>
    </section>
  );
}
