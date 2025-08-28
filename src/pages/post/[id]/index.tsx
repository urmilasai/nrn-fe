import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'

type Post = {
  id: string
  title: string
  description: string
  image: string
}

type BlogPostProps = {
  post: Post
}

export default function BlogPost ({ post }: BlogPostProps) {
  console.log("sadasd", post.image)
  return (
    <>
    
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.description} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://yourdomain.com/posts/${post.id}`} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.description} />
        <meta property='og:image' content={post.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content={`https://yourdomain.com/posts/${post.id}`} />
        <meta name='twitter:title' content={post.title} />
        <meta name='twitter:description' content={post.description} />
        <meta name='twitter:image' content={post.image} />
      </Head>
      <main className='p-5'>
        <h1 className='text-2xl font-bold mb-2'>{post.title}</h1>
        <p className='mb-4'>{post.description}</p>
        <img
          src={post.image}
          alt={post.title}
          className='max-w-full rounded-lg'
        />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async (context: GetServerSidePropsContext) => {
  if (!context.params || typeof context.params.id !== 'string') {
    return { notFound: true }
  }

  const { id } = context.params

   // Fake API - JSONPlaceholder
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   const postData = await res.json();
 
   if (!postData.id) {
     return { notFound: true };
   }

   const post = {
    id: postData.id,
    title: postData.title,
    description: postData.body,
    image: `https://picsum.photos/seed/1200/630`,
  };


  return { props: { post } }
}
