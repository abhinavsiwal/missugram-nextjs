export default function EmotionalStory() {
  return (
    <section className="py-32 bg-secondary text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(30,136,229,0.3),transparent_70%)]" />
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        
        <div className="space-y-8">
           <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight tracking-tight">
             "Miss-U-Gram exists to remind us: <br/>
             <span className="text-blue-400">even when someone is gone, connection never is.</span>"
           </h2>
           
           <div className="w-24 h-px bg-white/20 mx-auto" />
           
           <p className="font-body text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
             Memory is more than just the past—it’s a living presence. It’s the comfort we find in old photos, the peace in shared stories, and the love that stays with us. Here, every post is a tribute, and every reaction is a hug.
           </p>
        </div>

      </div>
    </section>
  );
}
