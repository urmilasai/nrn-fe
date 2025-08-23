import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardAdvertisementProps {
  imageUrl: string
  altText: string
  targetUrl: string
  width?: number
  height?: number
  className?: string
}

const CardAdvertisement: React.FC<CardAdvertisementProps> = ({
  imageUrl,
  altText,
  targetUrl,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden rounded-lg shadow-sm transition-transform hover:shadow-md hover:scale-[1.002] ${className} mb-2`}>
      <Link 
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <div className="relative w-full aspect-[10/10] sm:aspect-[10/10] md:aspect-[10/10]">
          <Image
            src={imageUrl || '/fallback-image.png'}
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

export default CardAdvertisement