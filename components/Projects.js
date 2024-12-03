'use client';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

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

export default function Projects() {
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
            Projects
          </h2>
          {/* <p className="text-xl text-gray-600 mb-8">
            Here are some of my recent works
          </p> */}
        </MotionDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative aspect-[3/4] border-2 border-[#239D60]/20"
            >
              <a href={project.link} className="absolute inset-0 z-30">
                <span className="sr-only">View {project.title}</span>
              </a>
              {/* Card Corner Text */}
              <div className="absolute top-4 left-4 text-left z-20">
                <div className="text-sm font-medium text-white">
                  {project.tag}
                </div>
              </div>

              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              </div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#239D60] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
