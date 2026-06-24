import { Users, TrendingUp, BriefcaseBusiness } from "lucide-react";

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
      icon: <Users size={28} />,
      num: "10K+",
      label: "Resumes Created",
    },
    {
      icon: <TrendingUp size={28} />,
      num: "95%",
      label: "ATS Success Rate",
    },
    {
      icon: <BriefcaseBusiness size={28} />,
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
            <div className="stat-top">
            <div className="stat-card-icon">{s.icon}</div>
            <div className="stat-card-num">{s.num}</div>
            
          </div>
          <div className="stat-card-label">{s.label}</div>
        </div> 
        ))}
      </div>
    </section>
  );
}