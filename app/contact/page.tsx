"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#071b3b]">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-blue-100 bg-[#071b3b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
              SQ
            </div>

            <div>
              <div className="text-lg font-bold tracking-wide text-white">
                SafeQbit
              </div>
              <div className="text-[9px] tracking-[0.25em] text-blue-300">
                TECHNOLOGIES
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-blue-200 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-sm font-medium text-blue-200 transition hover:text-white"
            >
              Products
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-blue-200 transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-blue-200 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/careers"
              className="text-sm font-medium text-blue-200 transition hover:text-white"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-white"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Connect Now
            </Link>
          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071b3b]">
        
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.35) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1180px] px-6 py-24 text-center">
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-blue-300">
            GET IN TOUCH
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Let&apos;s Build a
            <span className="text-blue-400"> Quantum-Safe </span>
            Future
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            Have a project, research idea, partnership opportunity, or
            cybersecurity challenge? Connect with the SafeQbit team.
          </p>
        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="mx-auto max-w-[1180px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-600">
              CONTACT SAFEQBIT
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Let&apos;s start a conversation.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Whether you are looking for cybersecurity solutions, quantum
              technology research, collaboration opportunities, or technical
              expertise, we would be happy to hear from you.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-5">

              {/* Email */}
              <div className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ✉
                </div>

                <div>
                  <h3 className="font-semibold text-[#071b3b]">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Get in touch with our team
                  </p>

                  <a
                    href="mailto:info@safeqbit.in"
                    className="mt-2 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    info@safeqbit.in
                  </a>
                </div>
              </div>


              {/* Collaboration */}
              <div className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ◇
                </div>

                <div>
                  <h3 className="font-semibold text-[#071b3b]">
                    Collaboration
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Interested in research, academic, industry, or technology
                    collaborations?
                  </p>
                </div>
              </div>


              {/* Careers */}
              <div className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ↗
                </div>

                <div>
                  <h3 className="font-semibold text-[#071b3b]">
                    Careers
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Explore opportunities with SafeQbit.
                  </p>

                  <Link
                    href="/careers"
                    className="mt-2 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    View Careers →
                  </Link>
                </div>
              </div>

            </div>
          </div>


          {/* ================= FORM ================= */}
          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-xl md:p-10">

            <div className="mb-8">
              <p className="text-sm font-semibold tracking-[0.15em] text-blue-600">
                SEND US A MESSAGE
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#071b3b]">
                How can we help?
              </h2>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                  ✓
                </div>

                <h3 className="mt-5 text-xl font-bold text-green-800">
                  Thank you!
                </h3>

                <p className="mt-2 text-sm leading-6 text-green-700">
                  Your message has been received. Our team will get back to
                  you soon.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full bg-[#071b3b] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>


                {/* Phone + Organization */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="organization"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Organization
                    </label>

                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="Company / Institution"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>


                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject *
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="cybersecurity">
                      Cybersecurity Services
                    </option>
                    <option value="quantum">
                      Quantum Technology
                    </option>
                    <option value="research">
                      Research Collaboration
                    </option>
                    <option value="partnership">
                      Partnership
                    </option>
                    <option value="careers">
                      Careers
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>


                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#071b3b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Message →
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  We respect your privacy and will only use your information
                  to respond to your enquiry.
                </p>

              </form>
            )}

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#071b3b]">
        <div className="mx-auto max-w-[1180px] px-6 py-16 text-center">

          <p className="text-sm font-semibold tracking-[0.2em] text-blue-300">
            QUANTUM-SAFE BY DESIGN
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white md:text-4xl">
            Ready to secure what comes next?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100">
            Explore our products and services or connect with the SafeQbit
            team to discuss your requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/products"
              className="rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Explore Products
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-blue-400 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
            >
              Our Services
            </Link>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#041329] text-white">

        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-14 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 font-bold">
                SQ
              </div>

              <div>
                <div className="font-bold tracking-wide">
                  SafeQbit
                </div>

                <div className="text-[9px] tracking-[0.25em] text-blue-300">
                  TECHNOLOGIES
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-blue-200">
              Research-powered cybersecurity for a quantum-safe future.
            </p>

          </div>


          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-200">
              <Link
                href="/about"
                className="block hover:text-white"
              >
                About
              </Link>

              <Link
                href="/careers"
                className="block hover:text-white"
              >
                Careers
              </Link>

              <Link
                href="/contact"
                className="block hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>


          {/* Explore */}
          <div>
            <h3 className="font-semibold">Explore</h3>

            <div className="mt-4 space-y-3 text-sm text-blue-200">
              <Link
                href="/products"
                className="block hover:text-white"
              >
                Products
              </Link>

              <Link
                href="/services"
                className="block hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/"
                className="block hover:text-white"
              >
                Home
              </Link>
            </div>
          </div>

        </div>


        <div className="border-t border-blue-900">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-6 py-6 text-xs text-blue-300 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} SafeQbit Technologies. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a
                href="#"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="hover:text-white"
              >
                Instagram
              </a>
            </div>

          </div>
        </div>

      </footer>

    </main>
  );
}