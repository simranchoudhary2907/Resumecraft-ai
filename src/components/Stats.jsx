import { User, CheckCircle2, CalendarDays } from "lucide-react";

export default function Stats() {
  const logos = [
    { id: "google", src: "https://pngimg.com/uploads/google/google_PNG102344.png", alt: "Google" },
    { id: "microsoft", src: "https://www.pngmart.com/files/4/Microsoft-Logo-Transparent-Background.png", alt: "Microsoft" },
    { id: "amazon", src: "https://pngimg.com/uploads/amazon/amazon_PNG6.png", alt: "Amazon" },
    { id: "tcs", src: "https://tse1.mm.bing.net/th/id/OIP.MZU5mDFjU3VNait0JhD00gHaCC?pid=Api&P=0&h=180", alt: "TCS" },
    { id: "infosys", src: "https://tse2.mm.bing.net/th/id/OIP.NdtGeYSJE6YW4jNZtAGKEQHaC9?pid=Api&P=0&h=180", alt: "Infosys" },
    { id: "wipro", src: "https://companieslogo.com/img/orig/WIT-1453b096.png?t=1648406781", alt: "Wipro" },
  ];

  const statCards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      num: "10K+",
      label: "Resumes Created",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 17l6-6 4 4 8-8" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      num: "95%",
      label: "ATS Success Rate",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3v4" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 3v4" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      num: "500+",
      label: "Interview Calls",
    },
  ];

  return (
    <section className="trusted-stats">
      <div className="trusted-left">
        <p className="trusted-text">Trusted by 10,000+ students & professionals from</p>

        <div className="logos-row">
          {logos.map((l) => (
            <div className="logo-item" key={l.id}>
              <img src={l.src} alt={l.alt} className="logo-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="stat-cards">
        {statCards.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-card-icon">{s.icon}</div>
            <div className="stat-card-num">{s.num}</div>
            <div className="stat-card-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}