import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, StickyNotePlus, Eye } from "lucide-react";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(null);

  const cards = [
    {
      id: 0,
      template: "Modern",
      name: "Simran Choudhary",
      role: "Frontend Developer",
      education: "B.Tech CSE (Data Science)",
      skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
      projects: ["ResumeCraft AI", "SIH Project"],
    },
    {
      id: 1,
      template: "Professional",
      name: "Aman Kumar",
      role: "Full Stack Developer",
      education: "B.Tech CSE",
      skills: ["MongoDB", "Express", "React", "Node"],
      projects: ["E-Commerce App", "Chat App"],
    },
    {
      id: 2,
      template: "Classic",
      name: "Rahul Sharma",
      role: "Backend Developer",
      education: "BCA",
      skills: ["Node.js", "MySQL", "API"],
      projects: ["Auth System", "REST API"],
    },
    {
      id: 3,
      template: "Creative",
      name: "Priya Verma",
      role: "UI/UX Designer",
      education: "B.Des",
      skills: ["Figma", "UI Design", "Prototyping"],
      projects: ["Design System", "Portfolio UI"],
    },
  ];

  // Place the currently active card first. If there's a previously
  // active card (one we just clicked from), put that card at the end
  // so it visually moves to the back of the stack.
  const activeCard = cards.find((c) => c.id === active);
  const prevCard = prevActive !== null ? cards.find((c) => c.id === prevActive) : null;
  const middleCards = cards.filter((c) => c.id !== active && c.id !== prevActive);

  const orderedCards = prevCard ? [activeCard, ...middleCards, prevCard] : [activeCard, ...cards.filter((card) => card.id !== active)];

  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">
          <ShieldCheck size={16} className="icon-inline" />
          ATS-Friendly Resume Builder
        </span>

        <h1>
          Build <span className="highlight"> <br></br> ATS-Friendly</span>
          <br />
          Resumes That Get Interviews
        </h1>

        <p>
          Create professional resumes in minutes with live preview,
          modern templates, and instant PDF export.
        </p>

        <div className="hero-buttons">
          <Link to="/builder">
            <button className="primary-btn hero-primary">
              <span className="btn-icon"><StickyNotePlus size={25} /></span>
              <span className="btn-label">Create Resume</span>
            </button>
          </Link>

          <a href="#templates" className="secondary-btn hero-secondary">
            <span className="btn-icon-outline"><Eye size={30} /></span>
            <span className="btn-label">View Templates</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">10K+</div>
            <div className="stat-label">Resumes Created</div>
          </div>

          <div className="stat">
            <div className="stat-num">95%</div>
            <div className="stat-label">ATS Score</div>
          </div>

          <div className="stat">
            <div className="stat-num">100%</div>
            <div className="stat-label">Free Forever</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="resume-stack">
          {orderedCards.map((card, stackIndex) => {
            const isFront = stackIndex === 0;
            const translateX = stackIndex * 44;
            const translateY = stackIndex * 18 - 20 + (isFront ? -10 : 0);

            return (
              <div
                key={card.id}
                className={`resume-preview ${isFront ? "active" : ""}`}
                onClick={() => {
                  if (card.id === active) return;
                  setPrevActive(active);
                  setActive(card.id);
                }}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${stackIndex * 2.5}deg) scale(${1 - stackIndex * 0.02})`,
                  zIndex: 100 - stackIndex,
                  opacity: stackIndex === 0 ? 1 : 1 - stackIndex * 0.08,
                }}
              >
                <div className="resume-header">
                  <div>
                    <h2>{card.name}</h2>
                    <p>{card.role}</p>
                  </div>
                  <span className="template-badge">{card.template}</span>
                </div>

                <div className="resume-section">
                  <h4>Education</h4>
                  <p>{card.education}</p>
                </div>

                <div className="resume-section">
                  <h4>Skills</h4>
                  <div className="skill-tags">
                    {card.skills.map((skill, i) => (
                      <span key={i}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="resume-section">
                  <h4>Projects</h4>
                  {card.projects.map((project, i) => (
                    <p key={i}>{project}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* <p className="hero-note">Click to preview different templates</p> */}
      </div>
    </section>
  );
}
