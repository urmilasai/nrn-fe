import BannerAdvertisement from "@/components/advertisement/banner-advertisement";
import Banner from "@/components/home/banner/banner";
import NewsList from "@/components/news";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/Header";
import { useAdvertisementHooks } from "@/hooks/advertisement/advertisement.hooks";
import { useBreakingNews } from "@/hooks/news/breaking-news/breaking.hooks";
import { useNewsHooks } from "@/hooks/news/news.hooks";
import { useTrendingNews } from "@/hooks/news/trending/trending.hooks";

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


console.log("news", news?.news)
  return (
    <div>
      <Header />
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
          <div className="w-full h-20 bg-gray-200 dark:bg-gray-600 animate-pulse" />
           : advertisementError ? <div>Error</div> : advertisement?.data?.filter((ad: Advertisement) => ad?.banner === true)?.map((ad: Advertisement) => (
            <BannerAdvertisement
              key={ad.id}
              image={ad?.image}
              altText={ad?.title}
              targetUrl={ad?.link || "/"}
            />
          ))
         }
       {/* {
        advertisement?.data?.filter((ad: any) => ad?.banner === true)?.map((ad: any) => (
          <BannerAdvertisement
            image={ad?.image}
            altText={ad?.title}
            targetUrl={ad?.link}
          />
        ))
       } */}
       <NewsList news={news?.news?.filter((news: NewsItem) => news?.trending === false || news?.breaking === false)} newsLoading={newsLoading} newsError={newsError} />
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

      <Footer />

    </div>
  );
}
