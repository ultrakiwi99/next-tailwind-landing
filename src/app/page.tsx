import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="bg-white fixed w-full z-30 top-0 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">My App</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="#listings" className="text-gray-800 hover:text-blue-500">
              Listings
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Testimonials
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <section className="relative h-screen pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img
          src="https://placehold.co/1920x1080"
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              Find your dream home in [Location]
            </h1>
            <p className="text-xl text-white mb-8">
              Expert guidance through every step of your real estate journey
            </p>
            <a
              href="#listings"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              View Listings
            </a>
          </div>
        </div>
      </section>
      <section id="listings" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://placehold.co/400x300"
                alt="Property 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Modern Downtown Condo
                </h3>
                <p className="text-gray-600 mb-4">$600.00</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1,500 sqft</span>
                </div>
              </div>
            </div>
            {/* Property card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://placehold.co/400x300"
                alt="Property 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Spacious Family Home
                </h3>
                <p className="text-gray-600 mb-4">$800.00</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>4 Beds</span>
                  <span>3 Baths</span>
                  <span>2,800 sqft</span>
                </div>
              </div>
            </div>
            {/* Property card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://placehold.co/400x300"
                alt="Property 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Cosy Cottage in the Woods
                </h3>
                <p className="text-gray-600 mb-4">$450.00</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2 Beds</span>
                  <span>1 Baths</span>
                  <span>1,200 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
