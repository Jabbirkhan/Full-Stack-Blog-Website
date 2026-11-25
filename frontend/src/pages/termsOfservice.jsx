import React from "react";
import {
  FiFileText,
  FiShield,
  FiBookOpen,
  FiUser,
  FiMessageCircle,
  FiLock,
  FiAlertCircle,
  FiChevronRight,
  FiCheckCircle,
  FiExternalLink,
  FiMail,
} from "react-icons/fi";

const TermsOfService = () => {
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
              <FiFileText className="text-base" />
              Terms &amp; Conditions
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              These terms explain the guidelines for reading, interacting
              with, and using the content and features available on our blog.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <FiFileText className="text-blue-500" />
                Last updated: November 1, 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <FiShield className="text-blue-500" />
                Clear and responsible use
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
              <FiBookOpen />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Content &amp; Reading
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Guidelines for accessing and sharing articles and resources.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
              <FiUser />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Account Responsibility
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Understand your responsibilities when using account features.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
              <FiMessageCircle />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Community Standards
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Help keep comments and interactions respectful and safe.
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

            <nav aria-label="Terms of service sections" className="space-y-1">
              <a href="#acceptance" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>1. Acceptance of Terms</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#website-content" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>2. Blog Content and Purpose</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#accounts" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>3. User Accounts</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#intellectual-property" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>4. Intellectual Property</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#user-conduct" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>5. User Conduct and Comments</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#user-submissions" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>6. User Submissions</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#third-party" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>7. Third-Party Links and Services</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#advertising" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>8. Advertising and Affiliate Links</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#privacy" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>9. Privacy</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#disclaimer" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>10. Disclaimer of Warranties</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#liability" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>11. Limitation of Liability</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#changes" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>12. Changes to These Terms</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#governing-law" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>13. Governing Law</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#contact" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                <span>14. Contact Us</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </nav>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
            <FiAlertCircle className="mb-3 text-2xl text-blue-500" />
            <h3 className="font-semibold text-gray-900">Have a question?</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Contact us if you need clarification about these terms or how
              they apply to your use of the blog.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-500"
            >
              Contact us <FiChevronRight />
            </a>
          </div>
        </aside>

        {/* Terms Sections */}
        <div className="min-w-0">
          <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500">
                <FiCheckCircle />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">
                  Please read these terms carefully
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  These terms apply to the blog website and its available
                  features. Additional terms may apply to specific services,
                  promotions, or third-party offerings.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">

            {/* 1. Acceptance of Terms */}
            <article id="acceptance" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                1. Acceptance of Terms
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Welcome to <strong className="text-gray-800">[Your Blog Name]</strong>.
                  By accessing or using this website, you agree to these Terms
                  of Service and applicable laws. If you do not agree with these
                  terms, please do not use the website.
                </p>
                <p>
                  These terms apply to all visitors, readers, registered users,
                  and anyone who interacts with the website or its features.
                </p>
              </div>
            </article>

            {/* 2. Blog Content and Purpose */}
            <article id="website-content" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                2. Blog Content and Purpose
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  This website publishes articles, opinions, tutorials, and
                  other informational content. Content is provided for general
                  informational and educational purposes and should not be
                  treated as professional, legal, medical, financial, or other
                  specialized advice unless expressly stated.
                </p>
                <p>
                  We make reasonable efforts to keep published information
                  accurate and up to date, but we do not guarantee that all
                  content is complete, current, or free from errors.
                </p>
              </div>
            </article>

            {/* 3. User Accounts */}
            <article id="accounts" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                3. User Accounts
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Some features may require you to create an account. When
                  registering, you agree to provide accurate information and
                  keep your account details up to date.
                </p>
                <ul className="list-disc space-y-2 pl-6 marker:text-blue-500">
                  <li>Keep your login credentials confidential.</li>
                  <li>Notify us if you suspect unauthorized account access.</li>
                  <li>Do not impersonate another person or create accounts for deceptive purposes.</li>
                  <li>You are responsible for activity carried out through your account, subject to applicable law.</li>
                </ul>
                <p>
                  We may suspend or terminate accounts that violate these terms
                  or threaten the security or integrity of the website.
                </p>
              </div>
            </article>

            {/* 4. Intellectual Property */}
            <article id="intellectual-property" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                4. Intellectual Property
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Unless otherwise stated, articles, original text, graphics,
                  branding, and other materials published on this website are
                  owned by [Your Blog Name] or used with permission and are
                  protected by applicable intellectual property laws.
                </p>
                <p>
                  You may read, link to, and share our articles for personal,
                  non-commercial purposes, provided you do not misrepresent the
                  source or remove applicable attribution. You may not reproduce,
                  republish, modify, distribute, or commercially exploit our
                  content without prior written permission, except as permitted
                  by law.
                </p>
                <p>
                  Third-party materials remain subject to their respective owners'
                  rights and licenses.
                </p>
              </div>
            </article>

            {/* 5. User Conduct and Comments */}
            <article id="user-conduct" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                5. User Conduct and Comments
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  If the website allows comments, submissions, or other user
                  interactions, you agree not to post content that:
                </p>
                <ul className="list-disc space-y-2 pl-6 marker:text-blue-500">
                  <li>Is unlawful, abusive, threatening, harassing, or discriminatory.</li>
                  <li>Contains spam, deceptive promotions, or malicious links.</li>
                  <li>Infringes another person's intellectual property or privacy rights.</li>
                  <li>Contains malware or attempts to disrupt website operations.</li>
                  <li>Impersonates another person or misrepresents facts.</li>
                </ul>
                <p>
                  We may moderate, remove, or restrict access to user content at
                  our discretion, subject to applicable law.
                </p>
              </div>
            </article>

            {/* 6. User Submissions */}
            <article id="user-submissions" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                6. User Submissions
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  You retain ownership of content you submit, such as comments
                  or feedback. By submitting content, you grant us a
                  non-exclusive, worldwide, royalty-free license to host,
                  display, reproduce, and process that content as reasonably
                  necessary to operate and maintain the website and its features.
                </p>
                <p>
                  You confirm that you have the rights necessary to submit the
                  content and that it does not violate these terms or applicable
                  law.
                </p>
              </div>
            </article>

            {/* 7. Third-Party Links and Services */}
            <article id="third-party" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                7. Third-Party Links and Services
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Articles may contain links to third-party websites, products,
                  or services. These links are provided for convenience and
                  informational purposes only.
                </p>
                <p>
                  We do not control or guarantee the accuracy, availability,
                  security, or practices of third-party websites. Visiting or
                  using external services is at your own discretion and subject
                  to their terms and privacy policies.
                </p>
              </div>
            </article>

            {/* 8. Advertising and Affiliate Links */}
            <article id="advertising" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                8. Advertising and Affiliate Links
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  This blog may display advertisements or include affiliate
                  links. If you click an affiliate link and make a qualifying
                  purchase, we may receive a commission at no additional cost
                  to you.
                </p>
                <p>
                  Where required, sponsored content and affiliate relationships
                  will be disclosed. We are not responsible for third-party
                  products, services, transactions, or customer support.
                </p>
              </div>
            </article>

            {/* 9. Privacy */}
            <article id="privacy" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                9. Privacy
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  Your use of this website is also subject to our Privacy Policy,
                  which explains how personal information may be collected,
                  used, and protected.
                </p>
                <p>
                  Please review our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-blue-600 transition hover:text-blue-500"
                  >
                    Privacy Policy
                  </a>{" "}
                  for more information.
                </p>
              </div>
            </article>

            {/* 10. Disclaimer of Warranties */}
            <article id="disclaimer" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                10. Disclaimer of Warranties
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  The website and its content are provided on an “as is” and
                  “as available” basis, to the extent permitted by law. We make
                  no warranties, express or implied, regarding accuracy,
                  reliability, availability, suitability, or non-infringement.
                </p>
                <p>
                  We do not guarantee uninterrupted access, error-free
                  operation, or that the website will be free of harmful
                  components.
                </p>
              </div>
            </article>

            {/* 11. Limitation of Liability */}
            <article id="liability" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                11. Limitation of Liability
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  To the maximum extent permitted by applicable law, [Your Blog
                  Name] will not be liable for indirect, incidental, special,
                  consequential, or punitive damages, or for loss of data,
                  profits, goodwill, or other intangible losses arising from
                  your use of or inability to use the website.
                </p>
                <p>
                  Nothing in these terms excludes or limits liability that
                  cannot legally be excluded or limited.
                </p>
              </div>
            </article>

            {/* 12. Changes to These Terms */}
            <article id="changes" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                12. Changes to These Terms
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  We may update these Terms of Service periodically. Any changes
                  will be posted on this page with a revised “Last Updated” date.
                  Your continued use of the website after updated terms are
                  published constitutes acceptance of the revised terms, to the
                  extent permitted by applicable law.
                </p>
              </div>
            </article>

            {/* 13. Governing Law */}
            <article id="governing-law" className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                13. Governing Law
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                <p>
                  These terms are governed by the laws of [Your Jurisdiction],
                  except where mandatory laws applicable to you provide otherwise.
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
                  If you have questions about these Terms of Service, please
                  contact us:
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
                    <FiBookOpen className="mt-1 shrink-0 text-blue-500" />
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
                  Thank you for being part of our readership
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  We appreciate your time and encourage thoughtful,
                  responsible engagement with our content and community.
                </p>
                <a
                  href="mailto:support@example.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                >
                  Contact us <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-gray-400">
            © 2026 [Your Blog Name]. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;