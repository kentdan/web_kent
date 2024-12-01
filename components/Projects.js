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
    <section id="projects" className="pt-4 pb-16">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-normal py-1">
          My Projects
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Here are some of my recent works
        </p>
      </MotionDiv>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative aspect-[3/4] border-2 border-gray-200"
          >
            {/* Card Corner Text */}
            <div className="absolute top-4 left-4 text-left z-20">
              <div className={`font-bold text-2xl leading-tight tracking-wide ${project.tag.includes('♦') ? 'text-red-600' : 'text-blue-600'}`}>
                {project.tag}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-right z-20 transform rotate-180">
              <div className={`font-bold text-2xl leading-tight tracking-wide ${project.tag.includes('♦') ? 'text-red-600' : 'text-blue-600'}`}>
                {project.tag}
              </div>
            </div>

            <div className="h-1/2 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-white bg-opacity-90 backdrop-blur-sm h-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group mt-auto"
              >
                View Project 
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
