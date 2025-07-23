import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className=" bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">About Us</h1>
                <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">
                    Welcome to 𝗡𝗥𝗡 𝗡𝗲𝘄𝘀 — your trusted source for diaspora news and stories.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            We bring you the latest updates from <span className="text-green-500">NRNA</span>, embassies, and Nepali communities around the world.
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We tell the stories of success, of struggle, and of strength.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Through our four core segments:
                           
                        </p>
                        <ul className="text-gray-700 dark:text-gray-300 mb-4">
                                <li>𝗡𝗥𝗡 𝗡𝗲𝘄𝘀 – for timely and relevant updates</li>
                                <li>𝗡𝗥𝗡 𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗦𝘁𝗼𝗿𝘆 – celebrating Nepali entrepreneurs</li>
                                <li>𝗡𝗥𝗡 𝗖𝗿𝗲𝗮𝘁𝗶𝘃𝗲 𝗖𝗼𝗿𝗻𝗲𝗿 – where talent meets tradition</li>
                                <li>𝗜𝗻𝘀𝗽𝗶𝗿𝗶𝗻𝗴 𝗡𝗥𝗡𝘀 – the voices that motivate us all</li>
                            </ul>
                        <p className="text-gray-700 dark:text-gray-300">
                            From legal advice to cultural preservation, from opinions that matter to events that unite,
                            we are more than just a news portal — we are your platform.
                            Share your story. Stay informed. Stay inspired.
                            This is 𝗡𝗥𝗡 𝗡𝗲𝘄𝘀 — for Nepalis, by Nepalis, around the globe.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="/news/news-3.jpg"
                            alt="Group of people exercising"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About