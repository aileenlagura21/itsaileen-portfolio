/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} longDescription
 * @property {string} image
 * @property {string} category
 * @property {string[]} tags
 * @property {string[]} tools
 * @property {string} client
 * @property {string} date
 * @property {string} liveUrl
 * @property {string} githubUrl
 * @property {string} role
 * @property {string[]} features
 * @property {string[]} [gallery]
 * @property {string[]} [galleryTitles]
 */

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} detailedInfo
 * @property {string} iconName
 * @property {string} accentColor
 * @property {string} pastelBg
 */

/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {string} category
 * @property {number} percentage
 * @property {string} iconName
 * @property {string} accent
 */

/**
 * @typedef {Object} TimelineItem
 * @property {string} id
 * @property {string} year
 * @property {string} period
 * @property {string} title
 * @property {string} organization
 * @property {string} location
 * @property {string} description
 * @property {string[]} tags
 * @property {string} type
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} company
 * @property {string} text
 * @property {string} avatarUrl
 * @property {number} rating
 */

export const AVATAR_URL = '/src/assets/images/hana_profile_1779523320680.png';

export const PROJECTS = [
  {
    id: 'athenaeum-digital',
    title: 'Athenaeum Digital',
    subtitle: 'Library Management & Catalog Platform',
    description: 'An elegant library catalog and circulation system featuring live status monitors, search tools, student tracking, and fine-grain administration controls.',
    longDescription: 'Athenaeum Digital redefines administrative software through a calm, warm editorial aesthetic. Seamlessly integrating complex state-flows, this platform allows students to check book availability, borrow volumes safely, and track return deadlines. It features a complete control dashboard where library managers can track real-time transactional logs, add or remove catalogue entries, monitor system health, and export critical system metrics instantly.',
    image: '/src/assets/images/athenaeum_digital_mockup_1780313202452.png',
    category: 'development',
    tags: ['Full-Stack', 'Interactive UI', 'State Flow', 'Admin Console'],
    tools: ['React', 'Express', 'Tailwind CSS', 'Vite', 'TypeScript'],
    client: 'Bohol Island State University - Bilar Campus',
    date: 'May 2026',
    liveUrl: 'https://athenaeum.example.com',
    githubUrl: 'https://github.com/aileenlagura/athenaeum-digital',
    role: 'Full-Stack Developer & UI Architect',
    features: [
      'Interactive real-time catalog search filtering dynamically by genre, title, author, or ISBN code.',
      'Two distinct user environments: Student Portal (circulation, active books checklists, reminders) and Administrator Control Console.',
      'Automated transactional log mechanism tracking borrowings, returns, and real-time live stock countdowns.',
      'Robust administrative console with manual book addition forms, database health indicators, and CSV metric exports.'
    ],
    gallery: [
      '/src/assets/images/athenaeum_digital_mockup_1780313202452.png',
      '/src/assets/images/athenaeum_student_catalog_1780313529778.png',
      '/src/assets/images/athenaeum_borrow_success_1780313549478.png',
      '/src/assets/images/athenaeum_admin_dashboard_1780313565993.png'
    ],
    galleryTitles: [
      'Administrative Catalog Management Console',
      'Student Catalog & Personalized Circulation Board',
      'Interactive Real-time Borrowing Success Flow',
      'Management Statistics & Book Insertion Dialog'
    ]
  },
  {
    id: 'aura-skincare',
    title: 'Aura Skincare',
    subtitle: 'Minimalist E-Commerce Platform',
    description: 'A beautiful, organic shopping experience celebrating clean ingredients, soft tone gradients, and delicate typography.',
    longDescription: 'Aura Skincare redefines organic commerce through an immersive digital boutique. Guided by soft pink and beige color pallets, the layout prioritizes gentle product discovery, highly accessible ingredients pages, and a seamless, high-performance checkout flow built on React. We achieved a 40% reduction in bounce rate by replacing traditional crowded item pages with airy, high-contrast, editorial storytelling slides.',
    image: '/src/assets/images/project_webux_1779523344332.png',
    category: 'web',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'UI Concept'],
    tools: ['Figma', 'React', 'Vite', 'Tailwind'],
    client: 'Aura Laboratories Co.',
    date: 'Oct 2025',
    liveUrl: 'https://aura-skincare.example.com',
    githubUrl: 'https://github.com/aileenlagura/aura-skincare',
    role: 'Lead UI/UX Designer & Frontend Developer',
    features: [
      'Interactive ingredient exploration wheel with custom SVG animations.',
      'Sleek sliding cart tray using spring-backed physics layout drawers.',
      'Aesthetic editorial grid optimizing fluid high-definition image scaling.',
      'Responsive design perfectly unified across mobile, tablet, and 4K displays.'
    ],
    gallery: [
      '/src/assets/images/project_webux_1779523344332.png',
      '/src/assets/images/aura_pdp_screenshot_1780314358786.png'
    ],
    galleryTitles: [
      'Aura Skincare Landing Page & Digital Boutique',
      'Organic Ingredient Showcase & Slider PDP'
    ]
  },
  {
    id: 'solis-tracker',
    title: 'Solis Mood & Routine',
    subtitle: 'Self-Care Companion mobile App',
    description: 'A cozy daily mobile companion checking mood, mindfulness goals, and habits with delightful playful animations.',
    longDescription: 'Solis is a mobile-first wellness system designed to help users track emotional pacing, daily hydration, and breathing routines without pressure. Built around the philosophical core of Korean-style minimalist apps, it features soft lavender and rose tints, organic wavy progress bars, and hand-drawn micro-interaction animations. Users are welcomed with friendly morning greetings that adapt based on weather and historical logs.',
    image: '/src/assets/images/project_mobile_1779523362772.png',
    category: 'uiux',
    tags: ['Figma UI/UX', 'Mobile Design', 'Interaction Design', 'Prototype'],
    tools: ['Figma', 'Adobe Illustrator', 'Procreate', 'ProtoPie'],
    client: 'Solis Wellness Group',
    date: 'Jan 2026',
    liveUrl: 'https://solis-app.example.com',
    githubUrl: 'https://github.com/aileenlagura/solis-wellness',
    role: 'Product Designer',
    features: [
      'Interactive mood mandala generator matching color psychology to diary entries.',
      'Gentle fluid-simulated water log system updating visually as user inputs custom volumes.',
      'Haptic-backed calm circular breathing meter assisting in grounding exercises.',
      'Complete comprehensive design token library with 50+ fully accessible system components.'
    ],
    gallery: [
      '/src/assets/images/project_mobile_1779523362772.png',
      '/src/assets/images/solis_breathing_app_1780314376942.png'
    ],
    galleryTitles: [
      'Solis Companion Mobile App Key Concept Screens',
      'Daily Grounding Breath Cycles & Meditation Circle'
    ]
  },
  {
    id: 'maison-rose',
    title: 'Maison de Rose',
    subtitle: 'Boutique Bakery Corporate Identity',
    description: 'An elegant branding system, delicate menu structures, and exquisite tactile packaging specs for a warm, pastry patisserie.',
    longDescription: 'Maison de Rose is an artisan pastry boutique located in Gangnam specializing in organic, botanically infused baked goods. We designed a holistic identity system inspired by traditional European copper lettering and modern Korean pastel aesthetics. The deliverables spanned brand strategy, custom debossed box packaging specs, menu card interactions, and an ultra-chic responsive promotional landing page.',
    image: '/src/assets/images/project_brand_1779523386945.png',
    category: 'branding',
    tags: ['Brand Identity', 'Package Design', 'Art Direction', 'Logo Design'],
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],
    client: 'Maison de Rose Patisserie',
    date: 'Dec 2025',
    liveUrl: 'https://maison-rose.example.com',
    githubUrl: 'https://github.com/aileenlagura/maison-rose-branding',
    role: 'Art Director & Brand Designer',
    features: [
      'Elegant, dual-tone logo with fine line art combining a climbing rose with classical whisk forms.',
      'Eco-friendly packaging blueprint employing soy ink formulations and tactile linen finishes.',
      'Interactive online dessert selection menu utilizing smooth parallax card transitions.',
      'Curated digital visual identity toolkit with bespoke color guides and font pairings.'
    ],
    gallery: [
      '/src/assets/images/project_brand_1779523386945.png',
      '/src/assets/images/maison_packaging_specs_1780314392849.png'
    ],
    galleryTitles: [
      'Maison de Rose Brand Guidelines & Palette Asset Specs',
      'Artisanal Embossed Packaging Layout Blueprints'
    ]
  },
  {
    id: 'muse-journal',
    title: 'Muse Distraction-Free Journal',
    subtitle: 'Ambient Writing Workspace',
    description: 'A beautifully isolated writing sandbox built for authors to log thoughts paired with ambient background synthesis.',
    longDescription: 'Muse Journal provides a screen space strictly dedicated to the craft of thinking and typing. By combining extreme typographic simplicity with mild, customizable soundscapes (such as soft rain on petals, gentle tea steaming, and cozy pages flipping), the app acts as a digital sanctuary. Built featuring local indexDB persistence, automatic draft synchronization, and clean customizable typeface layouts.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=720&h=540',
    category: 'development',
    tags: ['React.js', 'Web Audio API', 'IndexedDB', 'TailwindCSS'],
    tools: ['React', 'Web Audio API', 'TypeScript', 'Tailwind'],
    client: 'Personal Project',
    date: 'Mar 2026',
    liveUrl: 'https://muse-write.example.com',
    githubUrl: 'https://github.com/aileenlagura/muse-journal',
    role: 'Full-Stack Creator',
    features: [
      'Interactive customizable typography board offering hand-picked editorial Serif fonts.',
      'Ambient audio canvas using the Web Audio API to mix spatial relaxing noise channels live.',
      'Robust automatic autosaving backup protecting written work across offline states.',
      'Bespoke visual analytics page with charming pink calorie-like graphs charting word density.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=720&h=540',
      '/src/assets/images/muse_workspace_view_1780314412662.png'
    ],
    galleryTitles: [
      'Quiet Workspace Reading & Creative Environment',
      'Distraction-Free Editorial Layout & Ambient Selection Bar'
    ]
  },
  {
    id: 'peachy-explorations',
    title: 'Peachy Creative Playground',
    subtitle: 'High-Performance UI Interactions',
    description: 'An interactive showcase exploring gorgeous physics layouts, customized cursors, and custom web canvas layers.',
    longDescription: 'Peachy Portfolio is a creative test-bed crafted utilizing Vite, custom canvas frames, and heavy usage of absolute fluid layouts in Framer Motion. It showcases what is possible when pushing traditional portfolio rules aside: drag-and-drop retro UI stickers, bouncy cards styled like modern Korean photo booths, and reactive custom bubble mouse trails that split into flower confetti upon clicks.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=720&h=540',
    category: 'web',
    tags: ['Creative Coding', 'Canvas', 'Framing Physics', 'Vite'],
    tools: ['TypeScript', 'Framer Motion', 'HTML Canvas', 'Tailwind'],
    client: 'Experimental Showcase',
    date: 'May 2026',
    liveUrl: 'https://peachy-play.example.com',
    githubUrl: 'https://github.com/aileenlagura/peachy-play',
    role: 'Creative Web Engineer',
    features: [
      'Interactive physics canvas simulating soft gravity sticker drops via bounding boundaries.',
      'Mouse custom bubble-bursting canvas trail with configurable toggle speed setting.',
      'Bouncy glass cards utilizing advanced backdrop-filter tricks to adapt on gradient backdrops.',
      'Dynamic CSS asset grids allowing layout items to be resized by click drag handlers.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=720&h=540',
      '/src/assets/images/peachy_sticker_canvas_1780314430438.png'
    ],
    galleryTitles: [
      'Creative Frontend Wireframe Conception Screen',
      'Interactive Gravity Physics Sticker Sandbox & Canvas Mouse Trail'
    ]
  },
  {
    id: 'bloom-tokens',
    title: 'Bloom Design Tokens & UI',
    subtitle: 'Premium Accessibility Toolkit',
    description: 'A meticulous Figma library and comprehensive token suite packed with over 300 compliant feminine layout states.',
    longDescription: 'Bloom is a state-of-the-art visual token setup created to streamline UI generation for feminine lifestyle brands. Tested for WCAG AAA visual contrast levels and screen-reader accessibility, the system converts raw Figma component files into direct Tailwind presets. Highly loved by startup teams looking to immediately establish a luxurious pastel identity without sacrificing layout performance.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=720&h=540',
    category: 'uiux',
    tags: ['Design Systems', 'Figma Tokens', 'Accessibility AAA', 'Mobile Library'],
    tools: ['Figma', 'Style Dictionary', 'JSON tokens', 'Zeroheight'],
    client: 'Bloom Design Labs',
    date: 'Nov 2025',
    liveUrl: 'https://bloom-tokens.example.com',
    githubUrl: 'https://github.com/aileenlagura/bloom-design-system',
    role: 'System Architect',
    features: [
      'Meticulously managed JSON design token system compiling instantly for dry code pipelines.',
      '300+ Figma components supporting advanced variable variants and automatic dark states.',
      'Strict AAA color compliance maintaining rich legible contrast against soft pink screens.',
      'Export support allowing direct implementation with React styled-components, CSS, or Tailwind.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=720&h=540',
      '/src/assets/images/bloom_design_tokens_1780314448917.png'
    ],
    galleryTitles: [
      'Bloom Abstract Composition & Styling Atmosphere Layout',
      'Figma Design Tokens & Accessible AAA Component Setups'
    ]
  }
];

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
    id: 'srv-frontend',
    title: 'Frontend Development',
    description: 'Translating rich Figma prototypes into responsive, accessible, pixel-perfect React and Tailwind CSS applications.',
    detailedInfo: 'I build clean, component-driven, responsive architectures. Utilizing modern TypeScript frameworks, I prioritize blazing-fast loading speeds, clean semantic code, and perfect cross-browser stability. Animations are hand-tuned using Framer Motion to ensure they enhance rather than distract.',
    iconName: 'Code',
    accentColor: 'text-pink-500',
    pastelBg: 'from-pink-50/50 to-rose-100/30 border-pink-100/60'
  },
  {
    id: 'srv-branding',
    title: 'Branding & Visual Identity',
    description: 'Developing soft, elegant typography guidelines, vector assets, and brand strategies designed for lifestyle startups.',
    detailedInfo: 'Stunning logos, cohesive stationery specifications, tone-of-voice directives, and bespoke color boards. I establish organic visual narratives that tell your unique story, ensuring you resonate deeply with a highly mindful, aesthetic modern audience.',
    iconName: 'Heart',
    accentColor: 'text-hotpink',
    pastelBg: 'from-orange-50/40 to-pink-100/30 border-orange-100/40'
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
    id: 'exp-1',
    year: '2023 - Present',
    period: 'S.Y. 2023 - Present',
    title: 'Computer Science & Systems Developer (BISU Projects)',
    organization: 'Bohol Island State University - Bilar',
    location: 'Bilar, Bohol',
    description: 'Encircled by challenging coursework, developing responsive web interfaces, designing mobile applications, managing database schemas, and practicing algorithmic problem-solving to build real-world software solutions.',
    tags: ['Web Development', 'Mobile App Development', 'Data Management', 'Logical Analysis'],
    type: 'experience'
  },
  {
    id: 'exp-2',
    year: '2022 - 2023',
    period: 'S.Y. 2022 - 2023',
    title: 'Computer Systems Servicing (CSS) Trainee',
    organization: 'Bilar National High School',
    location: 'Bilar, Bohol',
    description: 'Acquired practical proficiency in installing computer systems, networking configurations (local area networks), hardware testing diagnostics, physical troubleshooting, and system assembly guidelines.',
    tags: ['Systems Servicing', 'Networking', 'Diagnostics', 'Hardware Assembly'],
    type: 'experience'
  },
  {
    id: 'exp-3',
    year: '2020 - Present',
    period: '2020 - Present',
    title: 'Digital Design & Virtual Office Support',
    organization: 'Freelance & Student Technical Assistance',
    location: 'Bilar, Bohol',
    description: 'Offering computer literacy assistance; prototyping layouts and promotional visuals inside Canva; organizing tabular datasets via Microsoft Excel; and managing academic projects with high structural attention.',
    tags: ['Canva Graphics', 'Spreadsheet Integrity', 'Time Management', 'Computer Literate'],
    type: 'experience'
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
    id: 'test-1',
    name: 'Soyeon Park',
    role: 'Founder & Director',
    company: 'Aura Laboratories Co.',
    text: 'Aileen has a rare, extremely special talent. She understands code just as deeply as she understands elegant graphic design. Our bounce rates decreased by 40% immediately following her visual redevelopment. She is communicative, organized, and remarkably fast.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Kenji Takahashi',
    role: 'Product Director',
    company: 'Solis Wellness Group',
    text: 'The UI components Aileen built for Solis are absolutely gorgeous. Our clients consistently compliment the smooth micro-interactions and cozy feel. Her dedication to clean responsive spacing and flawless typography is unparalleled.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Marketing Lead',
    company: 'Maison de Rose Bakery',
    text: 'Working with Aileen to craft our brand identity system and promotional site was an absolute dream. She crafted botanical icons that are cute, professional, and visually stunning. She brought our exact mood to life perfectly!',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 5
  }
];
