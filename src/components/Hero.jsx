import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      {/* Left Side */}
      <div className="hero-left">

        <span className="hero-badge">
          ATS Friendly Resume Builder
        </span>

        <h1>
          Build Professional
          <br />
          Resumes In Minutes
        </h1>

        <p>
          Create ATS-friendly resumes with live preview,
          modern templates and instant PDF download.
        </p>

        <div className="hero-buttons">

          <Link to="/builder">
            <button className="primary-btn">
              Create Resume
            </button>
          </Link>

          <button className="secondary-btn">
            View Templates
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="hero-right">

        {/* Floating Cards */}
        {/* <div className="floating-card card-1">
          ATS Score 92%
        </div>

        <div className="floating-card card-2">
          PDF Ready
        </div> */}

        {/* Resume Preview */}

        <div className="resume-preview">

        <div className="resume-top">
          <h2>Simran Choudhary</h2>
          <span>Frontend Developer</span>
        </div>

        <div className="resume-line"></div>

        <div className="resume-block">
          <h4>Education</h4>
          <p>B.Tech CSE (Data Science)</p>
        </div>

        <div className="resume-block">
          <h4>Skills</h4>

          <div className="skill-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
          </div>
        </div>

        <div className="resume-block">
          <h4>Projects</h4>

          <p>ResumeCraft AI</p>
          <p>Smart India Hackathon</p>
        </div>

      </div>

        {/* <div className="resume-preview">

          <div className="resume-header">
            <h3>Simran Choudhary</h3>
            <p>Frontend Developer</p>
          </div>

          <div className="resume-section">
            <h4>Education</h4>
            <p>B.Tech CSE (Data Science)</p>
          </div>

          <div className="resume-section">
            <h4>Skills</h4>

            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
            </div>
          </div>

          <div className="resume-section">
            <h4>Projects</h4>
            <p>ResumeCraft AI</p>
            <p>Smart India Hackathon Project</p>
          </div>

        </div> */}

      </div>

    </section>
  );
}