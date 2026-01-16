import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Top banner */}
        <div className="flex items-center justify-between py-2 sm:py-3 text-xs sm:text-sm border-b border-gray-100">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden md:block text-gray-600">📍 Free shipping on orders above $50</span>
            <span className="md:hidden text-gray-600 text-xs">🚚 Free shipping</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help</Link>
            <Link href="#" className="hidden sm:inline text-gray-600 hover:text-gray-900 transition-colors">Track Order</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Account</Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900">
  Appscrip PLP Task.
</Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Shop</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">On Sale</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">New Arrivals</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Brands</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-60 lg:w-80">
              <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Search for products..."
                className="bg-transparent border-none outline-none ml-2 w-full text-sm"
              />
            </div>
            <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full transition-colors active:scale-95" aria-label="Shopping cart">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full md:hidden transition-colors active:scale-95" aria-label="Menu">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
