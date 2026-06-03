export const profile = {
  name: 'Corey Shaw',
  headline: 'Front End Engineer · Full Stack Engineer · Java Developer',
  bio: 'Full-stack engineer with 3 years of professional experience building web applications across Java and JavaScript ecosystems. Army veteran (2002–2015) turned developer — I bring discipline, adaptability, and a bias toward shipping to every project.',
  email: 'shaw.corey@gmail.com',
  github: 'https://github.com/shawcorey',
  linkedin: 'https://linkedin.com/in/corey-l-shaw',
  instagram: 'https://instagram.com/mr.coreybreeze',
  location: 'Texas, USA',
  available: true,
};

export const experience = [
  {
    title: 'Java Developer',
    company: 'CGI',
    period: '2021 – Present',
    location: 'Remote',
    bullets: [
      'Develop and maintain enterprise Java applications for federal clients',
      'Build RESTful APIs and integrate third-party services across full SDLC',
      'Collaborate in Agile/Scrum teams on large-scale government systems',
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Agile'],
  },
  {
    title: 'Software Developer',
    company: 'Wells Fargo',
    period: '2021',
    location: 'Texas',
    bullets: [
      'Contributed to internal tooling and web application development',
      'Worked within a large engineering org on customer-facing features',
    ],
    tags: ['JavaScript', 'React', 'Java'],
  },
  {
    title: 'Sergeant / Operations',
    company: 'United States Army',
    period: '2002 – 2015',
    location: 'Various',
    bullets: [
      '13 years of active service in leadership, operations, and logistics',
      'Managed teams under high-pressure conditions across multiple deployments',
      'Developed discipline, clear communication, and mission-first problem solving',
    ],
    tags: ['Leadership', 'Operations', 'Logistics'],
    isVeteran: true,
  },
];

export const education = [
  {
    school: 'Codeup',
    degree: 'Full-Stack Java Developer Program',
    period: '2021',
    detail: '670-hour, 22-week intensive covering Java, Spring Boot, MySQL, JavaScript, HTML/CSS, and React.',
  },
];

export const skills = {
  featured: ['Java', 'JavaScript', 'React', 'Node.js', 'Python', 'Angular'],
  languages: ['Java', 'JavaScript', 'Python', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  frameworks: ['React', 'Angular', 'Spring Boot', 'Node.js', 'Express', 'Bootstrap'],
  tools: ['Git', 'GitHub', 'MySQL', 'PostgreSQL', 'REST APIs', 'Agile/Scrum', 'IntelliJ', 'VS Code'],
};

export const projects = [
  {
    name: 'Byte Options',
    description: 'Full-stack capstone project built at Codeup. Java/Spring Boot backend with a React frontend, MySQL database, and full CRUD operations.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/shawcorey',
    icon: '🎓',
    category: 'Java',
    featured: true,
  },
  {
    name: '2D Shooter',
    description: 'Browser-based 2D shooter game built in vanilla JavaScript. Physics, collision detection, and a game loop built from scratch using the Canvas API.',
    tags: ['JavaScript', 'Canvas API', 'Game Dev'],
    github: 'https://github.com/shawcorey',
    icon: '🎮',
    category: 'JavaScript',
    featured: true,
  },
  {
    name: 'Weather Map',
    description: 'Interactive weather visualization app consuming a public REST API. Dynamic map-based UI with real-time location data and animated weather icons.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    github: 'https://github.com/shawcorey',
    icon: '🌤',
    category: 'JavaScript',
    featured: true,
  },
  {
    name: 'BlogApp',
    description: 'Full-stack blog platform with user authentication, post creation/editing, and a clean reading experience powered by Java and Thymeleaf.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    github: 'https://github.com/shawcorey',
    icon: '✍️',
    category: 'Java',
    featured: false,
  },
  {
    name: 'Angular Tour of Heroes',
    description: 'Angular fundamentals project covering component architecture, services, routing, HTTP client integration, and RxJS observables.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    github: 'https://github.com/shawcorey',
    icon: '⚡',
    category: 'Angular',
    featured: false,
  },
  {
    name: 'Movie Project',
    description: 'Movie database app integrating a third-party film API with dynamic search, filtering by genre/rating, and detailed view pages.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    github: 'https://github.com/shawcorey',
    icon: '🎬',
    category: 'JavaScript',
    featured: false,
  },
  {
    name: 'Coffee Project',
    description: 'E-commerce-inspired coffee shop site with a product catalog, clean UI, and responsive layout built with HTML, CSS, and JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/shawcorey',
    icon: '☕',
    category: 'JavaScript',
    featured: false,
  },
  {
    name: 'Database Exercises',
    description: 'A collection of SQL exercises and challenges covering joins, aggregations, subqueries, indexes, and stored procedures in MySQL.',
    tags: ['MySQL', 'SQL', 'Database'],
    github: 'https://github.com/shawcorey',
    icon: '🗄️',
    category: 'Other',
    featured: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'My Journey from the Army to Software Engineering',
    date: 'March 2024',
    excerpt: 'Thirteen years of service taught me discipline, leadership, and how to perform under pressure. Here\'s how those skills translated directly into a career in tech — and why I\'d make the same choice again.',
    body: `Thirteen years in the Army teaches you a lot of things. How to wake up before everyone else. How to lead when you don't have all the answers. How to adapt when the plan falls apart.

What I didn't expect was how directly those skills would carry over into software engineering.

When I started at Codeup in 2021, I was surrounded by people younger than me, many with formal CS backgrounds. I didn't have that. What I had was 13 years of showing up, solving problems under pressure, and learning whatever I needed to learn to get the mission done.

The 22-week bootcamp was intense — 670 hours of Java, Spring Boot, MySQL, JavaScript, and React. There were moments where I felt lost. But the Army taught me that "lost" is temporary and "quit" is a choice. I kept going.

When I got my first role as a Java Developer at CGI, working on federal systems, everything clicked. The discipline, the attention to detail, the ability to communicate across teams — it all transferred.

If you're a veteran thinking about tech: the transition is real work, but the skills you built in service are exactly what engineering teams need. Don't underestimate what you bring to the table.`,
    readTime: '5 min read',
    tags: ['Career', 'Veteran', 'Story'],
  },
  {
    id: 2,
    title: 'Why I Chose Java as My Foundation',
    date: 'January 2024',
    excerpt: 'When I started at Codeup, Java felt overwhelming and verbose. Two years later it\'s my strongest language and the backbone of my career. Here\'s what finally clicked.',
    body: `Java gets a bad reputation for being verbose. When I was learning it at Codeup, I spent the first few weeks wondering why we weren't just doing JavaScript everything.

Then Spring Boot clicked.

When you understand what the framework is doing — dependency injection, inversion of control, the whole container lifecycle — Java stops feeling like ceremony and starts feeling like power. You're not writing boilerplate; you're describing a system.

At CGI, working on large-scale federal applications, Java's verbosity became a feature. Every type is declared. Every contract is explicit. When you come back to code six months later, or when a new team member picks it up, it reads like documentation.

My advice to anyone starting out: don't fight the language. Understand why it was built the way it was. Java has been running the backend of the internet for 30 years for a reason.`,
    readTime: '4 min read',
    tags: ['Java', 'Learning', 'Dev'],
  },
];

export const fitness = {
  stats: {
    totalWorkouts: 999,
    yearsActive: 8,
    since: 'February 2018',
    last90Days: { workouts: 56, volumeLbs: 662132 },
    peakMonth: 'March 2026',
    peakMonthSessions: 22,
  },
  prs: [
    { exercise: 'Leg Press', weight: 350, unit: 'lbs', date: 'Apr 2026' },
    { exercise: 'Cable Row', weight: 190, unit: 'lbs', date: 'May 2026' },
    { exercise: 'Bench Press', weight: 185, unit: 'lbs', date: 'Mar 2026' },
    { exercise: 'Back Squat', weight: 185, unit: 'lbs', date: 'Feb 2026' },
    { exercise: 'Shoulder Press', weight: 135, unit: 'lbs', date: 'Jan 2026' },
    { exercise: 'Deadlift', weight: 225, unit: 'lbs', date: 'Dec 2025' },
    { exercise: 'Incline Bench', weight: 155, unit: 'lbs', date: 'Oct 2025' },
    { exercise: 'Pull-Ups (weighted)', weight: 15, unit: 'lbs added', date: 'Nov 2025' },
  ],
  muscleGroups: [
    { name: 'Back', pct: 22 },
    { name: 'Legs', pct: 20 },
    { name: 'Core', pct: 18 },
    { name: 'Chest', pct: 16 },
    { name: 'Shoulders', pct: 14 },
    { name: 'Arms', pct: 10 },
  ],
  monthlyFrequency: [
    { month: 'Jun', sessions: 14 },
    { month: 'Jul', sessions: 16 },
    { month: 'Aug', sessions: 1 },
    { month: 'Sep', sessions: 12 },
    { month: 'Oct', sessions: 18 },
    { month: 'Nov', sessions: 15 },
    { month: 'Dec', sessions: 17 },
    { month: 'Jan', sessions: 19 },
    { month: 'Feb', sessions: 20 },
    { month: 'Mar', sessions: 22 },
    { month: 'Apr', sessions: 18 },
    { month: 'May', sessions: 16 },
  ],
  goals: [
    { name: 'Bench Press', current: 185, target: 225, unit: 'lbs' },
    { name: 'Back Squat', current: 185, target: 225, unit: 'lbs' },
    { name: 'Deadlift', current: 225, target: 315, unit: 'lbs' },
    { name: 'Leg Press', current: 350, target: 450, unit: 'lbs' },
  ],
  instagram: '@mr.coreybreeze',
  instagramUrl: 'https://instagram.com/mr.coreybreeze',
};

export const gaming = {
  brandName: 'Corey_Breeze',
  tagline: 'Veteran. Developer. Competitor.',
  psnId: 'Corey_Breeze',
  cfnIds: ['Mr.CoreyBreeze', 'Corey_Breeze'],
  activeSince: '2019',
  localScene: 'River City Rushdown — San Antonio, TX',
  platforms: ['PlayStation', 'PC'],
  instagram: '@mr.coreybreeze',
  instagramUrl: 'https://instagram.com/mr.coreybreeze',
  portfolioUrl: '/',

  games: [
    {
      title: 'Street Fighter 6',
      abbr: 'SF6',
      icon: '🥊',
      active: true,
      cfn: 'Mr.CoreyBreeze',
      cfnUrl: 'https://www.streetfighter.com/6/buckler/profile/Mr.CoreyBreeze/play',
    },
    {
      title: 'Fatal Fury: City of the Wolves',
      abbr: 'CotW',
      icon: '⚡',
      active: true,
      cfn: null,
      cfnUrl: null,
    },
    {
      title: 'Street Fighter V',
      abbr: 'SFV',
      icon: '🎮',
      active: false,
      cfn: 'Corey_Breeze',
      cfnUrl: null,
    },
    {
      title: 'Ultra Street Fighter IV',
      abbr: 'USF4',
      icon: '🏆',
      active: false,
      cfn: null,
      cfnUrl: null,
    },
  ],

  stats: {
    totalTournaments: 15,
    evoAppearances: 3,
    bestPlacement: '4th / 21',
    bestEvent: 'Battle For The Alamo IV',
    activeSince: '2019',
  },

  // All 15 results from start.gg — sorted newest first
  tournaments: [
    { name: 'EVO 2025',                       game: 'Fatal Fury: CotW', placement: null, entrants: 1578, date: 'Aug 2025', type: 'EVO',    location: 'Las Vegas, NV' },
    { name: 'EVO 2025',                       game: 'SF6',              placement: null, entrants: 4242, date: 'Aug 2025', type: 'EVO',    location: 'Las Vegas, NV' },
    { name: 'River City Rushdown Monthly',    game: 'SF6',              placement: null, entrants: null, date: 'Jun 2025', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'SF6',              placement: null, entrants: null, date: 'Mar 2025', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'EVO 2024',                       game: 'SF6',              placement: null, entrants: 5279, date: 'Aug 2024', type: 'EVO',    location: 'Las Vegas, NV' },
    { name: 'River City Rushdown Monthly',    game: 'SF6',              placement: null, entrants: null, date: 'May 2024', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'SF6',              placement: null, entrants: null, date: 'Jan 2024', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'Battle For The Alamo IV',        game: 'USF4',             placement: '4th', entrants: 21, date: 'Nov 2023', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'SFV',              placement: null, entrants: null, date: 'Aug 2023', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'SFV',              placement: null, entrants: null, date: 'Apr 2023', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'SFV',              placement: null, entrants: null, date: 'Oct 2022', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'SFV',              placement: null, entrants: null, date: 'Mar 2022', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'USF4',             placement: null, entrants: null, date: 'Sep 2021', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'USF4',             placement: null, entrants: null, date: 'Feb 2020', type: 'Local',  location: 'San Antonio, TX' },
    { name: 'River City Rushdown Monthly',    game: 'USF4',             placement: null, entrants: null, date: 'Nov 2019', type: 'Local',  location: 'San Antonio, TX' },
  ],
};
