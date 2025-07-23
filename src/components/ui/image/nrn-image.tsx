import Image from 'next/image'
import React from 'react'

interface NrnImageProps {
    image: string
    alt: string
   className: string
}
const NrnImage = ({ image, alt, className }: NrnImageProps) => {
  return (
    <Image src={image || "/fallback-image.jpg"} alt={alt} fill className={className} />
  )
}

export default NrnImage