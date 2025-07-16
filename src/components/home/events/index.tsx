import React from 'react'
import Image from 'next/image'

interface TopStoriesItem {
    id: number
    title: string
    category: string
    description: string
}

const topStories: TopStoriesItem[] = [
    {
        id: 1,
        title: 'Pacers come home and cools, beat Thunder for a 2-1 lead in NBA Finals',
        category: 'Sports',
        description: 'Pacers come home and cools, beat Thunder for a 2-1 lead in NBA Finals',
    },
    {
        id: 2,
        title: 'Historic win for the Pacers in the NBA Finals',
        category: 'Sports',
        description: 'The Pacers secure a historic victory, taking a 2-1 lead in the NBA Finals against the Thunder.',
    },
    {
        id: 3,
        title: 'Thunder struggle as Pacers dominate in Game 3',
        category: 'Sports',
        description: 'In a surprising turn of events, the Pacers dominate Game 3, leaving the Thunder trailing in the NBA Finals.',
    },
    {
        id: 4,
        title: 'Pacers edge closer to NBA championship glory',
        category: 'Sports',
        description: 'With a commanding performance, the Pacers move one step closer to clinching the NBA championship.',
    },
    // Add more stories as needed
]

export default function Events() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* Events Section */}

                    <div className="col-span-1 bg-white dark:bg-gray-800  rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Events</h2>
                        <div className="mt-2">

                            <div className="relative w-full h-48">
                                <Image src="/news/news-6.jpg" alt="Events" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="mt-2 ">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-2">Pacers come home and cools, beat Thunder for a 2-1 lead in NBA Finals</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Pacers come home and cools, beat Thunder for a 2-1 lead in NBA Finals</p>
                        </div>
                        </div>
                        
                    </div>

                    <div className="col-span-1 bg-white dark:bg-gray-800 rounded-lg">
                        {topStories?.map((story: TopStoriesItem) => (
                            <div key={story.id} className="flex flex-col md:flex-row mb-4 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                                <div className="md:ml-4 mt-2 md:mt-0 bg-gray-100 p-3 rounded">
                                    <h3 className="text-md font-bold text-gray-900 dark:text-gray-100 line-clamp-1">{story.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{story.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
    )
}
