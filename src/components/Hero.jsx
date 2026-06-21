import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [active, setActive] = useState(0);

 const cards = [
  {
    name: "Simran Choudhary",
    role: "Frontend Developer",
    education: "B.Tech CSE (Data Science)",
    skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
    projects: ["ResumeCraft AI", "SIH Project"]
  },
  {
    name: "Aman Kumar",
    role: "Full Stack Developer",
    education: "B.Tech CSE",
    skills: ["MongoDB", "Express", "React", "Node"],
    projects: ["E-Commerce App", "Chat App"]
  },
  {
    name: "Rahul Sharma",
    role: "Backend Developer",
    education: "BCA",
    skills: ["Node.js", "MySQL", "API"],
    projects: ["Auth System", "REST API"]
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    education: "B.Des",
    skills: ["Figma", "UI Design", "Prototyping"],
    projects: ["Design System", "Portfolio UI"]
  }
];

  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <span className="hero-badge">
          ATS Friendly Resume Builder
        </span>

        <h1>
          Build Professional <br />
          Resumes In Minutes
        </h1>

        <p>
          Create ATS-friendly resumes with live preview, modern templates
          and instant PDF download.
        </p>

        <div className="hero-buttons">

          <Link to="/builder">
            <button className="primary-btn">
              Create Resume
            </button>
          </Link>

          <button className="secondary-btn">
            View Templates
          </button>

        </div>

      </div>

      {/* RIGHT SIDE - STACKED CARDS */}
     <div className="hero-right">

  <div className="resume-stack">

    {cards.map((card, index) => (
      <div
        key={index}
        className={`resume-preview ${active === index ? "active" : ""}`}
        onClick={() => setActive(index)}
        
        style={{
          transform: `
            translate(${(index - active) * 20}px, ${(index - active) * 15}px)
            rotateY(${(index - active) * -12}deg)
            scale(${index === active ? 1.05 : 1 - Math.abs(index - active) * 0.05})
          `,
          zIndex: index === active ? 999 : cards.length - index,
          opacity: Math.abs(index - active) > 2 ? 0.6 : 1
        }}

//         style={{
//   transform: `translate(${index * 6}px, ${index * 10}px)`,
//   zIndex: cards.length - index,
// }}
      >

        {/* HEADER */}
        <div className="resume-header">
          <h2>{card.name}</h2>
          <p>{card.role}</p>
        </div>

        {/* EDUCATION */}
        <div className="resume-section">
          <h4>Education</h4>
          <p>{card.education}</p>
        </div>

        {/* SKILLS */}
        <div className="resume-section">
          <h4>Skills</h4>
          <div className="skill-tags">
            {card.skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="resume-section">
          <h4>Projects</h4>
          {card.projects.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

      </div>
    ))}

  </div>

</div>


    </section>
  );
}