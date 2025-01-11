import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bed, Bath, Expand } from 'lucide-react'

interface PropertyCardProps {
  image: string
  title: string
  price: string
  location: string
  beds: number
  baths: number
  sqft: number
}

export function PropertyCard({ image, title, price, location, beds, baths, sqft }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">{price}</p>
        <p className="text-gray-600 mb-4">{location}</p>
      </CardContent>
      <CardFooter className="bg-gray-100 p-4 flex justify-between">
        <div className="flex items-center">
          <Bed className="w-5 h-5 mr-1" />
          <span>{beds} beds</span>
        </div>
        <div className="flex items-center">
          <Bath className="w-5 h-5 mr-1" />
          <span>{baths} baths</span>
        </div>
        <div className="flex items-center">
          <Expand className="w-5 h-5 mr-1" />
          <span>{sqft} sqft</span>
        </div>
      </CardFooter>
    </Card>
  )
}

