import NewsList from '@/components/news';
import { useNewsHooks } from '@/hooks/news/news.hooks';
import Head from 'next/head';
import React from 'react'

const NewsPage = () => {
  const { news, newsLoading, newsError, currentPage, setCurrentPage } = useNewsHooks();

 
  

  return (  
    <>
    <Head>
      <title>NRN News - News</title>
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
    <div className='container mx-auto px-4 py-4'>
      <NewsList news={news?.items} newsLoading={newsLoading} newsError={newsError} />

    {/* Pagination Controls */}
    {news?.totalPages > 1 && (
      <div className='flex justify-center mt-8 space-x-2'>
        <button
          className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#1a3869] hover:text-white'} px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: news?.totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 cursor-pointer hover:bg-[#1a3869] hover:text-white rounded ${
              currentPage === idx + 1
                ? 'bg-[#1a3869] text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className={` ${currentPage === news?.totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#1a3869] hover:text-white'} px-3  py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === news?.totalPages}
        >
          Next
        </button>
      </div>
    )}
    </div>
    </>
  )
}

export default NewsPage