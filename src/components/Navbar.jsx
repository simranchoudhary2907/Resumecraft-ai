import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ResumeCraft AI
      </div>

      <div className="nav-center">
        <a href="#features">Features</a>
        <a href="#templates">Templates</a>
        <a href="#about">About</a>
      </div>

      <Link to="/builder">
        <button className="primary-btn">
          Build Resume
        </button>
      </Link>

    </nav>
  );
}