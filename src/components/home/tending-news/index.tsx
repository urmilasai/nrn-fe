'use client';

import NrnImage from "@/components/ui/image/nrn-image";
import TrendingLoading from "@/components/ui/skeleton-loading/trending-loading";
import { useRouter } from "next/router";

interface TrendingNewsItem {
  _id: string;
  title: string;
  image: string;
  category: string;
  updatedAt: string;
  createdAt?: string;
}

interface TrendingNewsProps {
  trendingNews: TrendingNewsItem[];
  trendingNewsLoading: boolean;
  trendingNewsError: Error | null;
}

export default function TrendingNews({ trendingNews, trendingNewsLoading }: TrendingNewsProps) {
  const router = useRouter()
  return (
    <div className="w-full h-full bg-white dark:bg-gray-800 px-4 rounded-lg">
      {/* Trending Now Header */}
      <div className="relative mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Trending Now
        </h2>
        <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#1a3869]" />
      </div>

      {/* News List */}
      <div className="flex flex-col space-y-4">
        {trendingNewsLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <TrendingLoading key={index} index={index} />
          ))
        ) : (
          trendingNews?.slice(0, 4).map((news, index) => (
            <div
              key={index}
              className="flex space-x-4 group cursor-pointer sm-flex"
              onClick={() => router.push(`/news/trending/${news?._id}`)}
            >
              <div className="relative w-24 h-20 flex-shrink-0">
                <NrnImage image={news?.image || "/fallback-image.jpg"} alt={news?.title} className="rounded-lg object-cover w-full h-full" />
                {/* {news?.image && <Image
                  src={news?.image || "/fallback-image.jpg"}
                  alt={news?.title}
                  fill
                  className="rounded-lg object-cover w-full h-full"
                />}
                <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div> */}
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {news?.title}
                </h3>
                <div className="flex items-center space-x-2 mt-auto">
                  <p className="text-[10px] text-white dark:text-gray-400 bg-[#1a3869] rounded-full px-2 py-1">
                    {news?.category}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 ms-auto">
                    {news?.updatedAt ? new Date(news?.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '').replace(/(\d+)(?=\s)/, '$1th') : news?.createdAt ? new Date(news?.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '').replace(/(\d+)(?=\s)/, '$1th') : ''}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
