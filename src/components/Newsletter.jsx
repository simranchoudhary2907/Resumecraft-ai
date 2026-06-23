import { useState } from "react";

export default function Newsletter() {
	const [email, setEmail] = useState("");
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) return;
		// placeholder behaviour - in real app send to API
		setSent(true);
		setEmail("");
		setTimeout(() => setSent(false), 3000);
	};

	return (
		<section className="newsletter">
			<div className="newsletter-inner">
				<div>
					<h3>Join our newsletter</h3>
					<p>Get resume tips, templates and updates delivered to your inbox.</p>
				</div>

				<form className="newsletter-form" onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<button type="submit" className="primary-btn">{sent ? "Subscribed" : "Subscribe"}</button>
				</form>
			</div>
		</section>
	);
}
