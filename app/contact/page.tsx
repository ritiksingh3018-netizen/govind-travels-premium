"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));

    // Remove previous error when user starts editing again
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(
          result?.message || "Unable to send your enquiry. Please try again."
        );
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage("");
    setForm(initialForm);
  };

  const isCustomService =
    form.service === "Other / Custom Requirement";

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative px-6 pb-16 pt-36 sm:px-8 lg:px-10 lg:pb-20 lg:pt-44">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-100px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

          <div className="absolute right-[-180px] top-[20%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.025] blur-[120px]" />

          <div className="absolute left-[-180px] top-[55%] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.02] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
              Start a Project
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              useful.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Tell us about your business, project, or challenge. We&apos;ll
            review your requirements and figure out the right digital solution.
          </p>
        </div>
      </section>

      {/* =========================================================
          CONTACT AREA
      ========================================================== */}

      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          {/* =====================================================
              LEFT INFORMATION
          ====================================================== */}

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.05] blur-[90px]" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                What can we help with?
              </p>

              <div className="mt-7 space-y-7">
                {/* Website */}
                <div className="group">
                  <p className="font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    🌐 Website Development
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    New website, redesign, landing page, e-commerce, or web
                    application.
                  </p>
                </div>

                {/* Growth */}
                <div className="group">
                  <p className="font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    📈 Digital Growth
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    SEO, local visibility, lead generation, or conversion
                    optimization.
                  </p>
                </div>

                {/* Automation */}
                <div className="group">
                  <p className="font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    ⚙️ Business Automation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    AI, CRM, WhatsApp, follow-ups, or repetitive workflows.
                  </p>
                </div>

                {/* Custom */}
                <div className="group rounded-2xl border border-cyan-400/[0.12] bg-cyan-400/[0.025] p-4 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]">
                  <p className="font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    ✦ Other / Custom Requirement
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Have a requirement that doesn&apos;t fit these services?
                    Tell us what you need and we&apos;ll figure out the right
                    solution.
                  </p>
                </div>
              </div>

              {/* Bottom brand */}
              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Yorra Tech
                </p>

                <p className="mt-2 text-sm font-semibold text-gray-300">
                  Build. Grow. Automate.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              FORM CARD
          ====================================================== */}

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:p-10">
            {/* Form glow */}
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.04] blur-[100px]" />

            {/* ===================================================
                SUCCESS STATE
            ==================================================== */}

            {submitted ? (
              <div className="relative flex min-h-[560px] flex-col items-center justify-center px-4 text-center">
                {/* Success icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-3xl text-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
                  ✓
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  Enquiry Received
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Thanks for reaching out.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                  Your project details have been sent successfully. We&apos;ll
                  review your enquiry and get back to you soon.
                </p>

                {/* Success details */}
                <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    Selected Service
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-300">
                    {form.service}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <div className="relative">
                {/* =================================================
                    FORM HEADER
                ================================================== */}

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Project Details
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    Tell us about your project.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
                    The more details you share, the better we can understand
                    what you need.
                  </p>
                </div>

                {/* =================================================
                    ERROR MESSAGE
                ================================================== */}

                {errorMessage && (
                  <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/[0.05] px-4 py-3">
                    <p className="text-sm leading-6 text-red-300">
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* =================================================
                    FORM
                ================================================== */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* =================================================
                      NAME + EMAIL
                  ================================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      PHONE + COMPANY
                  ================================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Company / Business
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Business"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      SERVICE + BUDGET
                  ================================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        What do you need? *
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#080c13] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-cyan-400/50"
                      >
                        <option value="">Select a service</option>

                        <option value="Website Development">
                          Website Development
                        </option>

                        <option value="Digital Growth">
                          Digital Growth
                        </option>

                        <option value="Business Automation">
                          Business Automation
                        </option>

                        <option value="Other / Custom Requirement">
                          Other / Custom Requirement
                        </option>

                        <option value="Multiple Services">
                          Multiple Services
                        </option>

                        <option value="Not Sure">
                          Not Sure
                        </option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Estimated Budget
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#080c13] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-cyan-400/50"
                      >
                        <option value="">Select budget</option>

                        <option value="Under ₹25,000">
                          Under ₹25,000
                        </option>

                        <option value="₹25,000 - ₹50,000">
                          ₹25,000 - ₹50,000
                        </option>

                        <option value="₹50,000 - ₹1,00,000">
                          ₹50,000 - ₹1,00,000
                        </option>

                        <option value="₹1,00,000+">
                          ₹1,00,000+
                        </option>

                        <option value="Not Sure">
                          Not Sure
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* =================================================
                      CUSTOM REQUIREMENT NOTICE
                  ================================================== */}

                  {isCustomService && (
                    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.025] px-4 py-3">
                      <p className="text-xs leading-5 text-cyan-200/70">
                        Tell us as much as you can about your custom
                        requirement. We&apos;ll review it and suggest the
                        right approach.
                      </p>
                    </div>
                  )}

                  {/* =================================================
                      MESSAGE
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Tell us about your project *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={
                        isCustomService
                          ? "Tell us what you need, what problem you're trying to solve, and what you'd like us to build."
                          : "What are you trying to build, grow, or automate?"
                      }
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                    />

                    <p className="mt-2 text-[11px] text-gray-700">
                      Minimum 10 characters.
                    </p>
                  </div>

                  {/* =================================================
                      SUBMIT
                  ================================================== */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full rounded-xl bg-white px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.12)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60 disabled:hover:bg-white disabled:hover:shadow-none"
                  >
                    {loading ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />

                        Sending Enquiry...
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2">
                        Send Project Enquiry

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    )}
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-xs leading-5 text-gray-600">
                    Your information is only used to respond to your project
                    enquiry.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}

      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/[0.07] bg-white/[0.02] px-6 py-10 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Not sure where to start?
          </p>

          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
            That&apos;s okay. We can figure it out together.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Share your idea, even if it&apos;s still rough. We&apos;ll help
            you understand what needs to be built and what approach makes
            sense.
          </p>
        </div>
      </section>
    </main>
  );
}