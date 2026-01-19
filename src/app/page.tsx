import Hero from "@/components/home/Hero";
import Description from "@/components/home/Description";
import HowItWorks from "@/components/home/HowItWorks";
import TargetAudience from "@/components/home/TargetAudience";
import CoreFeatures from "@/components/home/CoreFeatures";
import EmotionalStory from "@/components/home/EmotionalStory";
import DownloadCTA from "@/components/home/DownloadCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Description />
      <HowItWorks />
      <TargetAudience />
      <CoreFeatures />
      <EmotionalStory />
      <DownloadCTA />
    </main>
  );
}
