export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI-powered Enterprise Chatbot.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Shivendra Raghuvanshi Portfolio",
    des: "A responsive portfolio experience built with Next.js, TailwindCSS, animations, and interactive visual sections.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/raghu-shiv/shivendra-raghuvanshi-portfolio",
  },
  {
    id: 2,
    title: "AI-Powered Enterprise Chatbot",
    des: "An enterprise-style AI chat platform built with Next.js, TailwindCSS, Django, Redis, and reusable prompt templates.",
    img: "/p2.png",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/dj.svg",
      "/redis.svg",
      "/dock.svg",
    ],
    link: "https://github.com/raghu-shiv/JarvisAI",
  },
  {
    id: 3,
    title: "Festival Poster Maker for Business",
    des: "AI-powered festival poster maker for businesses with instant branded social creatives.",
    img: "/p3.png",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/fm.svg",
      "/fabric.svg",
      "/cloud.svg",
    ],
    link: "https://github.com/raghu-shiv",
  },
  {
    id: 4,
    title: "Full Stack ERP Application",
    des: "Modern ERP MVP starter platform with scalable architecture, analytics, auth, and payments.",
    img: "/p4.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/supa.svg",
      "/cloud.svg",
      "/prisma.svg",
    ],
    link: "https://github.com/raghu-shiv/erp-app",
  },
];

export const testimonials = [
  {
    quote:
      "Shivendra brings a practical approach to frontend development, with careful attention to responsive layouts, interaction details, and clean delivery.",
    name: "Project Collaborator",
    title: "Web Development Client",
  },
  {
    quote:
      "The implementation was handled with clear communication and a strong focus on turning requirements into a usable, polished interface.",
    name: "Product Partner",
    title: "Startup Founder",
  },
  {
    quote:
      "The project moved from concept to working experience quickly, with thoughtful handling of UI states and visual consistency.",
    name: "Design Lead",
    title: "Creative Team",
  },
  {
    quote:
      "Shivendra showed strong ownership of the frontend work and kept the experience focused, responsive, and easy to navigate.",
    name: "Engineering Lead",
    title: "Technology Team",
  },
  {
    quote:
      "The final interface felt modern and purposeful, with animations used to support the experience instead of distracting from it.",
    name: "Business Owner",
    title: "Digital Services Client",
  },
];

export const companies = [
  {
    id: 1,
    name: "AWS",
    img: "/aws.svg",
    nameImg: "/awsName.svg",
  },
  {
    id: 2,
    name: "Codex",
    img: "/codex.svg",
    nameImg: "/codexName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Vercel",
    img: "/vercel.svg",
    nameImg: "/vercelName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Aaosa",
    desc: "Developed and maintained scalable SaaS applications, real-time systems, and cloud-enabled products using modern frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Instructor - Udemy",
    desc: "Created an interactive and project driven Node.js and Express Course on Udemy.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/raghu-shiv",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shivendra-raghuvanshi-553829116",
  },
];
