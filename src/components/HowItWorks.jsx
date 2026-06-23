import { FileText, Eye, Download, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Fill Your Details",
      desc: "Enter your personal and professional information.",
      icon: <FileText size={34} />
    },
    {
      number: "02",
      title: "Preview Resume",
      desc: "See changes instantly with live preview.",
      icon: <Eye size={34} />
    },
    {
      number: "03",
      title: "Download PDF",
      desc: "Export your ATS-friendly resume in one click.",
      icon: <Download size={34} />
    }
  ];

  return (
    <section className="how-it-works">

      <div className="section-title">
        <span className="section-badge">
          <Sparkles size={20} className="badge-icon" />
          Simple Process
        </span>

        <h2>Create Your Resume In <span>3 Easy Steps</span></h2>

        <p>
          Build a professional ATS-friendly resume in just a few minutes.
        </p>
      </div>

      <div className="steps-grid">

        {steps.map((step, index) => (
          <div className="step-item" key={index}>
            <div className="step-card">
              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}