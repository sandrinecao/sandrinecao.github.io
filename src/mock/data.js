import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sandrine Cao | Developer', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Sandrine Cao.',
  subtitle: 'A French Software Developer looking for a six-month-internship.',
  cta: 'Read More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Living in Paris, I am currently studying at 42 - a software engineering and computer programming program that uses project-based learning, skills mastery, peer-to-peer correction, and gamification to foster learning.',
  paragraphTwo:
    'I have recently mastered JavaScript, Node.js, React.js and I am eager to learn more technologies.',
  paragraphThree:
    'Becoming a developer is a career change - I used to work at PlayStation as a Video Games Quality Assurance Tester in the UK for over 5 years and this dream led me to discover programming, and a love for crafting code and building products.',
  resume: 'https://sandrinecao.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'hypertube.jpg',
    title: 'IMDb-Clone',
    info:
      'MERN app (MongoDB, Express, NodeJS, ReactJS). Final project for searching movies, filtering by year or genre and such.',
    info2: 'Grade: 125/100',
    url: 'https://hypertube-scao.herokuapp.com/',
    repo: 'https://github.com/sandrinecao/IMDb-Clone', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'matcha.jpg',
    title: 'Tinder-Clone',
    info: 'Tinder-like web application using Node.js, Express, MySQL and Handlebars.',
    info2: 'Grade: 125/100',
    url: 'https://matcha-scao.herokuapp.com/',
    repo: 'https://github.com/sandrinecao/Dating-App-Matcha', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'camagru.jpg',
    title: 'Instagram-clone',
    info: "An Instagram clone web app using PHP, CSS and Javascript as part of 42's web branch.",
    info2: 'Grade: 106/100',
    url: 'https://camagru-scao.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'sandrine.cao@gmail.com - +33 6 18 14 03 52',
  btn: '',
  email: 'sandrine.cao@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/sandrinecao',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/sandrinecao',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
