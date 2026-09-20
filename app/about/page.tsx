import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Research First",
    description:
      "We believe meaningful technology starts with strong research and a clear understanding of emerging challenges.",
  },
  {
    number: "02",
    title: "Security by Design",
    description:
      "Security is considered from the foundation of our solutions rather than being added as an afterthought.",
  },
  {
    number: "03",
    title: "Future Ready",
    description:
      "We focus on technologies and capabilities that help organisations prepare for the security landscape ahead.",
  },
];

const capabilities = [
  "Quantum Computing & Cryptography",
  "Post-Quantum Cryptography",
  "Cybersecurity",
  "Research & Development",
  "Technology Innovation",
  "Capacity Building",
];

export default function AboutPage() {
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
              className="text-sm font-medium text-blue-300 transition hover:text-white"
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
              className="text-sm font-medium text-white"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-blue-300 transition hover:text-white"
            >
              Contact
            </Link>

          </nav>

          <Link
            href="/contact"
            className="hidden bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:block"
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
        <div className="absolute -right-40 top-16 h-[620px] w-[620px] rounded-full border border-blue-500/20" />

        <div className="absolute -right-5 top-36 h-[470px] w-[470px] rounded-full border border-blue-500/20" />

        <div className="relative mx-auto max-w-[1180px]">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            ABOUT SAFEQBIT
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight">
            Building a
            <span className="text-blue-500">
              {" "}Quantum-Safe Future
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-200">
            SafeQbit Technologies works at the intersection of
            quantum technology, research and cybersecurity to
            address the security challenges of tomorrow.
          </p>

        </div>

      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-14 md:grid-cols-2">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-600">
                WHO WE ARE
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Research-powered
                <br />
                cybersecurity.
              </h2>

            </div>


            <div className="space-y-5 text-gray-600">

              <p className="leading-8">
                SafeQbit Technologies is focused on developing
                knowledge, technologies and capabilities around
                quantum technology and cybersecurity.
              </p>

              <p className="leading-8">
                As technology evolves, organisations need to think
                beyond today's security challenges. Our work focuses
                on helping build awareness and readiness for emerging
                threats, including those associated with quantum
                computing.
              </p>

              <p className="leading-8">
                Through research, product development, consulting and
                capacity building, we aim to contribute to a more
                secure and future-ready digital ecosystem.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION / VISION ================= */}
      <section className="bg-[#f5f8fc] px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-7 md:grid-cols-2">

            {/* MISSION */}
            <div className="bg-[#071b3b] p-10 text-white">

              <span className="text-sm font-bold tracking-[3px] text-blue-400">
                OUR MISSION
              </span>

              <h2 className="mt-6 text-3xl font-bold">
                Secure technology.
                <br />
                Empower people.
              </h2>

              <p className="mt-6 leading-8 text-blue-200">
                To develop research-driven cybersecurity solutions,
                promote awareness and build capabilities that help
                organisations navigate the evolving technology
                landscape.
              </p>

            </div>


            {/* VISION */}
            <div className="bg-white p-10">

              <span className="text-sm font-bold tracking-[3px] text-blue-600">
                OUR VISION
              </span>

              <h2 className="mt-6 text-3xl font-bold">
                A future where
                <br />
                security stays ahead.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                To contribute towards a quantum-safe digital future
                where organisations are prepared for emerging
                cybersecurity challenges and technological change.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= OUR VALUES ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <p className="text-sm font-bold tracking-[3px] text-blue-600">
            OUR VALUES
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            What drives us
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.number}
                className="border border-gray-200 p-8 transition hover:border-blue-500"
              >

                <span className="text-sm font-bold text-blue-600">
                  {value.number}
                </span>

                <h3 className="mt-6 text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERTISE ================= */}
      <section className="bg-[#071b3b] px-6 py-24 text-white">

        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <p className="text-sm font-bold tracking-[3px] text-blue-400">
                OUR EXPERTISE
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Technology at the
                <br />
                edge of what's next.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-blue-200">
                Our work brings together research and practical
                technology across quantum computing, cryptography
                and cybersecurity.
              </p>

            </div>


            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="border border-blue-400/20 px-5 py-5"
                >

                  <span className="mr-3 text-blue-500">
                    +
                  </span>

                  <span className="text-sm text-blue-100">
                    {capability}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-white px-6 py-24 text-center">

        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-bold tracking-[3px] text-blue-600">
            CONNECT WITH US
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let's build a safer future together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
            Explore our products and services or get in touch
            to discuss a collaboration.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Get In Touch →
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

            <span>LinkedIn</span>
            <span>YouTube</span>
            <span>Instagram</span>

          </div>

        </div>

      </footer>

    </main>
  );
}