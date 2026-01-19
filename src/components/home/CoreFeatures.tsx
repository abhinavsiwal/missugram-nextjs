import { CheckCircle2 } from "lucide-react";

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
           
           {/* Visual Side (Abstract/Glass) */}
           <div className="flex-1 w-full relative h-[400px] bg-gradient-to-tr from-blue-100 to-violet-100 rounded-[3rem] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl" />
              {/* Abstract Circles */}
              <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl absolute top-10 left-10 animate-pulse-slow" />
              <div className="w-64 h-64 bg-violet-400/10 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
              
              <div className="relative z-10 text-center space-y-2">
                 <p className="font-heading text-6xl font-bold text-primary/20">FEATURES</p>
                 <p className="font-heading text-6xl font-bold text-primary/20">CORE</p>
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
