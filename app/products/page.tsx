import Link from "next/link";

const products = [
  {
    name: "Qubit 4",
    category: "POST-QUANTUM CRYPTOGRAPHY",
    description:
      "A next-generation cybersecurity solution designed to help organisations prepare for the post-quantum era.",
    details:
      "Qubit 4 focuses on quantum-resistant security and modern cryptographic protection for emerging digital threats.",
  },
  {
    name: "QNNX",
    category: "QUANTUM TECHNOLOGY",
    description:
      "Research-driven quantum and cybersecurity technology built for the security challenges of tomorrow.",
    details:
      "QNNX brings together research, quantum technology and cybersecurity to support future-ready digital infrastructure.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-[#071b3b]">

      {/* NAVBAR */}
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
              className="text-sm font-medium text-white"
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


      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071b3b] px-6 pb-24 pt-40 text-white">

        {/* GRID */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(65,130,220,.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(65,130,220,.25) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1180px]">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            OUR PRODUCTS
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight">
            Quantum-Safe
            <span className="text-blue-500"> Solutions</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-200">
            Explore SafeQbit Technologies' research-driven products
            designed for the evolving cybersecurity landscape and
            the quantum era.
          </p>

        </div>

      </section>


      {/* PRODUCTS */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-8 md:grid-cols-2">

            {products.map((product, index) => (
              <article
                key={product.name}
                className="group border border-blue-100 bg-white p-10 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >

                {/* NUMBER */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-blue-600">
                    0{index + 1}
                  </span>

                  <span className="text-3xl text-blue-600">
                    {index === 0 ? "◈" : "⬡"}
                  </span>

                </div>


                {/* CATEGORY */}
                <p className="mt-12 text-xs font-bold tracking-[2px] text-blue-600">
                  {product.category}
                </p>


                {/* NAME */}
                <h2 className="mt-4 text-3xl font-bold">
                  {product.name}
                </h2>


                {/* DESCRIPTION */}
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {product.description}
                </p>


                {/* DETAILS */}
                <p className="mt-5 leading-7 text-gray-500">
                  {product.details}
                </p>


                {/* BUTTON */}
                <button className="mt-8 font-semibold text-blue-600 transition group-hover:text-blue-800">
                  Explore Product →
                </button>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* WHY QUANTUM SAFE */}
      <section className="bg-[#f5f8fc] px-6 py-24">

        <div className="mx-auto max-w-[1180px]">

          <p className="text-sm font-bold tracking-[3px] text-blue-600">
            WHY IT MATTERS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Preparing for the Quantum Era
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="bg-white p-8">
              <span className="text-2xl text-blue-600">
                01
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Quantum Readiness
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Understand and prepare for security challenges
                introduced by the development of quantum computing.
              </p>
            </div>


            <div className="bg-white p-8">
              <span className="text-2xl text-blue-600">
                02
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Stronger Security
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Explore modern approaches to cryptography and
                cybersecurity for emerging digital threats.
              </p>
            </div>


            <div className="bg-white p-8">
              <span className="text-2xl text-blue-600">
                03
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Research Driven
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Solutions built around research, innovation and
                the evolving requirements of the cybersecurity ecosystem.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#071b3b] px-6 py-24 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-bold tracking-[3px] text-blue-400">
            WORK WITH US
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Want to explore our solutions?
          </h2>

          <p className="mt-5 leading-7 text-blue-200">
            Connect with SafeQbit Technologies to learn more about
            our products and cybersecurity solutions.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
          >
            Connect With Us →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
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