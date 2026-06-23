export default function Templates() {
  const templates = [
    {
      name: "Modern",
      image: "/templates/modern.png",
    },
    {
      name: "Professional",
      image: "/templates/professional.png",
    },
    {
      name: "Minimal",
      image: "/templates/minimal.png",
    },
    {
      name: "Creative",
      image: "/templates/creative.png",
    },
  ];

  return (
    <section className="templates" id="templates">

      <div className="section-title">
        <span className="section-badge">Resume Templates</span>

        <h2>
          Choose The Perfect
          <br />
          Resume Template
        </h2>

        <p>
          Professionally designed templates optimized for ATS systems.
        </p>
      </div>

      <div className="templates-showcase">

        <div className="templates-left">

          {templates.map((template, index) => (
            <div className="template-mini-card" key={index}>
              <img src={template.image} alt={template.name} />
              <span>{template.name}</span>
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

            <img
              src="/templates/modern.png"
              alt="Resume Preview"
              className="main-preview"
            />

          </div>

        </div>

      </div>

    </section>
  );
}