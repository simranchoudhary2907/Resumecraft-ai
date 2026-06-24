import { useState } from "react";
import { Sparkles } from "lucide-react";
export default function Templates() {
 const templates = [
  {
    name: "Modern",
    image: "/templates/modern.png",
    desc: "Best for Software Engineers",
  },
  {
    name: "Professional",
    image: "/templates/professional.png",
    desc: "Best for Corporate Roles",
  },
  {
    name: "Minimal",
    image: "/templates/minimal.png",
    desc: "Clean ATS Layout",
  },
  {
    name: "Corporate",
    image: "/templates/Corporate.png",
    desc: "Best for Designers",
  },
  {
    name: "Elegant",
    image: "/templates/Elegant.png",
    desc: "Best for Designers",
  },
  {
    name: "Clean",
    image: "/templates/clean.png",
    desc: "Best for Designers",
  },
  {
    name: "Simple",
    image: "/templates/Simple.png",
    desc: "Best for Designers",
  },
];

const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  return (
    <section className="templates" id="templates">

      {/* <div className="section-title">
        <span className="section-badge">Resume Templates</span>

        <h2>
          Choose The Perfect
          <br />
          Resume Template
        </h2>

        <p>
          Professionally designed templates optimized for ATS systems.
        </p>
      </div> */}

      <div className="section-title">
      <div className="section-badge">
        <Sparkles size={18} />
        <span>Premium Resume Templates</span>
      </div>
      <h2>
        Build a Resume That
        <br />
        <span className="gradient-text">Gets You Hired</span>
      </h2>

      <p>
        Choose from professionally crafted ATS-friendly templates
        designed to impress recruiters and increase interview chances.
      </p>
    </div>

      <div className="templates-showcase">

        <div className="templates-left">


          {/* {templates.map((template, index) => (
            <div
              key={index}
              className={`template-mini-card ${
                selectedTemplate.name === template.name ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <img src={template.image} alt={template.name} />

              <div>
                <span>{template.name}</span>
                <p>ATS Friendly</p>
                <small>Best for Tech Jobs</small>
              </div>
            </div>
          ))} */}

          {templates.map((template, index) => (
            <div
              key={index}
              className={`template-mini-card ${
                selectedTemplate.name === template.name ? "active" : ""
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <img src={template.image} alt={template.name} />

              <div>
                <span>{template.name}</span>
                <p>ATS Friendly</p>
                <small>{template.desc}</small>
              </div>

              {selectedTemplate.name === template.name && (
                <div className="selected-badge">✓</div>
              )}

            </div>
          ))}


        </div>

        <div className="templates-right">

          <div className="preview-window">

            <div className="preview-header">
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* <img
              src="/templates/modern.png"
              alt="Resume Preview"
              className="main-preview"
            /> */}

            <img
              src={selectedTemplate.image}
              alt={selectedTemplate.name}
              className="main-preview"
            />

          </div>

        </div>

      </div>

    </section>
  );
}