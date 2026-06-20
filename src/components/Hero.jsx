import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      <h1>
        Create ATS-Friendly Resumes
        That Get You Hired
      </h1>

      <p>
        Build, preview and download
        professional resumes in minutes.
      </p>

      <Link to="/builder">
        <button className="hero-btn">
          Start Building
        </button>
      </Link>

    </section>
  );
}