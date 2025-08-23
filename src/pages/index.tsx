import BannerAdvertisement from "@/components/advertisement/banner-advertisement";
import Banner from "@/components/home/banner/banner";
import NewsList from "@/components/news";
import { useAdvertisementHooks } from "@/hooks/advertisement/advertisement.hooks";
import { useBreakingNews } from "@/hooks/news/breaking-news/breaking.hooks";
import { useNewsHooks } from "@/hooks/news/news.hooks";
import { useTrendingNews } from "@/hooks/news/trending/trending.hooks";
import Head from "next/head";

interface Advertisement {
  id: string;
  image: string;
  title: string;
  link?: string;
  banner: boolean;
}

interface NewsItem {
  _id: string;
  title: string;
  image: string;
  category: string;
  trending?: boolean;
  breaking?: boolean;
  readTime?: string;
  date?: string;
}

export default function Home() {


  const { trendingNews, trendingNewsLoading, trendingNewsError } = useTrendingNews();
  const { breakingNews, breakingNewsLoading, breakingNewsError } = useBreakingNews();
  const { advertisement, advertisementLoading, advertisementError } = useAdvertisementHooks();
  const { news, newsLoading, newsError } = useNewsHooks();


  return (
    <>
      <Head>
        <title>NRN News</title>
        <meta property="og:title" content="NRN News - Latest Updates" />
        <meta property="og:description" content="Get the latest news and updates from NRN News." />
        <meta property="og:image" content="https://nrn.news/about.png" />
      </Head>
      <div className="container mx-auto px-4 py-4">
        <Banner
          trendingNews={trendingNews?.news}
          trendingNewsLoading={trendingNewsLoading}
          trendingNewsError={trendingNewsError}
          breakingNews={breakingNews?.news}
          breakingNewsLoading={breakingNewsLoading}
          breakingNewsError={breakingNewsError}
        />
        {
          advertisementLoading ?
            <div className="w-full h-20 bg-gray-200 dark:bg-gray-600 animate-pulse mt-5 rounded-lg" />
            : advertisementError ? <div>Error</div> : advertisement?.data?.filter((ad: Advertisement) => ad?.banner === true)?.slice(0, 1).map((ad: Advertisement) => (
              <BannerAdvertisement
                key={ad.id}
                image={ad?.image}
                altText={ad?.title}
                targetUrl={ad?.link || "/"}
              />
            ))
        }

        <NewsList news={news?.items?.slice(0, 8)} newsLoading={newsLoading} newsError={newsError} />
        {/* <Stories /> */}
        {/* Events and Social Media */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="col-span-2">
            <Events />
          </div>
          <div className="col-span-1">
            <SocialMedia />
            <CardAdvertisement
              imageUrl="/advertisement/ad-1.webp"
              altText="Card Advertisement"
              targetUrl="/"
            />
          </div>
        </div> */}

      </div>
    </>
  );
}
