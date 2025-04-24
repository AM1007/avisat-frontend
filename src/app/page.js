import { getAllProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export const revalidate = 60; // Revalidate content every 60 seconds

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Каталог продукции Avisat</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        href="/products"
        className="block mt-8 text-blue-600 hover:underline"
      >
        Смотреть все продукты →
      </Link>
    </main>
  );
}
