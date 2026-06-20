import { useState } from "react";

export default function Builder() {

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: ""
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="builder">

      {/* LEFT FORM */}

      <div className="builder-form">

        <h2>Resume Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <textarea
          name="education"
          placeholder="Education"
          rows="4"
          onChange={handleChange}
        />

        <textarea
          name="skills"
          placeholder="Skills (React, JS, Python...)"
          rows="4"
          onChange={handleChange}
        />

        <button className="primary-btn">
          Download PDF
        </button>

      </div>

      {/* RIGHT PREVIEW */}

      <div className="builder-preview">

        <div className="preview-paper">

          <h1>
            {resume.name || "Your Name"}
          </h1>

          <p>
            {resume.email || "your@email.com"}
          </p>

          <p>
            {resume.phone || "+91 XXXXX XXXXX"}
          </p>

          <hr />

          <h3>Education</h3>

          <p>
            {resume.education || "Your education details"}
          </p>

          <h3>Skills</h3>

          <p>
            {resume.skills || "React, JavaScript, HTML, CSS"}
          </p>

        </div>

      </div>

    </div>
  );
}