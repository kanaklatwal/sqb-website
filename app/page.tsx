"use client";

import Link from "next/link";

export default function Home() {
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#07175f] text-white">

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07175f]/95 backdrop-blur-md">

        <div className="mx-auto flex h-[96px] max-w-[1500px] items-center justify-between px-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="SafeQbit Technologies"
              className="h-[68px] w-auto object-contain"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-12 md:flex">

            <Link
              href="/"
              className="relative py-3 text-[17px] font-semibold text-white"
            >
              Home

              <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-[#49b8ff]" />
            </Link>

            <Link
              href="/about"
              className="py-3 text-[17px] font-semibold text-white transition hover:text-[#49b8ff]"
            >
              About
            </Link>

            <Link
              href="/products"
              className="py-3 text-[17px] font-semibold text-white transition hover:text-[#49b8ff]"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="py-3 text-[17px] font-semibold text-white transition hover:text-[#49b8ff]"
            >
              Contact Us
            </Link>

          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden pt-[96px]">

        {/* ================= DARK BLUE BACKGROUND ================= */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06145b] via-[#071b70] to-[#020c3d]" />


        {/* ================= FALLING BINARY BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {binaryColumns.map((column, index) => (
            <div
              key={index}
              className="binary-column"
              style={{
                left: `${index * 5.2}%`,
                animationDelay: `${-(index * 1.7)}s`,
                animationDuration: `${12 + (index % 5) * 2}s`,
                opacity: `${0.12 + (index % 4) * 0.035}`,
              }}
            >
              {column.split("").map((digit, digitIndex) => (
                <span key={digitIndex}>{digit}</span>
              ))}
            </div>
          ))}

        </div>


        {/* ================= BLUE GLOW ================= */}
        <div className="pointer-events-none absolute -left-40 top-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-100px] top-[30%] h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[150px]" />

        <div className="pointer-events-none absolute left-[45%] top-[35%] h-[350px] w-[350px] rounded-full bg-[#168cff]/10 blur-[120px]" />


        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-8 py-16 lg:grid-cols-2">


          {/* ================= LEFT SIDE ================= */}
          <div className="max-w-[760px]">

            <p className="mb-6 text-[20px] font-medium text-white/90 md:text-[22px]">
              If Excellence is your Preference,
            </p>


            <h1 className="text-[52px] font-extrabold leading-[1.04] tracking-[-2px] md:text-[68px] lg:text-[70px]">

              Choose our

              <br />

              <span className="text-[#42aef5]">
                Research-Powered
              </span>

              <br />

              Cybersecurity

              <br />

              Services!

            </h1>


            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[720px] text-[18px] leading-8 text-white/80 md:text-[20px]">

              We build a knowledge-driven community focused on awareness,
              education, and the adoption of post-quantum cybersecurity
              technologies.

            </p>


            {/* ================= SERVICE TAGS ================= */}
            <div className="mt-8 flex flex-wrap gap-4">

              <span className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-md">
                Post-Quantum Readiness
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-md">
                Security Assessments
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-md">
                Training & Workshops
              </span>

            </div>


            {/* ================= CONNECT BUTTON ================= */}
            <div className="mt-10">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[17px] font-bold text-[#07145f] transition duration-300 hover:scale-105 hover:bg-[#42aef5] hover:text-white"
              >

                Connect Now

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07145f] text-sm text-white">
                  →
                </span>

              </Link>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex min-h-[580px] items-center justify-center">

            {/* LOGO GLOW */}
            <div className="absolute h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px]" />


            {/* LOGO */}
            <div className="relative z-10 flex items-center justify-center">

              <img
                src="/logo.png"
                alt="SafeQbit - Be Quantum Safe"
                className="h-[410px] w-auto object-contain drop-shadow-[0_0_45px_rgba(66,174,245,0.35)]"
              />

            </div>

          </div>

        </div>


        {/* ================= CSS ================= */}
        <style jsx>{`

          /* =========================================
             FALLING BINARY STREAM
             TOP -> BOTTOM
          ========================================= */

          .binary-column {
            position: absolute;
            top: -500px;

            display: flex;
            flex-direction: column;

            gap: 8px;

            font-family: "Courier New", monospace;
            font-size: 22px;
            font-weight: 500;

            line-height: 1;

            color: #39aaff;

            text-shadow:
              0 0 8px rgba(57, 170, 255, 0.25);

            white-space: nowrap;

            animation-name: binaryFall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            will-change: transform;
          }


          /* TOP TO BOTTOM */
          @keyframes binaryFall {

            0% {
              transform: translateY(-100px);
            }

            100% {
              transform: translateY(calc(100vh + 700px));
            }

          }


          /* Slightly different brightness for digits */
          .binary-column span:nth-child(3n) {
            opacity: 0.55;
          }

          .binary-column span:nth-child(5n) {
            opacity: 0.35;
          }

          .binary-column span:nth-child(7n) {
            opacity: 0.75;
          }


          /* =========================================
             TABLET
          ========================================= */

          @media (max-width: 1024px) {

            .binary-column {
              font-size: 18px;
              gap: 7px;
            }

          }


          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 768px) {

            .binary-column {
              font-size: 15px;
              gap: 6px;
            }

          }


          /* =========================================
             REDUCE MOTION
          ========================================= */

          @media (prefers-reduced-motion: reduce) {

            .binary-column {
              animation: none;
            }

          }

        `}</style>

      </section>

    </main>
  );
}