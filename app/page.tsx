import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Post-Quantum Cryptography Solutions",
    description:
      "Future-ready cryptographic solutions designed to help organisations prepare for the quantum era.",
  },
  {
    number: "02",
    title: "Cybersecurity Consulting & Advisory",
    description:
      "Expert guidance to strengthen cybersecurity posture, resilience and risk management.",
  },
  {
    number: "03",
    title: "Research & Development (R&D)",
    description:
      "Applied research and emerging technologies focused on solving real-world security challenges.",
  },
  {
    number: "04",
    title: "Security Tools & Platforms",
    description:
      "Practical tools and platforms for security assessment, protection and continuous improvement.",
  },
  {
    number: "05",
    title: "Training & Workshops",
    description:
      "Hands-on cybersecurity and quantum technology learning designed for professionals and organisations.",
  },
];

const recentActivities = [
  {
    year: "2025",
    category: "RECOGNITION",
    title: "Cybersecurity Grand Challenge",
    description:
      "National-level cybersecurity innovation and recognition.",
  },
  {
    year: "2025",
    category: "RESEARCH",
    title: "Quantum Technology Research",
    description:
      "Research-driven initiatives focused on quantum technologies and security.",
  },
  {
    year: "2025",
    category: "COLLABORATION",
    title: "Industry & Academic Collaborations",
    description:
      "Building meaningful partnerships across industry, academia and research.",
  },
];

const capacityPrograms = [
  {
    number: "01",
    title: "Post-Quantum Cryptography Fundamentals",
    tag: "Workshop",
  },
  {
    number: "02",
    title: "Enterprise Cybersecurity Strategy",
    tag: "Training",
  },
  {
    number: "03",
    title: "Tailored Capacity-Building Solutions",
    tag: "Customised",
  },
];

const collaborators = [
  "Academic Partner",
  "Industry Partner",
  "Research Partner",
  "Technology Partner",
  "Government Partner",
];

const whyUs = [
  {
    number: "01",
    title: "R&D Driven Solutions",
    description:
      "Our solutions are informed by research and designed around emerging cybersecurity challenges.",
  },
  {
    number: "02",
    title: "Industry & Research Expertise",
    description:
      "We combine practical cybersecurity knowledge with research-led quantum technology expertise.",
  },
  {
    number: "03",
    title: "Future-Ready Security",
    description:
      "We help organisations prepare today for the security challenges of tomorrow.",
  },
];

const careers = [
  "Open Position — Details to be added",
  "Open Position — Details to be added",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#071b3b]">

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .75; transform: scale(1.06); }
        }
        @keyframes sectionReveal {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardLift {
          from { transform: translateY(0); }
          to { transform: translateY(-6px); }
        }
        @keyframes softShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .hero-fade-up {
          animation: heroFadeUp .8s ease-out both;
        }
        .hero-fade-up-delay-1 {
          animation: heroFadeUp .8s .12s ease-out both;
        }
        .hero-fade-up-delay-2 {
          animation: heroFadeUp .8s .24s ease-out both;
        }
        .hero-fade-up-delay-3 {
          animation: heroFadeUp .8s .36s ease-out both;
        }
        .hero-orbit {
          animation: orbitPulse 7s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes orbitPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: .55; }
          50% { transform: translate(-50%, -50%) scale(1.04); opacity: .9; }
        }
        .hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }
        .hero-glow {
          animation: glowPulse 4s ease-in-out infinite;
        }
        .sq-reveal {
          animation: sectionReveal .8s cubic-bezier(.22,1,.36,1) both;
        }
        .sq-card {
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .sq-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(7, 27, 59, .10);
        }
        .sq-shimmer {
          background-size: 200% 100%;
          animation: softShimmer 3.5s linear infinite;
        }
        .sq-delay-1 { animation-delay: .08s; }
        .sq-delay-2 { animation-delay: .16s; }
        .sq-delay-3 { animation-delay: .24s; }
        .sq-delay-4 { animation-delay: .32s; }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up,
          .hero-fade-up-delay-1,
          .hero-fade-up-delay-2,
          .hero-fade-up-delay-3,
          .hero-orbit,
          .hero-float,
          .hero-glow,
          .sq-reveal,
          .sq-card,
          .sq-shimmer {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>


      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-400/10 bg-[#071b3b]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[78px] max-w-[1180px] items-center justify-between px-6">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            SafeQbit{" "}
            <span className="font-normal text-blue-400">
              Technologies
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="text-sm font-medium text-white transition hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-sm font-medium text-blue-300 transition hover:text-white"
            >
              Products
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-blue-300 transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-blue-300 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/careers"
              className="text-sm font-medium text-blue-300 transition hover:text-white"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-blue-300 transition hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Connect Now
            </Link>

          </nav>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#071b3b] pt-[78px]">

        {/* HERO BASE */}
        <div className="absolute inset-0 bg-[#071b3b]" />

        {/* BACKGROUND IMAGE — RIGHT SIDE ONLY
            The source image contains its own text/logo, so it must not
            cover the complete hero. Keeping it on the right prevents
            it from overlapping the actual Hero copy. */}
        <div className="absolute right-0 top-0 hidden h-full w-[58%] overflow-hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.png')" }}
          />

          {/* Keep the image subtle */}
          <div className="absolute inset-0 bg-[#071b3b]/50" />

          {/* Fade image into the clean left side */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#071b3b] via-[#071b3b]/85 to-transparent" />

          {/* Fade image into the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071b3b] to-transparent" />
        </div>

        {/* Blue atmospheric glows */}
        <div className="hero-glow absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-[110px]" />
        <div className="hero-glow absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(65,130,220,.18) 1px, transparent 1px),
                linear-gradient(90deg, rgba(65,130,220,.18) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* HERO CONTAINER */}
        <div className="relative mx-auto grid min-h-[680px] max-w-[1180px] items-center gap-12 px-6 lg:grid-cols-2">

          {/* HERO LEFT */}
          <div className="max-w-[650px]">

            <div className="hero-fade-up mb-8 inline-flex items-center gap-3 border border-blue-400/40 bg-[#071b3b]/35 px-5 py-2.5 text-xs font-semibold tracking-[2px] text-blue-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              BE QUANTUM SAFE
            </div>

            <div className="hero-fade-up-delay-1 mb-5 flex items-center gap-4">
              <span className="h-[2px] w-9 bg-blue-500" />
              <span className="text-sm font-semibold tracking-[3px] text-blue-300">
                RESEARCH-POWERED CYBERSECURITY
              </span>
            </div>

            <h1 className="hero-fade-up-delay-1 max-w-[620px] text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-[46px]">
              If Excellence is your
              <br />
              Preference, Choose our
              <br />
              <span className="text-blue-400">Research-Powered</span>
              <br />
              Cybersecurity Services!
            </h1>

            <p className="hero-fade-up-delay-2 mt-7 max-w-[590px] text-base leading-7 text-blue-100 md:text-[17px]">
              SafeQbit Technologies delivers research-powered cybersecurity
              solutions to help organisations prepare for evolving digital
              threats and the quantum era.
            </p>

            <div className="hero-fade-up-delay-2 mt-7 flex max-w-[620px] flex-wrap gap-2.5">
              {[
                "Post-Quantum Cryptography",
                "Cybersecurity Consulting",
                "Product Development",
                "Capacity Building",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-blue-400/50 bg-[#071b3b]/45 px-4 py-2 text-xs text-blue-100 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-500/15"
                >
                  <span className="mr-2 text-blue-400">•</span>
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="#products"
                className="bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Explore Products
                <span className="ml-3">→</span>
              </Link>

              <Link
                href="/contact"
                className="text-sm font-semibold text-blue-200 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Connect With Us
                <span className="ml-3">→</span>
              </Link>
            </div>

            <div className="hero-fade-up-delay-3 mt-12 flex flex-wrap items-center gap-5 border-t border-blue-400/20 pt-7 text-xs font-semibold text-blue-200">
              <span>✓ DPIIT Registered</span>
              <span className="text-blue-500">|</span>
              <span>✓ MeitY Facilitated</span>
              <span className="text-blue-500">|</span>
              <span>✓ National Award Winner</span>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="relative hidden h-[550px] lg:block">

            <div className="hero-float absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30" />
            <div className="hero-orbit absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30" />
            <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20" />

            {/* SHIELD */}
            <div className="hero-float absolute left-1/2 top-1/2 h-[330px] w-[280px] -translate-x-1/2 -translate-y-1/2">

              <div
                className="absolute inset-0 border-2 border-blue-400/70"
                style={{
                  clipPath:
                    "polygon(50% 0%,100% 20%,92% 68%,75% 86%,50% 100%,25% 86%,8% 68%,0% 20%)",
                }}
              />

              <div
                className="absolute inset-[25px] border border-blue-400/50"
                style={{
                  clipPath:
                    "polygon(50% 0%,100% 20%,92% 68%,75% 86%,50% 100%,25% 86%,8% 68%,0% 20%)",
                }}
              />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="mx-auto h-10 w-9 rounded-t-full border-2 border-blue-400 border-b-0" />

                <div className="relative -mt-1 h-16 w-20 border-2 border-blue-400 bg-[#071b3b]/80 backdrop-blur-sm">
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400" />
                </div>
              </div>
            </div>

            {/* QUANTUM NODES */}
            <div className="absolute left-[20%] top-[28%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_15px_#2563eb]" />
            <div className="absolute right-[18%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_15px_#2563eb]" />
            <div className="absolute bottom-[28%] left-[25%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_15px_#2563eb]" />
            <div className="absolute bottom-[20%] right-[25%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_15px_#2563eb]" />

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-8 text-xs font-semibold text-white">
              <span className="text-blue-300">SECURITY ARCHITECTURE</span>
              <span>
                <b>PQC</b>{" "}
                <small className="ml-1 text-blue-300">Ready</small>
              </span>
              <span>
                <b>Gov.</b>{" "}
                <small className="ml-1 text-blue-300">Certified</small>
              </span>
              <span>
                <b>R&amp;D</b>{" "}
                <small className="ml-1 text-blue-300">Backed</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECENT ACTIVITY ================= */}
      <section className="sq-reveal bg-white px-6 py-20">

        <div className="mx-auto max-w-[1180px]">

          <div className="flex items-end justify-between border-b border-blue-100 pb-5">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                LATEST UPDATES
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Recent Activity
              </h2>

            </div>

            <button className="hidden text-sm font-semibold text-blue-600 transition hover:text-blue-800 md:block">
              View All →
            </button>

          </div>


          <div className="mt-7">

            <div className="hidden grid-cols-[100px_170px_1fr_40px] border-b border-blue-100 px-4 py-4 text-xs font-semibold tracking-wider text-slate-400 md:grid">

              <span>
                YEAR
              </span>

              <span>
                CATEGORY
              </span>

              <span>
                ACTIVITY
              </span>

              <span />

            </div>


            {recentActivities.map((activity) => (
              <div
                key={activity.title}
                className="grid gap-3 border-b border-blue-100 px-4 py-5 md:grid-cols-[100px_170px_1fr_40px] md:items-center"
              >

                <span className="text-sm text-slate-500">
                  {activity.year}
                </span>

                <span className="text-xs font-semibold text-blue-600">
                  {activity.category}
                </span>

                <div>

                  <h3 className="text-base font-semibold">
                    {activity.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {activity.description}
                  </p>

                </div>

                <span className="text-blue-600">
                  →
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="bg-[#eef5fc] px-6 py-20"
      >

        <div className="mx-auto max-w-[1180px]">

          <div className="flex flex-col justify-between gap-5 border-b border-blue-200 pb-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                PRODUCT PORTFOLIO
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Our Products
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-6 text-slate-500">
              SafeQbit develops cybersecurity products built on rigorous
              research and engineered to protect organisations against
              current and future threats.
            </p>

          </div>


          {/* FEATURED PRODUCT */}
          <div className="sq-card mt-12 grid overflow-hidden border border-blue-200 bg-white md:grid-cols-[1.3fr_0.7fr]">

            <div className="p-8 md:p-10">

              <div className="flex flex-wrap gap-3">

                <span className="bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                  FEATURED PRODUCT
                </span>

                <span className="border border-blue-200 px-3 py-1.5 text-xs text-blue-600">
                  Quantum-Safe Communication
                </span>

              </div>


              <h3 className="mt-6 text-2xl font-bold md:text-3xl">
                PQCTransitSecure™
              </h3>


              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                A quantum-safe cybersecurity solution designed to help
                organisations transition towards stronger protection against
                emerging quantum-enabled threats.
              </p>


              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {[
                  "Hybrid PQC",
                  "Secure Communication",
                  "Future-Ready",
                  "Research-Backed",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="text-sm text-slate-600"
                  >
                    <span className="mr-2 text-blue-600">
                      ✓
                    </span>

                    {feature}
                  </div>
                ))}

              </div>


              <div className="mt-7 flex flex-wrap gap-2.5">

                {[
                  "Government & Defence",
                  "Banking & Finance",
                  "Telecom",
                  "Enterprise Systems",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-blue-100 px-3 py-1.5 text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ))}

              </div>


              <Link
                href="/products"
                className="mt-8 inline-block bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Product →
              </Link>

            </div>


            {/* PRODUCT VISUAL */}
            <div className="relative flex min-h-[340px] items-center justify-center border-t border-blue-100 bg-[#eef5fc] md:border-l md:border-t-0">

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-blue-400/50">

                <div className="absolute h-36 w-36 rounded-full border border-blue-400/40" />

                <div className="absolute h-28 w-28 rounded-full border border-blue-400/30" />

                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-blue-500 bg-white text-2xl text-blue-600">
                  ◈
                </div>

              </div>

              <div className="absolute bottom-6 left-6 text-xs font-semibold text-blue-600">
                QUANTUM SAFE
              </div>

              <div className="absolute bottom-6 right-6 text-xs text-slate-500">
                PQC READY
              </div>

            </div>

          </div>


          <div className="mt-3 border border-dashed border-blue-200 bg-white px-5 py-4 text-sm text-slate-500">

            <span>
              MORE SOLUTIONS
            </span>

            <Link
              href="/products"
              className="float-right font-semibold text-blue-600"
            >
              VIEW ALL PRODUCTS →
            </Link>

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="sq-reveal bg-white px-6 py-20">

        <div className="mx-auto max-w-[1180px]">

          <div className="flex flex-col justify-between gap-5 border-b border-blue-100 pb-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                WHAT WE OFFER
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Our Services
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-6 text-slate-500">
              Research-backed cybersecurity capabilities across consulting,
              R&amp;D, security engineering and capacity building.
            </p>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="sq-card group border border-blue-100 bg-white p-7 transition hover:border-blue-500 hover:shadow-md"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-10 w-10 items-center justify-center border border-blue-200 text-lg text-blue-600">
                    ◇
                  </div>

                  <span className="text-sm text-blue-200">
                    {service.number}
                  </span>

                </div>


                <h3 className="mt-6 text-lg font-bold">
                  {service.title}
                </h3>


                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>


                <Link
                  href="/services"
                  className="mt-6 inline-block text-sm font-semibold text-blue-600"
                >
                  Explore →
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CAPACITY BUILDING ================= */}
      <section className="sq-reveal bg-[#eef5fc] px-6 py-20">

        <div className="mx-auto max-w-[1180px]">

          <div className="flex flex-col justify-between gap-5 border-b border-blue-200 pb-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                TRAINING &amp; ENABLEMENT
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Capacity Building
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-6 text-slate-500">
              Building organisational capabilities through practical training,
              workshops and customised cybersecurity programmes.
            </p>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {capacityPrograms.map((program) => (
              <div
                key={program.number}
                className="sq-card border border-blue-200 bg-white p-7"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold text-blue-600">
                    CAPACITY PROGRAMME
                  </span>

                  <span className="border border-blue-100 px-3 py-1 text-xs text-slate-500">
                    {program.tag}
                  </span>

                </div>


                <div className="mt-7 text-3xl font-light text-blue-200">
                  {program.number}
                </div>


                <h3 className="mt-3 text-lg font-bold">
                  {program.title}
                </h3>


                <Link
                  href="/services"
                  className="mt-6 inline-block text-sm font-semibold text-blue-600"
                >
                  Request More →
                </Link>

              </div>
            ))}

          </div>


          <div className="mt-3 border border-dashed border-blue-200 bg-white px-5 py-4 text-sm text-slate-500">

            More programmes can be tailored to your organisation.

            <Link
              href="/contact"
              className="float-right font-semibold text-blue-600"
            >
              CONTACT US →
            </Link>

          </div>

        </div>
      </section>


      {/* ================= COLLABORATORS ================= */}
      <section className="sq-reveal bg-white px-6 py-20">

        <div className="mx-auto max-w-[1180px] text-center">

          <p className="text-sm font-bold tracking-[3px] text-blue-600">
            PARTNERSHIPS &amp; COLLABORATION
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Our Collaborators
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            SafeQbit engages with institutions, organisations and industry
            partners to advance quantum-safe cybersecurity and research.
          </p>


          <div className="mt-10 grid grid-cols-2 border border-blue-100 md:grid-cols-5">

            {collaborators.map((item, index) => (
              <div
                key={item}
                className="flex min-h-[120px] items-center justify-center border-b border-blue-100 p-5 md:border-b-0 md:border-r last:border-r-0"
              >

                <div>

                  <div className="mx-auto flex h-12 w-28 items-center justify-center border border-dashed border-blue-200 text-xs font-semibold text-blue-400">
                    LOGO {index + 1}
                  </div>

                  <p className="mt-3 text-xs text-slate-400">
                    {item}
                  </p>

                </div>

              </div>
            ))}

          </div>


          <p className="mt-5 text-xs text-slate-400">
            Collaborator logos can be replaced with the approved brand assets.
          </p>

        </div>
      </section>


      {/* ================= WHY US ================= */}
      <section className="bg-[#071b3b] px-6 py-20 text-white">

        <div className="mx-auto max-w-[1180px]">

          <div className="flex flex-col justify-between gap-5 border-b border-blue-400/20 pb-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-400">
                WHY SAFEQBIT
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Why Us
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-6 text-blue-200">
              Backed by research, innovation and practical security
              engineering, SafeQbit focuses on building future-ready
              cybersecurity solutions.
            </p>

          </div>


          <div className="mt-10 grid gap-10 md:grid-cols-3">

            {whyUs.map((item) => (
              <div
                key={item.number}
                className="border-t border-blue-500/30 pt-6"
              >

                <div className="flex items-center justify-between">

                  <span className="text-3xl font-light text-blue-500">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center border border-blue-500/30 text-lg text-blue-400">
                    ◇
                  </span>

                </div>


                <h3 className="mt-6 text-lg font-bold">
                  {item.title}
                </h3>


                <p className="mt-4 text-sm leading-6 text-blue-200">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= RECOGNISED ================= */}
      <section className="sq-reveal bg-white px-6 py-20">

        <div className="mx-auto max-w-[1180px]">

          <div className="flex flex-col justify-between gap-5 border-b border-blue-100 pb-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                ACHIEVEMENTS &amp; RECOGNITION
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Recognised for Excellence
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-6 text-slate-500">
              SafeQbit continues to contribute to cybersecurity research,
              innovation and emerging technology initiatives.
            </p>

          </div>


          {/* FEATURED AWARD */}
          <div className="mt-10 grid overflow-hidden border border-blue-200 md:grid-cols-[0.7fr_1.3fr]">

            <div className="flex min-h-[280px] items-center justify-center bg-[#eef5fc]">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-400 text-3xl text-blue-500">
                  ☆
                </div>

                <p className="mt-5 text-sm font-semibold text-blue-600">
                  NATIONAL RECOGNITION
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  Cybersecurity Innovation
                </p>

              </div>

            </div>


            <div className="p-8 md:p-10">

              <div className="flex gap-3">

                <span className="bg-blue-600 px-3 py-1.5 text-xs text-white">
                  NATIONAL AWARD
                </span>

                <span className="px-3 py-1.5 text-xs text-slate-400">
                  Cybersecurity
                </span>

              </div>


              <div className="mt-7 text-3xl font-light text-blue-100">
                01
              </div>


              <h3 className="mt-2 text-2xl font-bold">
                Cybersecurity Grand Challenge
              </h3>


              <p className="mt-4 text-sm leading-6 text-slate-500">
                Recognition associated with cybersecurity innovation and
                technology development.
              </p>


              <div className="mt-6 text-sm font-semibold text-blue-600">
                View Recognition →
              </div>

            </div>

          </div>


          {/* SMALL CARDS */}
          <div className="mt-3 grid gap-3 md:grid-cols-3">

            {[
              "R&D / Major Milestone",
              "Final / National Recognition",
              "Facilitating Cybersecurity, MeitY",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-blue-100 p-6"
              >

                <div className="flex justify-between">

                  <span className="text-2xl font-light text-blue-200">
                    0{index + 1}
                  </span>

                  <span className="text-xs text-blue-500">
                    RECOGNITION
                  </span>

                </div>

                <p className="mt-5 text-sm font-semibold">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CAREERS ================= */}
      <section className="sq-reveal bg-[#eef5fc] px-6 py-20">

        <div className="mx-auto max-w-[1180px]">

          <div className="flex flex-col justify-between gap-5 border-b border-blue-200 pb-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                JOIN OUR TEAM
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Careers at SafeQbit
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-6 text-slate-500">
              Join SafeQbit&apos;s growing team and contribute to the future of
              cybersecurity research, product development and quantum-safe
              solutions.
            </p>

          </div>


          <div className="mt-10 space-y-3">

            {careers.map((career, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 border border-blue-200 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >

                <span className="text-sm uppercase text-slate-500">
                  {career}
                </span>

                <Link
                  href="/careers"
                  className="w-fit border border-blue-500 px-5 py-2.5 text-sm font-semibold text-blue-600"
                >
                  View Details →
                </Link>

              </div>
            ))}

          </div>


          <div className="mt-3 border border-dashed border-blue-200 bg-white px-5 py-4 text-center text-sm text-slate-400">

            Don&apos;t see your role?{" "}

            <Link
              href="/contact"
              className="font-semibold text-blue-600"
            >
              Reach out
            </Link>{" "}

            and share your profile.

          </div>

        </div>
      </section>


      {/* ================= FOLLOW SAFEQBIT ================= */}
      <section className="sq-reveal bg-white px-6 py-20">

        <div className="mx-auto max-w-[1180px] text-center">

          <p className="text-sm font-bold tracking-[3px] text-blue-600">
            STAY CONNECTED
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Follow SafeQbit
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            Stay informed about cybersecurity research, quantum technology,
            products, collaborations and company updates.
          </p>


          <div className="mx-auto mt-10 grid max-w-[850px] gap-4 md:grid-cols-3">

            {/* LINKEDIN */}
            <a
              href="#"
              className="border border-blue-100 bg-white p-7 text-left transition hover:border-blue-500 hover:shadow-md"
            >

              <div className="flex h-10 w-10 items-center justify-center border border-blue-200 text-sm font-semibold text-blue-600">
                in
              </div>

              <h3 className="mt-5 text-base font-bold">
                LinkedIn
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                SafeQbit Technologies
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                Follow →
              </span>

            </a>


            {/* INSTAGRAM */}
            <a
              href="#"
              className="border border-blue-100 bg-white p-7 text-left transition hover:border-blue-500 hover:shadow-md"
            >

              <div className="flex h-10 w-10 items-center justify-center border border-blue-200 text-lg text-blue-600">
                ◎
              </div>

              <h3 className="mt-5 text-base font-bold">
                Instagram
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                @safeqbit
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                Follow →
              </span>

            </a>


            {/* YOUTUBE */}
            <a
              href="#"
              className="border border-blue-100 bg-white p-7 text-left transition hover:border-blue-500 hover:shadow-md"
            >

              <div className="flex h-10 w-10 items-center justify-center border border-blue-200 text-sm text-blue-600">
                ▶
              </div>

              <h3 className="mt-5 text-base font-bold">
                YouTube
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                SafeQbit Technologies
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                Follow →
              </span>

            </a>

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="sq-reveal relative overflow-hidden bg-[#071b3b] px-6 py-24 text-white">

{/* Background */}
<div
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{
    backgroundImage: "url('/images/hero-bg.png')",
  }}
/>

{/* Overlay */}
<div className="absolute inset-0 bg-[#071b3b]/85" />

{/* Decorative circles */}
<div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full border border-blue-500/20" />

<div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full border border-blue-500/20" />

{/* Grid */}
<div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage:
      "linear-gradient(rgba(59,130,246,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.5) 1px, transparent 1px)",
    backgroundSize: "70px 70px",
  }}
/>

{/* Content */}
<div className="relative mx-auto max-w-[750px] text-center">

  <p className="text-sm font-semibold tracking-[3px] text-blue-400">
    READY TO GO QUANTUM SAFE?
  </p>

  <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
    EXPLORE THE QUANTUM-
    <br />
    SAFE WORLD WITH US!
  </h2>

  <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-blue-200">
    Protect your organisation with research-powered cybersecurity
    products, consulting and capacity-building solutions built for
    the quantum era.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-5">

    <Link
      href="/products"
      className="bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
    >
      Explore Products →
    </Link>

    <Link
      href="/contact"
      className="px-4 py-3.5 text-sm font-semibold text-blue-300 transition hover:text-white"
    >
      Connect With Us →
    </Link>

  </div>

</div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-white px-6 py-12 text-[#071b3b]">

        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr]">

          {/* BRAND */}
          <div>

            <p className="text-lg font-bold">
              SafeQbit{" "}
              <span className="font-normal text-blue-500">
                Technologies
              </span>
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Research-powered cybersecurity for the quantum era.
              Building secure, future-ready solutions through research,
              innovation and practical cybersecurity engineering.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              <span className="border border-blue-200 px-3 py-1.5 text-xs text-blue-600">
                DPIIT Registered
              </span>

              <span className="border border-blue-200 px-3 py-1.5 text-xs text-blue-600">
                MeitY Facilitated
              </span>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">

              <Link
                href="/"
                className="block hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block hover:text-blue-600"
              >
                About
              </Link>

              <Link
                href="/careers"
                className="block hover:text-blue-600"
              >
                Careers
              </Link>

              <Link
                href="/contact"
                className="block hover:text-blue-600"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* PRODUCTS & SERVICES */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Products &amp; Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">

              <Link
                href="/products"
                className="block hover:text-blue-600"
              >
                PQCTransitSecure
              </Link>

              <Link
                href="/products"
                className="block hover:text-blue-600"
              >
                PQC Solutions
              </Link>

              <Link
                href="/services"
                className="block hover:text-blue-600"
              >
                Cybersecurity Consulting
              </Link>

              <Link
                href="/services"
                className="block hover:text-blue-600"
              >
                Training
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">

              <p>
                info@safeqbit.in
              </p>

              <Link
                href="/contact"
                className="block text-blue-600 hover:text-blue-800"
              >
                Get in touch →
              </Link>

            </div>

          </div>

        </div>


        <div className="mx-auto mt-10 flex max-w-[1180px] flex-col justify-between gap-4 border-t border-blue-100 pt-6 text-xs text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} SafeQbit Technologies. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span>
              Privacy Policy
            </span>

            <span>
              Terms &amp; Conditions
            </span>
          </div>

        </div>

      </footer>

    </main>
  );
}