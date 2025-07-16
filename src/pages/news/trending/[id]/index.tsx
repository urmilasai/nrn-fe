import Details from '@/components/news/details'
import { useNewsHooks } from '@/hooks/news/news.hooks'
import React from 'react'

const TrendingDetailsPage = () => {
    const { newsById, newsByIdLoading } = useNewsHooks()
  return (
    <>
    {
      newsByIdLoading ? <div>Loading...</div> : <Details newsById={newsById?.news} />
    }
    </>
   
  )
}

export default TrendingDetailsPage