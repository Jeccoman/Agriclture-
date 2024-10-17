"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const carouselItems = [
  { id: 1, image: "/placeholder.svg", alt: "Halloween Banner 1" },
  { id: 2, image: "/placeholder.svg", alt: "Halloween Banner 2" },
  { id: 3, image: "/placeholder.svg", alt: "Halloween Banner 3" },
];

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-yellow-400">
      {/* Header */}
      <header className="bg-yellow-400 p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Image
            src="/placeholder.svg"
            alt="noon logo"
            width={100}
            height={40}
            className="w-24 h-10"
          />
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Deliver to Dubai</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-black text-white rounded-r">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <a href="#" className="text-black hover:underline">
              العربية
            </a>
            <a href="#" className="text-black hover:underline">
              Log in
            </a>
            <a
              href="#"
              className="text-black hover:underline flex items-center"
            >
              <Heart className="w-5 h-5 mr-1" />
              Wishlist
            </a>
            <a
              href="#"
              className="text-black hover:underline flex items-center"
            >
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-between py-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-600">
                ALL CATEGORIES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                ELECTRONICS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                MEN'S FASHION
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                WOMEN'S FASHION
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                BEAUTY & FRAGRANCE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                BABY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                TOYS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                SPORTS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                SELL ON NOON
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Cashback Banner */}
        <div className="bg-yellow-300 p-4 rounded-lg mb-8 flex items-center justify-between">
          <div>
            <span className="font-bold text-xl">15% cashback +</span>
            <span className="font-bold text-xl ml-2">Free delivery</span>
            <span className="ml-2">on your first order</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Use code:</span>
            <span className="bg-black text-white px-2 py-1 rounded">
              FIRST15
            </span>
          </div>
        </div>

        {/* Halloween Banner Carousel */}
        <div className="relative mb-8 overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-300"}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Category Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-8">
          {[
            "Deals",
            "Halloween",
            "Diwali Store",
            "Gaming",
            "Electronics",
            "Mobiles",
            "Beauty",
            "Women's Fashion",
          ].map((category) => (
            <div key={category} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
              <span className="text-sm text-center">{category}</span>
            </div>
          ))}
        </div>

        {/* More Reasons to Shop */}
        <h2 className="text-2xl font-bold mb-4">More reasons to shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {["Top-rated products", "Bestsellers", "New arrivals", "Mahali"].map(
            (reason) => (
              <div key={reason} className="bg-white p-4 rounded-lg shadow">
                <div className="w-full h-40 bg-gray-200 rounded mb-2"></div>
                <h3 className="font-bold">{reason}</h3>
                <p className="text-sm text-gray-600">Description goes here</p>
              </div>
            ),
          )}
        </div>

        {/* Mega Deals */}
        <h2 className="text-2xl font-bold mb-4">Mega deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow">
              <div className="w-full h-40 bg-gray-200 rounded mb-2"></div>
              <h3 className="font-bold">Product Name</h3>
              <p className="text-sm text-gray-600">AED 99.99</p>
            </div>
          ))}
        </div>

        {/* Recommended for You */}
        <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow">
              <div className="w-full h-40 bg-gray-200 rounded mb-2"></div>
              <h3 className="font-bold">Product Name</h3>
              <p className="text-sm text-gray-600">AED 99.99</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 noon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
