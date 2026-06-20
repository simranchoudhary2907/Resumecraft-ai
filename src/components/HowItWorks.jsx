export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Fill Your Details",
      desc: "Enter your personal and professional information."
    },
    {
      number: "02",
      title: "Preview Resume",
      desc: "See changes instantly with live preview."
    },
    {
      number: "03",
      title: "Download PDF",
      desc: "Export your ATS-friendly resume in one click."
    }
  ];

  return (
    <section className="how-it-works">

      <div className="section-title">
        <span className="section-badge">
          Simple Process
        </span>

        <h2>
          Create Your Resume
          In 3 Easy Steps
        </h2>
      </div>

      <div className="steps-grid">

        {steps.map((step, index) => (
          <div className="step-card" key={index}>

            <div className="step-number">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}