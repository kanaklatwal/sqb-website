"use client";

import Link from "next/link";
import { useState } from "react";

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
  const [currentImage, setCurrentImage] = useState(0);

  const recentActivityImages = [
    "/images/image7.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image8.jpg",
  ];

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


      {/* ================= RECENT ACTIVITY ================= */}
<section className="bg-[#f3f7ff] px-6 py-20">
  <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-[1.55fr_1fr]">

    {/* ================= LEFT: PHOTO SLIDER ================= */}
    <div className="relative h-[540px] overflow-hidden rounded-[24px] bg-white shadow-sm">

      {/* MAIN PHOTO */}
      <div className="h-full w-full overflow-hidden">
        <img
          src={recentActivityImages[currentImage]}
          alt={`SafeQbit recent activity ${currentImage + 1}`}
          className="h-full w-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* LEFT ARROW */}
      <button
        type="button"
        onClick={() =>
          setCurrentImage((prev) =>
            prev === 0 ? recentActivityImages.length - 1 : prev - 1
          )
        }
        className="absolute left-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#07175f]/80 text-3xl text-white backdrop-blur-sm transition hover:bg-[#49b8ff]"
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={() =>
          setCurrentImage((prev) =>
            prev === recentActivityImages.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute right-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#07175f]/80 text-3xl text-white backdrop-blur-sm transition hover:bg-[#49b8ff]"
        aria-label="Next image"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {recentActivityImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Show image ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-200 ${
              currentImage === index
                ? "w-8 bg-[#49b8ff]"
                : "w-3 bg-white/75 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </div>


    {/* ================= RIGHT: RECENT ACTIVITY ================= */}
    <div className="flex h-[540px] flex-col overflow-hidden rounded-[24px] bg-[#07175f] p-7 text-white shadow-lg">

      {/* HEADER - FIXED */}
      <div className="mb-5 flex shrink-0 items-center justify-between border-b border-white/15 pb-5">
        <h2 className="text-2xl font-extrabold">
          Recent Activity
        </h2>

        <span className="rounded-full bg-[#49b8ff] px-4 py-2 text-xs font-bold text-[#07175f]">
          Updates
        </span>
      </div>


      {/* SCROLLABLE ACTIVITY LIST */}
      <div
        className="flex-1 overflow-y-auto pr-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#49b8ff #10266f",
        }}
      >

        <div className="space-y-4">

          {activities.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-[#12277e] p-4 transition hover:bg-[#18338d]"
            >

              <div className="flex gap-3">

                {/* ICON */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1e3b92] text-lg">
                  🏆
                </span>

                {/* CONTENT */}
                <div className="min-w-0">

                  <h3 className="text-[15px] font-bold leading-6 text-white">
                    {item}
                  </h3>

                  <button
                    type="button"
                    className="mt-1 text-sm font-bold text-[#49b8ff] hover:text-white"
                  >
                    Read more
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

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


      {/* ================= COLLABORATORS ================= */}
<section className="bg-[#eef5ff] py-20">
  <div className="mx-auto max-w-[1400px] px-6">

    {/* Heading */}
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-[#07175f] md:text-5xl">
        Our Collaborators
      </h2>
    </div>

    {/* Slider */}
    <div className="relative">

      {/* LEFT ARROW */}
      <button
        type="button"
        onClick={() => {
          const slider = document.getElementById("collaborator-slider");
          slider?.scrollBy({
            left: -500,
            behavior: "smooth",
          });
        }}
        className="absolute left-0 top-1/2 z-10 flex h-11 w-11
        -translate-y-1/2 items-center justify-center
        rounded-full bg-[#dce8fb] text-2xl text-[#07175f]
        shadow-sm transition hover:bg-[#49b8ff]"
        aria-label="Previous collaborators"
      >
        ‹
      </button>

      {/* CARDS */}
      <div
        id="collaborator-slider"
        className="flex gap-6 overflow-x-auto scroll-smooth px-14 pb-4
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >

        {/* 1 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/cdac.png"
              alt="C-DAC"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            C-DAC
          </p>
        </div>

        {/* 2 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/powergrid.png"
              alt="PowerGrid India"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            PowerGrid India
          </p>
        </div>

        {/* 3 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/iqsec.png"
              alt="iQSec Labs Private Limited"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            iQSec Labs Private Limited
          </p>
        </div>

        {/* 4 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/bharat5g.png"
              alt="Bharat 5G Labs"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            Bharat 5G Labs (DoT, GoI)
          </p>
        </div>

        {/* 5 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/bisag.png"
              alt="BISAG-N India"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            BISAG-N India
          </p>
        </div>

        {/* 6 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/duc.png"
              alt="Delhi University Computer Centre"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            Delhi University Computer Centre
          </p>
        </div>

        {/* 7 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/tcil.png"
              alt="TCIL"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            TCIL – Govt. of India Enterprise
          </p>
        </div>

        {/* 8 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/samgnya.png"
              alt="Samgnya Tech Foundation"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            Samgnya Tech Foundation
          </p>
        </div>

        {/* 9 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/vdt.png"
              alt="VDT PIS Pvt. Ltd."
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            VDT PIS Pvt. Ltd.
          </p>
        </div>

        {/* 10 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/prakhar.png"
              alt="Prakhar Software Solutions"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            Prakhar Software Solutions Ltd.
          </p>
        </div>

        {/* 11 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/ubora.png"
              alt="Ubora Systems and Solutions"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            Ubora Systems and Solutions
          </p>
        </div>

        {/* 12 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/sig.png"
              alt="Supreme International Group"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            Supreme International Group (SIG) sarl
          </p>
        </div>

        {/* 13 */}
        <div className="min-w-[180px] max-w-[180px] shrink-0">
          <div className="flex h-[110px] items-center justify-center rounded-2xl
          bg-white p-5 shadow-sm">
            <img
              src="/images/collaborators/deccan.png"
              alt="Deccan Infotech"
              className="max-h-[70px] max-w-[130px] object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-[#07175f]">
            Deccan Infotech (P) Ltd
          </p>
        </div>

      </div>

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={() => {
          const slider = document.getElementById("collaborator-slider");
          slider?.scrollBy({
            left: 500,
            behavior: "smooth",
          });
        }}
        className="absolute right-0 top-1/2 z-10 flex h-11 w-11
        -translate-y-1/2 items-center justify-center
        rounded-full bg-[#dce8fb] text-2xl text-[#07175f]
        shadow-sm transition hover:bg-[#49b8ff]"
        aria-label="Next collaborators"
      >
        ›
      </button>

    </div>
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
