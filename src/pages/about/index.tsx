import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const About = () => {
    return (
        <>
        <Head>
            <title>NRN News -About Us</title>
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
                <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">About Us</h1>
                <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">
                    Welcome to <span className="text-primary font-bold">NRN News</span> — your trusted source for diaspora news and stories.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8  gap-4">
                <div className="md:w-1/2">
                        <Image
                            src="/about.png"
                            alt="Group of people exercising"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            We bring you the latest updates from <span className="text-primary">NRNA</span>, embassies, and Nepali communities around the world.
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We tell the stories of success, of struggle, and of strength.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Through our four core segments:
                           
                        </p>
                        <ul className="text-gray-700 dark:text-gray-300 mb-4">
                                <li> <span className="text-secondary font-bold">𝗡𝗥𝗡 𝗡𝗲𝘄𝘀</span> – for timely and relevant updates</li>
                                <li> <span className="text-secondary font-bold">𝗡𝗥𝗡 𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗦𝘁𝗼𝗿𝘆</span> – celebrating Nepali entrepreneurs</li>
                                <li> <span className="text-secondary font-bold">𝗡𝗥𝗡 𝗖𝗿𝗲𝗮𝘁𝗶𝘃𝗲 𝗖𝗼𝗿𝗻𝗲𝗿</span> – where talent meets tradition</li>
                                <li> <span className="text-secondary font-bold">𝗜𝗻𝘀𝗽𝗶𝗿𝗶𝗻𝗴 𝗡𝗥𝗡𝘀</span> – the voices that motivate us all</li>
                            </ul>
                        <p className="text-gray-700 dark:text-gray-300">
                            From legal advice to cultural preservation, from opinions that matter to events that unite,
                            we are more than just a news portal — we are your platform.
                            Share your story. Stay informed. Stay inspired.
                            This is 𝗡𝗥𝗡 𝗡𝗲𝘄𝘀 — for Nepalis, by Nepalis, around the globe.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default About