import Details from '@/components/news/details'
import DetailsLoading from '@/components/ui/skeleton-loading/details-loading'
import { useAdvertisementHooks } from '@/hooks/advertisement/advertisement.hooks'
import { useNewsByIdHooks } from '@/hooks/news/newsby.hooks'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'News Details | NRN News',
  description: 'Read the latest news details on NRN News.',
  openGraph: {
    title: 'News Details | NRN News',
    description: 'Read the latest news details on NRN News.',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News Details | NRN News',
    description: 'Read the latest news details on NRN News.'
  }
}

const NewsDetailsPage = () => {
  const { newsById, newsByIdLoading } = useNewsByIdHooks()
  const { advertisement } = useAdvertisementHooks()

  // Dynamically update meta tags if newsById is loaded
  React.useEffect(() => {
    if (newsById?.news) {
      document.title = newsById.news.title || 'News Details | NRN News'
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', newsById.news.description || '')
      }
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', newsById.news.title || '')
      }
      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', newsById.news.description || '')
      }
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) {
        ogImage.setAttribute('content', newsById.news.image || '')
      }
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) {
        twitterTitle.setAttribute('content', newsById.news.title || '')
      }
      const twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.setAttribute('content', newsById.news.description || '')
      }
      const twitterImage = document.querySelector('meta[name="twitter:image"]')
      if (twitterImage) {
        twitterImage.setAttribute('content', newsById.news.image || '')
      }
    }
  }, [newsById])

  return (
    <>
      {
        newsByIdLoading
          ? <div className="container mx-auto px-4 py-4">
              <DetailsLoading />
            </div>
          : <Details newsById={newsById?.news} advertisement={advertisement?.data} />
      }
    </>
  )
}

export default NewsDetailsPage