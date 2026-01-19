import { Heart, Users, Shield, Infinity } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Honor Their Memory",
    description: "Create beautiful, dedicated spaces to celebrate the life and legacy of your loved ones."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Share Together",
    description: "Invite family and friends to collaborate, share stories, and upload photos in a private community."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Safe & Private",
    description: "Your memories are protected with bank-level security. You control who sees what."
  },
  {
    icon: <Infinity className="w-6 h-6 text-primary" />,
    title: "Forever Free",
    description: "We believe memories should be free to keep. Miss U Gram is free to use, forever."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            A Sanctuary for Your Memories
          </h2>
          <p className="font-body text-gray-600 text-lg">
            Designed with love and empathy, providing you with the tools to keep their spirit alive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
