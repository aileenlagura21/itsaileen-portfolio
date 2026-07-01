/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const resolveImage = (imagePath) => {
  const fileName = imagePath.replace(/^\/src\/assets\/images\//, '');
  return new URL(`../assets/images/${fileName}`, import.meta.url).href;
};

const normalizeProject = (project) => ({
  ...project,
  image: resolveImage(project.image),
  gallery: project.gallery.map(resolveImage),
});

export const AVATAR_URL = resolveImage('/src/assets/images/aileenprofile.jpg');

const PROJECTS_DATA = [
  {
  id: 'fsg-platform',
  title: 'FSG - Financial Statement Generator (Web Based Platform)',
  subtitle: 'Automated Financial Reporting & Business Analytics Platform',
  description: 'A comprehensive web-based financial management platform that automates the generation of financial statements, tracks multi-business performance, and streamlines accounting workflows for administrators and analysts.',
  longDescription: 'Developed a full-stack financial statement generator designed to help businesses automate routine accounting tasks, surface actionable financial trends, and deliver compliant reports. The system features a centralized executive dashboard for real-time profit, sales, and expense tracking, alongside comprehensive bookkeeping modules and robust user management tailored for diverse business classifications.',
  image:  '/src/assets/images/fsg1.png',
  category: 'web',
  tags: ['Financial Technology', 'Automated Reporting', 'Data Analytics', 'Bookkeeping', 'Web Application'],
  tools: ['React', 'TypeScript', 'Node.js', 'MySQL'],
  client: 'Collaborative Academic Project – Bohol Island State University (Bilar Campus)',
  date: 'January 2026',
  liveUrl: 'https://fsg.bisubilar.org/',
  githubUrl: '#',
  role: 'System Analyst (Phase 2)',
  features: [
    'Executive Dashboard & Analytics: Real-time visualization of total profit, sales, and expenses across multiple tracked businesses, featuring performance overview charts, profit distribution metrics, and dynamic business snapshot tables.',
    'Comprehensive Bookkeeping Modules: Fully functional General Journal, General Ledger, and Cash Book systems with automated entry tracking, advanced filtering by period (monthly, quarterly, yearly), and business-specific data views.',
    'Automated Financial Reporting: One-click generation of Income Statements, Cash Flow statements, and Statements of Financial Position, featuring native PDF and Excel export capabilities for seamless stakeholder distribution.',
    'Multi-Business & User Management: Secure administrative portal to manage diverse client profiles and transactions, supporting various business classifications (merchandising, service concern, manufacturing, hybrid) with complete CRUD operations.',
    'Dynamic Business Snapshot & Tracking: Interactive data tables displaying granular sales, expenses, and profit margins per business entity, allowing administrators to quickly identify high-performing ventures and monitor overall portfolio health.'
  ],
  gallery: [
    '/src/assets/images/fsg1.png',
    '/src/assets/images/fsg2.png',
    '/src/assets/images/fsg3.png',
    '/src/assets/images/fsg4.png',
    '/src/assets/images/fsg5.png',
    '/src/assets/images/fsg6.png',
    '/src/assets/images/fsg7.png',
    '/src/assets/images/fsg8.png',
    '/src/assets/images/fsg9.png',
    '/src/assets/images/fsg11.png',
    '/src/assets/images/fsg12.png',
    '/src/assets/images/fsg13.png'
    
  ],
  galleryTitles: [
    'Landing Page',
    'Team',
    'Dashboard Overview with Real-Time Profit Analytics',
    'Dashboard Overview with Real-Time Profit Analytics',
    'Books of Accounts',
    'General Journal with Period Filtering and Export Tools',
    'General Ledger with Multi-Business Transaction Tracking',
    'Reports',
    'Financial Position Statement with Export Options',
    'Statement of Cash Flow with Export Options',
    'Statement of Financial Position with Export Options',
    'Users Management'

  ]
},
{
  id: 'fsg-mobile-app',
  title: 'FSG Mobile - Financial Statement Generator',
  subtitle: 'Mobile Financial Management & Business Analytics App',
  description: 'A comprehensive mobile financial management application built with Flutter, designed for business owners and users to monitor their financial performance, track transactions, and generate reports on-the-go with real-time database synchronization.',
  longDescription: 'Developed a native mobile companion application for the Financial Statement Generator platform using Flutter, empowering business owners and regular users to access their financial data anytime, anywhere. Unlike the web platform which serves administrators, this mobile app provides individual business users with personalized access to their own financial statements, journal entries, and performance analytics. The app connects directly to the centralized FSG database, ensuring real-time data consistency across all platforms while maintaining secure user authentication and role-based access controls.',
  image: '/src/assets/images/fsgmobile.png',
  category: 'mobile',
  tags: ['Mobile Development', 'Expo Go', 'Financial Technology', 'Real-Time Sync', 'Business Analytics'],
  tools: ['Expo Go', 'Dart', 'Firebase', 'RESTful API', 'SQLite'],
  client: 'Collaborative Academic Project – Bohol Island State University (Bilar Campus)',
  date: 'January 2026',
  liveUrl: '#',
  githubUrl: '#',
  role: 'System Analyst (Phase 2)',
  features: [
    'Personalized Business Dashboard: Secure login system that automatically detects authenticated users and displays their specific business financial data including real-time profit, sales, and expense metrics. Each user sees only their own business information with personalized performance charts and trend analytics.',
    'Mobile Journal & Ledger Access: Complete access to General Journal, General Ledger, and Cash Book entries for the user\'s own business. Features intuitive mobile-optimized interfaces for viewing transaction history, filtering by date ranges, and exporting entries to PDF or Excel formats.',
    'On-Demand Financial Reports: Generate and view Income Statements, Cash Flow statements, and Statements of Financial Position directly from mobile device. Reports are automatically calculated from the user\'s transaction data and can be downloaded or shared with stakeholders via email or messaging apps.',
    'Real-Time Database Synchronization: Seamless connection to the centralized FSG web database ensures all financial data is instantly synchronized across platforms. When administrators update records in the web system, mobile users see the changes immediately without manual refresh.',
    'Secure User Authentication & Role-Based Access: Implements secure login with email verification and role-based permissions ensuring users can only access their own business data. The system prevents unauthorized access to other businesses\' financial information while maintaining data privacy and compliance.',
    'Offline-First Architecture with Auto-Sync: Built with offline capabilities allowing users to view cached financial data even without internet connection. The app automatically syncs new transactions and updates when connectivity is restored, ensuring data consistency across all devices.'
  ],
  gallery: [
    '/src/assets/images/fsgmobile1.1.png',
    '/src/assets/images/fsgmobile1.jpg',
    '/src/assets/images/fsgmobile2.jpg',
    '/src/assets/images/fsgmobile3.jpg',
    '/src/assets/images/fsgmobile4.jpg',
    '/src/assets/images/fsgmobile5.jpg',
    '/src/assets/images/fsgmobile6.jpg',
    '/src/assets/images/fsgmobile7.jpg',
    '/src/assets/images/fsgmobile8.jpg',
    '/src/assets/images/fsgmobile9.jpg',
    '/src/assets/images/fsgmobile10.jpg',
    '/src/assets/images/fsgmobile11.jpg',
    '/src/assets/images/fsgmobile12.jpg',
    '/src/assets/images/fsgmobile13.jpg',
    '/src/assets/images/fsgmobile14.jpg'
   
  ],
  galleryTitles: [
    'Landing Page',
    'Sign In',
    'Dashboard',
    'Dashboard',
    'Add Entry',
     'General Ledger',
     'General Ledger',
     'General Journal',
      'See Folio',
      'Cash Book',
      'Cash Book',
      'Income Statement',
      'Financial Statement',
      'Statement of Cash Flow',
       'Statement of Cash Flow'


  ]
},
 {
    id: 'dtrx-platform',
    title: 'DTR-x Daily Time Record - Extended (Web Based Platform)',
    subtitle: 'Interactive Attendance & Time Tracking Workspace',
    description: 'A comprehensive time tracking and attendance management system featuring an intuitive user interface with visual instructional guides, interactive feature tutorials, and a complete user profile management system.',
    longDescription: 'Contributed to the development of DTR-x, an extended daily time recording system designed to streamline employee attendance tracking and time management. Focused on creating an exceptional user experience through comprehensive visual guides and intuitive profile management features.',
    image: '/src/assets/images/dtrx1.png',
    category: 'web',
    tags: ['Frontend Dev', 'UI/UX Design', 'User Profiles', 'Interactive Training'],
    tools: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    client: 'Collaborative Academic Project – Bohol Island State University (Bilar Campus)',
    date: 'August 2025 ',
    liveUrl: 'https://dtrx.bisubilar.org/',
    githubUrl: '#',
    role: 'Frontend Developer - UI/UX & User Profile Specialist (Phase 2)',
    features: [
      'Interactive Instructional System: Implemented step-by-step visual guides showing users how to navigate key functionalities. Created custom visual tooltips and image-based tutorials with contextual overlays to optimize onboarding for all staff skill levels.',
      'Comprehensive User Profile Management: Designed and developed personalized dashboards to hold employee records, work schedules, daily check-in histories, and overall monthly timing metrics in a high-fidelity visual layout.',
      'Aesthetic Responsive UI Components: Built clean, responsive interfaces that ensure seamless logging experiences on mobile screen factors as well as high-resolution desktop terminals, backed by smooth layout state animations.'
    ],
    gallery: [
     
    '/src/assets/images/dtrx1.png',
    '/src/assets/images/dtrx2.png',
    '/src/assets/images/dtrx3.jpg',
    '/src/assets/images/dtrx4.jpg',
    '/src/assets/images/dtrx5.jpg',
    '/src/assets/images/dtrx6.jpg',
    '/src/assets/images/dtrx7.jpg',
    '/src/assets/images/dtrx9.jpg'
  ],
    galleryTitles: [
      'DTR-X Landing Page',
      'Key Features',
      'Dashboard',
      'Dashboard',
      'Settings Quick Guide',
      'Payslip Guide',
      'Employee Guide',
      'Settings Profile Guide'


    ]
  },
   {
  id: 'dtrx-mobile-app',
  title: 'DTR-x Daily Time Record - Extended (Mobile Application)',
  subtitle: 'Native Companion Time & Attendance App',
  description: 'A comprehensive mobile time tracking and attendance management application built with Flutter, featuring seamless integration with the DTR-x web platform database for real-time synchronization of employee records, payslips, and administrative functions.',
  longDescription: 'Developed a native mobile application version of the DTR-x (Daily Time Record - Extended) system using Flutter, transforming the web platform into a fully-functional mobile experience. The app connects directly to the existing DTR-x web database, ensuring real-time data synchronization across all platforms. This allows campus staff and faculty to access attendance tracking, payroll information, leave requests, and administrative services on-the-go while maintaining data consistency with the web system.',
  image: '/src/assets/images/dtrx_mobile1.png',
  category: 'mobile',
  tags: ['Mobile Dev', 'Flutter', 'Database Integration', 'Real-Time Sync', 'Cross-Platform'],
  tools: ['Flutter', 'Dart', 'Firebase', 'RESTful API', 'SQLite'],
  client: 'Collaborative Academic Project – Bohol Island State University (Bilar Campus)',
  date: 'August 2025',
  liveUrl: '#',
  githubUrl: '#',
  role: 'Mobile Application Developer - Flutter & Database Integration (Phase 2)',
  features: [
    'Unified Database Architecture: Engineered a seamless connection between the Flutter mobile app and the existing DTR-x web platform database. Implemented RESTful API endpoints to ensure real-time data synchronization, allowing users to access the same employee records, attendance logs, and payslip information across both web and mobile platforms without data duplication or conflicts.',
    'Dynamic Dashboard & Attendance Tracking: Developed an intuitive mobile dashboard displaying real-time attendance status, recent clock-in/out activities, and visual progress indicators. Users can view their daily time records, check work schedules, and monitor attendance history with smooth animations and responsive touch interactions optimized for mobile devices.',
    'Digital Payslip & Payroll Management: Created a secure mobile payslip viewer that fetches salary information directly from the web database. Employees can access detailed earnings, deductions, and net pay breakdowns for any pay period, with options to download or share PDF copies. The system automatically updates when new payroll data is processed in the web platform.',
    'Leave Request & Emergency Attendance Workflow: Built streamlined mobile forms for submitting leave applications and emergency attendance logs. The app communicates with the web backend to process requests, track approval status in real-time, and send push notifications when supervisors review submissions.',
    'Administrative Portal & Memo System: Implemented specialized admin features allowing authorized users to manage travel orders, view service credits, and broadcast official memos to staff. The memo system syncs instantly with the web platform, ensuring all employees receive important announcements simultaneously across all devices.',
    'Cross-Platform Performance Optimization: Leveraged Flutter\'s native compilation capabilities to deliver smooth 60fps animations, fast load times, and offline-first architecture with local SQLite caching. The app maintains functionality during poor connectivity and syncs data automatically when connection is restored.'
  ],
  gallery: [
    '/src/assets/images/dtrx_mobile1.png',
    '/src/assets/images/dtrx_mobile2.png',
    '/src/assets/images/dtrx_mobile3.png',
    '/src/assets/images/dtrx_mobile4.png',
    '/src/assets/images/dtrx_mobile5.png',
    '/src/assets/images/dtrx_mobile6.png'
  ],
  galleryTitles: [
    'Landing Page',
    'Landing Page',
    'About',
    'Key Features',
    'Key Features',
    'Sign In'

  ]
},

 {
  id: 'my-daily-tracker',
  title: 'My Daily Tracker',
  subtitle: 'UI/UX Design Concept',
  description: 'A mobile wellness application designed in Figma to help users track moods, mindfulness, habits, and daily self-care through a clean and calming user experience.',

  longDescription:
    'My Daily Tracker is a high-fidelity UI/UX design concept created in Figma. The project focuses on building a relaxing and intuitive mobile experience for tracking emotions, habits, sleep, hydration, and personal wellness. It features a soft pastel color palette, minimalist layouts, and interactive prototype screens that prioritize accessibility, simplicity, and user-centered design. This project showcases my skills in user interface design, user experience planning, wireframing, prototyping, and design systems. It is currently in the design phase and has not yet been developed or deployed.',

  image: '/src/assets/images/mydailytracker.png',

  category: 'ui/ux',

  tags: [
    'Figma',
    'UI Design',
    'UX Design',
    'Mobile App',
    'Prototype'
  ],

  tools: [
    'Figma'
  ],

  client: 'Personal Project in our Subject - UI/UX Design',

  date: 'November 2025',

  status: 'Design Phase',

  liveUrl: '',

  githubUrl: '',

  role: 'UI/UX Designer',

  features: [
    'High-fidelity mobile interface designed in Figma.',
    'Interactive clickable prototype for user navigation.',
    'Mood tracking and self-care dashboard concept.',
    'Daily habit, hydration, sleep, and gratitude tracking screens.',
    'Consistent design system with reusable components and typography.',
    'Responsive layouts following modern mobile UI guidelines.'
  ],

  gallery: [
    '/src/assets/images/1.png',
    '/src/assets/images/2.png',
    '/src/assets/images/3.png',
    '/src/assets/images/4.png',
    '/src/assets/images/5.png',
    '/src/assets/images/6.png',
    '/src/assets/images/7.png',
    '/src/assets/images/8.png',
    '/src/assets/images/9.png',
    '/src/assets/images/10.png',
    '/src/assets/images/11.png',
    '/src/assets/images/12.png',
    '/src/assets/images/13.png',
    '/src/assets/images/14.png',
    '/src/assets/images/15.png',
    '/src/assets/images/16.png',
    '/src/assets/images/17.png',
    '/src/assets/images/18.png',
    '/src/assets/images/19.png'
  ],

  galleryTitles: [
    'Landing Page',
    'Sign In',
    'Sign Up',
    'Home Dashboard',
    'Tracker Overview',
    'Mental & Emotional Wellness',
    'Rate My Day',
    'Gratitude Journal',
    'Anxiety Tracker',
    'Highlights of the Day',
    'Self-Care',
    'Sleep & Physical Health',
    'Habits & Productivity',
    'Creativity & Expression',
    'Dashboard Overview',
    'Featured',
    'Feature Details',
    'Profile',
    'Profile Overview'
  ]
},
 {
  id: 'ebabay-platform',

  title: 'Ebabay - Multi-Service E-Commerce Platform',

  subtitle: 'Collaborative Academic Web Application',

  description:
    'A collaborative academic web application integrating e-commerce, messaging, appointment booking, surveys, and Baybayin-related services. As the Systems Analyst, I was responsible for analyzing business requirements, defining system workflows, documenting functional specifications, and collaborating with the development team throughout the project.',

  // FIX APPLIED HERE: Escaped the apostrophe in "project's" as "project\'s"
  longDescription:
    'Ebabay is a collaborative academic project developed by BS Computer Science students at Bohol Island State University – Bilar Campus. The platform combines e-commerce functionality with specialized digital services, including Baybayin transliteration, henna appointment booking, surveys, and integrated messaging. My primary responsibility was serving as the Systems Analyst, where I gathered and analyzed system requirements, documented functional and non-functional specifications, created system workflows and use cases, coordinated with developers and designers, and ensured that the implemented features aligned with the project\'s objectives.',

  image: '/src/assets/images/ebaybay1.png',

  category: 'web',

  tags: [
    'Collaborative Project',
    'Systems Analysis',
    'Requirements Analysis',
    'Software Documentation',
    'Web Application'
  ],

  tools: [
    'Figma',
    'Draw.io',
    'Lucidchart',
    'Google Docs',
    'Jira'
  ],

  client: 'Collaborative Academic Project – Bohol Island State University (Bilar Campus)',

  date: 'October 2024',


  liveUrl: 'https://ebaybaymo.bisubilar.org/',

  githubUrl: '',

  role: 'Systems Analyst',

  features: [
    'Conducted requirements gathering through stakeholder discussions and project meetings.',

    'Prepared Software Requirements Specification (SRS) documentation and functional requirements.',

    'Created system workflows, use case diagrams, user stories, and process documentation.',

    'Collaborated closely with UI/UX designers and developers to ensure accurate implementation of system requirements.',

    'Validated completed modules against documented requirements and participated in feature verification.',

    'Contributed to planning and analysis for authentication, e-commerce, messaging, Baybayin services, surveys, and appointment booking modules.'
  ],

  gallery: [
    '/src/assets/images/ebaybay1.png',
    '/src/assets/images/ebaybay2.png',
    '/src/assets/images/ebaybay3.png',
    '/src/assets/images/ebaybay4.png',
    '/src/assets/images/ebaybay5.png',
    '/src/assets/images/ebaybay6.png',
    '/src/assets/images/ebaybay7.png',
    '/src/assets/images/ebaybay8.png'
  ],

  galleryTitles: [
    'Landing Page',
    'Explore Products',
    'Development Team',
    'Sign In',
    'User Dashboard Navigation',
    'Dashboard (Light Mode)',
    'Dashboard (Dark Mode)',
    'Henna Booking Module'
  ]
},
{
  id: 'luxury-real-estate',
  title: 'Luxury Real Estate Management System',
  subtitle: 'Academic Full-Stack PHP Property Management System',

  description:
    'A full-stack academic web application developed using PHP and MySQL that streamlines property sales, installment computation, billing, and inventory management through secure role-based access for Clients, Cashiers, Agents, and Administrators.',

  longDescription:
    'Developed as an academic project for the BS Computer Science program at Bohol Island State University – Bilar Campus, this full-stack real estate management system digitizes property sales and financial management. The application features a public property catalog, secure authentication, role-based access control (RBAC), automated installment calculations, billing workflows, loan tracking, and property inventory management. The system improves transaction accuracy, enhances user experience, and demonstrates practical software engineering concepts including database management, authentication, and business process automation.',

  image: '/src/assets/images/realstate14.jpg',

  category: 'web',

  tags: [
    'Academic Project',
    'Full-Stack',
    'PHP',
    'MySQL',
    'Role-Based Access Control',
    'Property Management'
  ],

  tools: [
    'PHP',
    'MySQL',
    'Bootstrap',
    'JavaScript',
    'HTML5',
    'CSS3'
  ],

  client: 'Academic Project  Bohol Island State University (Bilar Campus)',

  date: 'May 2024',

  status: 'Completed',

  liveUrl: '#',

  githubUrl: '#',

  role: 'Full-Stack PHP Developer',

  features: [
    'Client Portal: Browse available properties, search listings, view detailed property information, and calculate monthly installment payments based on customizable down payment and loan terms.',

    'Cashier Dashboard: Process client payments, manage installment records, monitor loan balances, generate billing information, and issue printable receipts.',

    'Agent Dashboard: Add new property listings, update property information, manage property availability, and remove sold properties from the public catalog.',

    'Administrator Dashboard: Manage users, oversee transactions, monitor financial records, generate reports, and maintain complete system administration.',

    'Automated Loan Management: Prevents clients from purchasing additional properties until existing loan balances are fully settled.',

    'Google Maps Integration: Displays property locations using the Google Maps API for improved property discovery.'
  ],

  gallery: [
    '/src/assets/images/realstate1.jpg',
    '/src/assets/images/realstate2.jpg',
    '/src/assets/images/realstate3.jpg',
    '/src/assets/images/realstate4.jpg',
    '/src/assets/images/realstate5.jpg',
    '/src/assets/images/realstate6.jpg',
    '/src/assets/images/realstate7.jpg',
    '/src/assets/images/realstate8.jpg',
    '/src/assets/images/realstate9.jpg',
    '/src/assets/images/realstate10.jpg',
    '/src/assets/images/realstate11.jpg',
    '/src/assets/images/realstate12.jpg',
    '/src/assets/images/realstate13.jpg',
    '/src/assets/images/realstate14.jpg'
  ],

  galleryTitles: [
    'Landing Page',
    'Admin Dashboard',
    'Sales Reports',
    'Financial Reports',
    'Property Management',
    'Contact Page',
    'Client Login',
    'Client Profile',
    'Agent Dashboard',
    'Client Dashboard',
    'Property Search with Google Maps API',
    'About Page',
    'Property Listings',
    'Property Details'
  ]
},

{
  id: 'athenaeum-digital',

  title: 'Athenaeum Digital Library Management System',

  subtitle: 'Academic Full-Stack Library Management Platform',

  description:
    'A modern academic library management system featuring role-based access, real-time inventory management, digital book circulation, automated penalty tracking, and administrative reporting.',

  longDescription:
    'Athenaeum Digital is a full-stack academic library management system developed for the BS Computer Science program at Bohol Island State University – Bilar Campus. Although the original course requirement required a PHP/MySQL implementation, this enhanced version was redesigned using React, Express.js, and TypeScript to demonstrate modern full-stack development practices. The application implements secure Role-Based Access Control (RBAC) for Students, Staff, and Administrators while automating library operations including book inventory, borrowing, returning, penalty computation, and activity monitoring.',

  image: '/src/assets/images/library1.png',

  category: 'web',

  tags: [
    'Academic Project',
    'React',
    'TypeScript',
    'Express.js',
    'Role-Based Access Control',
    'Library Management'
  ],

  tools: [
    'React 19',
    'TypeScript',
    'Express.js',
    'Node.js',
    'REST API',
    'HTML5',
    'CSS3'
  ],

  client: 'Academic Project  Bohol Island State University (Bilar Campus)',

  date: 'April 2024',

  status: 'Completed',

  liveUrl: 'https://github.com/aileenlagura/library-management-system',

  githubUrl: 'https://github.com/aileenlagura/library-management-system',

  role: 'Full-Stack Developer',

  features: [
    'Student Portal: Browse the digital catalog, search books, request borrowing, process returns, monitor account status, and receive automated overdue notifications.',

    'Staff Dashboard: Process borrowing and returning transactions, update inventory records, assign penalties, and monitor daily circulation activities.',

    'Administrator Dashboard: Complete CRUD management for books, user accounts, library inventory, and operational reports with centralized administrative controls.',

    'Real-Time Inventory Management: Automatically updates book availability and borrowing records after every successful transaction.',

    'Automated Penalty Management: Calculates penalties for overdue, lost, and damaged books while maintaining complete transaction history.',

    'Analytics and Reporting: Displays library statistics including available books, borrowed books, registered users, and exportable activity reports.'
  ],

  gallery: [
    '/src/assets/images/library1.png',
    '/src/assets/images/library2.png',
    '/src/assets/images/library3.png',
    '/src/assets/images/library4.png',
    '/src/assets/images/library5.png',
    '/src/assets/images/library6.png',
    '/src/assets/images/library7.png'
  ],

  galleryTitles: [
    'Administrator Dashboard',
    'Student Dashboard',
    'Digital Book Catalog',
    'Book Search',
    'Borrow Books',
    'Return Books',
    'Book Management & Library Statistics'
  ]
}

];

export const PROJECTS = PROJECTS_DATA.map(normalizeProject);

export const SERVICES = [
  {
    id: 'srv-uiux',
    title: 'UI/UX & Product Design',
    description: 'Creating cozy, Korean-inspired, minimalist wireframes and responsive flow schemas with emphasis on absolute user delight.',
    detailedInfo: 'Every layout is grounded in user research, micro-copy, and cognitive ergonomics. I specialize in designing delightful modern interfaces designed around negative space, gentle transitions, and elegant visual hierarchies. Deliverables include interactive prototypes, UX journey map blueprints, and pristine design guides.',
    iconName: 'Sparkles',
    accentColor: 'text-rose-500',
    pastelBg: 'from-rose-50/50 to-pink-100/30 border-rose-100/60'
  },
  
  {
    id: 'srv-web',
    title: 'Responsive Web Design',
    description: 'Visually elegant responsive landing pages and web apps combining aesthetic grids with optimized performance.',
    detailedInfo: 'From high-conversion promotional grids to personalized digital portfolios. I focus on creating liquid responsive layouts that adapt beautifully on desktops, ultra-wide screens, and smartphones. Each layout maintains a fluid structure and high-definition details.',
    iconName: 'Monitor',
    accentColor: 'text-rose-400',
    pastelBg: 'from-rose-50/40 to-pink-50/40 border-rose-100/40'
  },
  {
    id: 'srv-mobile',
    title: 'Mobile App Design',
    description: 'Crafting modern, accessible mobile-first wireframes and high-fidelity screen visualizers for iOS & Android.',
    detailedInfo: 'Structuring accessible screen patterns tailored for mobile fingers. I implement thorough component nesting and interactive gesture blueprints, mapping tactile feedback to transitions for a deeply premium responsive hand-held feeling.',
    iconName: 'Smartphone',
    accentColor: 'text-pink-400',
    pastelBg: 'from-pink-50/40 to-rose-50/40 border-pink-100/40'
  },
  {
    id: 'srv-illustration',
    title: 'Graphic Design & Assets',
    description: 'Drawing custom line arts, cute vector stickers, promotional materials, and minimalist layout assets.',
    detailedInfo: 'Original graphic accents including custom social templates, editorial layouts, and friendly hand-drawn details that add a personalized, cute-yet-professional finishing touch to your standard business portals.',
    iconName: 'Palette',
    accentColor: 'text-rose-500',
    pastelBg: 'from-rose-50/40 to-orange-50/40 border-rose-100/40'
  }
];

export const SKILLS = [
  // Frontend
  { name: 'React / Component Design', category: 'Frontend', percentage: 95, iconName: 'Cpu', accent: 'bg-rose-400' },
  { name: 'TypeScript / OOP Dev', category: 'Frontend', percentage: 90, iconName: 'FileCode', accent: 'bg-pink-400' },
  { name: 'Tailwind CSS / Typography', category: 'Frontend', percentage: 98, iconName: 'Layers', accent: 'bg-hotpink' },
  { name: 'Framer Motion / Physics', category: 'Frontend', percentage: 92, iconName: 'Waves', accent: 'bg-rose-300' },
  { name: 'Vite / Fast Bundling', category: 'Frontend', percentage: 88, iconName: 'Zap', accent: 'bg-pink-300' },

  // Design
  { name: 'UI & Wireframing', category: 'Design', percentage: 96, iconName: 'Grid', accent: 'bg-rose-400' },
  { name: 'Brand & Identity Strategist', category: 'Design', percentage: 94, iconName: 'HeartHandshake', accent: 'bg-pink-400' },
  { name: 'Layout Hierarchy & Lettering', category: 'Design', percentage: 95, iconName: 'Type', accent: 'bg-hotpink' },
  { name: 'Prototyping & Gesture Maps', category: 'Design', percentage: 90, iconName: 'Compass', accent: 'bg-rose-300' },
  { name: 'Packaging & Print Blueprinting', category: 'Design', percentage: 85, iconName: 'Package', accent: 'bg-pink-300' },

  // Software / Tools
  { name: 'Figma Core & Autolayout', category: 'Software', percentage: 98, iconName: 'PenTool', accent: 'bg-rose-400' },
  { name: 'Adobe Illustrator Vector', category: 'Software', percentage: 92, iconName: 'Feather', accent: 'bg-pink-400' },
  { name: 'Adobe Photoshop Retouching', category: 'Software', percentage: 88, iconName: 'Image', accent: 'bg-hotpink' },
  { name: 'ProtoPie Dynamic Interactivity', category: 'Software', percentage: 80, iconName: 'Sparkles', accent: 'bg-rose-300' },
  { name: 'Git & Agile Pipelines', category: 'Software', percentage: 85, iconName: 'GitBranch', accent: 'bg-pink-300' }
];

export const TIMELINE = [
  {
    id: 'exp-sagility-ojt',
    year: '2026',
    period: 'May 18, 2026 - July 2026',
    title: 'Student IT Intern (OJT)',
    organization: 'Sagility (IT Department)',
    location: 'Sagility, Tagbilaran, Bohol',
    description: 'Successfully completed On-the-Job Training (OJT) within the enterprise IT Department under real-world help desk, system configuration, hardware troubleshooting, division asset inventorying, and network routing configurations.',
    tags: [
      'IT Support Services',
      'Hardware Troubleshooting',
      'Software Deployment',
      'Asset Management',
      'Network Cabling',
      'Team Communication'
    ],
    type: 'experience',
    details: [
      {
        title: 'IT Asset Management',
        bullets: [
          'Performed asset tagging and inventory tracking of computers and enterprise IT equipment.',
          'Conducted asset mapping and transfer of IT assets between departments and production rooms.',
          'Maintained high standard documentation and structural organization of corporate IT resources.'
        ]
      },
      {
        title: 'Computer Hardware Support',
        bullets: [
          'Handled physical computer assembly and disassembly.',
          'Troubleshot and replaced faulty hardware components such as adapters, HDMI cables, and peripherals.',
          'Executed display monitor replacement and layout configuration.',
          'Set up and deployed user desktops for trainees and agents.'
        ]
      },
      {
        title: 'Software Installation and Maintenance',
        bullets: [
          'Installed, uninstalled, and configured enterprise applications including Citrix Workspace, Sanas Noise Cancellation, AnyDesk, and Microsoft Deployment Toolkit.',
          'Enforced essential Windows updates and system optimization routines.',
          'Removed outdated legacy software versions and clean-installed correct runtime variables.'
        ]
      },
      {
        title: 'User and Technical Support',
        bullets: [
          'Assisted employees and agents with complex computer-related system issues.',
          'Managed account authentication, password resets, and account unlocking requests.',
          'Resolved active device, headset, microphone, and direct analog audio faults.',
          'Supported live agents during training and physical workspace setup.'
        ]
      },
      {
        title: 'Network and Infrastructure Support',
        bullets: [
          'Conducted structured cable management and desk network organization.',
          'Assisted with basic networking activities, redundant line routing discussions, and physical switches setup.',
          'Transferred data center physical assets and removed retired equipment like old Ethernet links, switch hubs, and structural brackets.'
        ]
      },
      {
        title: 'IT Operations and Deployment',
        bullets: [
          'Prepared and deployed workstation system images.',
          'Configured operating systems and custom desktop profiles for incoming personnel.',
          'Inspected and verified active hardware units during equipment field audits.',
          'Assisted onboarding processes for new student interns and backed up daily support desk tasks.'
        ]
      }
    ]
  },
  {
    id: 'edu-1',
    year: '2023 - Present',
    period: 'S.Y. 2023 - Present',
    title: 'Bachelor of Science in Computer Science',
    organization: 'Bohol Island State University - Bilar',
    location: 'Zamora, Bilar, Bohol',
    description: 'Focused on core design patterns, data structure theories, advanced web development architectures, client interaction portals, and collaborative engineering standards as a motivated student pursuing OJT placement.',
    tags: ['Computer Science', 'Web Development', 'Mobile App Development', 'Data Management'],
    type: 'education'
  },
  {
    id: 'edu-2',
    year: '2022 - 2023',
    period: 'S.Y. 2022 - 2023',
    title: 'Secondary Education Graduate',
    organization: 'Bilar National High School',
    location: 'Yanaya, Bilar, Bohol',
    description: 'Graduated under the Computer Systems Servicing (CSS) strand. Gained high performance knowledge of computing hardware setups, diagnostic testing routines, and technical system specifications.',
    tags: ['CSS Strand', 'Network Troubleshooting', 'Diagnostics', 'High School Graduate'],
    type: 'education'
  },
  {
    id: 'edu-3',
    year: '2016 - 2017',
    period: 'S.Y. 2016 - 2017',
    title: 'Elementary School Graduate',
    organization: 'Dagohoy Elementary School',
    location: 'Dagohoy, Bilar, Bohol',
    description: 'Establishing standard foundational attributes of focus, community coordination, verbal composition, logical observation, and early computer excitement.',
    tags: ['Primary Education', 'Logical Foundations', 'Communication Skills'],
    type: 'education'
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-2',
    name: 'Kenji Takahashi',
    role: 'Product Director',
    company: 'Solis Wellness Group',
    text: 'The UI components Aileen built for Solis are absolutely gorgeous. Our clients consistently compliment the smooth micro-interactions and cozy feel. Her dedication to clean responsive spacing and flawless typography is unparalleled.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 5
  }
];