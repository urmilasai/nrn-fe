import React from 'react'
import Image from 'next/image'
import CardAdvertisement from '@/components/advertisement/card-advertisement';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  updatedAt?: string;
  createdAt?: string;
  newsFrom?: string;
}

interface AdvertisementItem {
  _id: string;
  title: string;
  image: string;
  link: string;
  banner: boolean;
  updatedAt: string;
  createdAt?: string;
}
interface DetailsProps {
  newsById: NewsItem
  advertisement?: AdvertisementItem[]
}

const Details = ({ newsById,  advertisement }: DetailsProps) => {
  return (
    <div className="bg-white min-h-screen text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="container mx-auto px-4 py-8 grid md:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className={`${advertisement && advertisement?.filter((ad: AdvertisementItem) => ad.banner === false).length > 0 ? 'col-span-8' : 'col-span-12'}`}>
          <div className="flex items-center space-x-4 text-xs uppercase tracking-widest text-neutral-500 mb-2">
            <span>{newsById?.newsFrom || 'Santosh Basnet'}</span>
            <span className="mx-1">·</span>
            <span>
              {newsById?.updatedAt ? new Date(newsById?.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '').replace(/(\d+)(?=\s)/, '$1th') : newsById?.createdAt ? new Date(newsById?.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '').replace(/(\d+)(?=\s)/, '$1th') : ''}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">{newsById?.title}</h1>
          <div className="border border-x-0 border-neutral-200 dark:border-neutral-800 py-8 mb-6">
            <div className="relative w-full h-96">
              <Image src={newsById?.image || "/images/banner.jpg"} alt={newsById?.title} fill className="object-cover rounded-lg" />
            </div>
          </div>
          {/* <p className="text-lg md:text-xl font-serif mb-4">
          <span className="text-6xl font-serif font-bold float-left mr-2 leading-none">L</span>
          orem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos
        </p> */}
          <p className="text-base md:text-lg mb-6" dangerouslySetInnerHTML={{ __html: newsById?.description }} />
        </article>
        {
          advertisement && advertisement?.filter((ad: AdvertisementItem) => ad.banner === false).length > 0 && (
            <div className="col-span-4 relative">
            {
              advertisement?.filter((ad: AdvertisementItem) => ad?.banner === false)?.map((ad: AdvertisementItem) => (
                <CardAdvertisement
                  key={ad._id}
                  imageUrl={ad?.image}
                  altText={ad?.title}
                  targetUrl={ad?.link || "/"}
                />
              ))
            }
          </div>
          )
        }
       




        {/* Sidebar */}
        {/* <aside className="md:col-span-1">
        <div className="flex border-b border-neutral-200 dark:border-neutral-800 mb-4">
          <button className="px-2 py-1 text-xs font-semibold uppercase tracking-widest border-b-2 border-neutral-900 dark:border-neutral-100">Trending</button>
          <button className="px-2 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-500 ml-4">Stories</button>
        </div>
        <ul className="space-y-6">
          {[
            { category: 'Culture', date: '16 June, 2025', title: '15 Work From Home Part-Time Jobs You Can Do Now', author: 'Cameron Williamson' },
            { category: 'Sport', date: '8 March, 2024', title: "Let's Get Back to Work, Brisbane", author: 'Martin Will' },
            { category: 'Food', date: '8 March, 2024', title: 'How to Avoid Distraction and Stay Focused During Video Calls?' },
            { category: 'Design', date: '8 March, 2024', title: 'Why Craigslist Tampa Is One of The Most Interesting Places On the Web?' },
            { category: 'Business', date: '8 March, 2024', title: '6 Easy Steps To Create Your Own Cute Merch For Instagram' },
            { category: 'Tech', date: '8 March, 2024', title: '10 Life-Changing Hacks Every Working Mom Should Know' }
          ].map((item, index) => (
            <li key={index} className="cursor-pointer">
              <div className="text-xs uppercase text-neutral-500 mb-1">{item.category} · {item.date}</div>
              <div className="font-medium leading-snug hover:text-[#1a3869] transition-all duration-300 ease-in-out">{item.title}</div>
              {item.author && <div className="text-xs text-neutral-400 mt-1">{item.author}</div>}
            </li>
          ))}
        </ul>
      </aside> */}
      </main>
    </div>
  )
}

export default Details