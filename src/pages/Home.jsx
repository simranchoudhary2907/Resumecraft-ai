import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Templates from "../components/Templates";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {

  // 🔥 1. ADD CARDS DATA HERE (INSIDE COMPONENT)
  const cards = [
    {
      name: "Simran Choudhary",
      role: "Frontend Developer",
      desc: "React | UI/UX | Internship Ready"
    },
    {
      name: "Aman Kumar",
      role: "Full Stack Developer",
      desc: "MERN Stack Developer"
    },
    {
      name: "Rahul Sharma",
      role: "Backend Developer",
      desc: "Node.js | Express | MongoDB"
    },
    {
      name: "Priya Verma",
      role: "UI/UX Designer",
      desc: "Figma | Design Systems"
    }
  ];

  // 🔥 2. ADD STATE HERE ALSO
  const [active, setActive] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <Templates />
      <Footer />

      {/* (optional) test space */}
      <div style={{ height: "200vh" }}></div>
    </>
  );
}