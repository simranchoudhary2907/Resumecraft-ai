import Navbar from "../components/Navbar";
import { useState } from "react";

import {
  LayoutTemplate,
  Grid2x2,
  Type,
  Image,
  Upload,
  Wrench,
  FolderOpen,
  Settings,
  Sparkles,
} from "lucide-react";

export default function Builder() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [zoom, setZoom] = useState(61);

  const templates = [
    { id: "modern", name: "Modern", image: "/templates/modern.png" },
    { id: "minimal", name: "Minimal", image: "/templates/minimal.png" },
    { id: "professional", name: "Professional", image: "/templates/professional.png" },
    // { id: "creative", name: "Creative", image: "/templates/creative.png" },
    { id: "clean", name: "Clean", image: "/templates/clean.png" },
    // { id: "corporate", name: "Corporate", image: "/templates/corporate.png" },
    // { id: "elegant", name: "Elegant", image: "/templates/elegant.png" },
    // { id: "simple", name: "Simple", image: "/templates/simple.png" },
  ];

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
  });

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const ResumePreview = () => {
    switch (selectedTemplate) {
      case "modern":
      case "professional":
      case "creative":
        return <Modern resume={resume} />;

      case "corporate":
        return <Classic resume={resume} />;

      case "minimal":
      case "clean":
      case "elegant":
      case "simple":
      default:
        return <Minimal resume={resume} />;
    }
  };

  return (
    <>
      <Navbar />

      <div className="builder">

        {/* LEFT ICON BAR */}
        <div className="sidebar">
          <button className="active"><LayoutTemplate /></button>
          <button><Grid2x2 /></button>
          <button><Type /></button>
          <button><Image /></button>
          <button><Upload /></button>
          <button><Wrench /></button>
          <button><FolderOpen /></button>
          <button><Settings /></button>
          <button><Sparkles /></button>
          
        </div>

        {/* LEFT PANEL */}
        <div className="panel">
          <h2>Resume Templates</h2>

          <input className="search" placeholder="Search templates..." />

          <div className="templateGrid">
            {templates.map((t) => (
              <div
                key={t.id}
                className={`card ${selectedTemplate === t.id ? "active" : ""}`}
                onClick={() => setSelectedTemplate(t.id)}
              >
                <img src={t.image} />
                <p>{t.name}</p>
              </div>
            ))}
          </div>

          <h3>Personal Info</h3>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />

          <h3>Education</h3>
          <textarea name="education" rows="4" onChange={handleChange} />

          <h3>Skills</h3>
          <textarea name="skills" rows="4" onChange={handleChange} />
        </div>

        {/* CANVAS AREA */}
        {/* <div className="canvas">

          <div
            className="resumeWrapper"
            style={{ transform: `scale(${zoom / 100})` }}
          >
            <ResumePreview />
          </div> */}

          {/* FOOTER TOOLBAR */}
          {/* <div className="footerBar">
            <div className="zoom">
              <button onClick={() => setZoom((z) => Math.max(50, z - 5))}>-</button>
              <span>{zoom}%</span>
              <button onClick={() => setZoom((z) => Math.min(120, z + 5))}>+</button>
            </div>

            <div className="pages">
              <button>Pages 1/1</button>
              <button className="add">+ Add page</button>
            </div>

            <div className="rightTools">
              <button>⤢</button>
              <button>⬇</button>
            </div>
          </div>

        </div> */}

{/* CANVAS AREA */}
<div className="canvas">

  {/* Resume Preview Area */}
  <div className="resumeContainer">
    <div
      className="resumeWrapper"
      style={{
        transform: `scale(${zoom / 100})`,
        transformOrigin: "top center",
      }}
    >
      <ResumePreview />
    </div>
  </div>

  {/* FIXED TOOLBAR */}
  <div className="footerBar">
    <div className="zoom">
      <button onClick={() => setZoom((z) => Math.max(50, z - 5))}>-</button>
      <span>{zoom}%</span>
      <button onClick={() => setZoom((z) => Math.min(120, z + 5))}>+</button>
    </div>

    <div className="pages">
      <button>Pages 1/1</button>
      <button className="add">+ Add page</button>
    </div>

    <div className="rightTools">
      <button>⤢</button>
      <button>⬇</button>
    </div>
  </div>

</div>

      </div>
    </>
  );
}

/* ================= TEMPLATES ================= */

function Modern({ resume }) {
  return (
    <div className="resume modern">
      <h1>{resume.name || "Your Name"}</h1>
      <p>{resume.email || "your@email.com"}</p>
      <p>{resume.phone || "+91 XXXXX XXXXX"}</p>

      <h3>Education</h3>
      <p>{resume.education || "Your education details"}</p>

      <h3>Skills</h3>
      <p>{resume.skills || "React, JavaScript, CSS"}</p>
    </div>
  );
}

function Classic({ resume }) {
  return (
    <div className="resume classic">
      <h1>{resume.name || "Your Name"}</h1>
      <hr />
      <p>{resume.email} | {resume.phone}</p>

      <h3>Education</h3>
      <p>{resume.education}</p>

      <h3>Skills</h3>
      <p>{resume.skills}</p>
    </div>
  );
}

function Minimal({ resume }) {
  return (
    <div className="resume minimal">
      <h1>{resume.name || "Your Name"}</h1>

      <div className="row">
        <span>{resume.email}</span>
        <span>{resume.phone}</span>
      </div>

      <h3>Education</h3>
      <p>{resume.education}</p>

      <h3>Skills</h3>
      <p>{resume.skills}</p>
    </div>
  );
}