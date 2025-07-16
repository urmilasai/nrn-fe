import React from 'react'

interface TrendingLoadingProps {
  index: number
}

const TrendingLoading = ({ index }: TrendingLoadingProps) => {
  return (      
    <div key={index} className="flex space-x-4 animate-pulse mb-4">
    <div className="relative w-24 h-20 flex-shrink-0 bg-gray-300 dark:bg-gray-700 rounded-lg" />
    <div className="flex-1 flex flex-col space-y-2">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mt-1" />
      <div className="flex items-center space-x-2 mt-auto">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full w-1/4" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full w-1/2 ms-auto" />
      </div>
    </div>
  </div>
  )
}

export default TrendingLoading