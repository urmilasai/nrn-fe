import Head from 'next/head'
import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <>
            <Head>
                <title>NRN News -Contact Us</title>
                <meta property="og:title" content="NRN News - Latest Updates" />
                <meta property="og:description" content="Get the latest news and updates from NRN News." />
                <meta property="og:image" content="https://nrn.news/about.png" />
                <meta property="og:url" content="https://nrn.news" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NRN News - Latest Updates" />
                <meta name="twitter:description" content="Get the latest news and updates from NRN News." />
                <meta name="twitter:image" content="https://nrn.news/about.png" />
            </Head>
            <div className="bg-gray-100 dark:bg-gray-900 py-12 flex flex-col items-center justify-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"> Privacy Policy</h1>
                    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
                        <h1 className="text-3xl font-bold mb-2">NRN News Policies</h1>
                        <p className="text-sm text-gray-500 mb-8">Last updated: December 2025</p>

                        {/* Privacy Policy */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                            <p className="mb-4">
                                NRN News (operated in South Australia, Australia) respects the privacy of all users, readers,
                                contributors, and community members. This Privacy Policy explains how we collect, use, store,
                                and protect personal information.
                            </p>

                            <h3 className="font-semibold mb-2">1. Information We Collect</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Name, email address, phone number (when contacting us)</li>
                                <li>Information submitted for news tips, interviews, or feedback</li>
                                <li>Website usage data (cookies, IP address, browser type) for analytics</li>
                                <li>Social media interactions with NRN News platforms</li>
                            </ul>

                            <h3 className="font-semibold mb-2">2. How We Use Information</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Publish and manage news content</li>
                                <li>Respond to inquiries and community submissions</li>
                                <li>Improve website performance and user experience</li>
                                <li>Meet legal and regulatory requirements</li>
                            </ul>

                            <h3 className="font-semibold mb-2">3. Information Sharing</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>With consent of the individual</li>
                                <li>If required by Australian law</li>
                                <li>To protect public interest or legal rights</li>
                            </ul>

                            <h3 className="font-semibold mb-2">4. Data Storage & Security</h3>
                            <p className="mb-4">
                                We take reasonable steps to protect personal data from misuse, loss, or unauthorized access.
                                Data is stored securely using industry-standard practices.
                            </p>

                            <h3 className="font-semibold mb-2">5. Third-Party Links</h3>
                            <p className="mb-4">
                                Our website may contain links to external sites. NRN News is not responsible for the privacy
                                practices of third-party websites.
                            </p>

                            <h3 className="font-semibold mb-2">6. Contact</h3>
                            <p>Email: <a href="mailto:nrnnews1@gmail.com" className="text-blue-600 underline">nrnnews1@gmail.com</a></p>
                        </section>

                        {/* Editorial Policy */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Editorial Policy</h2>
                            <p className="mb-4">
                                NRN News is an independent Nepali community news platform serving South Australia and the
                                wider Australian Nepali diaspora.
                            </p>

                            <h3 className="font-semibold mb-2">1. Editorial Independence</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Operates independently of political parties, organisations, and advertisers</li>
                                <li>Editorial decisions are not influenced by advertisers, sponsors, or donors</li>
                            </ul>

                            <h3 className="font-semibold mb-2">2. Accuracy & Fairness</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Strives for accuracy, balance, and fairness</li>
                                <li>Facts are verified before publication wherever possible</li>
                                <li>Opinions are clearly distinguished from news reporting</li>
                            </ul>

                            <h3 className="font-semibold mb-2">3. Community Focus</h3>
                            <p className="mb-4">
                                We prioritise community news, issues, achievements, and events, with respect for cultural
                                diversity, dignity, and inclusion.
                            </p>

                            <h3 className="font-semibold mb-2">4. Ethical Standards</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Hate speech, discrimination, or harassment</li>
                                <li>Defamation or unverified allegations</li>
                                <li>Invasion of privacy without public interest</li>
                            </ul>

                            <h3 className="font-semibold mb-2">5. Sources & Attribution</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Sources are acknowledged unless confidentiality is required</li>
                                <li>Anonymous sources are used only when necessary and credible</li>
                            </ul>

                            <h3 className="font-semibold mb-2">6. Conflict of Interest</h3>
                            <p>
                                Editors and contributors must disclose any personal or financial interests related to
                                published content.
                            </p>
                        </section>

                        {/* Corrections Policy */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Corrections Policy</h2>
                            <p className="mb-4">NRN News is committed to transparency and accountability.</p>

                            <h3 className="font-semibold mb-2">1. Corrections & Clarifications</h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Errors identified by readers or staff will be reviewed promptly</li>
                                <li>Corrections will be made clearly and transparently</li>
                                <li>Significant corrections will be noted at the end of the article</li>
                            </ul>

                            <h3 className="font-semibold mb-2">2. How to Request a Correction</h3>
                            <p className="mb-2">Please provide:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Article title and date</li>
                                <li>Description of the error</li>
                                <li>Supporting information (if available)</li>
                            </ul>
                            <p>Email: <a href="mailto:nrnnews1@gmail.com" className="text-blue-600 underline">nrnnews1@gmail.com</a></p>

                            <h3 className="font-semibold mt-4 mb-2">3. Right of Reply</h3>
                            <p>
                                Individuals or organisations directly affected by a report may request a right of reply,
                                which will be considered fairly.
                            </p>
                        </section>

                        {/* Disclaimer */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                            <p>
                                NRN News content is provided for information purposes only. Views expressed in opinion pieces
                                are those of the authors and do not necessarily reflect the views of NRN News.
                            </p>
                        </section>

                        <footer className="text-sm text-gray-500 border-t pt-4">
                            © NRN News – South Australia
                        </footer>
                    </main>
                </div>
            </div>
        </>

    )
}

export default PrivacyPolicyPage