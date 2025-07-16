import React from 'react'

const CardSkeleton = ({key}: {key: number}) => {
  return (
    <div key={key} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
    <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 animate-pulse" />
    <div className="p-4">
      <div className="h-4 bg-red-200 dark:bg-red-700 rounded w-1/4 mb-2 animate-pulse" />
      <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-2 animate-pulse" />
      <div className="flex items-center space-x-2 mt-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/4 animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/4 animate-pulse" />
      </div>
    </div>
  </div>
  )
}

export default CardSkeleton