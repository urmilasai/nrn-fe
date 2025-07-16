import React from 'react'
import Image from 'next/image'

export default function Stories () {
  const stories = [
    {
      id: 1,
      title: 'Google hit with record EU fine over Shopping service',
      imageUrl: '/news/news-1.jpg',
      category: 'Technology',
      readTime: '2 min read',
      date: '1 year ago',
    },
    {
      id: 2,
      title: 'Business booming for giant cargo planes',
      imageUrl: '/news/news-2.jpg',
      category: 'Business',
      readTime: '3 min read',
      date: '1 year ago',
    },
    {
      id: 3,
      title: 'Trump-Putin: The understandable story',
      imageUrl: '/news/news-3.jpg',
      category: 'Politics',
      readTime: '4 min read',
      date: '1 year ago',
    },
    {
      id: 4,
      title: 'Somebody threatened to burn the school down',
      imageUrl: '/news/news-4.jpg',
      category: 'World',
      readTime: '5 min read',
      date: '1 year ago',
    }
  ]

  return (
    <div className="w-full bg-white dark:bg-gray-800 px-4 py-6 rounded-lg">
      <div className="relative mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Stories
        </h2>
        
        <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#1a3869]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stories.map(story => (
          <div key={story.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-40">
              <Image src={story.imageUrl} alt={story.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs text-red-600">{story.category}</p>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-2 hover:text-[#1a3869] transition-all duration-300 ease-in-out">
                {story.title}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">{story.readTime}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{story.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}