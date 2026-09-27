"use client";

import Link from "next/link";

const activities = [
  "SafeQbit at International Conference on Interdisciplinary Innovation in Emerging Technologies and AI (ICIIIETA 2026)",
  "SafeQbit's CTO Mr. Pardeep Singh Honoured by the Principal Scientific Adviser to the Govt. of India",
  "National Quantum Mission (NQM) Consortium Collaboration – Govt of India funded project-PQCAuthentica -Under Execution",
  "Facilitated by Secretary, MeitY, Govt of India: Data Security category winner under Cyber Security Grand Challenge 2.0",
  "Recognized by MeitY & DSCI for cybersecurity excellence",
  "SafeQbit Officially Launched by AICTE Chairman",
];

const collaborators = [
  "C-DAC",
  "PowerGrid India",
  "iQSec Labs Private Limited",
  "Bharat 5G Labs (DoT, GoI)",
  "BISAG-N India",
  "Delhi University Computer Centre",
  "TCIL – Govt. of India Enterprise",
  "Samgnya Tech Foundation",
  "VDT PIS Pvt. Ltd.",
  "Prakhar Software Solutions Ltd.",
  "Ubora Systems and Solutions",
  "Supreme International Group (SIG) sarl",
  "Deccan Infotech (P) Ltd",
];

const services = [
  "Post-Quantum Cryptography Solutions",
  "Cybersecurity Consulting & Advisory",
  "Research And Development (R&D)",
  "Security Tools & Platforms",
  "Training And Workshops",
];

const awards = [
  {
    title: "SafeQbit's CTO Honoured by the Principal Scientific Adviser to the Government of India",
    image: "/images/award-1.jpg",
    text: "SafeQbit's research-driven work in post-quantum cryptography and cybersecurity was recognized at a government-backed cybersecurity research forum.",
  },
  {
    title: "SafeQbit Featured in QETCI's Report on Diversity, Equity, and Inclusion in Quantum Science and Technology in India",
    image: "/images/award-2.jpg",
    text: "SafeQbit was featured in the QETCI report highlighting women leaders contributing to India's quantum ecosystem.",
  },
];

const binaryColumns = [
  "101001101101001011010110101101001",
  "010110010101101001101011010010110",
  "110010101101001011010010110101101",
  "001101101001101010110100101101010",
  "101101001010110110010101101001011",
  "011010110101001101101010010110101",
  "110101001101011010010110101101001",
  "001011010110100101101011010110100",
  "101010110010110101101001011010101",
  "010110101101001011010110100101101",
  "110010110101101001011010110101001",
  "001101010110100110101101001011010",
  "101101101001011010110101001101011",
  "011010010110101101001011010110101",
  "110101101001011010110101101001010",
  "001011010101101001101011010110100",
  "101001101101010010110101101001011",
  "010110101001101101010110100101101",
  "110101001011010110101101001011010",
  "001101101010110100101101010110101",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#07175f]">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07175f]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[96px] max-w-[1500px] items-center justify-between px-8">
          {/* LOGO */}
<Link href="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="SafeQbit Technologies"
    className="h-[68px] w-auto object-contain"
  />

  <div className="flex flex-col leading-none">
    <span className="text-[30px] font-bold tracking-tight text-white">
      SafeQbit
    </span>
    <span className="mt-1 text-[14px] font-medium tracking-[2px] text-white/90">
      TECHNOLOGIES PVT LTD
    </span>
  </div>
</Link>

          <nav className="hidden items-center gap-12 md:flex">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Contact Us", "/contact"],
            ].map(([label, href], i) => (
              <Link
                key={label}
                href={href}
                className={`relative py-3 text-[17px] font-semibold text-white transition hover:text-[#49b8ff] ${
                  i === 0 ? "" : ""
                }`}
              >
                {label}
                {i === 0 && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-[#49b8ff]" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[790px] overflow-hidden bg-[#06145b] pt-[96px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06145b] via-[#071b70] to-[#020c3d]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {binaryColumns.map((column, index) => (
            <div
              key={index}
              className="binary-column"
              style={{
                left: `${index * 5.2}%`,
                animationDelay: `${-(index * 1.7)}s`,
                animationDuration: `${12 + (index % 5) * 2}s`,
                opacity: 0.12 + (index % 4) * 0.035,
              }}
            >
              {column.split("").map((digit, digitIndex) => (
                <span key={digitIndex}>{digit}</span>
              ))}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute -left-40 top-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-100px] top-[30%] h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[150px]" />

        <div className="relative z-10 mx-auto grid min-h-[690px] max-w-[1500px] grid-cols-1 items-center gap-10 px-8 py-16 lg:grid-cols-2">
          <div className="max-w-[760px]">
            <p className="mb-6 text-[20px] font-medium text-white/90 md:text-[22px]">
              If Excellence is your Preference,
            </p>

            <h1 className="text-white text-[52px] font-extrabold leading-[1.04] tracking-[-2px] md:text-[68px] lg:text-[70px]">
              Choose our
              <br />
              <span className="text-[#42aef5]">Research-Powered</span>
              <br />
              Cybersecurity
              <br />
              Services!
            </h1>

            <p className="mt-8 max-w-[720px] text-[18px] leading-8 text-white/80 md:text-[20px]">
              We build a knowledge-driven community focused on awareness, education,
              and the adoption of post-quantum cybersecurity technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Post-Quantum Readiness", "Security Assessments", "Training & Workshops"].map((x) => (
                <span key={x} className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md">
                  {x}
                </span>
                
                
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[17px] font-bold text-[#07145f] transition hover:scale-105 hover:bg-[#42aef5] hover:text-white"
              >
                Connect Now
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07145f] text-sm text-white">→</span>
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[580px] items-center justify-center">
            <div className="absolute h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px]" />
            <img
              src="/logo.png"
              alt="SafeQbit - Be Quantum Safe"
              className="relative z-10 h-[410px] w-auto object-contain drop-shadow-[0_0_45px_rgba(66,174,245,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="bg-[#f3f7ff] px-6 py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-[1.55fr_1fr]">
          <div className="flex min-h-[500px] items-center justify-center overflow-hidden rounded-[24px] bg-white shadow-sm">
            <img src="/images/recent-activity.jpg" alt="SafeQbit recent activity" className="h-full w-full object-cover" />
          </div>

          <div className="rounded-[24px] bg-[#07175f] p-7 text-white shadow-lg">
            <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-5">
              <h2 className="text-2xl font-extrabold">Recent Activity</h2>
              <span className="rounded-full bg-[#49b8ff] px-4 py-2 text-xs font-bold text-[#07175f]">Updates</span>
            </div>

            <div className="space-y-4">
              {activities.map((item) => (
                <article key={item} className="rounded-2xl border border-white/10 bg-[#12277e] p-4">
                  <div className="flex gap-3">
                    <span className="shrink-0 rounded-xl bg-[#1e3b92] px-3 py-2">🏆</span>
                    <div>
                      <h3 className="text-[15px] font-bold leading-6">{item}</h3>
                      <button className="mt-1 text-sm font-bold text-[#49b8ff]">Read more</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NQM + RECOGNITION */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="section-title">Research Funded by National Quantum Mission</h2>
          <p className="section-subtitle">
            SafeQbit-Executing a National Quantum Mission (NQM) Supported Project on Quantum-Safe IoT Authentication
          </p>

          <h2 className="section-title mt-24">Recognized Among The Best Cyber Security Service Providers.</h2>
          <p className="section-subtitle max-w-[1000px]">
            Safeqbit Startup Recognition by the Data Security Council of India (DSCI) and Ministry of Electronics & Information Technology (MeitY), GoI at CSGC2.0 as MVP Stage Winners, Final Product Stage Winners, and facilitated by the Secretary, MeitY 🏆
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-3">
          {[
            ["🏅", "MVP Stage Winners", "/images/mvp-winner.jpg"],
            ["🏆", "Final Product Stage Winners", "/images/final-winner.jpg"],
            ["🏆", "Facilitated by Secretary, MeitY", "/images/facilitated.jpg"],
          ].map(([icon, title, image]) => (
            <div key={title} className="overflow-hidden rounded-[24px] bg-[#f7f9ff] p-5 shadow-[0_10px_40px_rgba(7,23,95,0.08)]">
              <h3 className="mb-5 text-center text-xl font-extrabold">{icon} {title}</h3>
              <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-white">
                <img src={image} alt={title} className="max-h-[360px] w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f3f7ff] px-6 py-24">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We are a team of innovative and proactive digital security experts delivering research-driven cybersecurity solutions.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, i) => (
              <div
                key={service}
                className={`flex min-h-[165px] items-center justify-center rounded-2xl bg-white px-7 text-center text-xl font-semibold shadow-[0_8px_30px_rgba(7,23,95,0.06)] ${
                  i === 2 ? "border border-[#49b8ff]" : ""
                }`}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="bg-[#f3f7ff] px-6 pb-24">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="section-title">Our Collaborators</h2>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {collaborators.map((name) => (
              <div key={name} className="flex min-h-[115px] items-center justify-center rounded-2xl bg-white p-5 text-center text-sm font-semibold shadow-[0_8px_30px_rgba(7,23,95,0.06)]">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#07175f] px-6 py-24 text-white">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-16 text-center text-5xl font-extrabold">Why Us</h2>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {[
              ["DPIIT Registered Startup", "Recognised by Department for Promotion of Industry and Internal Trade, Government of India"],
              ["National Recognition by Government of India", "Honoured for excellence in cybersecurity innovation"],
              ["National Winner – Data Security Category", "Awarded for leadership in secure digital transformation"],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-2xl font-extrabold text-[#49b8ff]">{title}</h3>
                <p className="mx-auto mt-5 max-w-[390px] leading-7 text-white/90">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="section-title text-center">Achievements and Awards</h2>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {awards.map((award) => (
              <article key={award.title} className="overflow-hidden rounded-[24px] border border-[#e7ebf5] bg-white shadow-[0_12px_40px_rgba(7,23,95,0.08)]">
                <div className="h-[300px] bg-[#f3f7ff]">
                  <img src={award.image} alt={award.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold leading-tight">{award.title}</h3>
                  <p className="mt-5 leading-7 text-slate-600">{award.text}</p>
                  <button className="mt-6 font-bold text-[#0877d8]">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-white px-6 py-24 text-center">
        <h2 className="text-2xl font-extrabold tracking-[3px] text-[#0877d8]">SOCIAL MEDIA</h2>
        <p className="mx-auto mt-5 max-w-[760px] text-xl font-semibold leading-8">
          Join us on LinkedIn and never miss a beat on what's going on in the world of quantum-safe cybersecurity.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-3xl font-bold">
          <span>▶</span><span>in</span><span>◎</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07175f] px-8 py-16 text-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <img src="/logo.png" alt="SafeQbit" className="mb-7 h-[65px] w-auto object-contain" />
            <p className="max-w-[300px] leading-7 text-white/75">
              Research Powered Cybersecurity Services and Training. Eliminate security threats through our innovative and extensive security assessments.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">QUICK LINKS</h3>
            <div className="space-y-4 text-white/85">
              <Link href="/">Home</Link><br />
              <Link href="/about">About Us</Link><br />
              <Link href="/products">Products</Link><br />
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">SERVICES</h3>
            <div className="space-y-4 text-white/85">
              {services.map((service) => <p key={service}>{service}</p>)}
            </div>
          </div>

          <div>
            <h3 className="footer-heading">CONTACT INFO</h3>
            <div className="space-y-5 leading-7 text-white/85">
              <p><b>Registered Office:</b><br />F No 6053, Mahagun Mywoods,<br />Sect- 16C, Gr Noida (W),<br />G. B. Nagar – 201318, UP, India</p>
              <p><b>Delhi Office:</b><br />SafeQbit Technologies Private Limited,<br />Udhmodya Foundation, 5th Floor,<br />Maharishi Kanad Bhawan, North Campus,<br />University of Delhi - 110007</p>
              <p>contact@safeqbit.in</p>
              <p>+91 89298 74957</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1400px] border-t border-white/10 pt-7 text-center text-sm text-white/60">
          © {new Date().getFullYear()} SafeQbit Technologies Private Limited. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        .section-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.1;
          font-weight: 800;
          color: #07175f;
        }
        .section-subtitle {
          margin: 1.25rem auto 0;
          max-width: 1000px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4f6382;
        }
        .footer-heading {
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: .02em;
        }
        .binary-column {
          position: absolute;
          top: -500px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: "Courier New", monospace;
          font-size: 22px;
          line-height: 1;
          color: #39aaff;
          text-shadow: 0 0 8px rgba(57,170,255,.25);
          white-space: nowrap;
          animation: binaryFall linear infinite;
        }
        .binary-column span:nth-child(3n) { opacity: .55; }
        .binary-column span:nth-child(5n) { opacity: .35; }
        .binary-column span:nth-child(7n) { opacity: .75; }

        @keyframes binaryFall {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(calc(100vh + 700px)); }
        }

        @media (max-width: 1024px) {
          .binary-column { font-size: 18px; gap: 7px; }
        }
        @media (max-width: 768px) {
          .binary-column { font-size: 15px; gap: 6px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .binary-column { animation: none; }
        }
      `}</style>
    </main>
  );
}
