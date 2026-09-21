"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CareerApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : "");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f9ff] text-[#071b3b]">
        {/* Navbar */}
        <nav className="border-b border-blue-100 bg-[#071b3b]">
          <div className="mx-auto flex h-[78px] max-w-[1180px] items-center justify-between px-6">
            <Link href="/" className="text-xl font-bold text-white">
              SafeQbit <span className="font-medium text-blue-400">Technologies</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <Link href="/" className="text-sm text-blue-100 transition hover:text-white">
                Home
              </Link>
              <Link href="/products" className="text-sm text-blue-100 transition hover:text-white">
                Products
              </Link>
              <Link href="/services" className="text-sm text-blue-100 transition hover:text-white">
                Services
              </Link>
              <Link href="/about" className="text-sm text-blue-100 transition hover:text-white">
                About
              </Link>
              <Link href="/careers" className="text-sm text-blue-100 transition hover:text-white">
                Careers
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Connect Now
              </Link>
            </div>
          </div>
        </nav>

        {/* Success */}
        <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
          <div className="w-full max-w-2xl border border-blue-200 bg-white p-10 text-center shadow-xl shadow-blue-900/5 md:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl text-blue-600">
              ✓
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[3px] text-blue-500">
              Application Received
            </p>

            <h1 className="mt-4 text-3xl font-bold text-[#071b3b] md:text-4xl">
              Thank you for applying!
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
              Your application details have been captured on this page. The
              form is currently a frontend application flow; connect it to
              your preferred email or backend service before using it for
              production applications.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/careers"
                className="bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Back to Careers
              </Link>

              <Link
                href="/"
                className="border border-blue-200 px-7 py-3.5 text-sm font-semibold text-[#071b3b] transition hover:border-blue-400 hover:bg-blue-50"
              >
                Go Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f9ff] text-[#071b3b]">
      {/* Navbar */}
      <nav className="border-b border-blue-100 bg-[#071b3b]">
        <div className="mx-auto flex h-[78px] max-w-[1180px] items-center justify-between px-6">
          <Link href="/" className="text-xl font-bold text-white">
            SafeQbit <span className="font-medium text-blue-400">Technologies</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-blue-100 transition hover:text-white">
              Home
            </Link>
            <Link href="/products" className="text-sm text-blue-100 transition hover:text-white">
              Products
            </Link>
            <Link href="/services" className="text-sm text-blue-100 transition hover:text-white">
              Services
            </Link>
            <Link href="/about" className="text-sm text-blue-100 transition hover:text-white">
              About
            </Link>
            <Link href="/careers" className="text-sm font-semibold text-white">
              Careers
            </Link>
            <Link href="/contact" className="text-sm text-blue-100 transition hover:text-white">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Connect Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071b3b] px-6 py-20 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-blue-400/20" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-blue-400/10" />

        <div className="relative mx-auto max-w-[900px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
            Careers at SafeQbit
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Build the Future of
            <span className="text-blue-400"> Quantum-Safe Security</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100">
            Interested in working with SafeQbit Technologies? Tell us about
            yourself and the kind of work you want to build with us.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[950px]">
          <div className="mb-10">
            <Link
              href="/careers"
              className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
            >
              ← Back to Careers
            </Link>

            <h2 className="mt-5 text-3xl font-bold text-[#071b3b]">
              Apply for a position
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill in your details below. Fields marked with * are required.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 md:p-10"
          >
            {/* Personal details */}
            <div>
              <h3 className="text-lg font-bold text-[#071b3b]">
                Personal Information
              </h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="mb-2 block text-sm font-semibold">
                    Current Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            <div className="my-10 h-px bg-slate-100" />

            {/* Professional details */}
            <div>
              <h3 className="text-lg font-bold text-[#071b3b]">
                Professional Information
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="position" className="mb-2 block text-sm font-semibold">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    defaultValue=""
                    className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a position
                    </option>
                    <option>Web Development Intern</option>
                    <option>Cybersecurity Research Intern</option>
                    <option>Quantum Technology Intern</option>
                    <option>Other / General Application</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="mb-2 block text-sm font-semibold">
                    Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    defaultValue=""
                    className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select experience
                    </option>
                    <option>Student / Fresher</option>
                    <option>Less than 1 year</option>
                    <option>1–2 years</option>
                    <option>2–5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="education" className="mb-2 block text-sm font-semibold">
                    Highest Qualification *
                  </label>
                  <input
                    id="education"
                    name="education"
                    type="text"
                    required
                    placeholder="e.g. MCA, B.Tech, B.Sc."
                    className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="mb-2 block text-sm font-semibold">
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="skills" className="mb-2 block text-sm font-semibold">
                    Key Skills *
                  </label>
                  <input
                    id="skills"
                    name="skills"
                    type="text"
                    required
                    placeholder="e.g. Java, React, Python, Cybersecurity"
                    className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            <div className="my-10 h-px bg-slate-100" />

            {/* Resume */}
            <div>
              <h3 className="text-lg font-bold text-[#071b3b]">
                Resume & Message
              </h3>

              <div className="mt-5">
                <label htmlFor="resume" className="mb-2 block text-sm font-semibold">
                  Upload Resume *
                </label>

                <label
                  htmlFor="resume"
                  className="flex cursor-pointer flex-col items-center justify-center border-2 border-dashed border-blue-200 bg-blue-50/50 px-6 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50"
                >
                  <span className="text-2xl text-blue-500">↑</span>
                  <span className="mt-2 text-sm font-semibold text-[#071b3b]">
                    {resumeName || "Choose your resume"}
                  </span>
                  <span className="mt-1 text-xs text-slate-500">
                    PDF, DOC or DOCX • Maximum 5 MB
                  </span>

                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="sr-only"
                  />
                </label>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Cover Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us briefly about yourself, your interests and why you would like to work with SafeQbit..."
                  className="w-full resize-y border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Consent */}
            <label className="mt-7 flex items-start gap-3 text-sm leading-6 text-slate-600">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 h-4 w-4 accent-blue-600"
              />
              <span>
                I confirm that the information provided above is accurate and
                may be used for the purpose of evaluating my application.
              </span>
            </label>

            {/* Submit */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className="bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Submit Application →
              </button>

              <p className="text-xs text-slate-500">
                Your application will be reviewed by the SafeQbit team.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020817] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 md:flex-row">
          <div>
            <Link href="/" className="text-xl font-bold">
              SafeQbit <span className="font-medium text-blue-400">Technologies</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Research-powered cybersecurity for a secure quantum-ready future.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <Link href="/products" className="transition hover:text-white">
              Products
            </Link>
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/careers" className="transition hover:text-white">
              Careers
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1180px] border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} SafeQbit Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
