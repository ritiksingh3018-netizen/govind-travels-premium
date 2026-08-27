import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Yorra Tech",
  description:
    "Read the Yorra Tech Privacy Policy to understand how we collect, use, protect, retain, and manage information submitted through our website.",
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
    eyebrow: "What we receive",
    content: (
      <>
        <p>
          When you visit the Yorra Tech website, contact us, or submit a project
          enquiry, we may collect information that you voluntarily provide to us.
          We only ask for information that is relevant to the interaction or
          service you are requesting.
        </p>
        <p>
          Depending on how you interact with us, this may include your name,
          email address, phone number, company name, selected service, project
          budget, project timeline, and information about your requirements.
        </p>
        <p>
          We may also receive limited technical information connected with your
          visit, such as browser or device information, IP address, referring
          page, and information about how you interact with the website where
          this information is made available through hosting, security, or
          analytics technologies.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Information",
    eyebrow: "Why it is needed",
    content: (
      <>
        <p>
          We use information collected through the website to understand your
          requirements, communicate with you, provide requested services, and
          operate a reliable website.
        </p>
        <ul>
          <li>Respond to project enquiries, questions, and requests.</li>
          <li>Understand your business, goals, and project requirements.</li>
          <li>Prepare relevant discussions, estimates, or proposals.</li>
          <li>Communicate with you about requested services or ongoing work.</li>
          <li>Improve website content, usability, services, and customer experience.</li>
          <li>Maintain website security, reliability, and prevent misuse.</li>
          <li>Maintain appropriate business and operational records.</li>
        </ul>
        <p>
          We do not intentionally use information submitted through a project
          enquiry for unrelated purposes. Where a different purpose requires
          your permission, we will seek appropriate permission where applicable.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Project Enquiries & Forms",
    eyebrow: "When you contact us",
    content: (
      <>
        <p>
          Information submitted through a Yorra Tech project enquiry form is
          transmitted to us so that our team can review your request and decide
          how best to respond.
        </p>
        <p>
          A project enquiry may contain personal and business information such
          as your name, email, phone number, company, service requirement,
          approximate budget, project description, and other details you choose
          to include.
        </p>
        <div className="rounded-2xl border border-[#6d35e8]/15 bg-[#6d35e8]/[0.045] p-5">
          <p className="font-semibold text-[#17131f]">
            Please keep sensitive credentials out of website forms.
          </p>
          <p className="mt-2 text-sm leading-7 text-[#6d6475]">
            Do not submit passwords, payment credentials, government
            identification numbers, security keys, or other highly sensitive
            information through a general project enquiry form.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "04",
    title: "Email & Service Providers",
    eyebrow: "Technology partners",
    content: (
      <>
        <p>
          Parts of the website and communication process may rely on trusted
          technology or service providers. For example, an enquiry may be
          processed through an email delivery service so that it can reach the
          Yorra Tech team.
        </p>
        <p>
          These providers may process limited information on our behalf when
          required to provide their services. We aim to use reputable providers
          and limit shared information to what is reasonably required for the
          relevant function.
        </p>
        <p>
          Third-party providers may have their own privacy practices. Where
          relevant, you should review the policies of services that you use or
          interact with directly.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Cookies & Website Technologies",
    eyebrow: "How the site works",
    content: (
      <>
        <p>
          Yorra Tech may use cookies and similar technologies for essential
          website functionality, security, performance, analytics, or improving
          the user experience.
        </p>
        <p>
          Cookies are small files stored by your browser. Depending on how they
          are configured, they can help a website remember preferences,
          understand usage patterns, maintain sessions, or support essential
          functionality.
        </p>
        <p>
          You can manage or restrict cookies through your browser settings.
          Disabling certain cookies may affect some website functionality.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Analytics & Performance",
    eyebrow: "Understanding the website",
    content: (
      <>
        <p>
          Where analytics or performance technologies are used, they may help us
          understand how visitors discover and use the website. This can include
          information such as pages visited, approximate interaction patterns,
          device or browser information, and technical performance signals.
        </p>
        <p>
          We use this type of information to identify usability issues, improve
          content, understand which parts of the website are useful, and make
          the website more reliable.
        </p>
        <p>
          Analytics information should be interpreted as website-level insight;
          it is not intended to be used to collect unnecessary sensitive
          information through ordinary browsing.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Data Security",
    eyebrow: "Protecting information",
    content: (
      <>
        <p>
          We take reasonable technical and organisational measures intended to
          protect information submitted through our website against
          unauthorised access, misuse, alteration, loss, or disclosure.
        </p>
        <p>
          Security measures can include access controls, secure website
          connections, provider-level safeguards, limited access to business
          information, and reasonable operational practices.
        </p>
        <p>
          No website, internet transmission, or electronic storage system can be
          guaranteed to be completely secure. You should therefore avoid sending
          confidential credentials or highly sensitive information through
          public website forms.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Data Retention",
    eyebrow: "How long information stays",
    content: (
      <>
        <p>
          We retain information for as long as reasonably necessary for the
          purpose for which it was collected. This may include responding to
          enquiries, providing services, maintaining business records, resolving
          disputes, improving operations, and meeting applicable legal or
          operational requirements.
        </p>
        <p>
          Retention periods can vary depending on the type of information, why
          it was collected, whether an enquiry becomes a client relationship,
          and whether there is an ongoing legitimate business or legal need to
          retain it.
        </p>
        <p>
          When information is no longer reasonably required, we may delete it,
          anonymise it, or otherwise handle it according to applicable
          requirements and our operational processes.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Sharing of Information",
    eyebrow: "Who may receive it",
    content: (
      <>
        <p>
          Yorra Tech does not sell your personal information.
        </p>
        <p>
          We may share limited information with service providers or technology
          partners where reasonably necessary to operate the website,
          communicate with you, provide requested services, maintain security,
          or support business operations.
        </p>
        <p>
          We may also disclose information where required by applicable law,
          legal process, or a lawful request from an authorised authority.
        </p>
        <p>
          We aim to avoid sharing more information than is reasonably necessary
          for the relevant purpose.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Your Choices & Requests",
    eyebrow: "Your control",
    content: (
      <>
        <p>
          You decide what information you provide through our website. Some
          information may be necessary for us to respond meaningfully to a
          project enquiry or provide a requested service.
        </p>
        <p>
          If you want to ask about information you have submitted to Yorra Tech,
          request correction of inaccurate information, or ask about deletion
          where applicable, contact us using the details at the end of this
          policy.
        </p>
        <p>
          Where consent is the applicable basis for processing, you may also
          have rights concerning withdrawal of that consent, subject to
          applicable law and any lawful basis for continued processing.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Third-Party Links",
    eyebrow: "External websites",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, social
          platforms, communication services, or other external resources.
        </p>
        <p>
          Once you leave the Yorra Tech website, the privacy practices,
          security controls, and policies of the third-party service may apply.
          We encourage you to review the relevant privacy policy before
          submitting information to an external service.
        </p>
        <p>
          A link to an external service does not by itself mean that Yorra Tech
          controls that service or its privacy practices.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Children's Privacy",
    eyebrow: "Age and audience",
    content: (
      <>
        <p>
          Yorra Tech provides business and digital services and its project
          enquiry process is not specifically directed toward children.
        </p>
        <p>
          If you believe that a child has submitted personal information to us
          without appropriate authorisation, please contact us so that we can
          review the situation and take appropriate action where required.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "Changes to This Policy",
    eyebrow: "Keeping this page current",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to our website, services, technology, business processes, or applicable
          requirements.
        </p>
        <p>
          When changes are made, the updated version will be published on this
          page with a revised effective date. We encourage visitors to review
          this page periodically when they use our website or submit information.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Contact Yorra Tech",
    eyebrow: "Questions about privacy",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy, want to understand
          how information submitted through the website is handled, or want to
          make a privacy-related request, you can contact the Yorra Tech team.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:info@yorra.in"
            className="rounded-2xl border border-[#17131f]/10 bg-white/65 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d35e8]/30 hover:bg-white"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#806f92]">
              Email
            </span>
            <span className="mt-2 block font-semibold text-[#17131f]">
              info@yorra.in
            </span>
          </a>
          <a
            href="https://yorra.in"
            className="rounded-2xl border border-[#17131f]/10 bg-white/65 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6d35e8]/30 hover:bg-white"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#806f92]">
              Website
            </span>
            <span className="mt-2 block font-semibold text-[#17131f]">
              yorra.in
            </span>
          </a>
        </div>
      </>
    ),
  },
];

const quickFacts = [
  ["01", "We collect", "Information you choose to submit and limited technical data where applicable."],
  ["02", "We use", "Information to respond, provide services, improve the website, and maintain security."],
  ["03", "We protect", "Information with reasonable technical and organisational safeguards."],
  ["04", "We share", "Limited information only where reasonably needed for services, operations, or legal obligations."],
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f0e5] text-[#17131f]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(23,19,31,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,19,31,0.16) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute left-[-12%] top-[6%] h-[520px] w-[520px] rounded-full bg-[#6d35e8]/[0.09] blur-[130px]" />
        <div className="absolute right-[-12%] top-[32%] h-[520px] w-[520px] rounded-full bg-[#c9a7ff]/[0.16] blur-[150px]" />
      </div>

      <section className="relative px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#6d35e8]" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6d35e8]">
                  Privacy Policy
                </p>
              </div>

              <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[7.2rem]">
                Your data.
                <br />
                <span className="text-[#6d35e8]">Handled clearly.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#655b6d] sm:text-lg">
                This Privacy Policy explains how Yorra Tech collects, uses,
                protects, retains, and manages information provided through our
                website, contact channels, and project enquiry process.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Privacy", "Data Protection", "Transparency", "Yorra Tech"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#17131f]/10 bg-white/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#655b6d]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#17131f]/10 bg-white/65 p-6 shadow-[0_25px_80px_rgba(57,35,76,.08)] backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between border-b border-[#17131f]/10 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#806f92]">
                      Policy status
                    </p>
                    <p className="mt-2 text-xl font-black tracking-tight">
                      Effective August 18, 2026
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6d35e8] text-xl font-black text-white">
                    ✓
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7f0e5] p-4">
                    <p className="text-2xl font-black">14</p>
                    <p className="mt-1 text-xs leading-5 text-[#806f92]">
                      privacy topics covered
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#f7f0e5] p-4">
                    <p className="text-2xl font-black">Clear</p>
                    <p className="mt-1 text-xs leading-5 text-[#806f92]">
                      plain-language approach
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#655b6d]">
                  Please read this policy together with any terms, notices, or
                  service-specific information presented when you use a Yorra
                  Tech service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#17131f]/10 bg-[#17131f] sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map(([number, title, text]) => (
              <div
                key={number}
                className="border-b border-white/10 p-6 last:border-b-0 sm:border-r sm:p-7 lg:border-b-0 lg:last:border-r-0"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-[#c8aaff]">
                  {number}
                </span>
                <h2 className="mt-5 text-lg font-black text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[250px_1fr] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-[#17131f]/10 bg-white/60 p-6 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6d35e8]">
                On this page
              </p>
              <nav className="mt-5 flex max-h-[65vh] flex-col gap-2 overflow-auto pr-2">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#privacy-${section.number}`}
                    className="group flex gap-3 rounded-xl px-2 py-2 text-xs text-[#806f92] transition-colors hover:bg-[#6d35e8]/[0.06] hover:text-[#6d35e8]"
                  >
                    <span className="font-bold">{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-8 rounded-[2rem] border border-[#6d35e8]/15 bg-[#6d35e8]/[0.055] p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d35e8]">
                A note on this policy
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-[#51485a]">
                We aim to explain our website privacy practices in practical
                language. The exact information processed can depend on which
                pages, forms, communication channels, or services you use. If
                you have a question about a specific interaction, contact us
                directly and we can clarify how it is handled.
              </p>
            </div>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <article
                  id={`privacy-${section.number}`}
                  key={section.number}
                  className={`scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#17131f]/10 bg-white/65 shadow-[0_18px_60px_rgba(57,35,76,.045)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[#6d35e8]/20 ${
                    index % 3 === 1 ? "lg:ml-8" : index % 3 === 2 ? "lg:mr-8" : ""
                  }`}
                >
                  <div className="grid lg:grid-cols-[120px_1fr]">
                    <div className="border-b border-[#17131f]/10 bg-[#f0e7d9]/55 p-7 lg:border-b-0 lg:border-r lg:p-8">
                      <span className="text-sm font-black tracking-[0.15em] text-[#6d35e8]">
                        {section.number}
                      </span>
                      <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#9a8da1]">
                        {section.eyebrow}
                      </span>
                    </div>

                    <div className="p-7 sm:p-9 lg:p-10">
                      <h2 className="max-w-3xl text-2xl font-black tracking-[-0.025em] sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-6 max-w-3xl space-y-5 text-sm leading-8 text-[#655b6d] sm:text-base">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#17131f]/10 bg-[#17131f] p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8aaff]">
                Important
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
                This page describes Yorra Tech&apos;s website-level privacy
                practices. It is not a substitute for legal advice. If your
                business requires a policy tailored to a specific jurisdiction,
                regulated industry, data-processing arrangement, or contractual
                relationship, obtain appropriate professional legal review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#17131f]/10 bg-white/70 p-8 shadow-[0_25px_90px_rgba(57,35,76,.08)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6d35e8]/[0.11] blur-[80px]" />
            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6d35e8]">
                  Need clarification?
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.035em] sm:text-5xl">
                  Privacy questions deserve a direct answer.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#655b6d] sm:text-base">
                  If you have a question about information submitted through
                  Yorra Tech, contact us and tell us what you need help with.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#17131f] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6d35e8]"
              >
                Contact Yorra Tech
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex justify-end border-t border-[#17131f]/10 pt-6 text-xs text-[#806f92]">
            <Link
              href="/"
              className="font-semibold transition-colors hover:text-[#6d35e8]"
            >
              Back to homepage →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}