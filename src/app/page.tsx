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
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-blue-500"
            >
              Testimonials
            </a>
            <a href="#contacts" className="text-gray-800 hover:text-blue-500">
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
      <section id="about" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/400x400"
                alt="Real Estate Agent"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About [Your Name]</h2>
              <p className="text-gray-600 mb-6">
                With over [X] years of experience in [Location] real estate...
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  [X] Properties Sold
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  [X] Apartments Rented
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  [X] Other stuff done
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What My Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/48x48"
                  alt="Client 1"
                  className="rounded-full w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-500">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Working with [Your Name] was an incredible experience..."
              </p>
            </div>
            {/* Testimonial card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/48x48"
                  alt="Client 1"
                  className="rounded-full w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Brown</h4>
                  <p className="text-gray-500">Investor</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Working with [Your Name] was an incredible experience..."
              </p>
            </div>
            {/* Testimonial card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/48x48"
                  alt="Client 1"
                  className="rounded-full w-16 h-16 mr-4"
                />
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-gray-500">Seller</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I highly recommend [Your Name] for any real estate needs..."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contacts" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Let's Connect
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4"></h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
