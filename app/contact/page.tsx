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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* Hero */}
      <section className="relative px-6 pb-16 pt-36 sm:px-8 lg:px-10 lg:pb-20 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Start a Project
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              useful.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Tell us about your business, project, or challenge. We&apos;ll
            review your requirements and figure out the right digital solution.
          </p>
        </div>
      </section>

      {/* Contact Area */}
      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          
          {/* Left */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              What can we help with?
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <p className="font-semibold text-white">
                  🌐 Website Development
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  New website, redesign, landing page, e-commerce, or web app.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  📈 Digital Growth
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  SEO, local visibility, lead generation, or conversion
                  optimization.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  ⚙️ Business Automation
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  AI, CRM, WhatsApp, follow-ups, or repetitive workflows.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Yorra Tech
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-300">
                Build. Grow. Automate.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-2xl text-cyan-400">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-black">
                  Thanks for reaching out.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                  Your project details have been captured. We&apos;ll get back
                  to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/[0.05]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Project Details
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight">
                    Tell us about your project.
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
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
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/50"
                      />
                    </div>

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
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/50"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid gap-5 sm:grid-cols-2">
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
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/50"
                      />
                    </div>

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
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Business"
                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/50"
                      />
                    </div>
                  </div>

                  {/* Service + Budget */}
                  <div className="grid gap-5 sm:grid-cols-2">
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
                        className="w-full rounded-xl border border-white/10 bg-[#080c13] px-4 py-3.5 text-sm text-white outline-none transition focus:border-cyan-400/50"
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
                        <option value="Multiple Services">
                          Multiple Services
                        </option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>

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
                        className="w-full rounded-xl border border-white/10 bg-[#080c13] px-4 py-3.5 text-sm text-white outline-none transition focus:border-cyan-400/50"
                      >
                        <option value="">Select budget</option>
                        <option value="Under ₹25,000">Under ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">
                          ₹25,000 - ₹50,000
                        </option>
                        <option value="₹50,000 - ₹1,00,000">
                          ₹50,000 - ₹1,00,000
                        </option>
                        <option value="₹1,00,000+">₹1,00,000+</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
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
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are you trying to build, grow, or automate?"
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-gray-700 transition focus:border-cyan-400/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-white px-6 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-cyan-300"
                  >
                    Send Project Enquiry →
                  </button>

                  <p className="text-center text-xs leading-5 text-gray-600">
                    By submitting this form, you agree to be contacted about
                    your enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}