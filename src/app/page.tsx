import ProductListingPage from "@/components/ProductListingPage";
import { Product } from "@/types";

export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Products fetch failed:", res.status);
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    console.log("Products fetched:", data.length);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories", {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Categories fetch failed:", res.status);
      throw new Error("Failed to fetch categories");
    }

    const data = await res.json();
    console.log("Categories fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  console.log("SSR Products length:", products.length);
  console.log("SSR Categories:", categories);

  return (
    <main>
      {/* Single H1 for SEO */}
      <h1 className="sr-only">Product Listing Page</h1>

      <ProductListingPage
        initialProducts={products}
        categories={categories}
      />
    </main>
  );
}
