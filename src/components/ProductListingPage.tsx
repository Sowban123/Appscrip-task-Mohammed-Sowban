'use client';


import { useState, useMemo } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';



interface ProductListingPageProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ProductListingPage({ initialProducts, categories }: ProductListingPageProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

const filteredAndSortedProducts = useMemo(() => {
  return products;
}, [products]);


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><a href="/" className="hover:text-gray-900 transition-colors">Home</a></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Products</li>
        </ol>
      </nav>

      {/* Page Title */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Discover Our Products
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Explore our wide range of high-quality products
        </p>
      </div>

      {/* Filter and Sort Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 lg:hidden transition-colors active:scale-95 font-medium"
            aria-label="Toggle filters"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span className="text-sm sm:text-base">Filters</span>
          </button>
          <span className="text-sm sm:text-base text-gray-600 font-medium">
            {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'Product' : 'Products'}
          </span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="sort" className="text-sm text-gray-600 hidden sm:block whitespace-nowrap">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 cursor-pointer text-sm sm:text-base w-full sm:w-auto transition-colors"
          >
            <option value="recommended">Recommended</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 lg:gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
          <div className="bg-white rounded-lg border border-gray-200 p-5 lg:p-6 sticky top-24">
            <FilterSidebar
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>
        </aside>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
              onClick={() => setShowFilters(false)}
              aria-label="Close filters"
            />
            <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-white p-5 sm:p-6 overflow-y-auto shadow-2xl animate-in slide-in-from-left duration-300">
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 uppercase tracking-wide">Filters</h2>
                <button 
                  onClick={() => setShowFilters(false)} 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-95"
                  aria-label="Close filters"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <FilterSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={setSelectedCategories}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
              />
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors active:scale-95 font-medium"
                >
                  Show {filteredAndSortedProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          <h2 className="sr-only">Product List</h2>
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 px-4">
              <div className="mb-4">  
                <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600 text-base sm:text-lg mb-4">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 1000]);
                }}
                className="px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors active:scale-95 font-medium text-sm sm:text-base"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
