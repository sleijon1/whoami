export interface Profile {
  name: string;
  title: string;
  bio: string;
  gitHubUrl: string;
  linkedInUrl: string;
  websiteUrl: string;
  substackUrl: string;
}

export interface Interest {
  name: string;
  description: string;
}

export interface BackgroundItem {
  title: string;
  description: string;
}

export const profile: Profile = {
  name: "Simon Leijon",
  title: "",
  bio: "Hi! I'm Simon, driven by challenges and hard problems I enjoy building systems that solve real world problems and make the world better in some way. With curiousity and a passion for learning, I always seek to expand my knowledge and skills. Teamwork and positive collaboration is important to me, and I thrive in environments where ideas are shared and innovation is encouraged.",
  gitHubUrl: "https://github.com/sleijon1",
  linkedInUrl: "https://www.linkedin.com/in/simon-leijon-402897133",
  websiteUrl: "https://simonleijon.dev",
  substackUrl: "https://substack.com/@simonleijon",
};

export const interests: Interest[] = [
    { name: "Systems Design", description: "My main goal when developing systems is to create a solution that serves the purpose with the least complexity needed but no less." },
  { name: "Algorithms", description: "To me, understanding the nature of the algorithms underneath any abstraction is key to choosing the right one." },
  { name: "Programming Languages", description: "Passion in understanding what problems specific languages address and what their opiniated design seeks to solve is crucial to efficiently utilize them as tools." },
  { name: "Data Science & Machine Learning", description: "Understanding the data that is ingested in any system architecture can tell us fascinating truths about users and the world. Data science & ML are key to solving novel problems that \"regular\" programming can't. " },
  { name: "Mathematics", description: "A fundamental belief in the fact that the underlying reality of any problem can be mathematically defined and solved for underpins the ability to approximate a perfect solution." },
];

export const background: BackgroundItem[] = [
    {
    title: "Developer at prominent pharmacovigilance company",
    description: "Research, develop and deploy machine learning/AI models.",
  },
  {
    title: "Developer at large forestry company",
    description: "Develop external web application and deploying RAG agents for customers.",
  },
  {
    title: "Developer at large telecom company",
    description: "Developed backend systems to support, serve and provision resources for customers and internal users.",
  },
  {
    title: "Master's Programme in Computer and Information Engineering - Studies & Teaching Assistant",
    description: "Studied software engineering, math, algorithms, data science, and system design. Masters thesis on topic modeling.",
  },
];

export const backgroundDisclaimer = `These are some highlights of my career and studies. For a complete list, feel free to contact me.`;

export const senecaQuote = `"The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today... The whole future lies in uncertainty: live immediately." — Seneca`;

export const beyondCode = `Apart from coding and the other fun stuff already mentioned I enjoy running, reading philosophy and traveling to places with different cultures, history and food. I'm also a keyboard enthusiast having built a few myself and I also own more than I am wiling to admit. I like reading, writing and discussing various ideas so if you see me talk about something feel free to engage!`;
