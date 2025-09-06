import Details from '@/components/news/details'
import DetailsLoading from '@/components/ui/skeleton-loading/details-loading'
import { useAdvertisementHooks } from '@/hooks/advertisement/advertisement.hooks'
import { useNewsByIdHooks } from '@/hooks/news/newsby.hooks'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import React from 'react'

type Post = {
  id: string
  title: string
  description: string
  imageUrl: string
}

type BlogPostProps = {
  post: Post
}


export default function TrendingNewsDetailsPage ({ post }: BlogPostProps) {
    const { newsById, newsByIdLoading } = useNewsByIdHooks()
    const { advertisement } = useAdvertisementHooks();
  return (
    <>
   <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.description} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://nrn.news/news/trending/${post.id}`} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.description} />
        <meta property='og:image' content={post.imageUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content={`https://nrn.news/news/trending/${post.id}`} />
        <meta name='twitter:title' content={post.title} />
        <meta name='twitter:description' content={post.description} />
        <meta name='twitter:image' content={post.imageUrl} />
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



export const getServerSideProps: GetServerSideProps<BlogPostProps> = async (context: GetServerSidePropsContext) => {
  if (!context.params || typeof context.params.id !== 'string') {
    return { notFound: true }
  }

  const { id } = context.params

   // Fake API - JSONPlaceholder
   const res = await fetch(`https://api.nrn.news/api/news/${id}`);
   const postData = await res.json();
 
   if (!postData.news?._id) {
     return { notFound: true };
   }

   const post ={
    id: postData?.news?._id,
    title: postData?.news?.title,
    description: postData?.news?.description,
    imageUrl: postData?.news?.imageUrl
   }
 

  return { props: { post } }
}
