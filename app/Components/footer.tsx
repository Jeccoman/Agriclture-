"use client"


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 px-4 py-8 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-lg font-bold">Superior online shopping in the UAE</h2>
            <p className="text-sm text-gray-600">
              As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you're
              shopping for the latest electronic products, fashion, homeware, products for kids and babies, books and stationery, sports
              and health essentials, beauty products, or groceries, we have millions of products in the noon UAE store.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Shop the best products & brands at noon UAE</h2>
            <p className="text-sm text-gray-600">
              You willll find a massive variety of products from top brands at noon UAE. Our electronics department has the latest mobile
              phones, along with tablets, mobile accessories, laptops, wearable technology such as smartwatches and other wearable
              devices, headphones (in-ear, wireless and noise-cancelling), audiovisual gear, a selection of cameras, televisions, video
              game consoles such as PC and Xbox controllers, and video games.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Hassle-free UAE online shopping</h2>
            <p className="text-sm text-gray-600">
              When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We
              take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that
              make shopping simpler, faster, and better.
            </p>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-bold">We're Always Here To Help</h2>
            <p className="mb-4 text-sm text-gray-600">Reach out to us through any of these support channels</p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-primary p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">HELP CENTER</h3>
                  <p className="text-sm text-gray-600">help.noon.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-primary p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">EMAIL SUPPORT</h3>
                  <p className="text-sm text-gray-600">care@noon.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">SHOP ON THE GO</h2>
            <div className="flex space-x-4">
              <img
                src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
                alt="App Store"
                className="h-10"
              />
              <img
                src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
                alt="Google Play"
                className="h-10"
              />
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-7">
          <div>
            <h3 className="mb-4 font-bold">ELECTRONICS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Mobile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Tablets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home appliances
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Camera, photo & Videos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">FASHION</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Women's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Men's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Girl's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Boy's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Watches
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">HOME AND KITCHEN</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Bath
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home Decor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Kitchen and Dining
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Audio & Video
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">BEAUTY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Fragrance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Skin Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Hair Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Bath & Body
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">BABY & TOYS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Baby Gear
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Toys & Games
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Diapers & Wipes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Baby Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Nursery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">TOP BRANDS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Pampers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Apple
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Nike
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Samsung
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Tefal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">DAILY GROCERIES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Fresh Produce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Dairy & Eggs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Bread & Bakery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Meat & Seafood
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Breakfast Food
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-sm text-gray-600">© 2023 noon. All Rights Reserved</p>
          <div className="flex space-x-4">
            <img
              src="/g"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tabby.svg"
              alt="Tabby"
              className="h-8"
            />
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tamara-en.svg"
              alt="Tamara"
              className="h-8"
            />
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg"
              alt="Amex"
              className="h-8"
            />
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg"
              alt="Cash on Delivery"
              className="h-8"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center space-x-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            
            Terms of Use
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Intellectual Property Rights
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Terms of Sale
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            FAQs
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;