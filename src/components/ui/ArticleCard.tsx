import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  image: string;
  url: string;
}

export default function ArticleCard({ title, image, url }: ArticleCardProps) {
  return (
    <div className="group">
      <div className="relative h-64 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-white text-xl font-bold text-center mb-4">
            {title}
          </h3>
          <Link
            href={url}
            className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            ДЕТАЛЬНІШЕ
          </Link>
        </div>
      </div>
    </div>
  );
}