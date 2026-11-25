import React from "react";
import {
  FiShield,
  FiLock,
  FiEye,
  FiDatabase,
  FiMail,
  FiGlobe,
  FiFileText,
  FiChevronRight,
  FiCheckCircle,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-gray-200 bg-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-gray-100" />
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              <FiShield className="text-base" />
              Privacy &amp; Transparency
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              Learn how we collect, use, and protect information when you
              read our articles, create an account, or interact with our blog.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <FiFileText className="text-blue-500" />
                Last updated: November 1, 2026
              </span>

              <span className="inline-flex items-center gap-2">
                <FiLock className="text-blue-500" />
                Privacy-focused practices
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:pt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
              <FiEye />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Transparency
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Understand what information may be collected and why.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
              <FiLock />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Data Protection
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Reasonable measures help safeguard the information we handle.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
              <FiDatabase />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Responsible Use
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Information is used for relevant website and service purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 lg:py-20">

        {/* Table of Contents */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-700">
              <FiFileText className="text-blue-500" />
              On This Page
            </h2>

            <nav aria-label="Privacy policy sections" className="space-y-1">
              <a href="#introduction" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>1. Introduction</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#information-collected" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>2. Information We Collect</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#how-we-use" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>3. How We Use Your Information</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#accounts-comments" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>4. Accounts, Comments, and User Content</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#cookies" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>5. Cookies and Analytics</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#advertising" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>6. Advertising and Affiliate Links</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#sharing" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>7. How We Share Information</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#third-party" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>8. Third-Party Links and Services</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#security" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>9. Data Security</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#retention" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>10. Data Retention</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#rights" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>11. Your Privacy Rights</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#children" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>12. Children's Privacy</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#changes" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>13. Changes to This Privacy Policy</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#contact" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>14. Contact Us</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </nav>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
            <FiShield className="mb-3 text-2xl text-blue-500" />
            <h3 className="font-semibold text-gray-900">
              Privacy questions?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Contact us if you need clarification about how your information
              is handled.
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-500">
              Contact us <FiChevronRight />
            </a>
          </div>
        </aside>

        {/* Policy Sections */}
        <div className="min-w-0">
          <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500">
                <FiCheckCircle />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">
                  Your privacy, explained clearly
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  This policy describes general privacy practices for a blog.
                  Actual data collection depends on the features, hosting
                  configuration, and third-party services enabled on your site.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">

            {/* 1. Introduction */}
            <article id="introduction" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                1. Introduction
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Welcome to <strong className="text-gray-800">[Your Blog Name]</strong>.
                  We respect your privacy and are committed to handling your
                  personal information responsibly. This Privacy Policy explains
                  how information may be collected, used, stored, and shared when
                  you visit or interact with our blog.
                </p>
                <p>
                  By using this website, you acknowledge the practices described
                  in this policy. If you do not agree, please discontinue using
                  the website.
                </p>
              </div>
            </article>

            {/* 2. Information We Collect */}
            <article id="information-collected" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                2. Information We Collect
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>Depending on how you use the blog, we may collect:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-blue-500">
                  <li>
                    <strong className="text-gray-700">Account information:</strong>{" "}
                    Name, email address, and account credentials when you register.
                  </li>
                  <li>
                    <strong className="text-gray-700">User content:</strong>{" "}
                    Comments, feedback, messages, and other information you submit.
                  </li>
                  <li>
                    <strong className="text-gray-700">Technical information:</strong>{" "}
                    IP address, browser type, device information, and basic usage
                    data collected through hosting, security, or analytics services.
                  </li>
                  <li>
                    <strong className="text-gray-700">Cookies and similar data:</strong>{" "}
                    Information stored by cookies or similar technologies, where used.
                  </li>
                </ul>
                <p>
                  We do not intentionally request sensitive personal information
                  unless it is necessary for a specific feature and appropriately
                  disclosed.
                </p>
              </div>
            </article>

            {/* 3. How We Use Your Information */}
            <article id="how-we-use" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                3. How We Use Your Information
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>We may use collected information to:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-blue-500">
                  <li>Create and manage user accounts.</li>
                  <li>Provide blog articles, comments, and website features.</li>
                  <li>Respond to questions, feedback, and support requests.</li>
                  <li>Maintain website functionality, performance, and security.</li>
                  <li>Understand usage trends and improve content and services.</li>
                  <li>Prevent spam, fraud, abuse, and unauthorized activity.</li>
                  <li>Comply with applicable legal obligations.</li>
                </ul>
                <p>
                  We process information for purposes relevant to the reason it
                  was collected, subject to applicable law.
                </p>
              </div>
            </article>

            {/* 4. Accounts, Comments, and User Content */}
            <article id="accounts-comments" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                4. Accounts, Comments, and User Content
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  If you create an account or post comments, information you submit
                  may be associated with your profile and displayed according to
                  the website's features and settings.
                </p>
                <p>
                  Please avoid posting personal, confidential, or sensitive
                  information in public comments. Publicly posted content may be
                  visible to other visitors and may be copied or shared by them.
                </p>
                <p>
                  We may moderate or remove content that violates our Terms of
                  Service, applicable law, or community guidelines.
                </p>
              </div>
            </article>

            {/* 5. Cookies and Analytics */}
            <article id="cookies" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                5. Cookies and Analytics
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  We may use cookies and similar technologies to maintain sessions,
                  remember preferences, protect the website, and understand how
                  visitors use our content.
                </p>
                <p>
                  If analytics or advertising services are enabled, they may use
                  cookies or similar technologies to collect information according
                  to their own policies and configurations. Where required by law,
                  we will obtain consent before using non-essential cookies.
                </p>
                <p>
                  You can manage or disable cookies through your browser settings.
                  Some website features may not function properly if certain
                  cookies are disabled.
                </p>
              </div>
            </article>

            {/* 6. Advertising and Affiliate Links */}
            <article id="advertising" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                6. Advertising and Affiliate Links
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  This blog may display advertisements or contain affiliate links.
                  We may receive compensation if you interact with advertisements
                  or make qualifying purchases through affiliate links.
                </p>
                <p>
                  Advertising partners may use cookies, pixels, or similar
                  technologies to provide, measure, or personalize advertisements,
                  subject to applicable law and your consent where required.
                </p>
                <p>
                  We encourage you to review the privacy policies of advertising
                  partners for details about their data practices.
                </p>
              </div>
            </article>

            {/* 7. How We Share Information */}
            <article id="sharing" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                7. How We Share Information
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  We do not sell personal information. We may share limited
                  information in the following circumstances:
                </p>
                <ul className="list-disc space-y-2 pl-6 marker:text-blue-500">
                  <li>
                    <strong className="text-gray-700">Service providers:</strong>{" "}
                    With hosting, email, analytics, security, or advertising
                    providers that help operate the website.
                  </li>
                  <li>
                    <strong className="text-gray-700">Legal requirements:</strong>{" "}
                    When required by law, regulation, or valid legal process.
                  </li>
                  <li>
                    <strong className="text-gray-700">Protection:</strong>{" "}
                    When reasonably necessary to protect our rights, users, or
                    website security.
                  </li>
                </ul>
                <p>
                  We limit information sharing to what is reasonably necessary
                  for the relevant purpose.
                </p>
              </div>
            </article>

            {/* 8. Third-Party Links and Services */}
            <article id="third-party" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                8. Third-Party Links and Services
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Blog articles may link to external websites, social networks,
                  embedded media, or other third-party services.
                </p>
                <p>
                  These services operate independently and may collect information
                  according to their own privacy policies. We are not responsible
                  for their content, security, or privacy practices. Please review
                  their policies before providing information to them.
                </p>
              </div>
            </article>

            {/* 9. Data Security */}
            <article id="security" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                9. Data Security
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  We use reasonable technical and organizational measures to help
                  protect personal information against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
                <p>
                  However, no internet transmission or electronic storage method
                  is completely secure. We cannot guarantee absolute security.
                </p>
              </div>
            </article>

            {/* 10. Data Retention */}
            <article id="retention" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                10. Data Retention
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  We retain personal information for as long as reasonably necessary
                  to provide website features, manage accounts, respond to inquiries,
                  maintain records, resolve disputes, and comply with legal
                  obligations. When information is no longer needed, we take
                  reasonable steps to delete or securely dispose of it, subject to
                  applicable law.
                </p>
              </div>
            </article>

            {/* 11. Your Privacy Rights */}
            <article id="rights" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                11. Your Privacy Rights
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Depending on your location and applicable law, you may have the
                  right to:
                </p>
                <ul className="list-disc space-y-2 pl-6 marker:text-blue-500">
                  <li>Request access to personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of your personal information.</li>
                  <li>Object to or restrict certain processing activities.</li>
                  <li>Withdraw consent where processing relies on your consent.</li>
                </ul>
                <p>
                  To exercise applicable rights, contact us using the details
                  below. We may need to verify your identity before responding.
                </p>
              </div>
            </article>

            {/* 12. Children's Privacy */}
            <article id="children" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                12. Children's Privacy
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  This website is not intended to knowingly collect personal
                  information from children in violation of applicable law. If you
                  believe a child has provided personal information to us
                  inappropriately, please contact us so we can review and address
                  the issue.
                </p>
              </div>
            </article>

            {/* 13. Changes to This Privacy Policy */}
            <article id="changes" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                13. Changes to This Privacy Policy
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  We may update this Privacy Policy to reflect changes in our
                  website, services, or legal obligations. Updates will be published
                  on this page with a revised “Last Updated” date. We encourage you
                  to review this page periodically.
                </p>
              </div>
            </article>

            {/* 14. Contact Us */}
            <article id="contact" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                14. Contact Us
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  If you have questions about this Privacy Policy or wish to make
                  a privacy-related request, contact us:
                </p>

                <div className="mt-5 space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <p className="flex items-start gap-3">
                    <FiMail className="mt-1 shrink-0 text-blue-500" />
                    <span>
                      <span className="text-gray-400">Email:</span>{" "}
                      <a
                        href="mailto:support@example.com"
                        className="text-blue-600 transition hover:text-blue-500"
                      >
                        support@example.com
                      </a>
                    </span>
                  </p>

                  <p className="flex items-start gap-3">
                    <FiGlobe className="mt-1 shrink-0 text-blue-500" />
                    <span>
                      <span className="text-gray-400">Website:</span>{" "}
                      <span className="text-gray-700">[Your Blog Website URL]</span>
                    </span>
                  </p>
                </div>
              </div>
            </article>

          </div>

          {/* Closing Note */}
          <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-xl text-white">
                <FiShield />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Thank you for being part of our community
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  We value your trust and are committed to handling
                  information responsibly. Please contact us if you have
                  questions about this policy.
                </p>
                <a
                  href="mailto:support@example.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                >
                  Email us <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;