import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { Sparkles, LayoutGrid, User } from "lucide-react";
import { FileUser,Sparkles, LayoutGrid, Users } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#features", label: "Features", icon: <Sparkles size={18} /> },
    { href: "#templates", label: "Templates", icon: <LayoutGrid size={18} /> },
    { href: "#about", label: "About", icon: <Users size={18} /> },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">

        <div className="nav-left">
          <div className="logo">
           <div className="logo-icon">
              <FileUser size={24} />
            </div>
            <div className="logo-text">
              <span className="logo-bold">Resume</span>
              <span className="logo-accent">Craft</span>
              <span className="logo-bold">&nbsp;AI</span>
            </div>
          </div>
        </div>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className={`nav-center nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="nav-item">
              <span className="nav-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="nav-right">
          <Link to="/builder">
            <button className="primary-btn nav-cta">
              <Sparkles size={16} className="cta-icon" /> Create Resume
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}