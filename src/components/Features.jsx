import { Zap, Lightbulb, Eye, FileText, LayoutGrid, Rocket } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "ATS Optimized",
      desc: "Our resumes are built to pass ATS systems with ease.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "AI Suggestions",
      desc: "Get smart suggestions to improve your resume.",
    },
    {
      icon: <Eye size={24} />,
      title: "Live Preview",
      desc: "See real-time changes as you build your resume.",
    },
    {
      icon: <FileText size={24} />,
      title: "PDF Export",
      desc: "Download high-quality PDF in one click.",
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Multiple Templates",
      desc: "Choose from modern & professional templates.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Fast & Free",
      desc: "Build your resume in minutes. Totally free to get started!",
    },
  ];

  return (
    <section className="features" id="features">

      <div className="section-title">
        <h2>
          Why Choose <span className="text-primary">ResumeCraft AI?</span>
        </h2>
      </div>

      <div className="feature-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-body">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}