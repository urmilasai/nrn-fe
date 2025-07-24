import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import BreakingNewsLoading from '@/components/ui/skeleton-loading/breaking-news-loading';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface BannerSliderItem {
    _id: string;
    image: string;
    title: string;
    description: string;
}

interface BannerSliderProps {
  bannerData: BannerSliderItem[];
  breakingNewsLoading: boolean;
  breakingNewsError: Error | null;
}


const Slider = ({ bannerData, breakingNewsLoading, breakingNewsError }: BannerSliderProps) => {
  const router = useRouter()
  if (breakingNewsLoading) {
    return <BreakingNewsLoading />
  }
  if (breakingNewsError) {
    return <div>Error: {breakingNewsError.message}</div>
  }
  return (
    <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7.3] rounded-lg overflow-hidden"
        >
          {bannerData?.map((slide: BannerSliderItem, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide?.image || "/images/banner.jpg"}
                  alt={slide?.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 truncate hover:underline transition-all duration-300 cursor-pointer" onClick={() => router.push(`/news/${slide?._id}`)}>
                      {slide?.title}
                    </h2>
                    <p  dangerouslySetInnerHTML={{ __html: slide?.description }} className="text-white/90 text-[12px] sm:text-[12px] md:text-[12px] lg:text-sm max-w-3xl line-clamp-2">
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  )
}

export default Slider