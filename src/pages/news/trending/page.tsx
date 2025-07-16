import React from 'react';


const TrendingNewsPage = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <article className="md:col-span-2">
          <h1>Trending News</h1>
        </article>
      </main>
    </div>
  )
}

export default TrendingNewsPage;