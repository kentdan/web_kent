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
    <section className="relative overflow-hidden w-full">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#239D60] to-[#1b7548] leading-normal py-1">
            Blog
          </h2>

        </MotionDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {latestArticles.map((article, index) => {
            // Check if any category is tech/AI related
            const isTechArticle = article.categories.some(cat => 
              cat.slug === 'tech' || 
              cat.title.toLowerCase().includes('ai') || 
              cat.title.toLowerCase().includes('tech')
            );

            const isAseanArticle = article.categories.some(cat =>
              cat.slug === 'asean' ||
              cat.title.toLowerCase().includes('asean') ||
              cat.title.toLowerCase().includes('sea')
            );
            
            const tag = isTechArticle ? 'Tech News' :
                       isAseanArticle ? 'ASEAN News' : 
                       article.categories[0]?.slug === 'investment' ? 'Investment' : 'Others';
            
            return (
              <MotionDiv
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative aspect-[3/4] border-2 border-[#239D60]/20"
              >
                <Link href={`/blog/${article.slug}`} className="absolute inset-0 z-30">
                  <span className="sr-only">Read {article.title}</span>
                </Link>
                {/* Card Corner Text */}
                <div className="absolute top-4 left-4 text-left z-20">
                  <div className={`text-sm ${tag === 'Tech News' ? 'font-bold' : 'font-medium'} text-white`}>
                    {tag}
                  </div>
                </div>

                <div className="absolute inset-0">
                  <img
                    src="/images/green.png"
                    alt="Blog cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#239D60] transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2">
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
                      <span className="text-sm text-gray-200">{article.author?.name}</span>
                      <span className="text-gray-400">·</span>
                      <time className="text-sm text-gray-200">{article.publishedAt}</time>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
