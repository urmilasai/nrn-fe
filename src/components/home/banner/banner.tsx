
import React from 'react'
import BannerSlider from './banner-slider'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import TrendingNews from '../tending-news'

interface BreakingNewsItem {
  _id: string;
  image: string;
  title: string;
  description: string;
}

interface TrendingNewsItem {
  _id: string;
  title: string;
  image: string;
  category: string;
  updatedAt: string;
  createdAt?: string;
}

interface BannerProps {
  trendingNews: TrendingNewsItem[],
  trendingNewsLoading: boolean
  trendingNewsError: Error | null
  breakingNews: BreakingNewsItem[]
  breakingNewsLoading: boolean
  breakingNewsError: Error | null
}

const Banner = ({ trendingNews, trendingNewsLoading, trendingNewsError, breakingNews, breakingNewsLoading, breakingNewsError }: BannerProps) => {
  return (
    <div className="relative w-full grid grid-cols-12 gap-4 rounded-lg overflow-hidden">
      <div className="lg:col-span-9 col-span-12 rounded-lg overflow-hidden">
        <BannerSlider
         bannerData={breakingNews}
         breakingNewsLoading={breakingNewsLoading}
         breakingNewsError={breakingNewsError}
         />
      </div>
      <div className="lg:col-span-3 col-span-12 rounded-lg overflow-hidden">
        <TrendingNews trendingNews={trendingNews} trendingNewsLoading={trendingNewsLoading} trendingNewsError={trendingNewsError} />
      </div>
    </div>
  )
}

export default Banner