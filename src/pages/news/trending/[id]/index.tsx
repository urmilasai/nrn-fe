import Details from '@/components/news/details'
import DetailsLoading from '@/components/ui/skeleton-loading/details-loading'
import { useAdvertisementHooks } from '@/hooks/advertisement/advertisement.hooks'
import { useNewsByIdHooks } from '@/hooks/news/newsby.hooks'
import Head from 'next/head'
import path from 'path'
import React from 'react'
import fs from "fs";

interface NewsData {
  news?: {
    _id: string;
    title: string;
    description: string;
    image: string;
  };
}

const TrendingDetailsPage = ({ details }: { details: NewsData | null }) => {
    const { newsById, newsByIdLoading } = useNewsByIdHooks()
    const { advertisement } = useAdvertisementHooks();
  return (
    <>
     <Head>
        <title>{details?.news?.title}</title>
        <meta name="description" content={details?.news?.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={details?.news?.title} />
        <meta property="og:description" content={details?.news?.description} />
        <meta property="og:image" content={details?.news?.image} />
        <meta property="og:url" content={`https://nrn.news/news/trending/${details?.news?._id}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={details?.news?.title} />
        <meta name="twitter:description" content={details?.news?.description} />
        <meta name="twitter:image" content={details?.news?.image} />
      </Head>
    {
      newsByIdLoading ? 
      <div className="container mx-auto px-4 py-4">
        <DetailsLoading />
      </div> : 
      <Details newsById={newsById?.news} advertisement={advertisement?.data} />
    }
    </>
   
  )
}

export default TrendingDetailsPage

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const { id } = params

  try {
    const res = await fetch(`https://api.nrn.news/api/news/${id}`)
    const newsData: NewsData = await res.json()
    if (newsData?.news?.image.startsWith("data:image")) {
      const base64Data = newsData.news.image.split(",")[1];
      const filePath = path.join(process.cwd(), "public", `${params.id}.jpg`);
      fs.writeFileSync(filePath, Buffer.from(base64Data, "base64"));
      newsData.news.image = `https://nrn.news/${params.id}.jpg`;
    } else {
      if (newsData?.news?.image) {
     newsData.news.image =   newsData?.news?.image
      }
    }
    return { props: { details: newsData } }
  } catch (error) {
    console.error('Error fetching news:', error)
    return { props: { details: null } }
  }
}