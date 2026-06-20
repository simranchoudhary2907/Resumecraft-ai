export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "ATS Optimized",
      desc: "Built to pass applicant tracking systems and improve hiring chances.",
    },
    {
      icon: "👀",
      title: "Live Preview",
      desc: "See resume changes instantly while editing.",
    },
    {
      icon: "📄",
      title: "PDF Export",
      desc: "Download professional resumes with one click.",
    },
    {
      icon: "🎨",
      title: "Modern Templates",
      desc: "Beautiful and recruiter-friendly resume layouts.",
    },
  ];

  return (
    <section className="features" id="features">

      <div className="section-title">
        <span className="section-badge">
          Why Choose ResumeCraft AI
        </span>

        <h2>
          Everything You Need To Build
          <br />
          A Winning Resume
        </h2>

        <p>
          Powerful tools designed to help students and professionals
          create resumes faster and smarter.
        </p>
      </div>

      <div className="feature-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}