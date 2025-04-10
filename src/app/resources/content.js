import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ilham",
  lastName: "Baihaqi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Profesional Graphic Designer",
  avatar: "/images/avatar.jpg",
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/m-ilham-baihaqi-a968a71a1/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kreatodigital.id@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Graphic Designer and Developer Web</>,
  subline: (
    <>
      I'm baihaqi, a graphic designer at <InlineCode>Kreato</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a passionate and experienced graphic designer with over 6 years of expertise in creating visually compelling designs across various mediums.
        In addition, I have 3 years of experience as a motion graphic designer and video editor, crafting engaging animations and video content that communicate ideas effectively.
        My professional skill set includes mastery of Figma, which I use to design intuitive and aesthetically pleasing user interfaces and prototypes.
        I am committed to delivering innovative solutions that meet client needs and exceed expectations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Reka Estu Digital",
        timeframe: "2021 - Present",
        role: "Graphic Designer & UI/UX Designer",
        achievements: [
          <>
            Reka Estu Digital is a leading ERP consulting company where I was responsible 
            for designing digital interfaces and visual assets to support various enterprise systems. 
            I collaborated with cross-functional teams to develop user-centric UI/UX designs, improve user flows, 
            and ensure a consistent design system across products
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/img-08.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kreato",
        timeframe: "2017 - Present",
        role: "Graphic Designer & UI/UX Designer",
        achievements: [
          <>
            At Kreato, a creative agency focused on graphic design and digital solutions, 
            I worked on various branding, web, and app projects. I delivered innovative visual concepts, 
            intuitive UI designs, and supported clients in building a strong digital presence through functional, 
            aesthetic design work.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/img-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Neptune Custome",
        timeframe: "2018 – 2021",
        role: "Team Leader",
        achievements: [
          <>
            Led a creative team in a graphic design company focused on delivering custom design solutions. 
            I managed project timelines, oversaw creative direction, and contributed hands-on to branding 
            and digital product design. Successfully completed multiple high-impact visual projects 
            for both individual and corporate clients.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/img-15.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  project: {
    display: true, // set to false to hide this section
    title: "Project Experience",
    experiences: [
      {
        company: "TDCAC 18 – Toyota Dream Car Art Contest",
        role: "UI/UX Design | Motion Graphic | Social Media Content",
        achievements: [
          <>
            Collaborated with the Toyota team on the development of a website for the 18th Toyota Dream Car Art Contest. 
            I was involved in designing the user interface (UI) and user experience (UX), creating motion graphics, 
            and crafting Instagram feed visuals aligned with the event’s identity. The project required a fun, 
            child-friendly approach while maintaining Toyota’s brand consistency across all visual elements.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/img-07.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Pump Clinic – NTK Industrial",
        role: "UI/UX Design | Web System for Technician Service",
        achievements: [
          <>
            Designed a web-based interface system for Pump Clinic, a pump repair and maintenance service under NTK Industrial. 
            The focus was on delivering a user-friendly and efficient design to support technicians in the field. 
            Features included reporting tools, service management, and real-time activity tracking. 
            The final design significantly improved service speed and technician productivity.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/img-04.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Dian Nuswantoro Semarang",
        description: <>Bachelor of Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
      },
      {
        title: "Photoshop",
      },
      {
        title: "Corel Draw",
      },
      {
        title: "Adobe Premiere",
      },
      {
        title: "In Design",
      },
      {
        title: "Notion",
      },
      {
        title: "Adobe Premiere",
      },
      {
        title: "Procreate",
      },
      {
        title: "Canva",
      },
      {
        title: "Illustrator",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-09.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-12.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
