export default function WhyChooseUs(){
	const items = [
		{title: 'Recruiter Friendly', desc: 'Designed with recruiter preferences and ATS in mind.'},
		{title: 'Fast Workflow', desc: 'Create a resume in minutes with helpful presets.'},
		{title: 'Polished Designs', desc: 'Modern templates that highlight your strengths.'}
	];

	return (
		<section className="why-choose-us">
			<div className="section-title">
				<span className="section-badge">Why Choose Us</span>
				<h2>We Help You Stand Out</h2>
				<p>Everything you need to create a professional resume that gets noticed.</p>
			</div>

			<div className="why-grid">
				{items.map((it, idx)=>(
					<div className="why-card" key={idx}>
						<h3>{it.title}</h3>
						<p>{it.desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}
