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
    title:
      "SafeQbit's CTO Honoured by the Principal Scientific Adviser to the Government of India",
    image: "/images/award-1.jpg",
    text: "SafeQbit's research-driven work in post-quantum cryptography and cybersecurity was recognized at a government-backed cybersecurity research forum.",
  },
  {
    title:
      "SafeQbit Featured in QETCI's Report on Diversity, Equity, and Inclusion in Quantum Science and Technology in India",
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
    <main className="safeqbit-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="site-header">
        <div className="site-header-inner">

          <Link href="/" className="site-brand">

            <img
              src="/logo.png"
              alt="SafeQbit Technologies"
              className="site-logo"
            />

            <div className="site-company-name">
              <span className="company-title">
                SafeQbit
              </span>

              <span className="company-subtitle">
                TECHNOLOGIES PVT LTD
              </span>
            </div>

          </Link>

          <nav className="site-nav">

            <Link
              href="/"
              className="nav-link active-link"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="nav-link"
            >
              About
            </Link>

            <Link
              href="/products"
              className="nav-link"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="nav-link"
            >
              Contact Us
            </Link>

          </nav>

        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">

        {/* DARK BLUE BACKGROUND */}

        <div className="hero-background" />


        {/* BINARY BACKGROUND */}

        <div className="binary-background">

          {binaryColumns.map((column, index) => (
            <div
              key={index}
              className="binary-column"
              style={{
                left: `${index * 5.2}%`,
                animationDelay: `${-(index * 1.7)}s`,
                animationDuration: `${12 + (index % 5) * 2}s`,
                opacity: 0.20 + (index % 4) * 0.04,
              }}
            >
              {column.split("").map((digit, digitIndex) => (
                <span key={digitIndex}>
                  {digit}
                </span>
              ))}
            </div>
          ))}

        </div>


        {/* BLUE GLOWS */}

        <div className="hero-glow hero-glow-left" />

        <div className="hero-glow hero-glow-right" />


        {/* HERO CONTENT */}

        <div className="hero-content">

          {/* LEFT */}

          <div className="hero-left">

            <p className="hero-kicker">
              If Excellence is your Preference,
            </p>


            <h1 className="hero-title">

              <span className="hero-white">
                Choose our
              </span>

              <span className="hero-blue">
                Research-Powered
              </span>

              <span className="hero-white">
                Cybersecurity
              </span>

              <span className="hero-white">
                Services!
              </span>

            </h1>


            <p className="hero-description">
              We build a knowledge-driven community focused on
              awareness, education, and the adoption of post-quantum
              cybersecurity technologies.
            </p>


            {/* TAGS */}

            <div className="hero-tags">

              <span className="hero-tag">
                Post-Quantum Readiness
              </span>

              <span className="hero-tag">
                Security Assessments
              </span>

              <span className="hero-tag">
                Training & Workshops
              </span>

            </div>


            {/* CONNECT */}

            <div className="connect-wrapper">

              <Link
                href="/contact"
                className="connect-button"
              >
                <span>
                  Connect Now
                </span>

                <span className="connect-arrow">
                  →
                </span>

              </Link>

            </div>

          </div>


          {/* RIGHT */}

          <div className="hero-right">

            <div className="hero-logo-glow" />

            <img
              src="/logo.png"
              alt="SafeQbit - Be Quantum Safe"
              className="hero-main-logo"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          RECENT ACTIVITY
      ===================================================== */}

      <section className="light-section recent-section">

        <div className="two-column-container">

          <div className="activity-image">

            <img
              src="/images/recent-activity.jpg"
              alt="SafeQbit recent activity"
            />

          </div>


          <div className="activity-panel">

            <div className="activity-header">

              <h2>
                Recent Activity
              </h2>

              <span>
                Updates
              </span>

            </div>


            <div className="activity-list">

              {activities.map((item) => (
                <article
                  key={item}
                  className="activity-card"
                >

                  <div className="activity-icon">
                    🏆
                  </div>

                  <div>

                    <h3>
                      {item}
                    </h3>

                    <button>
                      Read more
                    </button>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NQM + RECOGNITION
      ===================================================== */}

      <section className="white-section">

        <div className="section-intro">

          <h2 className="section-title">
            Research Funded by National Quantum Mission
          </h2>

          <p className="section-subtitle">
            SafeQbit-Executing a National Quantum Mission (NQM)
            Supported Project on Quantum-Safe IoT Authentication
          </p>


          <h2 className="section-title section-gap">
            Recognized Among The Best Cyber Security Service Providers.
          </h2>

          <p className="section-subtitle">
            Safeqbit Startup Recognition by the Data Security Council
            of India (DSCI) and Ministry of Electronics & Information
            Technology (MeitY), GoI at CSGC2.0 as MVP Stage Winners,
            Final Product Stage Winners, and facilitated by the
            Secretary, MeitY 🏆
          </p>

        </div>


        <div className="recognition-grid">

          {[
            ["🏅", "MVP Stage Winners", "/images/mvp-winner.jpg"],
            ["🏆", "Final Product Stage Winners", "/images/final-winner.jpg"],
            ["🏆", "Facilitated by Secretary, MeitY", "/images/facilitated.jpg"],
          ].map(([icon, title, image]) => (

            <div
              key={title}
              className="recognition-card"
            >

              <h3>
                {icon} {title}
              </h3>

              <div className="recognition-image">
                <img
                  src={image}
                  alt={title}
                />
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="light-section services-section">

        <div className="section-intro">

          <h2 className="section-title">
            Our Services
          </h2>

          <p className="section-subtitle">
            We are a team of innovative and proactive digital
            security experts delivering research-driven
            cybersecurity solutions.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <div
              key={service}
              className={`service-card ${
                index === 2 ? "service-card-active" : ""
              }`}
            >
              {service}
            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          COLLABORATORS
      ===================================================== */}

      <section className="light-section collaborators-section">

        <div className="section-intro">

          <h2 className="section-title">
            Our Collaborators
          </h2>

        </div>


        <div className="collaborators-grid">

          {collaborators.map((name) => (

            <div
              key={name}
              className="collaborator-card"
            >
              {name}
            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="why-section">

        <div className="why-container">

          <h2 className="why-title">
            Why Us
          </h2>


          <div className="why-grid">

            {[
              [
                "DPIIT Registered Startup",
                "Recognised by Department for Promotion of Industry and Internal Trade, Government of India",
              ],
              [
                "National Recognition by Government of India",
                "Honoured for excellence in cybersecurity innovation",
              ],
              [
                "National Winner – Data Security Category",
                "Awarded for leadership in secure digital transformation",
              ],
            ].map(([title, text]) => (

              <div
                key={title}
                className="why-card"
              >

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          AWARDS
      ===================================================== */}

      <section className="white-section awards-section">

        <div className="awards-container">

          <h2 className="section-title awards-title">
            Achievements and Awards
          </h2>


          <div className="awards-grid">

            {awards.map((award) => (

              <article
                key={award.title}
                className="award-card"
              >

                <div className="award-image">

                  <img
                    src={award.image}
                    alt={award.title}
                  />

                </div>


                <div className="award-content">

                  <h3>
                    {award.title}
                  </h3>

                  <p>
                    {award.text}
                  </p>

                  <button>
                    Read More →
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SOCIAL
      ===================================================== */}

      <section className="social-section">

        <h2>
          SOCIAL MEDIA
        </h2>

        <p>
          Join us on LinkedIn and never miss a beat on what's
          going on in the world of quantum-safe cybersecurity.
        </p>

        <div className="social-icons">
          <span>▶</span>
          <span>in</span>
          <span>◎</span>
        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="site-footer">

        <div className="footer-grid">


          {/* BRAND */}

          <div className="footer-brand">

            <img
              src="/logo.png"
              alt="SafeQbit"
            />

            <p>
              Research Powered Cybersecurity Services and
              Training. Eliminate security threats through
              our innovative and extensive security assessments.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h3 className="footer-heading">
              QUICK LINKS
            </h3>

            <div className="footer-links">

              <Link href="/">
                Home
              </Link>

              <Link href="/about">
                About Us
              </Link>

              <Link href="/products">
                Products
              </Link>

              <Link href="/contact">
                Contact Us
              </Link>

            </div>

          </div>


          {/* SERVICES */}

          <div>

            <h3 className="footer-heading">
              SERVICES
            </h3>

            <div className="footer-links">

              {services.map((service) => (
                <p key={service}>
                  {service}
                </p>
              ))}

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <h3 className="footer-heading">
              CONTACT INFO
            </h3>

            <div className="footer-contact">

              <p>
                <b>Registered Office:</b>
                <br />
                F No 6053, Mahagun Mywoods,
                <br />
                Sect- 16C, Gr Noida (W),
                <br />
                G. B. Nagar – 201318, UP, India
              </p>

              <p>
                <b>Delhi Office:</b>
                <br />
                SafeQbit Technologies Private Limited,
                <br />
                Udhmodya Foundation, 5th Floor,
                <br />
                Maharishi Kanad Bhawan, North Campus,
                <br />
                University of Delhi - 110007
              </p>

              <p>
                contact@safeqbit.in
              </p>

              <p>
                +91 89298 74957
              </p>

            </div>

          </div>

        </div>


        <div className="footer-bottom">
          © {new Date().getFullYear()} SafeQbit Technologies
          Private Limited. All rights reserved.
        </div>

      </footer>

    </main>
  );
}
