import React from 'react'

const DetailsLoading = () => {
  return (
<article className="md:col-span-12 animate-pulse">
  <div className="flex items-center space-x-4 text-xs uppercase tracking-widest text-neutral-500 mb-2">
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
    <span className="mx-1">·</span>
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
  </div>
  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4" />
  <div className="border border-x-0 border-neutral-200 dark:border-neutral-800 py-8 mb-6">
    <div className="relative w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg" />
  </div>
  <div className="flex space-x-4 flex-col">
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-6" />
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-6" />
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-6" />
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full mb-6" />
  </div>
</article>
  )
}

export default DetailsLoading