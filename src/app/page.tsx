import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import ObservatoryIntro from "@/components/home/ObservatoryIntro";
import Explore from "@/components/home/Explore";
import AboutPreview from "@/components/home/AboutPreview";
import Conversation from "@/components/home/Conversation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ObservatoryIntro />
      <Explore />
      <AboutPreview />
      <Conversation />
    </>
  );
}