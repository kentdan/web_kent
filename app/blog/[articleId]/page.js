'use client';

import { articles } from "../_assets/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }) {
  const article = articles.find((article) => article.slug === params.articleId);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-24">
      {/* Categories and Date */}
      <div className="flex items-center gap-3 mb-8">
        {article.categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className={`text-sm px-3 py-1.5 rounded-full ${
              category.slug === 'tech' 
                ? 'bg-gray-100 text-gray-700' 
                : 'text-gray-600'
            }`}
          >
            {category.title}
          </Link>
        ))}
        <span className="text-gray-400">·</span>
        <time className="text-gray-600 text-sm">{article.publishedAt}</time>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
        {article.title}
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        {article.description}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 mb-16 pb-16 border-b border-gray-200">
        <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
          {article.author?.avatar && (
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div>
          <div className="font-medium text-black">{article.author?.name}</div>
          <div className="text-sm text-gray-600">{article.author?.role}</div>
        </div>
      </div>

      {/* Main Image */}
      <div className="aspect-[16/9] relative mb-16 bg-gray-100 overflow-hidden">
        {article.image?.src ? (
          <img
            src={require(`../_assets/images/authors/${article.image.src}`).default.src}
            alt={article.image.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
            {article.image?.alt || "Article image"}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-black">
        {article.content}
      </div>
    </article>
  );
}
