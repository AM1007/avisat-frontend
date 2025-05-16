import Image from "next/image";
// import Link from "next/link";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white shadow hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <h3 className="text-red-500 font-bold p-4">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
