import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
      <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
      Heyo! I'm Kent.
        </h2>
        <p className="text-lg opacity-80 leading-relaxed">
        I've had an exciting journey so far, working in startups, NGOs, and now a major corporation. Some of my coolest projects include serving as the Asia Pacific Regional Representative for an NGO focused on student aspirations regarding climate change, and building a full-stack AI model for a startup. Currently, I'm contributing to one of the biggest tech enterprise in Taiwan, Taiwan Mobile. Recently I also started writing about my experiences and thoughts.
        </p>
          <button className="btn btn-primary btn-wide items-center">
            Writings
          </button>
      </div>
    </section>
  );
};

export default Hero;
