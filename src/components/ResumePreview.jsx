export default function ResumePreview({ card }) {
	const data = card || {
		template: "Modern",
		name: "Simran Choudhary",
		role: "Frontend Developer",
		education: "B.Tech CSE (Data Science)",
		skills: ["React", "JavaScript", "HTML"],
		projects: ["ResumeCraft AI"]
	};

	return (
		<div className="resume-preview-mini">
			<div className="resume-header">
				<div>
					<h2>{data.name}</h2>
					<p>{data.role}</p>
				</div>
				<span className="template-badge">{data.template}</span>
			</div>

			<div className="resume-section">
				<h4>Education</h4>
				<p>{data.education}</p>
			</div>

			<div className="resume-section">
				<h4>Skills</h4>
				<div className="skill-tags">
					{data.skills.map((s,i)=>(<span key={i}>{s}</span>))}
				</div>
			</div>

			<div className="resume-section">
				<h4>Projects</h4>
				{data.projects.map((p,i)=>(<p key={i}>{p}</p>))}
			</div>
		</div>
	)
}
