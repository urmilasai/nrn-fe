import React from 'react'

const BreakingNewsLoading = () => {
  return (
    <div className="relative w-full h-full">
    <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
        <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded w-3/4 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-1/2 animate-pulse" />
      </div>
    </div>
  </div>
  )
}

export default BreakingNewsLoading