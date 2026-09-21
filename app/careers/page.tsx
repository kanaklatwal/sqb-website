import Link from "next/link";

const openings = [
  {
    title: "Quantum Technology Intern",
    type: "Internship",
    location: "On-site / Hybrid",
    description:
      "Work with the team on research and technology initiatives across quantum computing and cybersecurity.",
  },
  {
    title: "Cybersecurity Research Intern",
    type: "Internship",
    location: "On-site / Hybrid",
    description:
      "Contribute to research-oriented cybersecurity projects and explore emerging security technologies.",
  },
  {
    title: "Web Development Intern",
    type: "Internship",
    location: "On-site / Hybrid",
    description:
      "Build and improve modern web experiences and technology platforms for SafeQbit initiatives.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Learn",
    text: "Work alongside people exploring emerging technologies and cybersecurity challenges.",
  },
  {
    number: "02",
    title: "Build",
    text: "Get hands-on experience working on real technology and research initiatives.",
  },
  {
    number: "03",
    title: "Grow",
    text: "Develop technical, problem-solving and professional skills in a research-driven environment.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-[#071b3b]">

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-900/10 bg-[#071b3b]/95 backdrop-blur-md">

        <div className="mx-auto flex h-[78px] max-w-[1180px] items-center justify-between px-6">

          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            SafeQbit{" "}
            <span className="font-normal text-blue-400">
              Technologies
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">

            <Link
              href="/"
              className="text-sm font-medium text-blue-300 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-sm font-medium text-blue-300 hover:text-white"
            >
              Products
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-blue-300 hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-blue-300 hover:text-white"
            >
              About
            </Link>

            <Link
              href="/careers"
              className="text-sm font-medium text-white"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-blue-300 hover:text-white"
            >
              Contact
            </Link>

          </nav>

          <Link
            href="/contact"
            className="hidden bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-500 md:block"
          >
            Connect Now
          </Link>

        </div>

      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071b3b] px-6 pb-28 pt-40 text-white">

        {/* GRID */}
        <div className="absolute inset-0 opacity-20">

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(65,130,220,.25) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(65,130,220,.25) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "60px 60px",
            }}
          />

        </div>

        {/* GLOW */}
        <div className="absolute right-[-160px] top-[40px] h-[600px] w-[600px] rounded-full border border-blue-500/20" />

        <div className="absolute right-[-30px] top-[140px] h-[430px] w-[430px] rounded-full border border-blue-500/20" />


        <div className="relative mx-auto max-w-[1180px]">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            CAREERS
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight">

            Build the future of

            <span className="text-blue-500">
              {" "}quantum-safe security.
            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-200">
            Join a team working at the intersection of quantum
            technology, cybersecurity and research-driven innovation.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-14 md:grid-cols-2">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                WHY SAFEQBIT
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Work on problems
                <br />
                that matter.
              </h2>

            </div>

            <div>

              <p className="leading-8 text-gray-600">
                At SafeQbit Technologies, you get the opportunity
                to explore emerging technologies and contribute to
                projects across quantum technology and cybersecurity.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Whether you are starting your career or looking to
                expand your expertise, our environment encourages
                learning, experimentation and meaningful contribution.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="bg-[#f5f8fc] px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <p className="text-sm font-bold tracking-[3px] text-blue-600">
            THE EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Learn. Build. Grow.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-white p-8"
              >

                <span className="text-sm font-bold text-blue-600">
                  {benefit.number}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {benefit.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= OPEN POSITIONS ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                OPEN POSITIONS
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Find your opportunity.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Current openings can be updated here as new roles
              become available.
            </p>

          </div>


          {/* JOB LIST */}
          <div className="mt-12 space-y-4">

            {openings.map((opening) => (
              <article
                key={opening.title}
                className="group border border-gray-200 p-7 transition hover:border-blue-500 hover:shadow-md"
              >

                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                  <div className="max-w-2xl">

                    <h3 className="text-xl font-bold">
                      {opening.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {opening.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">

                      <span className="border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {opening.type}
                      </span>

                      <span className="border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
                        {opening.location}
                      </span>

                    </div>

                  </div>


                  <Link
                    href={`/careers/apply?position=${encodeURIComponent(opening.title)}`}
                    className="whitespace-nowrap bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Apply Now →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ================= NO ROLE CTA ================= */}
      <section className="bg-[#071b3b] px-6 py-24 text-white">

        <div className="mx-auto max-w-[900px] text-center">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            DON'T SEE YOUR ROLE?
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            We are always interested in good people.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-200">
            If your skills and interests align with what we do,
            reach out and introduce yourself.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/careers/apply?position=General%20Application"
              className="bg-blue-600 px-8 py-4 font-semibold transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Apply Anyway →
            </Link>

            <Link
              href="/contact"
              className="border border-blue-400/40 px-8 py-4 font-semibold text-blue-200 transition hover:border-blue-300 hover:text-white"
            >
              Get In Touch →
            </Link>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#04142d] px-6 py-10 text-blue-300">

        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-6 md:flex-row">

          <div>

            <p className="font-bold text-white">
              SafeQbit{" "}
              <span className="font-normal text-blue-400">
                Technologies
              </span>
            </p>

            <p className="mt-2 text-sm">
              Research-powered cybersecurity for the quantum era.
            </p>

          </div>

          <div className="flex gap-6 text-sm">

            <span>LinkedIn</span>
            <span>YouTube</span>
            <span>Instagram</span>

          </div>

        </div>

      </footer>

    </main>
  );
}