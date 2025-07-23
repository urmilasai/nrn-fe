import React from 'react'
import CardSkeleton from '../ui/skeleton-loading/card-skeleton'
import { useRouter } from 'next/router'
import NrnImage from '../ui/image/nrn-image';

interface NewsItem {
  _id: string;
  title: string;
  image: string;
  category: string;
  readTime?: string;
  date?: string;
}

interface NewsListProps {
  news: NewsItem[]
  newsLoading: boolean
  newsError: Error | null
}

export default function NewsList ({ news, newsLoading, newsError }: NewsListProps) {
    const router = useRouter()
  if (newsError) {
    return <div>Error</div>
  }
  return (
    <div className="w-full bg-white dark:bg-gray-800 px-4 py-6 rounded-lg">
      <div className="relative mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          News
        </h2>
        
        <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#1a3869]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {newsLoading ? 
        Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))
        : news?.map((story: NewsItem, index: number) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => router.push(`/news/${story?._id}`)}>
                <div className="relative w-full h-40">
                  <NrnImage image={story?.image || "/fallback-image.jpg"} alt={story.title} className="object-cover" />
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