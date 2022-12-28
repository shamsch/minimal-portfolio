export const meta = {
  title: 'Shamsur Raza Chowdhury',
  description: 'Full Stack Developer'
};

export const hero = {
  title: "Moi, I'm Shamsur!",
  desc: "I am a SW developer based in Tampere, Finland. Currently completing studies at Tampere University and working as a software consultant with about a year of experience. In this fast changing and ever growing line of work, I keep up by constantly learning new and exciting things. Feel free to explore my work and read my latest learning in the blog section (coming soon!)."
};

export const projects = {
  title: 'Projects',
  desc: "Here are some of my hobby projects that I've worked in the past on. Check out my github for more recent work.",
  projects: [
    {
      title: 'Serverless JWT Authentication',
      description:
        'Serverless JWT authentication using AWS Lambda and DynamoDB. Frontend made with Next.js.',
      link: 'https://lambda-jwtauth-nextjs.vercel.app/',
      github: 'shamsch/lambda-jwtauth-nextjs'
    },
    {
      title: 'Note web app',
      description:
        'A web app that allows users to view, create, edit, and delete notes with Google login. Made with React and Firebase.',
      link: 'https://my-notes-6185a.web.app/',
      github: 'shamsch/note-app'
    },
    {
      title: 'Chat Nearby Web App',
      description:
        'Realtime chat app built with React and Socket.io allowing users to chat randomly with each other within a certain radius.',
      link: 'https://aqueous-tor-35882.herokuapp.com/',
      github: 'shamsch/chat-nearby-project'
    },
    {
      title: 'Lost Pet Spotter App',
      description:
        'A React Native app that allows people to report lost pets and find them. Uses map view and camera API. The APK may no longer work as the backend is not maintained anymore.',
      github: 'shamsch/lost-pet-spotter'
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
    'Go',
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
        'Courses in object-oriented programming, database management, data structure and algorithm etc.'
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

export const githubAPI = `https://api.github.com/repos/shamsch/minimal-portfolio`;