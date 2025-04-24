import { getProductBySlug, getAllProducts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Продукт не найден",
    };
  }

  return {
    title: `${product.title} | Avisat`,
    description: product.excerpt,
  };
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="container mx-auto py-8 px-4">
      <Link
        href="/products"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Назад к каталогу
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {product.featuredImage?.node?.sourceUrl && (
          <div className="relative h-96">
            <Image
              src={product.featuredImage.node.sourceUrl}
              alt={product.featuredImage.node.altText || product.title}
              fill
              className="object-contain"
            />
          </div>
        )}

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: product.content }}
          />
        </div>
      </div>
    </article>
  );
}
