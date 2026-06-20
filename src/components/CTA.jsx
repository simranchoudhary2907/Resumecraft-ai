import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta">

      <div className="cta-content">

        <span className="section-badge">
          Start Building Today
        </span>

        <h2>
          Create A Professional Resume
          <br />
          In Just A Few Minutes
        </h2>

        <p>
          ATS-friendly templates, live preview and instant PDF export.
        </p>

        <Link to="/builder">
          <button className="primary-btn">
            Build Resume Now
          </button>
        </Link>

      </div>

    </section>
  );
}