import Details from '@/components/news/details'
import DetailsLoading from '@/components/ui/skeleton-loading/details-loading';
import { useAdvertisementHooks } from '@/hooks/advertisement/advertisement.hooks';
import { useNewsByIdHooks } from '@/hooks/news/newsby.hooks'
import Head from 'next/head';
import React from 'react'


const NewsDetailsPage = () => {
    const { newsById, newsByIdLoading } = useNewsByIdHooks();
    const { advertisement } = useAdvertisementHooks();
  return (
    <>
     <Head>
        <title>{newsById?.news?.title}</title>
        <meta name="description" content={newsById?.news?.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={newsById?.news?.title} />
        <meta property="og:description" content={newsById?.news?.description} />
        <meta property="og:image" content={newsById?.news?.image} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newsById?.news?.title} />
        <meta name="twitter:description" content={newsById?.news?.description} />
        <meta name="twitter:image" content={newsById?.news?.image} />
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
export default NewsDetailsPage

// export async function getServerSideProps({ params }: { params: { id: string } }) {
//   const { id } = params

//   try {
//     const res = await fetch(`https://api.nrn.news/api/news/${id}`)
//     const newsData: NewsData = await res.json()
//     if (newsData?.news?.image.startsWith("data:image")) {
//       const base64Data = newsData.news.image.split(",")[1];
//       const filePath = path.join(process.cwd(), "public", `${params.id}.jpg`);
//       fs.writeFileSync(filePath, Buffer.from(base64Data, "base64"));
//       newsData.news.image = `https://nrn.news/${params.id}.jpg`;
//     } else {
//       if (newsData?.news?.image) {
//      newsData.news.image =   newsData?.news?.image
//       }
//     }
//     return { props: { details: newsData } }
//   } catch (error) {
//     return { props: { details: null, error } }
//   }
// }