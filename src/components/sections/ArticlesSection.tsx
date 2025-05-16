import ArticleCard from "../ui/ArticleCard";

export default function ArticlesSection() {
  const articles = [
    {
      title: "ВІДЕОСПОСТЕРЕЖЕННЯ СЬОГОДНІ",
      image: "/article-video.jpg",
      url: "/articles/video-surveillance",
    },
    {
      title: "ОХОРОНА ПЕРИМЕТРУ: НОВІ ТЕХНОЛОГІЇ",
      image: "/article-perimeter.jpg",
      url: "/articles/perimeter-security",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold text-red-600 mb-12">
          СТАТТІ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              image={article.image}
              url={article.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
