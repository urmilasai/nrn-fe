import Details from '@/components/news/details'
import { useNewsByIdHooks } from '@/hooks/news/newsby.hooks'
import React from 'react'

const NewsDetailsPage = () => {
    const { newsById, newsByIdLoading } = useNewsByIdHooks()
  return (
    <>
    {
      newsByIdLoading ? <div>Loading...</div> : <Details newsById={newsById?.news} />
    }
    </>
  )
}

export default NewsDetailsPage