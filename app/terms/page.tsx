import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Yorra Tech",
  description:
    "Read the Terms & Conditions for using the Yorra Tech website and engaging with our digital solutions, website development, growth, and automation services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Yorra Tech",
    description:
      "Terms and conditions governing the use of the Yorra Tech website and our digital services.",
    url: "/terms",
    siteName: "Yorra Tech",
    type: "website",
  },
};

const sections = [
  {
    number: "01",
    title: "Acceptance of These Terms",
    content: (
      <>
        <p>
          By accessing or using the Yorra Tech website, you agree to be bound
          by these Terms & Conditions and any applicable policies referenced
          on this website.
        </p>

        <p>
          If you do not agree with these terms, please do not use the website
          or submit an enquiry through our forms.
        </p>

        <p>
          These terms apply to visitors, prospective clients, clients, and
          other users of the Yorra Tech website.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "About Yorra Tech",
    content: (
      <>
        <p>
          Yorra Tech provides digital solutions for businesses, including
          website development, digital growth, business automation, and related
          technology services.
        </p>

        <p>
          Information presented on this website is intended to provide a
          general overview of our capabilities and approach. Specific project
          scope, pricing, timelines, deliverables, and responsibilities may
          vary depending on the requirements of each client.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Use of Our Website",
    content: (
      <>
        <p>
          You agree to use the Yorra Tech website only for lawful purposes and
          in a manner that does not harm, disrupt, or interfere with the
          website or its users.
        </p>

        <p>You must not:</p>

        <ul>
          <li>
            Attempt to gain unauthorized access to the website or its systems.
          </li>
          <li>
            Introduce malicious code, viruses, or other harmful technologies.
          </li>
          <li>
            Use the website for fraudulent, abusive, or unlawful activities.
          </li>
          <li>
            Copy or reproduce website content without appropriate permission.
          </li>
          <li>
            Attempt to interfere with the security or operation of the
            website.
          </li>
        </ul>
      </>
    ),
  },

  {
    number: "04",
    title: "Project Enquiries",
    content: (
      <>
        <p>
          Our website allows visitors to submit project enquiries and
          information about their business or requirements.
        </p>

        <p>
          Submitting an enquiry does not automatically create a client
          relationship, contract, or obligation for Yorra Tech to accept or
          undertake the project.
        </p>

        <p>
          We may contact you using the information provided in your enquiry to
          discuss your requirements, clarify project details, or provide
          relevant information about our services.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Services & Project Scope",
    content: (
      <>
        <p>
          Specific services are provided according to the scope agreed between
          Yorra Tech and the client.
        </p>

        <p>
          Project requirements, deliverables, revisions, timelines, technical
          specifications, payment terms, and other commercial terms may be
          defined separately in a proposal, quotation, agreement, statement of
          work, invoice, or other written communication.
        </p>

        <p>
          Where a separate written agreement exists for a project, the terms
          of that agreement will govern the specific project to the extent
          applicable.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Pricing & Payments",
    content: (
      <>
        <p>
          Prices, project fees, payment schedules, and other commercial terms
          are determined on a project-by-project basis unless otherwise stated
          on the website.
        </p>

        <p>
          A project may require an advance payment or milestone-based payments
          depending on the agreed scope and commercial arrangement.
        </p>

        <p>
          Work may be paused or delayed where agreed payments are not received
          within the applicable payment terms.
        </p>

        <p>
          Any taxes, third-party charges, software subscriptions, hosting,
          domain fees, advertising budgets, or other external costs will be
          handled according to the applicable project agreement.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Client Responsibilities",
    content: (
      <>
        <p>
          Clients are responsible for providing accurate information,
          appropriate content, approvals, credentials where necessary, and
          other materials reasonably required to complete a project.
        </p>

        <p>
          Delays in providing required information, feedback, approvals, or
          access may affect project timelines.
        </p>

        <p>
          Clients are responsible for ensuring that materials supplied to
          Yorra Tech, including images, text, logos, documents, and other
          content, may legally be used for the intended project.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, Yorra Tech retains ownership of
          its pre-existing materials, internal tools, frameworks, reusable
          components, processes, concepts, and other intellectual property
          developed independently of a specific client project.
        </p>

        <p>
          Ownership or usage rights for final project deliverables may depend
          on the applicable project agreement and payment status.
        </p>

        <p>
          Third-party software, libraries, fonts, platforms, APIs, templates,
          and other external materials remain subject to their respective
          licenses and terms.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Website Content",
    content: (
      <>
        <p>
          Content published on the Yorra Tech website, including text,
          graphics, designs, logos, images, layouts, and other materials, is
          provided for informational and business purposes.
        </p>

        <p>
          You may not reproduce, distribute, modify, republish, or commercially
          exploit our website content without prior written permission, except
          where permitted by applicable law.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Portfolio & Concept Projects",
    content: (
      <>
        <p>
          Some projects displayed in the Yorra Tech portfolio may be concept
          projects, prototypes, demonstrations, or illustrative examples.
        </p>

        <p>
          Portfolio examples are intended to demonstrate our design and
          development capabilities and should not automatically be interpreted
          as representations of a client's actual business performance,
          results, revenue, or outcomes.
        </p>

        <p>
          Where a portfolio project is identified as a concept project, it is
          presented for demonstration purposes.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Our website and services may rely on third-party platforms,
          infrastructure, APIs, hosting providers, communication services,
          analytics tools, payment providers, or other external services.
        </p>

        <p>
          Third-party services are governed by their own terms, policies, and
          availability.
        </p>

        <p>
          Yorra Tech is not responsible for interruptions, changes, failures,
          or limitations caused by third-party services outside our reasonable
          control.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Third-Party Links",
    content: (
      <>
        <p>
          The Yorra Tech website may contain links to third-party websites,
          platforms, or social media services.
        </p>

        <p>
          These links are provided for convenience or additional information.
          Yorra Tech does not control the content, security, availability, or
          privacy practices of external websites.
        </p>

        <p>
          Your use of a third-party website is subject to that website's own
          terms and policies.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "No Guarantee of Results",
    content: (
      <>
        <p>
          While we aim to build effective digital solutions, Yorra Tech does
          not guarantee specific business outcomes, search rankings, traffic
          levels, leads, sales, revenue, or other commercial results unless a
          specific guarantee is expressly agreed in writing.
        </p>

        <p>
          Business performance can depend on many factors outside our control,
          including market conditions, competition, pricing, customer
          behavior, advertising platforms, search engine algorithms, and
          business operations.
        </p>
      </>
    ),
  },

  {
    number: "14",
    title: "Website Availability",
    content: (
      <>
        <p>
          We aim to keep the website available and functioning properly, but
          we do not guarantee uninterrupted or error-free availability.
        </p>

        <p>
          The website may occasionally be unavailable due to maintenance,
          updates, technical issues, hosting problems, security measures, or
          circumstances outside our reasonable control.
        </p>
      </>
    ),
  },

  {
    number: "15",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Yorra Tech will not be
          responsible for indirect, incidental, consequential, or special
          losses arising from the use of our website or services.
        </p>

        <p>
          Nothing in these terms is intended to exclude or limit liability
          where such exclusion or limitation is not permitted under applicable
          law.
        </p>
      </>
    ),
  },

  {
    number: "16",
    title: "Indemnity",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, you agree to use the
          website and services responsibly and not to misuse them in a way that
          causes harm to Yorra Tech or another party.
        </p>

        <p>
          Where applicable, you may be responsible for losses or claims arising
          from your unlawful use of the website, infringement of third-party
          rights, or violation of these terms.
        </p>
      </>
    ),
  },

  {
    number: "17",
    title: "Termination",
    content: (
      <>
        <p>
          We may restrict or suspend access to the website where reasonably
          necessary to protect the website, our systems, our users, or our
          legal rights.
        </p>

        <p>
          Project-specific termination rights and obligations may be governed
          by the separate agreement between Yorra Tech and the client.
        </p>
      </>
    ),
  },

  {
    number: "18",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          Yorra Tech may update these Terms & Conditions from time to time to
          reflect changes to our website, services, business practices, or
          applicable legal requirements.
        </p>

        <p>
          Updated terms will be published on this page. Your continued use of
          the website after an update may be subject to the revised terms.
        </p>
      </>
    ),
  },

  {
    number: "19",
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms & Conditions are intended to be interpreted in accordance
          with applicable laws of India, subject to any applicable contractual
          arrangements and mandatory legal requirements.
        </p>

        <p>
          Any disputes relating to a specific project may also be governed by
          the terms agreed separately between Yorra Tech and the client.
        </p>
      </>
    ),
  },

  {
    number: "20",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about these Terms & Conditions or want to
          discuss our services, you can contact Yorra Tech using the details
          below.
        </p>

        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
          <p className="text-sm font-semibold text-white">
            Yorra Tech
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Email:{" "}
            <a
              href="mailto:techyorra@gmail.com"
              className="text-cyan-400 transition-colors hover:text-cyan-300"
            >
              techyorra@gmail.com
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Website:{" "}
            <a
              href="https://yorra.in"
              className="text-cyan-400 transition-colors hover:text-cyan-300"
            >
              yorra.in
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[140px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
              Terms & Conditions
            </p>
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Clear terms.
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Better relationships.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            These Terms & Conditions explain the rules for using the Yorra
            Tech website and provide a general framework for working with our
            digital services.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Website Terms
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Services
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Yorra Tech
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          TERMS CONTENT
      ========================================================= */}
      <section className="relative px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                On this page
              </p>

              <nav className="mt-5 flex max-h-[70vh] flex-col gap-3 overflow-y-auto pr-2">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#terms-${section.number}`}
                    className="text-xs text-gray-600 transition-colors hover:text-cyan-400"
                  >
                    {section.number} — {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div>
            {/* Effective date */}
            <div className="mb-6 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.05] to-transparent p-7 sm:p-9">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Effective Date
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    August 18, 2026
                  </p>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-400 sm:flex">
                  ✓
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {sections.map((section) => (
                <article
                  id={`terms-${section.number}`}
                  key={section.number}
                  className="group scroll-mt-28 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:border-cyan-400/15 hover:bg-white/[0.025] sm:p-9 lg:p-10"
                >
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 text-xs font-bold tracking-[0.18em] text-cyan-400">
                      {section.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-6 space-y-5 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-[140px]" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400 sm:text-sm">
            Have a question?
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Let&apos;s talk about your project.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            If you have questions about our services or these terms, contact
            the Yorra Tech team.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Contact Yorra Tech

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}