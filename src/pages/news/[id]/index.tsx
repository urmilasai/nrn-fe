import Details from '@/components/news/details'
import DetailsLoading from '@/components/ui/skeleton-loading/details-loading'
import { useAdvertisementHooks } from '@/hooks/advertisement/advertisement.hooks'
import { useNewsByIdHooks } from '@/hooks/news/newsby.hooks'
import { Metadata } from 'next'
import React from 'react'

type Props ={
  params:{
    id:string
  }

}

const NewsDetailsPage = ({params}: Props) => {

  const { newsById, newsByIdLoading } = useNewsByIdHooks()
  const { advertisement } = useAdvertisementHooks()
 console.log("params", params)
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

export const  generateMetadata = async({ params }: Props): Promise<Metadata> => {

  const { newsById, newsByIdLoading } = useNewsByIdHooks()
  const { advertisement } = useAdvertisementHooks()
  console.log("parms", params.id)
  return {
    title: newsById?.news?.title,
    description: newsById?.news?.description,

  }
}

