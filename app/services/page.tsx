import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Post-Quantum Cryptography",
    short:
      "Preparing organisations for the transition to quantum-resistant security.",
    description:
      "Our post-quantum cryptography services focus on helping organisations understand emerging cryptographic risks and prepare their systems for a future where quantum computing can impact existing security mechanisms.",
    points: [
      "Quantum-resistant security assessment",
      "Cryptography migration planning",
      "Security architecture guidance",
    ],
  },
  {
    number: "02",
    title: "Cybersecurity Consulting",
    short:
      "Research-powered cybersecurity guidance for evolving digital threats.",
    description:
      "We help organisations identify security challenges, strengthen their cybersecurity posture and develop strategies aligned with their technology and business requirements.",
    points: [
      "Cybersecurity assessment",
      "Security strategy and advisory",
      "Threat and risk analysis",
    ],
  },
  {
    number: "03",
    title: "Product Development",
    short:
      "Building technology solutions for the next generation of cybersecurity.",
    description:
      "Our product development approach combines research, engineering and cybersecurity expertise to develop solutions addressing emerging technology and security challenges.",
    points: [
      "Security-focused product development",
      "Research-to-product initiatives",
      "Technology prototyping",
    ],
  },
  {
    number: "04",
    title: "Capacity Building",
    short:
      "Building knowledge and skills for a quantum-safe future.",
    description:
      "We support organisations, professionals and learners through structured learning, awareness and capacity-building initiatives focused on quantum technology and cybersecurity.",
    points: [
      "Cybersecurity training",
      "Quantum technology awareness",
      "Workshops and learning programs",
    ],
  },
];

export default function ServicesPage() {
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
              className="text-sm font-medium text-white"
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
      <section className="relative overflow-hidden bg-[#071b3b] px-6 pb-24 pt-40 text-white">

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


        {/* DECORATIVE CIRCLES */}
        <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full border border-blue-500/20" />

        <div className="absolute -right-10 top-36 h-[460px] w-[460px] rounded-full border border-blue-500/20" />


        <div className="relative mx-auto max-w-[1180px]">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            WHAT WE DO
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight">
            Research-Powered
            <span className="text-blue-500">
              {" "}Cybersecurity Services
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-200">
            From post-quantum cryptography to cybersecurity consulting
            and capacity building, SafeQbit Technologies works to help
            organisations stay prepared for emerging threats.
          </p>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-7 md:grid-cols-2">

            {services.map((service) => (
              <article
                key={service.number}
                className="group border border-blue-100 bg-white p-9 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-blue-600">
                    {service.number}
                  </span>

                  <span className="text-2xl text-blue-600">
                    →
                  </span>

                </div>


                {/* TITLE */}
                <h2 className="mt-10 max-w-md text-2xl font-bold">
                  {service.title}
                </h2>


                {/* SHORT */}
                <p className="mt-4 text-lg leading-7 text-gray-700">
                  {service.short}
                </p>


                {/* DESCRIPTION */}
                <p className="mt-5 leading-7 text-gray-500">
                  {service.description}
                </p>


                {/* POINTS */}
                <div className="mt-7 border-t border-gray-100 pt-6">

                  <p className="text-xs font-bold tracking-[2px] text-blue-600">
                    KEY AREAS
                  </p>

                  <ul className="mt-4 space-y-3">

                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="mt-1 text-blue-600">
                          ✓
                        </span>

                        <span>
                          {point}
                        </span>
                      </li>
                    ))}

                  </ul>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ================= APPROACH ================= */}
      <section className="bg-[#f5f8fc] px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                OUR APPROACH
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Research meets
                <br />
                real-world security.
              </h2>

            </div>


            <div>

              <p className="leading-8 text-gray-600">
                SafeQbit Technologies combines research, cybersecurity
                expertise and technology development to address the
                security challenges emerging from a rapidly changing
                digital environment.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our approach focuses on practical solutions, continuous
                learning and preparing organisations for the transition
                towards a quantum-safe future.
              </p>

            </div>

          </div>


          {/* APPROACH CARDS */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="bg-white p-7">

              <span className="text-sm font-bold text-blue-600">
                01
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Research
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Understanding emerging technologies and evolving
                cybersecurity challenges.
              </p>

            </div>


            <div className="bg-white p-7">

              <span className="text-sm font-bold text-blue-600">
                02
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Innovation
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Translating research and ideas into practical
                technology solutions.
              </p>

            </div>


            <div className="bg-white p-7">

              <span className="text-sm font-bold text-blue-600">
                03
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Impact
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Helping organisations improve their security
                readiness and technology capabilities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#071b3b] px-6 py-24 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            LET'S WORK TOGETHER
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Build for a quantum-safe future.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-200">
            Connect with SafeQbit Technologies to explore our
            cybersecurity services and collaboration opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
          >
            Connect With Us →
          </Link>

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

            <span>
              LinkedIn
            </span>

            <span>
              YouTube
            </span>

            <span>
              Instagram
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}