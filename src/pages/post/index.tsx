import Footer from '@/components/shared/footer/footer'
import Header from '@/components/shared/header/Header'
import React from 'react'
import Image from 'next/image'

const DetailsPage = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <article className="md:col-span-2">
          <div className="flex items-center space-x-4 text-xs uppercase tracking-widest text-neutral-500 mb-2">
            <span>Santosh Basnet</span>
            <span className="mx-1">·</span>
            <span>16 June, 2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">15 Work From Home Part-Time Jobs You Can Do Now</h1>
          <div className="border border-x-0 border-neutral-200 dark:border-neutral-800 py-8 mb-6">
            <div className="relative w-full h-96">
              <Image src="/news/news-1.JPG" alt="Article Image" fill className="object-cover rounded-lg" />
            </div>
          </div>
          <p className="text-lg md:text-xl font-serif mb-4">
            <span className="text-6xl font-serif font-bold float-left mr-2 leading-none">L</span>orem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos
          </p>
          <p className="text-base md:text-lg mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia sed, suscipit distinctio, numquam omnis quo fuga ipsam quis inventore voluptatum recusandae culpa, unde doloribus saepe labore alias voluptate expedita? Dicta delectus beatae explicabo odio voluptatibus quas, saepe qui aperiam autem obcaecati, illo et! Incidunt voluptas culpa neque repellat sint, accusamus beatae, cumque autem tempore quisquam quam eligendi harum debitis.
          </p>
        </article>
        {/* Sidebar */}
        <aside className="md:col-span-1">
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
        </aside>
      </main>
      <Footer />
    </div>
  )
}

export default DetailsPage