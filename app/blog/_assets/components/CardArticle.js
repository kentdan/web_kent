'use client';

import Link from "next/link";
import Image from "next/image";

export default function CardArticle({ article, isImagePriority = false }) {
  const { slug, title, description, categories, author, publishedAt, image } = article;

  return (
    <Link href={`/blog/${slug}`} className="group block bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-[16/9] relative bg-gray-100 overflow-hidden">
        {image?.src ? (
          <img
            src={require(`../images/authors/${image.src}`).default.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
            {image?.alt || "Article image"}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-white/60 backdrop-blur-sm">
        {/* Category */}
        <div className="mb-2 flex gap-2 items-center">
          {categories?.map((category) => (
            <span
              key={category.slug}
              className={`text-xs px-2 py-1 rounded ${
                category.slug === 'tech' 
                  ? 'bg-gray-100 text-gray-700' 
                  : 'text-gray-600'
              }`}
            >
              {category.titleShort}
            </span>
          ))}
          <span className="text-xs text-gray-400">·</span>
          <time className="text-xs text-gray-600">{publishedAt}</time>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative rounded-full overflow-hidden bg-gray-100">
            {author?.avatar && (
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <span className="text-sm text-gray-600">{author?.name}</span>
        </div>
      </div>
    </Link>
  );
}
