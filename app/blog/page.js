'use client';

import { categories, articles } from "./_assets/content";
import Image from "next/image";
import Link from "next/link";
import CardArticle from "./_assets/components/CardArticle";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-32">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-bold mb-8 text-gray-900">
            My Blog
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Exploring ideas at the intersection of AI, technology, and personal growth. 
            Join me on this journey of continuous learning and discovery.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <CardArticle
                key={article.slug}
                article={article}
                isImagePriority={index < 4}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-gray-50 py-20 -mx-4">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link 
                  href={`/blog/category/${category.slug}`} 
                  key={category.slug}
                  className="group p-6 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="text-gray-900 text-sm font-medium">
                    View articles →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
