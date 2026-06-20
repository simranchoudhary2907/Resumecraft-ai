export default function Templates() {
  const templates = [
    {
      name: "Modern",
      desc: "Clean ATS-friendly layout",
    },
    {
      name: "Professional",
      desc: "Corporate recruiter design",
    },
    {
      name: "Minimal",
      desc: "Simple and elegant resume",
    },
  ];

  return (
    <section className="templates" id="templates">

      <div className="section-title">

        <span className="section-badge">
          Resume Templates
        </span>

        <h2>
          Choose The Perfect
          <br />
          Resume Template
        </h2>

        <p>
          Professionally designed templates optimized for ATS systems.
        </p>

      </div>

      <div className="template-grid">

        {templates.map((template, index) => (
          <div className="template-card" key={index}>

            <div className="template-preview">

              <div className="preview-header"></div>

              <div className="preview-line"></div>
              <div className="preview-line short"></div>

              <div className="preview-line"></div>
              <div className="preview-line short"></div>

              <div className="preview-line"></div>

            </div>

            <h3>{template.name}</h3>
            <p>{template.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}