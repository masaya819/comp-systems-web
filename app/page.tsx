import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Service from "@/components/Service";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <NavBar />
      <Hero />
      <Problem />
      <Service />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
