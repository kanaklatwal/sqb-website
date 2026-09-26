"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06145f] text-white">

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06145f]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[96px] max-w-[1500px] items-center justify-between px-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="SafeQbit Technologies"
              className="h-[65px] w-auto object-contain"
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
      <section className="relative flex min-h-screen items-center overflow-hidden pt-[96px]">

        {/* BINARY BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">

          <div className="absolute inset-0 bg-gradient-to-br from-[#07145f] via-[#071b70] to-[#020c42]" />

          <div className="binary binary-1">
            0 1 1 0 1 0 0 1 1 0 1 1 0 0 1 0
            <br />
            1 0 0 1 1 0 1 0 0 1 0 1 1 0 1 0
            <br />
            0 1 0 0 1 1 0 1 0 0 1 1 0 1 0 1
            <br />
            1 1 0 1 0 0 1 0 1 1 0 1 0 0 1 1
          </div>

          <div className="binary binary-2">
            1 0 1 1 0 0 1 0 1 0 1 1 0 1 0 0
            <br />
            0 1 0 1 1 0 0 1 0 1 1 0 1 0 1 1
            <br />
            1 1 0 0 1 0 1 1 0 0 1 0 1 1 0 1
          </div>

          <div className="binary binary-3">
            0 0 1 1 0 1 0 1 1 0 0 1 1 0 1 0
            <br />
            1 0 1 0 0 1 1 0 1 0 1 0 0 1 1 0
            <br />
            0 1 1 0 1 0 1 1 0 1 0 0 1 0 1 1
          </div>

        </div>


        {/* BLUE GLOW */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="pointer-events-none absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-[150px]" />


        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 px-8 py-20 lg:grid-cols-2">

          {/* LEFT */}
          <div className="max-w-[760px]">

            <p className="mb-5 text-[22px] font-medium text-white/90">
              If Excellence is your Preference,
            </p>

            <h1 className="text-[52px] font-extrabold leading-[1.05] tracking-[-2px] md:text-[70px]">

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


            <p className="mt-8 max-w-[700px] text-[19px] leading-8 text-white/85 md:text-[21px]">
              We build a knowledge-driven community focused on awareness,
              education, and the adoption of post-quantum cybersecurity
              technologies.
            </p>


            {/* SERVICE TAGS */}
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


            {/* BUTTON */}
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


          {/* ================= RIGHT ================= */}
          <div className="relative flex min-h-[600px] items-center justify-center">

            {/* GLOW */}
            <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-500/20 blur-[100px]" />


            {/* LOGO */}
            <div className="relative z-10 flex flex-col items-center">

              <img
                src="/logo.png"
                alt="SafeQbit"
                className="h-[330px] w-auto object-contain drop-shadow-[0_0_35px_rgba(66,174,245,0.35)]"
              />

              {/* <h2 className="mt-8 text-center text-[38px] font-bold md:text-[46px]">
                Be Quantum Safe
              </h2> */}

            </div>

          </div>

        </div>

      </section>


      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`

        .binary {
          position: absolute;
          font-family: monospace;
          font-size: 28px;
          line-height: 1.6;
          letter-spacing: 12px;
          color: #238eff;
          white-space: nowrap;
        }

        .binary-1 {
          left: 3%;
          top: 15%;
          animation: moveBinary 18s linear infinite;
        }

        .binary-2 {
          right: 8%;
          top: 25%;
          animation: moveBinaryReverse 22s linear infinite;
        }

        .binary-3 {
          left: 35%;
          bottom: 5%;
          animation: moveBinary 25s linear infinite;
        }

        @keyframes moveBinary {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-40px);
          }

          100% {
            transform: translateY(0);
          }
        }

        @keyframes moveBinaryReverse {
          0% {
            transform: translateY(-30px);
          }

          50% {
            transform: translateY(30px);
          }

          100% {
            transform: translateY(-30px);
          }
        }

        @media (max-width: 768px) {

          .binary {
            font-size: 18px;
            letter-spacing: 6px;
          }

        }

      `}</style>

    </main>
  );
}