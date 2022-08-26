export const meta = {
  title: 'Shamsur Raza Chowdhury',
  description: 'Full Stack Developer'
};

export const hero = {
  title: "Hiya, I'm Shamsur!",
  desc: "I am a SW developer based in Tampere, Finland. Currently in the final year of my bachelor's degree at Tampere University. Originally from Bangladesh, I have been working on many university coursework and hobby projects using different programming languages and technologies. Check out my projects, tech stack, education and experience below. If you'd like to get in touch, feel free reach out me. Contact info in the footer below."
};

export const projects = {
  title: 'Projects',
  desc: "Here are some of the projects that I've worked recently on. Check out my github for more projects.",
  projects: [
    {
      title: 'Chat Nearby Web App',
      description: 'Realtime chat app built with React and Socket.io allowing users to chat randomly with each other within a certain radius.',
      link: 'https://aqueous-tor-35882.herokuapp.com/',
      github: 'shamsch/chat-nearby-project'
    }, 
    {
      title: 'Lost Pet Spotter App',
      description: 'A React Native app that allows people to report lost pets and find them. Uses map view and camera API.',
      github: 'shamsch/lost-pet-spotter'
    }, 
    {
      title: 'Serverless JWT Authentication',
      description: 'Serverless JWT authentication using AWS Lambda and DynamoDB. Frontend made with Next.js.',
      link: 'https://lambda-jwtauth-nextjs.vercel.app/',
      github: 'shamsch/lambda-jwtauth-nextjs'
    }, 
    {
      title: 'Note web app',
      description: 'A web app that allows users to view, create, edit, and delete notes with Google login. Made with React and Firebase.',
      link: 'https://my-notes-6185a.web.app/',
      github: 'shamsch/note-app'
    }
  ]
};

export const stack = {
  title: 'Tech Stack',
  stack: [
    'React JS',
    'Next JS',
    'React Native (Expo)',
    'Node JS',
    'Express JS',
    'MongoDB',
    'PostgreSQL',
    'Prisma ORM',
    'GraphQL',
    'Typescript',
    'Material UI',
    'Tailwind CSS',
    'Docker',
    'GitHub Actions',
    'C++',
    'Python'
  ]
};

export const contact = {
  title: 'How to reach me',
  email: 'shamsur314@gmail.com',
  github: 'shamsch',
  linkedin: 'shamsur314'
};

export const education = {
  title: 'Education',
  schools: [
    {
      name: 'Tampere University',
      degree: 'Bachelor of Science (Technology)',
      start: '2020',
      end: 'present',
      description:
        'Sustainable Urban Development. Minor Computer Science. Courses in object-oriented programming, database management, data structure and algorithm etc.'
    },
    {
      name: 'University of Helsinki',
      degree: 'Open Studies',
      start: '2021',
      end: '2022',
      description:
        'Full Stack Development. Deep dive into modern web development. Covered topics like React, Express, GraphQL, End to End Testing, React Native, Containerization, CI/CD, Relational Databases etc. Total credit: 24 ECTS.'
    }
  ]
};
