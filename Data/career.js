// src/data/careers.js
window.careers = [
  /* ---------------------------
     INFORMATION TECHNOLOGY
     --------------------------- */
  {
    id: "software-developer",
    field: "it",
    title: "Software Developer",
    description: "Designs, builds and maintains software applications for web, mobile and desktop. Works in teams to deliver features and fixes.",
    subjects: ["Mathematics", "Information Technology", "Computer Applications Technology"],
    skills: ["JavaScript", "Problem solving", "Algorithms", "Databases", "Git"],
    salary: { entry: 180000, mid: 350000, senior: 650000 },
    jobMarketSA: { demand: "Very High", growth: "Fast", popularCities: ["Cape Town", "Johannesburg", "Pretoria"] },
    universities: ["UCT", "University of Pretoria", "Wits", "Stellenbosch", "University of Johannesburg"]
  },
  {
    id: "web-developer",
    field: "it",
    title: "Web Developer",
    description: "Builds and maintains websites and web apps using HTML, CSS, JavaScript and frameworks.",
    subjects: ["Information Technology","Mathematics","Computer Applications Technology"],
    skills: ["HTML","CSS","JavaScript","React","Responsive design"],
    salary: { entry: 150000, mid: 280000, senior: 480000 },
    jobMarketSA: { demand: "High", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","University of Johannesburg","VUT"]
  },
  {
    id: "mobile-developer",
    field: "it",
    title: "Mobile App Developer",
    description: "Creates applications for Android and iOS platforms using native or cross-platform tools.",
    subjects: ["Mathematics","Information Technology"],
    skills: ["Kotlin","Swift","Flutter","React Native"],
    salary: { entry: 180000, mid: 350000, senior: 600000 },
    jobMarketSA: { demand: "High", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","UP"]
  },
  {
    id: "data-analyst",
    field: "it",
    title: "Data Analyst",
    description: "Collects, cleans and analyses data to produce business insights and reports.",
    subjects: ["Mathematics","Statistics","Information Technology"],
    skills: ["SQL","Excel","Python/R","Data visualization"],
    salary: { entry: 200000, mid: 360000, senior: 580000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "data-scientist",
    field: "it",
    title: "Data Scientist",
    description: "Builds predictive models and uses machine learning to solve complex problems.",
    subjects: ["Mathematics","Statistics","Computer Science"],
    skills: ["Python","Machine Learning","Statistics","TensorFlow","R"],
    salary: { entry: 300000, mid: 550000, senior: 1000000 },
    jobMarketSA: { demand: "High", growth: "Very Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","UP"]
  },
  {
    id: "cyber-security-analyst",
    field: "it",
    title: "Cyber Security Analyst",
    description: "Protects networks and systems from cyber threats and responds to incidents.",
    subjects: ["Information Technology","Mathematics"],
    skills: ["Network security","Pen testing","Python","Monitoring tools"],
    salary: { entry: 200000, mid: 380000, senior: 700000 },
    jobMarketSA: { demand: "Very High", growth: "Fast", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UP","UCT","Rhodes"]
  },
  {
    id: "cloud-engineer",
    field: "it",
    title: "Cloud Engineer",
    description: "Designs, deploys and manages cloud infrastructure and services.",
    subjects: ["Information Technology","Mathematics"],
    skills: ["AWS/Azure/GCP","Containers","Terraform","Linux"],
    salary: { entry: 250000, mid: 480000, senior: 900000 },
    jobMarketSA: { demand: "High", growth: "Very Fast", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "devops-engineer",
    field: "it",
    title: "DevOps Engineer",
    description: "Automates software delivery pipelines and maintains CI/CD, infrastructure as code.",
    subjects: ["Information Technology","Mathematics"],
    skills: ["CI/CD","Docker","Kubernetes","Scripting"],
    salary: { entry: 240000, mid: 460000, senior: 850000 },
    jobMarketSA: { demand: "High", growth: "Fast", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UCT","Wits","UP"]
  },
  {
    id: "network-engineer",
    field: "it",
    title: "Network Engineer",
    description: "Designs and supports wired and wireless networks for organisations.",
    subjects: ["Information Technology","Mathematics","Physical Science"],
    skills: ["Routing & switching","Cisco","Troubleshooting","Security"],
    salary: { entry: 160000, mid: 320000, senior: 600000 },
    jobMarketSA: { demand: "Medium-High", growth: "Stable", popularCities: ["Johannesburg","Pretoria"] },
    universities: ["UJ","UP","DUT"]
  },
  {
    id: "database-administrator",
    field: "it",
    title: "Database Administrator (DBA)",
    description: "Installs, configures and manages database systems and ensures data availability.",
    subjects: ["Information Technology","Mathematics"],
    skills: ["SQL","Performance tuning","Backup & recovery"],
    salary: { entry: 200000, mid: 420000, senior: 750000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UP","UCT","Wits"]
  },
  {
    id: "it-support-specialist",
    field: "it",
    title: "IT Support Specialist",
    description: "Provides technical support to users, troubleshoots hardware/software issues.",
    subjects: ["Computer Applications Technology","Information Technology"],
    skills: ["Troubleshooting","Customer service","Hardware knowledge"],
    salary: { entry: 120000, mid: 220000, senior: 380000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["UNISA","TVET Colleges","UP"]
  },

  /* ---------------------------
     ENGINEERING
     --------------------------- */
  {
    id: "civil-engineer",
    field: "engineering",
    title: "Civil Engineer",
    description: "Designs and supervises construction of infrastructure such as roads, bridges and buildings.",
    subjects: ["Mathematics","Physical Science","Engineering Graphics & Design"],
    skills: ["AutoCAD","Structural analysis","Project management"],
    salary: { entry: 220000, mid: 400000, senior: 700000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Johannesburg","Durban","Cape Town"] },
    universities: ["UP","Wits","Stellenbosch","UCT"]
  },
  {
    id: "electrical-engineer",
    field: "engineering",
    title: "Electrical Engineer",
    description: "Works on power systems, electronics and electrical infrastructure design.",
    subjects: ["Mathematics","Physical Science"],
    skills: ["Circuit design","Power systems","Matlab"],
    salary: { entry: 240000, mid: 420000, senior: 750000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Johannesburg","Pretoria"] },
    universities: ["Wits","UP","UCT"]
  },
  {
    id: "mechanical-engineer",
    field: "engineering",
    title: "Mechanical Engineer",
    description: "Designs mechanical systems, machinery and supervises manufacturing processes.",
    subjects: ["Mathematics","Physical Science"],
    skills: ["SolidWorks","Thermodynamics","CAD"],
    salary: { entry: 250000, mid: 430000, senior: 780000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Cape Town","Port Elizabeth"] },
    universities: ["Stellenbosch","UP","Wits"]
  },

  /* ---------------------------
     HEALTH & MEDICAL
     --------------------------- */
  {
    id: "medical-doctor",
    field: "health",
    title: "Medical Doctor (Physician)",
    description: "Diagnoses and treats patients, works in clinics and hospitals across specialities.",
    subjects: ["Life Science","Mathematics","Physical Science"],
    skills: ["Clinical skills","Communication","Decision making"],
    salary: { entry: 350000, mid: 650000, senior: 1200000 },
    jobMarketSA: { demand: "Very High", growth: "Growing", popularCities: ["Johannesburg","Cape Town","Durban"] },
    universities: ["UCT","Wits","UP","Stellenbosch"]
  },

  {
    id: "nurse",
    field: "health",
    title: "Nurse (General)",
    description: "Provides patient care, assists doctors and performs clinical duties in hospitals and clinics.",
    subjects: ["Life Science"],
    skills: ["Patient care","Clinical skills","Empathy"],
    salary: { entry: 150000, mid: 260000, senior: 400000 },
    jobMarketSA: { demand: "Very High", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["DUT","UCT Nursing School","University of Pretoria"]
  },

  /* ---------------------------
     HEALTH CONTINUED
     --------------------------- */
  {
    id: "pharmacist",
    field: "health",
    title: "Pharmacist",
    description: "Prepares and dispenses medications, advises both patients and healthcare professionals on safe medication use.",
    subjects: ["Life Science","Chemistry"],
    skills: ["Pharmacology","Attention to detail","Patient counselling"],
    salary: { entry: 280000, mid: 520000, senior: 900000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["Wits","UP","UCT"]
  },
  {
    id: "physiotherapist",
    field: "health",
    title: "Physiotherapist",
    description: "Assesses and treats patients to restore movement and function after injury or illness.",
    subjects: ["Life Science"],
    skills: ["Manual therapy","Exercise planning","Communication"],
    salary: { entry: 170000, mid: 320000, senior: 560000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["UCT","UP","Wits"]
  },

  /* ---------------------------
     ARTS & CREATIVE
     --------------------------- */
  {
    id: "graphic-designer",
    field: "arts",
    title: "Graphic Designer",
    description: "Creates visual content for print and digital media using typography, imagery and layout.",
    subjects: ["Art","Design","Information Technology"],
    skills: ["Adobe Photoshop","Illustrator","Creativity","Layout"],
    salary: { entry: 120000, mid: 240000, senior: 420000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["University of Cape Town","Wits","Stellenbosch"]
  },
  {
    id: "ux-designer",
    field: "arts",
    title: "UX Designer",
    description: "Designs user-centred digital experiences and interfaces based on user research and best practices.",
    subjects: ["Information Technology","Art","Design"],
    skills: ["Wireframing","User research","Prototyping","Interaction design"],
    salary: { entry: 180000, mid: 360000, senior: 650000 },
    jobMarketSA: { demand: "High", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","Stellenbosch"]
  },
  {
    id: "photographer",
    field: "arts",
    title: "Photographer",
    description: "Produces images for editorial, commercial or personal use, often specialising in a niche like weddings or product photography.",
    subjects: ["Art","Design"],
    skills: ["Composition","Lighting","Editing"],
    salary: { entry: 90000, mid: 200000, senior: 450000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UNISA","AFDA","TVET Colleges"]
  },

  /* ---------------------------
     BUSINESS & MANAGEMENT
     --------------------------- */
  {
    id: "business-analyst",
    field: "business",
    title: "Business Analyst",
    description: "Bridges business needs and technology solutions by analysing processes and defining requirements.",
    subjects: ["Mathematics","Business Studies"],
    skills: ["Requirements analysis","Data analysis","Communication"],
    salary: { entry: 200000, mid: 420000, senior: 800000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["Wits","UP","UCT"]
  },
  {
    id: "human-resources-manager",
    field: "business",
    title: "Human Resources Manager",
    description: "Oversees recruitment, employee relations, development and HR policy for organisations.",
    subjects: ["Business Studies","English"],
    skills: ["People management","Employment law","Conflict resolution"],
    salary: { entry: 200000, mid: 420000, senior: 750000 },
    jobMarketSA: { demand: "Medium-High", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UP","UCT","Wits"]
  },
  {
    id: "management-consultant",
    field: "business",
    title: "Management Consultant",
    description: "Advises organisations on strategy, operations and improvement initiatives.",
    subjects: ["Mathematics","Business Studies"],
    skills: ["Problem solving","Presentation","Project management"],
    salary: { entry: 240000, mid: 500000, senior: 1200000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg"] },
    universities: ["UCT","Wits","UP"]
  },

  /* ---------------------------
     FINANCE & LAW
     --------------------------- */
  {
    id: "accountant",
    field: "finance",
    title: "Accountant",
    description: "Prepares financial statements, manages budgets and ensures regulatory compliance for organisations.",
    subjects: ["Mathematics","Accounting"],
    skills: ["Tax","Auditing","Financial reporting","Excel"],
    salary: { entry: 160000, mid: 380000, senior: 700000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["Wits","UP","UCT"]
  },
  {
    id: "financial-analyst",
    field: "finance",
    title: "Financial Analyst",
    description: "Analyses company performance, builds financial models and supports investment decisions.",
    subjects: ["Mathematics","Economics"],
    skills: ["Modelling","Excel","Data analysis"],
    salary: { entry: 200000, mid: 420000, senior: 900000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg"] },
    universities: ["Wits","UCT","UP"]
  },
  {
    id: "lawyer",
    field: "law",
    title: "Lawyer (Attorney)",
    description: "Provides legal advice, represents clients and prepares legal documents across various specialisations.",
    subjects: ["English","History"],
    skills: ["Legal research","Advocacy","Negotiation"],
    salary: { entry: 220000, mid: 480000, senior: 1000000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["Wits","UCT","UP"]
  },

  /* ---------------------------
     EDUCATION
     --------------------------- */
  {
    id: "teacher-secondary",
    field: "education",
    title: "Secondary School Teacher",
    description: "Teaches subject content to learners in secondary schools and supports their development.",
    subjects: ["Subject dependent"],
    skills: ["Classroom management","Lesson planning","Assessment"],
    salary: { entry: 120000, mid: 240000, senior: 400000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["UNISA","UCT","UP"]
  },
  {
    id: "lecturer",
    field: "education",
    title: "University Lecturer",
    description: "Teaches, researches and supervises students at tertiary institutions.",
    subjects: ["Subject dependent"],
    skills: ["Research","Teaching","Academic writing"],
    salary: { entry: 220000, mid: 420000, senior: 800000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","UP"]
  },

  /* ---------------------------
     HOSPITALITY & TOURISM
     --------------------------- */
  {
    id: "chef",
    field: "hospitality",
    title: "Chef",
    description: "Prepares meals in restaurants, hotels and catering businesses, often specialising in cuisines.",
    subjects: ["Home Economics"],
    skills: ["Food preparation","Menu planning","Time management"],
    salary: { entry: 90000, mid: 200000, senior: 450000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Cape Town","Durban"] },
    universities: ["TVET Colleges","Culinary schools"]
  },
  {
    id: "hotel-manager",
    field: "hospitality",
    title: "Hotel Manager",
    description: "Oversees hotel operations, guest services, staff management and revenue optimisation.",
    subjects: ["Business Studies","Hospitality"],
    skills: ["Operations","Customer service","Revenue management"],
    salary: { entry: 180000, mid: 380000, senior: 700000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UNISA","TVET Colleges"]
  },

  /* ---------------------------
     AGRICULTURE & ENVIRONMENT
     --------------------------- */
  {
    id: "agronomist",
    field: "agriculture",
    title: "Agronomist",
    description: "Advises on crop production, soil management and sustainable farming practices.",
    subjects: ["Life Science","Agricultural Science"],
    skills: ["Soil science","Crop management","Data analysis"],
    salary: { entry: 140000, mid: 300000, senior: 520000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Western Cape","KwaZulu-Natal"] },
    universities: ["UP","UCT","Stellenbosch"]
  },
  {
    id: "environmental-scientist",
    field: "science",
    title: "Environmental Scientist",
    description: "Studies environmental systems, assesses impacts and advises on conservation and compliance.",
    subjects: ["Life Science","Geography","Chemistry"],
    skills: ["Fieldwork","Data analysis","Report writing"],
    salary: { entry: 150000, mid: 320000, senior: 600000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","UP","Wits"]
  },

  /* ---------------------------
     TRANSPORT & LOGISTICS
     --------------------------- */
  {
    id: "logistics-manager",
    field: "transport",
    title: "Logistics & Supply Chain Manager",
    description: "Plans and manages the movement of goods, warehousing and distribution across supply chains.",
    subjects: ["Mathematics","Business Studies"],
    skills: ["Logistics planning","Inventory management","ERP systems"],
    salary: { entry: 200000, mid: 420000, senior: 800000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg","Durban"] },
    universities: ["UP","Wits","UCT"]
  },
  {
    id: "truck-driver",
    field: "transport",
    title: "Truck Driver",
    description: "Transports goods over long or short distances, requires appropriate driving licenses and safety awareness.",
    subjects: ["None"],
    skills: ["Driving licence","Route planning","Vehicle maintenance"],
    salary: { entry: 90000, mid: 160000, senior: 260000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["N/A"]
  },

  /* ---------------------------
     MANUFACTURING & TRADES
     --------------------------- */
  {
    id: "electrician",
    field: "trades",
    title: "Electrician",
    description: "Installs, maintains and repairs electrical systems in buildings and industrial sites.",
    subjects: ["Mathematics","Physical Science"],
    skills: ["Wiring","Troubleshooting","Safety standards"],
    salary: { entry: 110000, mid: 240000, senior: 450000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },
  {
    id: "plumber",
    field: "trades",
    title: "Plumber",
    description: "Installs and repairs water and sewage systems and fixtures in residential and commercial settings.",
    subjects: ["Technical Drawing"],
    skills: ["Pipefitting","Welding","Problem solving"],
    salary: { entry: 100000, mid: 200000, senior: 360000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },
  {
    id: "welder",
    field: "manufacturing",
    title: "Welder",
    description: "Joins metal parts using various welding techniques for construction and manufacturing.",
    subjects: ["Technical Drawing"],
    skills: ["Welding techniques","Blueprint reading","Safety"] ,
    salary: { entry: 90000, mid: 180000, senior: 320000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Industrial areas"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },

  /* ---------------------------
     PUBLIC SERVICES & COMMUNITY
     --------------------------- */
  {
    id: "social-worker",
    field: "social-science",
    title: "Social Worker",
    description: "Supports individuals and communities through counselling, referrals and programme implementation.",
    subjects: ["Life Orientation","Social Sciences"],
    skills: ["Counselling","Community engagement","Case management"],
    salary: { entry: 120000, mid: 240000, senior: 420000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "police-officer",
    field: "security",
    title: "Police Officer",
    description: "Maintains public order, enforces laws and responds to incidents and emergencies.",
    subjects: ["None"],
    skills: ["Law enforcement","Investigation","Public service"],
    salary: { entry: 110000, mid: 220000, senior: 380000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["SAP training academy"]
  },
  {
    id: "firefighter",
    field: "public-services",
    title: "Firefighter",
    description: "Responds to fires and emergencies, performs rescues and promotes fire safety in communities.",
    subjects: ["Physical Education"],
    skills: ["Emergency response","Teamwork","Rescue techniques"],
    salary: { entry: 90000, mid: 180000, senior: 320000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Training academies"]
  },

  /* ---------------------------
     MARKETING & MEDIA
     --------------------------- */
  {
    id: "digital-marketer",
    field: "marketing",
    title: "Digital Marketer",
    description: "Plans and executes online campaigns, SEO, social media and performance marketing.",
    subjects: ["Information Technology","Business Studies"],
    skills: ["SEO","Analytics","Content creation"],
    salary: { entry: 140000, mid: 300000, senior: 600000 },
    jobMarketSA: { demand: "High", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","Various short courses"]
  },
  {
    id: "brand-manager",
    field: "marketing",
    title: "Brand Manager",
    description: "Drives brand strategy, marketing campaigns and product positioning to grow market share.",
    subjects: ["Business Studies","English"],
    skills: ["Strategy","Marketing analytics","Leadership"],
    salary: { entry: 220000, mid: 450000, senior: 900000 },
    jobMarketSA: { demand: "Medium-High", growth: "Growing", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["Wits","UCT","UP"]
  },

  /* ---------------------------
     GENERAL & PROFESSIONAL
     --------------------------- */
  {
    id: "architect",
    field: "engineering",
    title: "Architect",
    description: "Designs buildings and structures, coordinates with engineers and manages construction documentation.",
    subjects: ["Mathematics","Technical Drawing"],
    skills: ["Design","AutoCAD","Project management"],
    salary: { entry: 220000, mid: 420000, senior: 900000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "quantity-surveyor",
    field: "engineering",
    title: "Quantity Surveyor",
    description: "Manages construction costs, contracts and procurement for building projects.",
    subjects: ["Mathematics","Technical Drawing"],
    skills: ["Cost estimation","Contract law","Project management"],
    salary: { entry: 180000, mid: 380000, senior: 800000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UCT","UP","Wits"]
  },

  /* ---------------------------
     MINING & RESOURCES
     --------------------------- */
  {
    id: "mining-engineer",
    field: "mining",
    title: "Mining Engineer",
    description: "Designs and oversees mining operations, focusing on extraction efficiency and safety.",
    subjects: ["Mathematics","Physical Science"],
    skills: ["Mine design","Rock mechanics","Project management"],
    salary: { entry: 200000, mid: 420000, senior: 900000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Johannesburg","Rustenburg"] },
    universities: ["Wits","UP","UCT"]
  },
  {
    id: "geologist",
    field: "mining",
    title: "Geologist",
    description: "Studies earth materials and identifies mineral deposits to support mining and exploration activities.",
    subjects: ["Earth Science","Physical Science"],
    skills: ["Field mapping","Sampling","Data interpretation"],
    salary: { entry: 150000, mid: 320000, senior: 650000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Rustenburg","Upington"] },
    universities: ["University of Pretoria","Wits","Rhodes"]
  },
  {
    id: "mine-surveyor",
    field: "mining",
    title: "Mine Surveyor",
    description: "Measures and maps mine structures and determines boundaries to ensure safe and accurate excavation.",
    subjects: ["Mathematics","Technical Drawing"],
    skills: ["Surveying","CAD","Geospatial analysis"],
    salary: { entry: 160000, mid: 320000, senior: 580000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Rustenburg"] },
    universities: ["UP","UCT","TVET Colleges"]
  },

  /* ---------------------------
     AVIATION
     --------------------------- */
  {
    id: "pilot",
    field: "aviation",
    title: "Commercial Pilot",
    description: "Operates aircraft to transport passengers and cargo, requires flight training and licences.",
    subjects: ["Mathematics","Physical Science"],
    skills: ["Flight operations","Navigation","Safety management"],
    salary: { entry: 220000, mid: 500000, senior: 1200000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["Flight schools","Aviation academies"]
  },
  {
    id: "air-traffic-controller",
    field: "aviation",
    title: "Air Traffic Controller",
    description: "Manages aircraft movements on the ground and in the air to ensure safe and orderly flow of air traffic.",
    subjects: ["Mathematics","English"],
    skills: ["Communication","Situational awareness","Stress management"],
    salary: { entry: 200000, mid: 420000, senior: 850000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Civil Aviation Authority training"]
  },

  /* ---------------------------
     VETERINARY & ANIMAL CARE
     --------------------------- */
  {
    id: "veterinarian",
    field: "veterinary",
    title: "Veterinarian",
    description: "Provides medical care for animals, including diagnosis, surgery and preventative medicine.",
    subjects: ["Life Science","Biology"],
    skills: ["Clinical skills","Surgery","Animal handling"],
    salary: { entry: 180000, mid: 380000, senior: 700000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["University of Pretoria","UCT","Stellenbosch"]
  },

  /* ---------------------------
     PROFESSIONAL HEALTH SPECIALTIES
     --------------------------- */
  {
    id: "dentist",
    field: "health",
    title: "Dentist",
    description: "Diagnoses and treats oral health issues, performs dental procedures and advises on oral hygiene.",
    subjects: ["Biology","Chemistry"],
    skills: ["Clinical dentistry","Surgery","Patient communication"],
    salary: { entry: 260000, mid: 500000, senior: 1000000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["University of Pretoria","UCT","Wits"]
  },
  {
    id: "occupational-therapist",
    field: "health",
    title: "Occupational Therapist",
    description: "Helps people regain or adapt skills for daily living and work after injury or illness.",
    subjects: ["Life Science"],
    skills: ["Rehabilitation","Assessment","Therapeutic planning"],
    salary: { entry: 150000, mid: 320000, senior: 600000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "speech-therapist",
    field: "health",
    title: "Speech Therapist (Speech-Language Pathologist)",
    description: "Assesses and treats speech, language and communication difficulties in children and adults.",
    subjects: ["Life Science"],
    skills: ["Assessment","Therapy planning","Communication skills"],
    salary: { entry: 140000, mid: 300000, senior: 560000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["UCT","University of Pretoria","Wits"]
  },

  /* ---------------------------
     SPORTS & WELLNESS
     --------------------------- */
  {
    id: "sports-coach",
    field: "sports",
    title: "Sports Coach",
    description: "Trains and coaches athletes or teams to improve performance and strategy.",
    subjects: ["Physical Education"],
    skills: ["Coaching","Training planning","Motivation"],
    salary: { entry: 80000, mid: 200000, senior: 500000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["UNISA","Sports academies"]
  },
  {
    id: "professional-athlete",
    field: "sports",
    title: "Professional Athlete",
    description: "Competes in sports at a professional level, often requires specialised training and sponsorship.",
    subjects: ["Physical Education"],
    skills: ["Physical conditioning","Competitive skills","Teamwork"],
    salary: { entry: 60000, mid: 300000, senior: 2000000 },
    jobMarketSA: { demand: "Selective", growth: "Variable", popularCities: ["Nationwide"] },
    universities: ["Sports academies"]
  },

  /* ---------------------------
     BEAUTY & PERSONAL CARE
     --------------------------- */
  {
    id: "beauty-therapist",
    field: "beauty",
    title: "Beauty Therapist",
    description: "Provides skin, hair removal and wellness treatments in salons and spas.",
    subjects: ["None"],
    skills: ["Cosmetology","Client care","Product knowledge"],
    salary: { entry: 70000, mid: 150000, senior: 320000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["TVET Colleges","Short courses"]
  },
  {
    id: "hairdresser",
    field: "beauty",
    title: "Hairdresser / Barber",
    description: "Cuts, styles and treats hair for clients in salons or barbershops.",
    subjects: ["None"],
    skills: ["Cutting","Colouring","Customer service"],
    salary: { entry: 60000, mid: 140000, senior: 320000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },

  /* ---------------------------
     CREATIVE TECHNOLOGY & MEDIA
     --------------------------- */
  {
    id: "game-developer",
    field: "creative-tech",
    title: "Game Developer",
    description: "Designs and builds interactive games for consoles, PC and mobile platforms.",
    subjects: ["Information Technology","Art"],
    skills: ["Game engines","C#/C++","Design"],
    salary: { entry: 150000, mid: 380000, senior: 900000 },
    jobMarketSA: { demand: "Growing", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","AFDA","Private bootcamps"]
  },
  {
    id: "animator",
    field: "creative-tech",
    title: "Animator",
    description: "Creates animations for film, television, advertising and games using digital tools and techniques.",
    subjects: ["Art","Information Technology"],
    skills: ["2D/3D animation","Storyboarding","Software (Maya/Blender)"],
    salary: { entry: 120000, mid: 320000, senior: 700000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["AFDA","UCT","Private courses"]
  },

  /* ---------------------------
     IT SPECIALTIES
     --------------------------- */
  {
    id: "ml-engineer",
    field: "it",
    title: "Machine Learning Engineer",
    description: "Builds and deploys ML models and data pipelines for production systems.",
    subjects: ["Mathematics","Information Technology"],
    skills: ["Python","TensorFlow/PyTorch","Data engineering"],
    salary: { entry: 300000, mid: 650000, senior: 1300000 },
    jobMarketSA: { demand: "High", growth: "Very Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","UP"]
  },
  {
    id: "systems-architect",
    field: "it",
    title: "Systems Architect",
    description: "Designs large-scale software architecture, integrating systems and defining technical strategy.",
    subjects: ["Information Technology","Mathematics"],
    skills: ["Architecture","Distributed systems","Leadership"],
    salary: { entry: 320000, mid: 700000, senior: 1500000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UCT","Wits","UP"]
  },
  {
    id: "product-manager",
    field: "business",
    title: "Product Manager",
    description: "Defines product strategy, works with engineering and design teams to deliver customer value.",
    subjects: ["Business Studies","Mathematics"],
    skills: ["Roadmapping","User research","Stakeholder management"],
    salary: { entry: 240000, mid: 520000, senior: 1100000 },
    jobMarketSA: { demand: "High", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","UP"]
  },
  {
    id: "data-engineer",
    field: "it",
    title: "Data Engineer",
    description: "Builds and maintains data infrastructure and ETL pipelines to support analytics and ML.",
    subjects: ["Mathematics","Information Technology"],
    skills: ["SQL","ETL","Cloud data stacks"],
    salary: { entry: 220000, mid: 480000, senior: 950000 },
    jobMarketSA: { demand: "High", growth: "Fast", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UCT","Wits","UP"]
  },

  /* ---------------------------
     PROFESSIONAL & ENTREPRENEURSHIP
     --------------------------- */
  {
    id: "entrepreneur",
    field: "business",
    title: "Entrepreneur / Small Business Owner",
    description: "Starts and runs businesses, managing product, finance, operations and growth.",
    subjects: ["Business Studies"],
    skills: ["Risk management","Sales","Financial planning"],
    salary: { entry: 0, mid: 300000, senior: 1000000 },
    jobMarketSA: { demand: "Variable", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["Various business programmes"]
  },
  {
    id: "research-scientist",
    field: "science",
    title: "Research Scientist",
    description: "Conducts advanced scientific research in universities, industry or government labs.",
    subjects: ["Mathematics","Science"],
    skills: ["Research methods","Data analysis","Scientific writing"],
    salary: { entry: 200000, mid: 420000, senior: 900000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Wits","UP"]
  },

  /* ---------------------------
     ENERGY & UTILITIES
     --------------------------- */
  {
    id: "renewable-energy-engineer",
    field: "energy",
    title: "Renewable Energy Engineer",
    description: "Designs and implements renewable power systems such as solar and wind installations.",
    subjects: ["Mathematics","Physical Science"],
    skills: ["Power systems","PV design","Project management"],
    salary: { entry: 220000, mid: 420000, senior: 900000 },
    jobMarketSA: { demand: "Growing", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","Stellenbosch","UP"]
  },
  {
    id: "electrical-power-technician",
    field: "energy",
    title: "Electrical Power Technician",
    description: "Maintains and services electrical distribution equipment and supports grid reliability.",
    subjects: ["Mathematics","Technical Drawing"],
    skills: ["Electrical maintenance","Safety","Troubleshooting"],
    salary: { entry: 110000, mid: 220000, senior: 420000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },
  {
    id: "grid-operations-analyst",
    field: "energy",
    title: "Grid Operations Analyst",
    description: "Monitors power networks, forecasts demand and supports dispatch and outage management.",
    subjects: ["Mathematics","Information Technology"],
    skills: ["Data analysis","SCADA","Forecasting"],
    salary: { entry: 180000, mid: 360000, senior: 700000 },
    jobMarketSA: { demand: "Growing", growth: "Growing", popularCities: ["Johannesburg"] },
    universities: ["UCT","UP","Wits"]
  },

  /* ---------------------------
     TELECOMMUNICATIONS
     --------------------------- */
  {
    id: "rf-engineer",
    field: "telecoms",
    title: "RF Engineer",
    description: "Designs and optimises radio networks and cell coverage for mobile operators.",
    subjects: ["Mathematics","Information Technology"],
    skills: ["RF design","Drive testing","Network planning"],
    salary: { entry: 200000, mid: 420000, senior: 900000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "telecoms-field-technician",
    field: "telecoms",
    title: "Telecoms Field Technician",
    description: "Installs and maintains telecoms infrastructure such as towers, fibre and antennae.",
    subjects: ["Technical Drawing","Physical Science"],
    skills: ["Fibre splicing","Antenna installation","Site maintenance"],
    salary: { entry: 90000, mid: 180000, senior: 320000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Operator training"]
  },
  {
    id: "network-planner",
    field: "telecoms",
    title: "Network Planner",
    description: "Plans capacity and coverage for fixed and mobile networks to match customer demand.",
    subjects: ["Mathematics","Information Technology"],
    skills: ["Capacity planning","Data analysis","GIS"],
    salary: { entry: 180000, mid: 360000, senior: 700000 },
    jobMarketSA: { demand: "Growing", growth: "Growing", popularCities: ["Johannesburg"] },
    universities: ["UP","UCT","Wits"]
  },

  /* ---------------------------
     RETAIL & E-COMMERCE
     --------------------------- */
  {
    id: "store-manager",
    field: "retail",
    title: "Store Manager",
    description: "Oversees retail store operations, sales, staff and customer experience.",
    subjects: ["Business Studies","Mathematics"],
    skills: ["Retail operations","People management","P&L responsibility"],
    salary: { entry: 120000, mid: 300000, senior: 600000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Various business programmes","TVET Colleges"]
  },
  {
    id: "ecommerce-manager",
    field: "retail",
    title: "E-commerce Manager",
    description: "Manages online sales channels, digital marketing and order fulfilment operations.",
    subjects: ["Business Studies","Information Technology"],
    skills: ["E-commerce platforms","Digital marketing","Logistics coordination"],
    salary: { entry: 160000, mid: 360000, senior: 700000 },
    jobMarketSA: { demand: "Growing", growth: "Fast", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "merchandiser",
    field: "retail",
    title: "Merchandiser",
    description: "Plans product range, pricing and in-store/display presentation to maximise sales.",
    subjects: ["Business Studies"],
    skills: ["Product planning","Data analysis","Visual merchandising"],
    salary: { entry: 90000, mid: 200000, senior: 420000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Various business programmes"]
  },

  /* ---------------------------
     INSURANCE & RISK
     --------------------------- */
  {
    id: "actuary",
    field: "insurance",
    title: "Actuary",
    description: "Uses mathematics and statistics to assess financial risk and price insurance products.",
    subjects: ["Mathematics","Statistics"],
    skills: ["Modelling","Statistics","Financial analysis"],
    salary: { entry: 250000, mid: 520000, senior: 1200000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Johannesburg"] },
    universities: ["Wits","UCT","UP"]
  },
  {
    id: "underwriter",
    field: "insurance",
    title: "Underwriter",
    description: "Evaluates insurance applications, assesses risk and sets policy terms and pricing.",
    subjects: ["Mathematics","Business Studies"],
    skills: ["Risk assessment","Policy knowledge","Attention to detail"],
    salary: { entry: 140000, mid: 320000, senior: 650000 },
    jobMarketSA: { demand: "Medium-High", growth: "Stable", popularCities: ["Johannesburg"] },
    universities: ["Wits","UCT"]
  },
  {
    id: "claims-adjuster",
    field: "insurance",
    title: "Claims Adjuster",
    description: "Investigates insurance claims, assesses loss and authorises settlements.",
    subjects: ["Business Studies","English"],
    skills: ["Claims handling","Investigation","Customer service"],
    salary: { entry: 110000, mid: 220000, senior: 420000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Various short courses"]
  },

  /* ---------------------------
     REAL ESTATE & PROPERTY
     --------------------------- */
  {
    id: "estate-agent",
    field: "real-estate",
    title: "Estate Agent (Property Sales)",
    description: "Markets and sells residential and commercial properties, managing client relationships.",
    subjects: ["Business Studies"],
    skills: ["Sales","Negotiation","Property knowledge"],
    salary: { entry: 60000, mid: 200000, senior: 800000 },
    jobMarketSA: { demand: "High", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["RE/short courses","TVET Colleges"]
  },
  {
    id: "property-manager",
    field: "real-estate",
    title: "Property Manager",
    description: "Manages rental properties, tenant relations and maintenance operations.",
    subjects: ["Business Studies"],
    skills: ["Facilities management","Customer service","Budgeting"],
    salary: { entry: 100000, mid: 260000, senior: 520000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Various business programmes"]
  },
  {
    id: "valuer",
    field: "real-estate",
    title: "Property Valuer",
    description: "Assesses property values for sale, insurance and lending purposes using market data.",
    subjects: ["Mathematics","Economics"],
    skills: ["Valuation","Market analysis","Report writing"],
    salary: { entry: 120000, mid: 300000, senior: 700000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UCT","Wits","UP"]
  },

  /* ---------------------------
     CONSTRUCTION / BUILDING TRADES
     --------------------------- */
  {
    id: "site-manager",
    field: "construction",
    title: "Site Manager",
    description: "Oversees construction sites, schedules works and ensures safety and quality standards.",
    subjects: ["Mathematics","Technical Drawing"],
    skills: ["Project management","Health & safety","Scheduling"],
    salary: { entry: 180000, mid: 420000, senior: 900000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","UP","UCT"]
  },
  {
    id: "bricklayer",
    field: "construction",
    title: "Bricklayer",
    description: "Builds and repairs masonry structures including walls and foundations.",
    subjects: ["Technical Drawing"],
    skills: ["Masonry","Reading plans","Physical fitness"],
    salary: { entry: 90000, mid: 180000, senior: 320000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Apprenticeship programs","TVET Colleges"]
  },
  {
    id: "construction-foreman",
    field: "construction",
    title: "Construction Foreman",
    description: "Leads teams on site, coordinates trades and ensures daily progress of works.",
    subjects: ["Technical Drawing","Mathematics"],
    skills: ["Team leadership","Scheduling","Quality control"],
    salary: { entry: 120000, mid: 300000, senior: 600000 },
    jobMarketSA: { demand: "Medium-High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },

  /* ---------------------------
     AUTOMOTIVE & TRANSPORT MAINTENANCE
     --------------------------- */
  {
    id: "motor-mechanic",
    field: "automotive",
    title: "Motor Mechanic",
    description: "Diagnoses and repairs vehicle mechanical systems and performs servicing.",
    subjects: ["Technical Drawing","Physical Science"],
    skills: ["Engine diagnostics","Mechanical repair","Customer service"],
    salary: { entry: 90000, mid: 200000, senior: 420000 },
    jobMarketSA: { demand: "High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },
  {
    id: "automotive-electrician",
    field: "automotive",
    title: "Automotive Electrician",
    description: "Maintains and repairs vehicle electrical systems, diagnostics and wiring.",
    subjects: ["Information Technology","Physical Science"],
    skills: ["Electrical diagnostics","Wiring","ECU programming"],
    salary: { entry: 90000, mid: 200000, senior: 420000 },
    jobMarketSA: { demand: "Medium-High", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Apprenticeship programs"]
  },
  {
    id: "fleet-manager",
    field: "automotive",
    title: "Fleet Manager",
    description: "Manages fleets of vehicles, maintenance schedules and cost optimisation for operators.",
    subjects: ["Business Studies","Mathematics"],
    skills: ["Fleet planning","Logistics","Cost management"],
    salary: { entry: 140000, mid: 320000, senior: 700000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["Various business programmes"]
  },

  /* ---------------------------
     PUBLIC ADMINISTRATION & GOVERNMENT
     --------------------------- */
  {
    id: "policy-analyst",
    field: "public-services",
    title: "Policy Analyst",
    description: "Researches and develops public policy, evaluates programmes and advises government bodies.",
    subjects: ["Social Sciences","Economics"],
    skills: ["Policy analysis","Research","Stakeholder engagement"],
    salary: { entry: 150000, mid: 320000, senior: 700000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Pretoria","Cape Town"] },
    universities: ["UCT","UP","Wits"]
  },
  {
    id: "municipal-manager",
    field: "public-services",
    title: "Municipal Manager",
    description: "Oversees municipal operations, budgets and service delivery for local government.",
    subjects: ["Business Studies","Economics"],
    skills: ["Public administration","Budgeting","Leadership"],
    salary: { entry: 200000, mid: 420000, senior: 950000 },
    jobMarketSA: { demand: "Medium-High", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["UP","UCT"]
  },
  {
    id: "urban-planner",
    field: "public-services",
    title: "Urban Planner",
    description: "Plans land use, zoning and development to create sustainable urban environments.",
    subjects: ["Geography","Technical Drawing"],
    skills: ["GIS","Planning policy","Stakeholder consultation"],
    salary: { entry: 140000, mid: 320000, senior: 700000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Cape Town","Johannesburg"] },
    universities: ["UCT","UP","Wits"]
  },

  /* ---------------------------
     NON-PROFIT & COMMUNITY DEVELOPMENT
     --------------------------- */
  {
    id: "programme-manager",
    field: "non-profit",
    title: "Programme Manager",
    description: "Designs and manages development programmes, grants and field teams for NGOs.",
    subjects: ["Social Sciences","Business Studies"],
    skills: ["Project management","Monitoring & evaluation","Stakeholder engagement"],
    salary: { entry: 90000, mid: 240000, senior: 550000 },
    jobMarketSA: { demand: "Growing", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["UCT","Wits","Various development courses"]
  },
  {
    id: "fundraiser",
    field: "non-profit",
    title: "Fundraiser",
    description: "Secures funding through grants, donors and campaigns to support NGO programmes.",
    subjects: ["Business Studies","English"],
    skills: ["Grant writing","Relationship management","Communications"],
    salary: { entry: 60000, mid: 180000, senior: 420000 },
    jobMarketSA: { demand: "Medium", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["Various short courses"]
  },
  {
    id: "monitoring-evaluation-officer",
    field: "non-profit",
    title: "Monitoring & Evaluation Officer",
    description: "Tracks programme performance, collects data and produces evaluation reports for donors.",
    subjects: ["Statistics","Social Sciences"],
    skills: ["M&E frameworks","Data analysis","Reporting"],
    salary: { entry: 90000, mid: 220000, senior: 480000 },
    jobMarketSA: { demand: "Growing", growth: "Growing", popularCities: ["Nationwide"] },
    universities: ["UCT","UP","Wits"]
  },

  /* ---------------------------
     LEGAL SUPPORT & PARALEGAL
     --------------------------- */
  {
    id: "paralegal",
    field: "legal-support",
    title: "Paralegal",
    description: "Supports lawyers by preparing documents, conducting research and managing cases.",
    subjects: ["English","History"],
    skills: ["Legal research","Document drafting","Case management"],
    salary: { entry: 90000, mid: 200000, senior: 420000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Johannesburg","Cape Town"] },
    universities: ["UNISA","Short courses"]
  },
  {
    id: "legal-secretary",
    field: "legal-support",
    title: "Legal Secretary",
    description: "Provides administrative support to legal practices, managing correspondence and schedules.",
    subjects: ["English","Business Studies"],
    skills: ["Office administration","Legal procedures","Communication"],
    salary: { entry: 70000, mid: 160000, senior: 320000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["Short courses","TVET Colleges"]
  },
  {
    id: "court-clerk",
    field: "legal-support",
    title: "Court Clerk",
    description: "Manages court documentation, dockets and assists the judiciary with administrative tasks.",
    subjects: ["English","Social Sciences"],
    skills: ["Administration","Record keeping","Legal procedures"],
    salary: { entry: 70000, mid: 150000, senior: 300000 },
    jobMarketSA: { demand: "Medium", growth: "Stable", popularCities: ["Nationwide"] },
    universities: ["TVET Colleges","Short courses"]
  }
];
