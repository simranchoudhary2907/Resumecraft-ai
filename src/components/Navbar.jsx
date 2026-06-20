import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ResumeCraft AI</div>

      <Link to="/builder">
        <button className="nav-btn">
          Build Resume
        </button>
      </Link>
    </nav>
  );
}