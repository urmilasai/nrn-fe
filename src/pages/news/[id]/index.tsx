import Details from '@/components/news/details'
import DetailsLoading from '@/components/ui/skeleton-loading/details-loading'
import { useAdvertisementHooks } from '@/hooks/advertisement/advertisement.hooks'
import { useNewsByIdHooks } from '@/hooks/news/newsby.hooks'
import React from 'react'


const NewsDetailsPage = () => {

  const { newsById, newsByIdLoading } = useNewsByIdHooks()
  const { advertisement } = useAdvertisementHooks()
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


