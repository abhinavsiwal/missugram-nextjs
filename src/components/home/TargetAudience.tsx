const personas = [
  "People honoring loved ones",
  "Anyone carrying memories",
  "Those seeking emotional support",
  "Users who love inspirational content",
];

export default function TargetAudience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Who It’s For
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {personas.map((persona, idx) => (
            <div 
              key={idx}
              className="px-8 py-5 rounded-full bg-gray-50 border border-gray-100 text-gray-700 font-medium text-lg hover:bg-blue-50 hover:border-blue-200 hover:text-primary transition-all duration-300 cursor-default shadow-sm"
            >
              {persona}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
