import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {product.featuredImage?.node?.sourceUrl && (
        <div className="relative h-48">
          <Image
            src={product.featuredImage.node.sourceUrl}
            alt={product.featuredImage.node.altText || product.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>

        <div
          className="text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: product.excerpt }}
        />

        <Link
          href={`/products/${product.slug}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Подробнее →
        </Link>
      </div>
    </div>
  );
}
