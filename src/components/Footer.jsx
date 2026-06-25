import {
  User,
  Code,
  Briefcase,
  Mail,
  ArrowRight
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="avatar">S</div>

        <h2>Simran Kumari</h2>

        <p className="email">
          simranchoudhary2907@gmail.com
        </p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="footer-btn">
            🚀 Built for Digital Heroes
          </button>
        </a>

        <p className="tagline">
          I build fast, modern, and user-focused digital experiences.
        </p>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-grid">

        {/* About */}
        <div className="footer-column">
          <h3>
            <User size={20} />
            About Me
          </h3>

          <p>
            Passionate developer creating clean,
            responsive and impactful web experiences.
          </p>

          <div className="socials">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>
            <Code size={20} />
            Quick Links
          </h3>

          <ul>
            <li>Home <ArrowRight size={16} /></li>
            <li>About <ArrowRight size={16} /></li>
            <li>Projects <ArrowRight size={16} /></li>
            <li>Contact <ArrowRight size={16} /></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>
            <Briefcase size={20} />
            Services
          </h3>

          <ul>
            <li>Web Development <ArrowRight size={16} /></li>
            <li>Frontend Development <ArrowRight size={16} /></li>
            <li>UI/UX Design <ArrowRight size={16} /></li>
            <li>Responsive Design <ArrowRight size={16} /></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>
            <Mail size={20} />
            Let's Connect
          </h3>

          <p>
            Have a project in mind?
            Let's build something amazing together.
          </p>

          <button className="contact-btn">
            Get in Touch
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Simran Kumari. All rights reserved. 💜
      </div>

    </footer>
  );
}