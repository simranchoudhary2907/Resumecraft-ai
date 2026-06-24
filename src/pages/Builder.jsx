import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  Sparkles,
  User,
  Mail,
  Phone,
  GraduationCap,
  Code
} from "lucide-react";

export default function Builder() {
  const [template, setTemplate] = useState("modern");

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: ""
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />

      <div className="editor">

        {/* LEFT PANEL */}
        <div className="editor-left">

          <h2 className="logo">ResumeCraft AI ✨</h2>

          {/* TEMPLATES */}
          <div className="section">
            <h4><Sparkles size={14} /> Templates</h4>

            <button
              className={template === "modern" ? "active" : ""}
              onClick={() => setTemplate("modern")}
            >
              Modern
            </button>

            <button
              className={template === "classic" ? "active" : ""}
              onClick={() => setTemplate("classic")}
            >
              Classic
            </button>

            <button
              className={template === "minimal" ? "active" : ""}
              onClick={() => setTemplate("minimal")}
            >
              Minimal
            </button>
          </div>

          {/* PERSONAL */}
          <div className="section">
            <h4><User size={14} /> Personal Info</h4>

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </div>

          {/* EDUCATION */}
          <div className="section">
            <h4><GraduationCap size={14} /> Education</h4>

            <textarea
              name="education"
              rows="3"
              onChange={handleChange}
            />
          </div>

          {/* SKILLS */}
          <div className="section">
            <h4><Code size={14} /> Skills</h4>

            <textarea
              name="skills"
              rows="3"
              onChange={handleChange}
            />
          </div>

        </div>

        {/* RIGHT CANVAS */}
        <div className="editor-right">

          <div className={`resume-canvas ${template}`}>

            <h1>{resume.name || "Your Name"}</h1>

            <p>{resume.email || "your@email.com"}</p>
            <p>{resume.phone || "+91 XXXXX XXXXX"}</p>

            <hr />

            <h3>Education</h3>
            <p>{resume.education || "Your education details"}</p>

            <h3>Skills</h3>
            <p>{resume.skills || "React, JavaScript, CSS"}</p>

          </div>

        </div>

      </div>
    </>
  );
}