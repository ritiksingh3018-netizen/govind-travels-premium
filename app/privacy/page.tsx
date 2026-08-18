import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Yorra Tech",
  description:
    "Read the Yorra Tech Privacy Policy to understand how we collect, use, protect, and manage information submitted through our website.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Yorra Tech",
    description:
      "Learn how Yorra Tech handles information submitted through its website and project enquiry forms.",
    url: "/privacy",
    siteName: "Yorra Tech",
    type: "website",
  },
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you use the Yorra Tech website, contact us, or submit a project
          enquiry, we may collect information that you choose to provide.
        </p>

        <p>
          Depending on how you interact with us, this may include your name,
          email address, phone number, company name, selected service, project
          budget, and information about your project or requirements.
        </p>

        <p>
          We may also receive basic technical information associated with your
          visit, such as browser or device information, IP address, and
          information about how you interact with our website, where applicable
          through website infrastructure or analytics tools.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          We use information submitted through our website primarily to
          understand your requirements and respond to your enquiry.
        </p>

        <p>We may use the information to:</p>

        <ul>
          <li>Respond to project enquiries and questions.</li>
          <li>Understand your business and project requirements.</li>
          <li>Prepare relevant project discussions or proposals.</li>
          <li>Communicate with you about a requested service.</li>
          <li>Improve our website, services, and user experience.</li>
          <li>Maintain website security and prevent misuse.</li>
        </ul>

        <p>
          We do not use information collected through a project enquiry for
          unrelated purposes unless permitted by applicable law or you have
          otherwise provided appropriate permission.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Project Enquiries",
    content: (
      <>
        <p>
          When you submit the project enquiry form, the information you provide
          is transmitted to Yorra Tech so that we can review and respond to
          your request.
        </p>

        <p>
          Your enquiry may include personal and business information such as
          your name, email, phone number, company, service requirement, budget,
          and project description.
        </p>

        <p>
          Please avoid submitting passwords, financial account credentials,
          government identification numbers, or other highly sensitive
          information through the project enquiry form.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Email & Service Providers",
    content: (
      <>
        <p>
          We may use third-party technology providers to operate parts of our
          website and communication systems.
        </p>

        <p>
          For example, project enquiries may be processed through our email
          delivery provider so that your enquiry can be delivered to the Yorra
          Tech team.
        </p>

        <p>
          These providers may process information on our behalf as necessary to
          provide their services. We aim to use reputable service providers and
          limit the information shared with them to what is reasonably required
          for the relevant service.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Cookies & Website Technologies",
    content: (
      <>
        <p>
          Yorra Tech may use cookies or similar technologies where necessary
          for website functionality, security, performance, analytics, or
          improving the user experience.
        </p>

        <p>
          Cookies are small data files stored by your browser. They can help a
          website remember preferences, understand usage patterns, or maintain
          essential functionality.
        </p>

        <p>
          You can manage or restrict cookies through your browser settings.
          Some website functionality may be affected if certain cookies are
          disabled.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Data Security",
    content: (
      <>
        <p>
          We take reasonable measures to protect information submitted through
          our website against unauthorized access, misuse, alteration, or
          disclosure.
        </p>

        <p>
          However, no website, internet transmission, or electronic storage
          system can be guaranteed to be completely secure. You should
          therefore avoid submitting sensitive credentials or confidential
          information through public website forms.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain information only for as long as reasonably necessary for
          the purpose for which it was collected, including responding to
          enquiries, maintaining business records, providing services, and
          meeting applicable legal or operational requirements.
        </p>

        <p>
          The period for which information is retained may depend on the type
          of information and the nature of our relationship with you.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Sharing of Information",
    content: (
      <>
        <p>
          Yorra Tech does not sell your personal information.
        </p>

        <p>
          We may share limited information with service providers or
          technology partners where reasonably necessary to operate our
          website, communicate with you, provide requested services, maintain
          security, or comply with legal obligations.
        </p>

        <p>
          We may also disclose information where required by applicable law,
          legal process, or a lawful request from an authorized authority.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Your Choices",
    content: (
      <>
        <p>
          You may choose what information you provide to us. However, some
          information may be necessary for us to respond meaningfully to a
          project enquiry.
        </p>

        <p>
          If you want to ask about information you have submitted to Yorra
          Tech, request correction of inaccurate information, or ask about
          deletion where applicable, you can contact us using the details
          provided below.
        </p>

        <p>
          Where consent is the applicable basis for processing, you may also
          have rights regarding withdrawal of that consent, subject to
          applicable law and any lawful basis for continued processing.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Third-Party Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, social media
          platforms, or external services.
        </p>

        <p>
          Once you leave the Yorra Tech website, the privacy practices and
          policies of the third-party website will apply. We encourage you to
          review the privacy policy of any external website you visit.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Our services and project enquiry process are intended for businesses
          and general users and are not specifically directed toward children.
        </p>

        <p>
          If you believe that a child has submitted personal information to us
          without appropriate authorization, please contact us so that we can
          review the situation and take appropriate action where required.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes to our website, services, technology, or applicable legal
          requirements.
        </p>

        <p>
          When we make changes, the updated version will be published on this
          page with the revised effective date.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how Yorra Tech
          handles information, you can contact us.
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

export default function PrivacyPage() {
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
              Privacy Policy
            </p>
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Your information.
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Your trust.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            This Privacy Policy explains how Yorra Tech collects, uses,
            protects, and manages information provided through our website.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Privacy
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Data Protection
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Yorra Tech
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICY CONTENT
      ========================================================= */}
      <section className="relative px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                On this page
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {sections.slice(0, 8).map((section) => (
                  <a
                    key={section.number}
                    href={`#privacy-${section.number}`}
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
            {/* Intro card */}
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
                  id={`privacy-${section.number}`}
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
            We&apos;re happy to help.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            If you have questions about how we handle your information,
            contact the Yorra Tech team.
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