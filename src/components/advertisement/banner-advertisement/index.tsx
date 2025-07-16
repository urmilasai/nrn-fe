import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BannerAdvertisementProps {
  image: string
  altText: string
  targetUrl: string
  width?: number
  height?: number
  className?: string
}

const BannerAdvertisement: React.FC<BannerAdvertisementProps> = ({
  image,
  altText,
  targetUrl,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden rounded-lg shadow-sm transition-transform hover:shadow-md hover:scale-[1.002] ${className} my-10`}>
      <Link 
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <div className="relative w-full aspect-[6/1] sm:aspect-[8/1] md:aspect-[10/1]">
          <Image
            src={image || '/fallback-image.jpg'}
            alt={altText}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover object-center"
          />
        </div>
      </Link>
    </div>
  )
}

export default BannerAdvertisement