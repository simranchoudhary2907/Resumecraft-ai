import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Templates from "../components/Templates";
import HowItWorks from "../components/HowItWorks";
// import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      {/* <CTA /> */}
      <Templates />
      <Footer />
    </>
  );
}