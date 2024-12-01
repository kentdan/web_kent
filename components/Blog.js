'use client';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';
import { articles } from "@/app/blog/_assets/content";
import Link from "next/link";

const projects = [
  {
    title: "Signal Prediction",
    description: "Using 3D building to predict DCU signal",
    image: "/images/taipei.png",
    technologies: ["JavaScript", "Python", "Pytorch"],
    link: "#",
    tag: "AI♠"
  },
  {
    title: "3D Gaussian Splatting",
    description: "Using 3D Gaussian Splatting to generate 3D objects",
    image: "/images/3dgs.gif",
    technologies: ["cuda", "Python", "Pytorch"],
    link: "#",
    tag: "AI♠"
  }
  // Add more projects here
];

export default function Blog() {
  // Get the latest 3 articles
  const latestArticles = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <section id="blog" className="pt-4 pb-16">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-normal py-1">
          Latest Articles
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Exploring ideas at the intersection of technology, investment, and personal growth.
        </p>
      </MotionDiv>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {latestArticles.map((article, index) => {
          // Check if any category is tech/AI related
          const isTechArticle = article.categories.some(cat => 
            cat.slug === 'tech' || 
            cat.title.toLowerCase().includes('ai') || 
            cat.title.toLowerCase().includes('tech')
          );
          
          const tag = isTechArticle ? 'AI♠' :
                     article.categories[0]?.slug === 'asean' ? 'SEA♣' : 
                     article.categories[0]?.slug === 'investment' ? 'INV♦' : 'UNI♥';
          
          return (
            <MotionDiv
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative aspect-[3/4] border-2 border-gray-200"
            >
              {/* Card Corner Text */}
              <div className="absolute top-4 left-4 text-left z-20">
                <div className={`font-bold text-2xl leading-tight tracking-wide ${
                  tag.includes('♦') ? 'text-red-600' : 
                  tag.includes('♠') ? 'text-blue-600' : 
                  tag.includes('♣') ? 'text-green-600' :
                  'text-purple-600'
                }`}>
                  {tag}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-right z-20 transform rotate-180">
                <div className={`font-bold text-2xl leading-tight tracking-wide ${
                  tag.includes('♦') ? 'text-red-600' : 
                  tag.includes('♠') ? 'text-blue-600' : 
                  tag.includes('♣') ? 'text-green-600' :
                  'text-purple-600'
                }`}>
                  {tag}
                </div>
              </div>

              <div className="h-1/2 relative">
                {article.image?.src ? (
                  <img
                    src={require(`@/app/blog/_assets/images/authors/${article.image.src}`).default.src}
                    alt={article.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                    {article.image?.alt || "Article image"}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 bg-white bg-opacity-90 backdrop-blur-sm h-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 relative rounded-full overflow-hidden bg-gray-100">
                      {article.author?.avatar && (
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <span className="text-sm text-gray-600">{article.author?.name}</span>
                    <span className="text-gray-400">·</span>
                    <time className="text-sm text-gray-600">{article.publishedAt}</time>
                  </div>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group mt-auto"
                >
                  Read Article
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </section>
  );
}
