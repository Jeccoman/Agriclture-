import { useState, useEffect } from 'react'
import { ShoppingCart, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface MegaDeal {
  id: number
  name: string
  image: string
  originalPrice: number
  salePrice: number
  category: string
}

const megaDeals: MegaDeal[] = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra 5G Dual SIM Phantom Black 256GB",
    image: "/placeholder.svg?height=100&width=100",
    originalPrice: 4949,
    salePrice: 2599,
    category: "Smartphones deals"
  },
  {
    id: 2,
    name: "LEGO 60351 City Rocket Launch Centre 60351 Building Toy",
    image: "/placeholder.svg?height=100&width=100",
    originalPrice: 1085,
    salePrice: 414,
    category: "Building Toys deals"
  },
  {
    id: 3,
    name: "Apple MacBook Air MLY33 13.6-Inch Display : Apple M2 chip",
    image: "/placeholder.svg?height=100&width=100",
    originalPrice: 4999,
    salePrice: 3149,
    category: "Laptops deals"
  },
  {
    id: 4,
    name: "Seventy Five Basics Essential Sweatshirt",
    image: "/placeholder.svg?height=100&width=100",
    originalPrice: 89,
    salePrice: 20,
    category: "Hoodies & Sweatshirts deals"
  }
]

export default function TimeBand() {
  const [timeLeft, setTimeLeft] = useState<number>(7 * 60) // 7 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}h : ${remainingSeconds.toString().padStart(2, '0')}m`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">More reasons to shop</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-pink-100">
              <CardContent className="p-4">
                <img src="/placeholder.svg?height=150&width=150" alt="Top-rated products" className="w-full h-32 object-cover mb-4" />
                <h3 className="font-semibold">Top-rated products</h3>
                <p className="text-sm text-gray-600">Get the best at the best prices</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-100">
              <CardContent className="p-4">
                <img src="/placeholder.svg?height=150&width=150" alt="Bestsellers" className="w-full h-32 object-cover mb-4" />
                <h3 className="font-semibold">Bestsellers</h3>
                <p className="text-sm text-gray-600">Most popular picks</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-100">
              <CardContent className="p-4">
                <img src="/placeholder.svg?height=150&width=150" alt="New arrivals" className="w-full h-32 object-cover mb-4" />
                <h3 className="font-semibold">New arrivals</h3>
                <p className="text-sm text-gray-600">Stay up to date</p>
              </CardContent>
            </Card>
            <Card className="bg-green-100">
              <CardContent className="p-4">
                <img src="/placeholder.svg?height=150&width=150" alt="Mahali" className="w-full h-32 object-cover mb-4" />
                <h3 className="font-semibold">Mahali</h3>
                <p className="text-sm text-gray-600">Support local businesses</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Mega deals</h2>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">{formatTime(timeLeft)}</span>
            </div>
            <Button variant="secondary">ALL DEALS</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {megaDeals.map((deal) => (
              <Card key={deal.id} className="bg-gray-100">
                <CardContent className="p-4">
                  <div className="bg-yellow-300 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                    {deal.category}
                  </div>
                  <div className="flex items-center space-x-4">
                    <img src={deal.image} alt={deal.name} className="w-20 h-20 object-cover" />
                    <div>
                      <h3 className="font-semibold text-sm line-clamp-2">{deal.name}</h3>
                      <div className="mt-2">
                        <span className="text-lg font-bold">{deal.salePrice} AED</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{deal.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">In focus</h2>
          <Card className="bg-brown-500 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Shine like never before</h3>
              <p className="mb-4">Nourish your locks from root to tip</p>
              <img src="/placeholder.svg?height=200&width=300" alt="Hair care products" className="w-full h-40 object-cover rounded-lg" />
            </CardContent>
          </Card>
          <Card className="bg-black text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">ENTER A GAMING UNIVERSE</h3>
              <p className="mb-4">Shop consoles, accessories & more</p>
              <div className="flex justify-between items-center">
                <img src="/placeholder.svg?height=150&width=200" alt="Gaming accessories" className="w-32 h-32 object-cover rounded-lg" />
                <div className="bg-green-400 text-black text-xl font-bold px-4 py-2 rounded-full">
                  UP TO 50% OFF
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}