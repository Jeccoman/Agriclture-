'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Search, ShoppingCart, Heart, Star, Sun, Moon,User,MapPin,Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import TimeBand from './popularBrands'
const categories = [
  ,"ELECTRONICS", "MEN'S FASHION", "WOMEN'S FASHION", "KIDS' FASHION", "HOME", "BEAUTY & FRAGRANCE"
]

const popularBrands = [
  "Topsy", "Yardley", "Pears", "Ladygin", "Brut", "Bed Head", "Alpedin", "Suave", "Lux", "Radox", "Old Spice",
  "Lynx", "Palmolive", "Simple", "Fairwhale", "Peshi", "Wwoor"
]

const recentlyAdded = [
  { name: "Epimax Body Wash Very Sensitive", price: 32400, image: "/placeholder.svg" },
  { name: "Sila Set", price: 59400, image: "/placeholder.svg" },
  { name: "Epi-Max Man Body Lotion", price: 25050, image: "/placeholder.svg" },
  { name: "Teejel - Teething Gel For Babies", price: 43800, image: "/placeholder.svg" },
  { name: "Soothing Gel + Gum-EEZ Teether", price: 18930, image: "/placeholder.svg" },
  { name: "Magreth Set", price: 64800, image: "/placeholder.svg" },
]

const banners = [
  {
    title: "Self-care starts with the perfect products",
    description: "Discover our wide range of cosmetics and pamper yourself",
    image: "/placeholder.svg",
    cta: "Shop Now"
  },
  {
    title: "Unleash the power of tech with your dream Gadget",
    description: "Explore our latest tech offerings",
    image: "/placeholder.svg",
    cta: "Shop Now"
  },
  {
    title: "Build your business by selling on our platform",
    description: "Reach millions of potential customers",
    image: "/placeholder.svg",
    cta: "Start Selling"
  }
]

export default function Homepage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Main Navigation */}
      <nav className={`w-full py-4 px-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold">AgriCulture</h1>
          <Button variant="outline" className="hidden md:flex items-center">
            Catalog
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-yellow-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Deliver to
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New York</DropdownMenuItem>
              <DropdownMenuItem>Los Angeles</DropdownMenuItem>
              <DropdownMenuItem>Chicago</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                EN
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-4 w-4 text-xs bg-yellow-400 text-black rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </nav>

      {/* Categories */}
      <div className="bg-gray-100 py-2 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="text-sm">
              {category}
            </Button>
          ))}
          <Button variant="outline" className="text-sm">
            TRY FREE
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-yellow-400 text-black py-4 text-center">
        <span className="font-bold">15% cashback + </span>
        <span className="bg-white text-black px-2 py-1 rounded">Free delivery</span>
        <span> on your first order</span>
        <span className="ml-4">Use code: <span className="font-bold">FIRST15</span></span>
        <span className="text-xs ml-2">*T&Cs apply</span>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 ">
        {/* Banner Carousel */}
        <div className="relative h-96 mb-8">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                  <p className="mb-4">{banner.description}</p>
                  <Button>{banner.cta}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Brands */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular Brands</h2>
          <div className="grid grid-cols-6 gap-4">
            {popularBrands.map((brand) => (
              <div key={brand} className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                <span className="font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </section>
         <section className='mb-8'>
            <TimeBand/>
         </section>
        {/* Recently Added Products */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recently Added</h2>
          <div className="grid grid-cols-3 gap-6">
            {recentlyAdded.map((product) => (
              <div key={product.name} className="bg-white p-4 rounded-lg shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold">TSh {product.price.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">0 Reviews</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

     
    </div>
  )
}