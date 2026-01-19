import { Heart, Feather, Sun, Users } from "lucide-react";

const valueCards = [
  {
    icon: Feather,
    title: "Create Meaningful Posts",
    description: "Share memories, thoughts, photos, and moments that carry emotional value, not noise.",
  },
  {
    icon: Heart,
    title: "Honor & Remember",
    description: "Build digital memories and tributes that keep love, stories, and connections alive.",
  },
  {
    icon: Sun,
    title: "Find Daily Comfort",
    description: "Discover quotes, reflections, and shared experiences that gently support emotional well-being.",
  },
  {
    icon: Users,
    title: "Human Connection",
    description: "Connect with others through empathy, stories, and shared understanding.",
  },
];

export default function Description() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary">
            More than an app. <br />
            <span className="text-primary">A place to feel, remember, and reconnect.</span>
          </h2>
          <p className="font-body text-lg text-gray-600 leading-relaxed">
            Miss-U-Gram is a gentle digital space to honor loved ones, share memories, express emotions, and find comfort. It is not social media—it is a meaningful emotional platform.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueCards.map((card, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100/50 hover:bg-white hover:border-blue-100 hover:shadow-[0_10px_40px_-10px_rgba(30,136,229,0.1)] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
