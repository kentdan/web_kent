import Image from "next/image";
import kentImg from "@/app/blog/_assets/images/authors/kent.jpg";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/header.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  sea: "sea",
  investment: "investment",
  university: "university",
  tech: "tech",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    slug: categorySlugs.sea,
    title: "ASEAN",
    titleShort: "ASEAN",
    description:
      "Insights and analysis on the dynamic tech landscape of ASEAN, exploring innovations and market trends in Southeast Asia's digital economy.",
  },
  {
    slug: categorySlugs.investment,
    title: "Investment",
    titleShort: "Investment",
    description:
      "Deep dives into investment strategies, market analysis, and financial insights from both traditional and emerging markets.",
  },
  {
    slug: categorySlugs.university,
    title: "University",
    titleShort: "University",
    description:
      "Reflections and learnings from my academic journey at National Taiwan University, covering both technical and business courses.",
  },
  {
    slug: categorySlugs.tech,
    title: "Tech",
    titleShort: "Tech",
    description:
      "Technical insights and analysis on emerging technologies, software engineering, and artificial intelligence.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = {
  kent: {
    slug: "kent",
    name: "Kent Daniel",
    role: "Software Engineer",
    avatar: kentImg,
    description:
      "I'm a High Potential Software Engineer at Taiwan Mobile, specializing in MLOps and Investment Consulting. I've had an exciting journey so far, working in startups, NGOs, and now a major corporation. My personal goto statement is 'make small improvement everyday and have fun along the way'.",
    social: [
      {
        name: "Twitter",
        url: "https://twitter.com/kentdan",
        icon: (
          <svg
            version="1.1"
            id="svg5"
            x="0px"
            y="0px"
            viewBox="0 0 1668.56 1221.19"
            className="w-9 h-9"
            // Using a dark theme? ->  className="w-9 h-9 fill-white"
          >
            <g id="layer1" transform="translate(52.390088,-25.058597)">
              <path
                id="path1009"
                d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kentdaniel01/",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            // Using a dark theme? ->  className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        url: "https://github.com/Marc-Lou-Org/ship-fast",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            // Using a dark theme? ->  className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        ),
      },
    ],
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  kent: "kent",
};

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600",
  h3: "text-2xl font-bold mb-4 text-gray-900",
  p: "text-gray-600 text-lg mb-6 leading-relaxed",
  ul: "list-inside list-disc text-gray-600 text-lg mb-6 space-y-2",
  li: "list-item",
  code: "text-sm font-mono bg-gray-100 text-gray-800 p-6 rounded-lg my-4 overflow-x-scroll select-all",
  codeInline: "text-sm font-mono bg-gray-100 text-gray-800 px-2 py-1 rounded-md select-all",
  link: "text-blue-600 hover:text-purple-600 transition-colors duration-300",
  section: "mb-12",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    slug: "llm-in-grab-gojek",
    title: "The Usage of LLM in Grab & Gojek",
    description: "How Southeast Asia's Leading Super Apps are leveraging Large Language Models to enhance their platforms.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.sea),
      categories.find((category) => category.slug === categorySlugs.tech),
    ],
    author: authors.kent,
    publishedAt: "2024-12-01",
    image: {
      src: "grab_gojek.webp",
      urlRelative: "grab_gojek.webp",
      alt: "Grab and Gojek logos with AI visualization",
    },
    content: (
      <>
        <section className={styles.section}>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Grab & Gojek are two of the biggest super apps in Southeast Asia. The app includes ride-hailing, food delivery, digital payment and many more. Both companies are leveraging Large Language Models (LLMs) to enhance their platforms but in distinctly different ways.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Grab and OpenAI</h2>
          <p className={styles.p}>
            Grab has collaborated with OpenAI to integrate GPT-4&apos;s vision fine-tuning to allow GrabMaps to localize speed limit signs, turn restrictions, places, and road geometries more accurately.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Speed limit sign localization: The initial use case involved matching speed limit signs to their respective roads.</li>
            <li className={styles.li}>Turn restriction and geometry identification: The model identifies intricate details like elevated roads and turn restrictions, which are crucial for navigation.</li>
          </ul>
          <p className={styles.p}>
            By using their network of motorbike drivers and pedestrian partners, equipped with 360-degree cameras they have collected millions of street-level images. With the street data collected and by using OpenAI&apos;s vision fine-tuning, Grab has made mapmaking faster, smarter, and more efficient. These highly detailed maps improve navigation for millions of users and driver-partners daily, boosting economic activity across Southeast Asia.
          </p>
          <p className={styles.p}>
            To find out more about the collaboration visit: <a href="https://openai.com/index/grab/" className={styles.link} target="_blank" rel="noopener noreferrer">OpenAI x Grab</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>GoTo, Indosat Ooredoo and AI Singapore</h2>
          <p className={styles.p}>
            PT GoTo Gojek Tokopedia Tbk has collaborated with Indosat and Indosat Ooredoo Hutchison, in partnership with AI Singapore, have launched an open-source Indonesian-focused language model called Sahabat AI.
          </p>
          
          <h3 className={styles.h3}>Model Size</h3>
          <p className={styles.p}>
            They chose smaller models (7B, 8B, and 9B parameters) instead of larger ones, prioritizing efficiency. These models were fine-tuned from AI Singapore&apos;s SEA-LION v2, which supports Southeast Asian languages like Thai, Vietnamese, and Tamil.
          </p>

          <h3 className={styles.h3}>Cultural Focus</h3>
          <p className={styles.p}>
            Sahabat-AI specializes in Indonesian language and dialects. It was trained on:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>448,000 Indonesian instruction-completion pairs</li>
            <li className={styles.li}>96,000 pairs in Javanese</li>
            <li className={styles.li}>98,000 pairs in Sundanese</li>
            <li className={styles.li}>129,000 pairs in English for additional versatility</li>
          </ul>
          <p className={styles.p}>
            By being open-source, the project seeks to make large language models (LLMs) more accessible to businesses and individuals in Indonesia and further enhance the model capabilities and relevance.
          </p>
          <p className={styles.p}>
            To find out more about the model visit: <a href="https://huggingface.co/GoToCompany" className={styles.link} target="_blank" rel="noopener noreferrer">GoTo Company on Hugging Face</a>
          </p>
        </section>
      </>
    ),
  },
  // {
  //   slug: "most-influential-courses",
  //   title: "The Most Influential Courses I Took During University",
  //   description: "A reflection on the courses that shaped my thinking and career path at National Taiwan University.",
  //   categories: [
  //     categories.find((category) => category.slug === categorySlugs.university),
  //   ],
  //   author: authors.find((author) => author.slug === authorSlugs.kent),
  //   publishedAt: "2024-01-22",
  //   image: {
  //     src: "/images/blog/ntu-courses.jpg",
  //     urlRelative: "/images/blog/ntu-courses.jpg",
  //     alt: "National Taiwan University Campus",
  //   },
  //   content: (
  //     <>
  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>Introduction</h2>
  //         <p className={styles.p}>
  //           During my time at National Taiwan University, I had the privilege of taking many courses that significantly influenced my thinking and career path. Here are some of the most impactful ones that shaped who I am today.
  //         </p>
  //       </section>

  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>1. Probability Theory</h2>
  //         <p className={styles.p}>
  //           This course fundamentally changed how I view uncertainty and decision-making. It wasn't just about calculating probabilities; it was about understanding the mathematical framework behind uncertainty. The professor's emphasis on both theoretical foundations and practical applications helped me grasp how probability theory connects to real-world scenarios, from machine learning to financial modeling.
  //         </p>
  //       </section>

  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>2. Deep Learning</h2>
  //         <p className={styles.p}>
  //           What made this course special wasn't just the technical content, but how it was structured. We started from basic neural networks and gradually built up to complex architectures. The hands-on projects were particularly valuable - we implemented papers from scratch and learned how to debug deep learning models effectively.
  //         </p>
  //       </section>

  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>3. Investment</h2>
  //         <p className={styles.p}>
  //           This course provided a comprehensive view of investment principles and market mechanics. We covered everything from fundamental analysis to modern portfolio theory. The most valuable aspect was learning how to think systematically about risk and return, and understanding the psychological aspects of investment decisions.
  //         </p>
  //       </section>

  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>4. Computer Architecture</h2>
  //         <p className={styles.p}>
  //           This course gave me a deep understanding of how computers actually work. We learned about CPU design, memory hierarchies, and pipelining. The most fascinating part was seeing how hardware optimizations influence software performance - knowledge that still helps me write more efficient code today.
  //         </p>
  //       </section>

  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>5. Operating Systems</h2>
  //         <p className={styles.p}>
  //           The projects in this course were incredibly challenging but rewarding. Implementing core OS components from scratch taught me not just about operating systems, but about debugging complex systems and writing reliable code. The concepts I learned here have been invaluable in understanding system-level programming and cloud infrastructure.
  //         </p>
  //       </section>

  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>Key Takeaways</h2>
  //         <ul className={styles.ul}>
  //           <li className={styles.li}>Theory and practice must go hand in hand</li>
  //           <li className={styles.li}>Understanding fundamentals is crucial for long-term growth</li>
  //           <li className={styles.li}>Complex systems require systematic thinking</li>
  //           <li className={styles.li}>The best learning happens when theory meets real-world applications</li>
  //         </ul>
  //       </section>

  //       <section className={styles.section}>
  //         <h2 className={styles.h2}>Conclusion</h2>
  //         <p className={styles.p}>
  //           These courses didn't just teach me technical knowledge - they shaped how I think about problems and approach challenges. The combination of theoretical foundations and practical applications has been invaluable in my career, whether I'm working on machine learning models, making investment decisions, or building software systems.
  //         </p>
  //       </section>
  //     </>
  //   ),
  // },
  // {
  //   slug: "university-courses",
  //   title: "The Most Influential Courses I took during Univesity",
  //   description:
  //     "I've taken a lot of courses during my time in National Taiwan Univesity. Here are the most influential ones.",
  //   categories: [
  //     categories.find((category) => category.slug === categorySlugs.university),
  //   ],
  //   author: authors.find((author) => author.slug === authorSlugs.kent),
  //   publishedAt: "2024-06-22",
  //   image: {
  //     // src: introducingSupabaseImg,
  //     // urlRelative: "/blog/introducing-supabase/header.jpg",
  //     // alt: "Supabase and ShipFast logo combined",
  //   },
    // content: (
//       <>
//         <Image
//           src={introducingSupabaseImg}
//           alt="Supabase and ShipFast logo combined"
//           width={700}
//           height={500}
//           priority={true}
//           className="rounded-box"
//           placeholder="blur"
//         />
//         <section>
//           <h2 className={styles.h2}>Introduction</h2>
//           <p className={styles.p}>
//             Supabase is an open-source Firebase alternative. It&apos;s a great
//             tool for building a backend for your app. It&apos;s now integrated
//             with ShipFast!
//           </p>
//         </section>

//         <section>
//           <h3 className={styles.h3}>1. Create a supabase account</h3>
//           <p className={styles.p}>
//             First, go to{" "}
//             <a href="https://supabase.com/" className="link link-primary">
//               Supabase
//             </a>{" "}
//             and create an account. It&apos;s free for up to 10,000 rows per
//             table.
//             <br />
//             Then create a new project and a new table. You can use the following
//             SQL schema:
//           </p>

//           <pre className={styles.code}>
//             <code>
//               {`CREATE TABLE public.users (
//   id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
//   email text NOT NULL,
//   password text NOT NULL,
//   created_at timestamp with time zone NOT NULL DEFAULT now(),
//   updated_at timestamp with time zone NOT NULL DEFAULT now(),
//   CONSTRAINT users_pkey PRIMARY KEY (id)
// );`}
//             </code>
//           </pre>
//         </section>

//         <section>
//           <h3 className={styles.h3}>2. Add your credentials to ShipFast</h3>
//           <p className={styles.p}>
//             Copy the <span className={styles.codeInline}>API URL</span> and{" "}
//             <span className={styles.codeInline}>API Key</span> from your
//             Supabase project settings and add them to your ShipFast project
//             settings. Add these files to your project:
//           </p>

//           <ul className={styles.ul}>
//             <li className={styles.li}>.env.local</li>
//             <li className={styles.li}>.env.production</li>
//           </ul>
//         </section>
//       </>
    // ),
  // },
];
