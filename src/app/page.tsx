import AgentConcierge from "@/components/AgentConcierge";
import EditorialSpotlight from "@/components/EditorialSpotlight";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SignaturePieces from "@/components/SignaturePieces";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-6 sm:px-10 md:px-16 md:pt-12">
      <HeroSection />
      <SignaturePieces />
      <ExperienceHighlights />
      <AgentConcierge />
      <EditorialSpotlight />
      <Footer />
    </main>
  );
}
