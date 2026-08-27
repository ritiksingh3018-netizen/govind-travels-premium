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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#211b27] bg-[linear-gradient(rgba(112,78,145,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(112,78,145,0.035)_1px,transparent_1px)] bg-[size:36px_36px] relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520px] overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/[0.055] blur-[110px]" />
        <div className="absolute right-[8%] top-[120px] h-40 w-40 rounded-full bg-violet-400/[0.035] blur-[70px]" />
      </div>
      {/* =========================================================
          HERO
      ========================================================== */}
 
      <section
        aria-labelledby="contact-page-heading"
        className="relative px-6 pb-16 pt-36 sm:px-8 lg:px-10 lg:pb-20 lg:pt-44"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-100px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/[0.055] blur-[130px]" />
 
          <div className="absolute right-[-180px] top-[20%] h-[320px] w-[320px] rounded-full bg-violet-500/[0.025] blur-[120px]" />
 
          <div className="absolute left-[-180px] top-[55%] h-[300px] w-[300px] rounded-full bg-purple-400/[0.02] blur-[120px]" />
        </div>
 
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-violet-600" />
 
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600 sm:text-sm">
              Start a Project
            </p>
          </div>
 
          {/* Heading */}
          <h1 id="contact-page-heading" className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl drop-shadow-[0_10px_32px_rgba(55,37,70,0.09)]">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-violet-700 bg-clip-text text-transparent">
              useful.
            </span>
          </h1>
 
          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#665c6b] sm:text-lg sm:leading-8">
            Tell us about your business, project, or challenge. We&apos;ll
            review your requirements and figure out the right digital solution.
          </p>
        </div>
      </section>
 
      {/* =========================================================
          CONTACT AREA
      ========================================================== */}
 
      <section
        aria-labelledby="contact-options-heading"
        className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32"
      >
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          {/* =====================================================
              LEFT INFORMATION
          ====================================================== */}
 
          <div className="relative overflow-hidden rounded-3xl border border-[#3b2b45]/10 bg-[#fffdfa]/78 backdrop-blur-xl shadow-[0_22px_70px_rgba(48,35,58,0.075)] p-7 sm:p-9">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-600/[0.05] blur-[90px]" />
 
            <div className="relative">
              <h2
                id="contact-options-heading"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[#776d7c]"
              >
                What can we help with?
              </h2>
 
              <div className="mt-7 space-y-7">
                {/* Website */}
                <div className="group">
                  <h3 className="font-semibold text-[#211b27] transition-colors duration-300 group-hover:text-violet-600">
                    🌐 Website Development
                  </h3>
 
                  <p className="mt-2 text-sm leading-6 text-[#776d7c]">
                    New website, redesign, landing page, e-commerce, or web
                    application.
                  </p>
                </div>
 
                {/* Growth */}
                <div className="group">
                  <h3 className="font-semibold text-[#211b27] transition-colors duration-300 group-hover:text-violet-600">
                    📈 Digital Growth
                  </h3>
 
                  <p className="mt-2 text-sm leading-6 text-[#776d7c]">
                    SEO, local visibility, lead generation, or conversion
                    optimization.
                  </p>
                </div>
 
                {/* Automation */}
                <div className="group">
                  <h3 className="font-semibold text-[#211b27] transition-colors duration-300 group-hover:text-violet-600">
                    ⚙️ Business Automation
                  </h3>
 
                  <p className="mt-2 text-sm leading-6 text-[#776d7c]">
                    AI, CRM, WhatsApp, follow-ups, or repetitive workflows.
                  </p>
                </div>
 
                {/* Custom */}
                <div className="group rounded-2xl border border-purple-400/[0.18] bg-violet-600/[0.025] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-600/[0.04]">
                  <p className="font-semibold text-[#211b27] transition-colors duration-300 group-hover:text-violet-600">
                    ✦ Other / Custom Requirement
                  </p>
 
                  <p className="mt-2 text-sm leading-6 text-[#776d7c]">
                    Have a requirement that doesn&apos;t fit these services?
                    Tell us what you need and we&apos;ll figure out the right
                    solution.
                  </p>
                </div>
              </div>
 
              {/* Bottom brand */}
              <div className="mt-10 border-t border-[#3b2b45]/10 pt-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#827887]">
                  Yorra Tech
                </p>
 
                <p className="mt-2 text-sm font-semibold text-[#4d4353]">
                  Build. Grow. Automate.
                </p>
              </div>
            </div>
          </div>
 
          {/* =====================================================
              FORM CARD
          ====================================================== */}
 
          <div className="relative overflow-hidden rounded-3xl border border-[#3b2b45]/10 bg-[#fffdfa]/78 backdrop-blur-xl shadow-[0_22px_70px_rgba(48,35,58,0.075)] p-7 sm:p-9 lg:p-10">
            {/* Form glow */}
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-violet-600/[0.04] blur-[100px]" />
 
            {/* ===================================================
                SUCCESS STATE
            ==================================================== */}
 
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="relative flex min-h-[560px] flex-col items-center justify-center px-4 text-center"
              >
                {/* Success icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-violet-600/30 bg-violet-600/10 text-3xl text-violet-600 shadow-[0_0_50px_rgba(124,58,237,0.10)]">
                  ✓
                </div>
 
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
                  Enquiry Received
                </p>
 
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Thanks for reaching out.
                </h2>
 
                <p className="mt-4 max-w-md text-sm leading-7 text-[#776d7c] sm:text-base">
                  Your project details have been sent successfully. We&apos;ll
                  review your enquiry and get back to you soon.
                </p>
 
                {/* Success details */}
                <div className="mt-8 rounded-2xl border border-[#3b2b45]/10 bg-[#fffdfa]/72 backdrop-blur-xl shadow-[0_22px_70px_rgba(48,35,58,0.065)] px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#827887]">
                    Selected Service
                  </p>
 
                  <p className="mt-2 text-sm font-semibold text-[#4d4353]">
                    {form.service}
                  </p>
                </div>
 
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 rounded-xl border border-[#3b2b45]/10 px-5 py-3 text-sm font-semibold text-[#4d4353] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-600/[0.05] hover:text-[#211b27]"
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
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                    Project Details
                  </p>
 
                  <h2
                    id="project-enquiry-heading"
                    className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
                  >
                    Tell us about your project.
                  </h2>
 
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#827887]">
                    The more details you share, the better we can understand
                    what you need.
                  </p>
                </div>
 
                {/* =================================================
                    ERROR MESSAGE
                ================================================== */}
 
                {errorMessage && (
                  <div className="mt-6 rounded-xl border border-red-400/30 bg-red-50 px-4 py-3">
                    <p className="text-sm leading-6 text-red-600">
                      {errorMessage}
                    </p>
                  </div>
                )}
 
                {/* =================================================
                    FORM
                ================================================== */}
 
                <form
                  aria-labelledby="project-enquiry-heading"
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
                        className="mb-2 block text-sm font-medium text-[#4d4353]"
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
                        placeholder="Jogi Kumar"
                        className="w-full rounded-xl border border-[#3b2b45]/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_18px_rgba(58,38,80,0.035)] px-4 py-3.5 text-sm text-[#211b27] outline-none placeholder:text-[#958b99] transition-all duration-300 focus:border-violet-500/55 focus:bg-purple-400/[0.02]"
                      />
                    </div>
 
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#4d4353]"
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
                        className="w-full rounded-xl border border-[#3b2b45]/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_18px_rgba(58,38,80,0.035)] px-4 py-3.5 text-sm text-[#211b27] outline-none placeholder:text-[#958b99] transition-all duration-300 focus:border-violet-500/55 focus:bg-purple-400/[0.02]"
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
                        className="mb-2 block text-sm font-medium text-[#4d4353]"
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
                        className="w-full rounded-xl border border-[#3b2b45]/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_18px_rgba(58,38,80,0.035)] px-4 py-3.5 text-sm text-[#211b27] outline-none placeholder:text-[#958b99] transition-all duration-300 focus:border-violet-500/55 focus:bg-purple-400/[0.02]"
                      />
                    </div>
 
                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-[#4d4353]"
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
                        className="w-full rounded-xl border border-[#3b2b45]/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_18px_rgba(58,38,80,0.035)] px-4 py-3.5 text-sm text-[#211b27] outline-none placeholder:text-[#958b99] transition-all duration-300 focus:border-violet-500/55 focus:bg-purple-400/[0.02]"
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
                        className="mb-2 block text-sm font-medium text-[#4d4353]"
                      >
                        What do you need? *
                      </label>
 
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#3b2b45]/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_18px_rgba(58,38,80,0.035)] px-4 py-3.5 text-sm text-[#211b27] outline-none transition-all duration-300 focus:border-violet-500/55"
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
                        className="mb-2 block text-sm font-medium text-[#4d4353]"
                      >
                        Estimated Budget
                      </label>
 
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#3b2b45]/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_18px_rgba(58,38,80,0.035)] px-4 py-3.5 text-sm text-[#211b27] outline-none transition-all duration-300 focus:border-violet-500/55"
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
                    <div className="rounded-xl border border-violet-500/20 bg-violet-600/[0.025] px-4 py-3">
                      <p className="text-xs leading-5 text-violet-700/70">
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
                      className="mb-2 block text-sm font-medium text-[#4d4353]"
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
                      className="w-full resize-none rounded-xl border border-[#3b2b45]/10 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_18px_rgba(58,38,80,0.035)] px-4 py-3.5 text-sm leading-6 text-[#211b27] outline-none placeholder:text-[#958b99] transition-all duration-300 focus:border-violet-500/55 focus:bg-purple-400/[0.02]"
                    />
 
                    <p className="mt-2 text-[11px] text-[#958b99]">
                      Minimum 10 characters.
                    </p>
                  </div>
 
                  {/* =================================================
                      SUBMIT
                  ================================================== */}
 
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full rounded-xl bg-gradient-to-r from-[#6d3fc2] via-[#7546cc] to-[#5f35ad] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:from-[#7848d0] hover:via-[#8051d8] hover:to-[#683bb8] hover:shadow-[0_16px_42px_rgba(96,55,164,0.12)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                        />
 
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
                  <p className="text-center text-xs leading-5 text-[#827887]">
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
 
      <section
        aria-labelledby="contact-bottom-cta-heading"
        className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32"
      >
        <div className="relative z-10 mx-auto max-w-5xl rounded-3xl border border-[#3b2b45]/10 bg-white/72 backdrop-blur-xl shadow-[0_20px_70px_rgba(58,38,80,0.08)] px-6 py-10 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
            Not sure where to start?
          </p>
 
          <h2
            id="contact-bottom-cta-heading"
            className="mt-4 text-2xl font-black tracking-tight sm:text-3xl"
          >
            That&apos;s okay. We can figure it out together.
          </h2>
 
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#827887]">
            Share your idea, even if it&apos;s still rough. We&apos;ll help
            you understand what needs to be built and what approach makes
            sense.
          </p>
        </div>
      </section>
    </main>
  );
}