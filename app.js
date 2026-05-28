const translations = {
  ro: {
    brandTitle: "MEU Timișoara 2027",
    brandSubtitle: "Organigrama echipei executive și operaționale",
    printLabel: "Print / PDF",
    eyebrow: "Model operațional 2027",
    pageTitle: "Organigrama MEU Timișoara 2027",
    pageLead:
      "O vedere clară asupra rolurilor, responsabilităților și liniilor de raportare pentru echipa de leadership.",
    searchLabel: "Caută rol sau persoană",
    unitLabel: "Directorat",
    showAllLabel: "Toate rolurile",
    clearLabel: "Resetare",
    mapEyebrow: "Linii de raportare",
    mapTitle: "Harta ierarhică",
    relationshipEyebrow: "Guvernanță",
    relationshipTitle: "Relații speciale și roluri cumulative",
    directoryEyebrow: "Fișe scurte de rol",
    directoryTitle: "Toate rolurile și responsabilitățile",
    allUnits: "Toate directoratele",
    reportsTo: "Raportează către",
    apex: "Vârful structurii",
    noReports: "Rol independent",
    people: "persoane",
    noResults: "Nu există roluri care corespund filtrului curent.",
    statRoles: "Roluri core",
    statHeads: "Heads",
    statUnits: "Unități",
    statDual: "Roluri cumulative",
    externalPortfolio: "Portofoliu extern",
    operationsPortfolio: "Portofoliu operațional",
    direct: "raportare directă",
    dotted: "linie punctată",
    resultsShown: "roluri afișate",
    searchActive: "rezultate",
    directLegend: "raportare directă",
    dottedLegend: "linie punctată / rol suport"
  },
  en: {
    brandTitle: "MEU Timișoara 2027",
    brandSubtitle: "Executive and operating team org chart",
    printLabel: "Print / PDF",
    eyebrow: "2027 operating model",
    pageTitle: "MEU Timișoara 2027 Organization Chart",
    pageLead:
      "A clear view of roles, responsibilities and reporting lines across the leadership team.",
    searchLabel: "Search role or person",
    unitLabel: "Unit",
    showAllLabel: "All roles",
    clearLabel: "Reset",
    mapEyebrow: "Reporting lines",
    mapTitle: "Hierarchy map",
    relationshipEyebrow: "Governance",
    relationshipTitle: "Special relationships and cumulative roles",
    directoryEyebrow: "Short role briefs",
    directoryTitle: "All roles and responsibilities",
    allUnits: "All units",
    reportsTo: "Reports to",
    apex: "Top of structure",
    noReports: "Independent role",
    people: "people",
    noResults: "No roles match the current filter.",
    statRoles: "Core roles",
    statHeads: "Heads",
    statUnits: "Units",
    statDual: "Cumulative roles",
    externalPortfolio: "External portfolio",
    operationsPortfolio: "Operations portfolio",
    direct: "direct reporting",
    dotted: "dotted line",
    resultsShown: "roles shown",
    searchActive: "results",
    directLegend: "direct reporting",
    dottedLegend: "dotted line / support role"
  }
};

const unitMeta = {
  executive: {
    color: "#2354c9",
    ro: {
      name: "Executive & Technology",
      description: "Conducere strategică, decizie finală și infrastructură digitală."
    },
    en: {
      name: "Executive & Technology",
      description: "Strategic leadership, final decision authority and digital infrastructure."
    }
  },
  logistics: {
    color: "#0f766e",
    ro: {
      name: "Logistică",
      description: "Livrare fizică, venue-uri, mobilitate, producție și protocol."
    },
    en: {
      name: "Logistics",
      description: "Physical delivery, venues, mobility, production and protocol."
    }
  },
  hr: {
    color: "#b45309",
    ro: {
      name: "Resurse Umane",
      description: "Oameni, selecție, participant journey, siguranță și cultură internă."
    },
    en: {
      name: "Human Resources",
      description: "People, selection, participant journey, safety and internal culture."
    }
  },
  communication: {
    color: "#be123c",
    ro: {
      name: "Comunicare, Imagine & Marketing Instituțional",
      description: "Reputație, social media, presă, conținut și storytelling vizual."
    },
    en: {
      name: "Communication, Image & Institutional Marketing",
      description: "Reputation, social media, press, content and visual storytelling."
    }
  },
  institutional: {
    color: "#6d28d9",
    ro: {
      name: "Suport Instituțional",
      description: "Relații europene și academice, endorsement-uri și parteneriate instituționale."
    },
    en: {
      name: "Institutional Support",
      description: "EU and academic relations, endorsements and institutional partnerships."
    }
  },
  fundraising: {
    color: "#0f5f8c",
    ro: {
      name: "Fundraising & Parteneriate",
      description: "Venituri, sponsori, granturi, alumni și donatori."
    },
    en: {
      name: "Fundraising & Partnerships",
      description: "Revenue, sponsors, grants, alumni and donors."
    }
  }
};

const roles = [
  {
    id: "dg",
    unit: "executive",
    level: "Executive",
    person: "Viorel Lambu",
    photo: "",
    reportsTo: null,
    title: { ro: "Director General", en: "Director General" },
    responsibilities: {
      ro: ["Direcție strategică și priorități", "Decizie finală pe buget, risc și criză", "Reprezentare la nivel instituțional"],
      en: ["Strategic direction and priorities", "Final call on budget, risk and crisis", "Top-level institutional representation"]
    }
  },
  {
    id: "ddg",
    unit: "executive",
    level: "Executive",
    person: "Paula Iovescu",
    photo: "",
    reportsTo: "Director General",
    title: { ro: "Director General Adjunct", en: "Deputy Director General" },
    responsibilities: {
      ro: ["Transformă strategia în operare", "Aliniază cei doi Project Managers", "Gestionează ritmul și escaladările"],
      en: ["Turns strategy into operations", "Aligns the two Project Managers", "Owns cadence and escalations"]
    }
  },
  {
    id: "pm-external",
    unit: "executive",
    level: "Project Manager",
    person: "Marina Petrescu",
    photo: "",
    reportsTo: "Director General Adjunct",
    title: { ro: "Project Manager 1 - Afaceri Externe", en: "Project Manager 1 - External Affairs" },
    responsibilities: {
      ro: ["Coordonează comunicarea, instituțiile și fundraising-ul", "Ține narațiunea externă unitară", "Supervizează sponsorii și stakeholderii"],
      en: ["Coordinates comms, institutions and fundraising", "Keeps one external narrative", "Oversees sponsors and stakeholders"]
    }
  },
  {
    id: "pm-operations",
    unit: "executive",
    level: "Project Manager",
    person: "Maysa Coman",
    photo: "",
    reportsTo: "Director General Adjunct",
    title: { ro: "Project Manager 2 - Operațiuni", en: "Project Manager 2 - Operations" },
    responsibilities: {
      ro: ["Coordonează HR și Logistica", "Asigură readiness-ul de eveniment", "Gestionează problemele on-ground"],
      en: ["Coordinates HR and Logistics", "Owns event-delivery readiness", "Handles on-ground issues"]
    }
  },
  {
    id: "cto",
    unit: "executive",
    level: "Director",
    person: "Andrei Tufiș",
    photo: "",
    reportsTo: "Director General",
    relation: "dotted",
    title: { ro: "Director Tehnologie (CTO)", en: "Chief Technology Officer" },
    responsibilities: {
      ro: ["Website, platforme și înregistrare", "Tech de eveniment și livestream", "GDPR tehnic și securitate"],
      en: ["Website, platforms and registration", "Event tech and livestream", "Technical GDPR and security"]
    }
  },
  {
    id: "dir-logistics",
    unit: "logistics",
    level: "Director",
    person: "Alexandru Butaru",
    photo: "",
    reportsTo: "Project Manager 2 - Operațiuni",
    title: { ro: "Director Logistică", en: "Director of Logistics" },
    responsibilities: {
      ro: ["Plan logistic end-to-end", "Vendori, buget și contracte", "Coordonare on-site în event week"],
      en: ["End-to-end logistics plan", "Vendors, budget and contracts", "On-site coordination during event week"]
    }
  },
  {
    id: "mobility",
    unit: "logistics",
    level: "Head",
    person: "Rareș Crăciun",
    photo: "",
    reportsTo: "Director Logistică",
    title: { ro: "Head Mobilitate & Cazare", en: "Head of Mobility & Accommodation" },
    responsibilities: {
      ro: ["Cazare și rooming list", "Transport local și shuttle-uri", "Planuri pentru întârzieri și urgențe"],
      en: ["Accommodation and rooming list", "Local transport and shuttles", "Delay and emergency plans"]
    }
  },
  {
    id: "event-production",
    unit: "logistics",
    level: "Head",
    person: "Tatiana Gulca",
    photo: "",
    reportsTo: "Director Logistică",
    title: { ro: "Head Producție Eveniment", en: "Head of Event Production" },
    responsibilities: {
      ro: ["Run-of-show și ceremonii", "Scenă, lumini, sunet și video", "Repetiții și tech checks"],
      en: ["Run-of-show and ceremonies", "Stage, lighting, sound and video", "Rehearsals and tech checks"]
    }
  },
  {
    id: "venues",
    unit: "logistics",
    level: "Head",
    person: "Patricia Dumitrean",
    photo: "",
    reportsTo: "Director Logistică",
    title: { ro: "Head Venue-uri & Hospitality", en: "Head of Venues & Hospitality" },
    responsibilities: {
      ro: ["Venue-uri și layout-uri", "Catering și cerințe alimentare", "Operare pe locație"],
      en: ["Venues and layouts", "Catering and dietary needs", "Venue-level operations"]
    }
  },
  {
    id: "materials",
    unit: "logistics",
    level: "Head",
    person: "Dariana Iovicescu",
    photo: "",
    reportsTo: "Director Logistică",
    title: { ro: "Head Producție & Materiale (Safe Person)", en: "Head of Production & Materials (Safe Person)" },
    responsibilities: {
      ro: ["Printuri, badge-uri și dosare", "Welcome kits și merch", "Stocare și distribuție"],
      en: ["Print, badges and dossiers", "Welcome kits and merchandise", "Storage and distribution"]
    }
  },
  {
    id: "protocol",
    unit: "logistics",
    level: "Head",
    person: "Danu Plămădeală",
    photo: "",
    reportsTo: "Director Logistică",
    title: { ro: "Head Protocol & Ceremonial", en: "Head of Protocol & Ceremonial Affairs" },
    responsibilities: {
      ro: ["Protocol pentru VIP și instituții", "Seating și ceremonii oficiale", "Cadouri și hospitality"],
      en: ["VIP and institutional protocol", "Seating and official ceremonies", "Gifts and hospitality"]
    }
  },
  {
    id: "dir-hr",
    unit: "hr",
    level: "Director",
    person: "Raluca Panainte",
    photo: "",
    reportsTo: "Project Manager 2 - Operațiuni",
    title: { ro: "Director Resurse Umane", en: "Director of Human Resources" },
    responsibilities: {
      ro: ["Strategie de oameni și staffing", "Cultură și wellbeing", "Participant journey și duty of care"],
      en: ["People strategy and staffing", "Culture and wellbeing", "Participant journey and duty of care"]
    }
  },
  {
    id: "simulation",
    unit: "hr",
    level: "Head",
    person: "Cristian Mocuța",
    photo: "",
    reportsTo: "Director Resurse Umane",
    title: { ro: "Head Program Simulare", en: "Head of Simulation Programme" },
    responsibilities: {
      ro: ["Structura comitetelor", "Recrutare și training chairs", "Study guides și calitate academică"],
      en: ["Committee structure", "Chair recruitment and training", "Study guides and academic quality"]
    }
  },
  {
    id: "recruitment",
    unit: "hr",
    level: "Head",
    person: "Darius Shahheydari",
    photo: "",
    reportsTo: "Director Resurse Umane",
    title: { ro: "Head Recrutare & Selecție", en: "Head of Recruitment & Selection" },
    responsibilities: {
      ro: ["Job descriptions și aplicații", "Screening și interviuri", "Comunicare cu candidații"],
      en: ["Job descriptions and applications", "Screening and interviews", "Candidate communications"]
    }
  },
  {
    id: "participants",
    unit: "hr",
    level: "Head",
    person: "Andreea Potorac + Director HR",
    photo: "",
    reportsTo: "Director Resurse Umane",
    title: { ro: "Head Participanți", en: "Head of Participants" },
    responsibilities: {
      ro: ["Experiența delegaților", "Nevoi speciale și check-in", "Support desk și alumni handoff"],
      en: ["Delegate experience", "Special needs and check-in", "Support desk and alumni handoff"]
    }
  },
  {
    id: "wellbeing",
    unit: "hr",
    level: "Head",
    person: "Luca Ciubotaru",
    photo: "",
    reportsTo: "Director Resurse Umane",
    title: { ro: "Head Wellbeing & Cultură Internă (Safe Person)", en: "Head of Wellbeing & Internal Culture (Safe Person)" },
    responsibilities: {
      ro: ["Ritualuri de cultură internă", "Check-in-uri de wellbeing", "Onboarding și offboarding"],
      en: ["Internal culture rituals", "Wellbeing check-ins", "Onboarding and offboarding"]
    }
  },
  {
    id: "risk",
    unit: "hr",
    level: "Head",
    person: "Karina Lupaș",
    photo: "",
    reportsTo: "Director Resurse Umane",
    title: { ro: "Head Risk & Safety Management", en: "Head of Risk & Safety Management" },
    responsibilities: {
      ro: ["Registru de risc", "Protocoale de siguranță", "Incident response și post-mortem"],
      en: ["Risk register", "Safety protocols", "Incident response and post-mortem"]
    }
  },
  {
    id: "legal",
    unit: "hr",
    level: "Head",
    person: "Raluca Ciucuriță",
    photo: "",
    reportsTo: "Director Resurse Umane",
    title: { ro: "Head Juridic & Compliance", en: "Head of Legal Affairs & Compliance" },
    responsibilities: {
      ro: ["Contracte și review juridic", "GDPR și asigurări", "Managementul riscurilor legale"],
      en: ["Contracts and legal review", "GDPR and insurance", "Legal risk management"]
    }
  },
  {
    id: "dir-communication",
    unit: "communication",
    level: "Director",
    person: "Alessia Caragea",
    photo: "",
    reportsTo: "Project Manager 1 - Afaceri Externe",
    title: {
      ro: "Director Comunicare, Imagine & Marketing Instituțional",
      en: "Director of Communication, Image & Institutional Marketing"
    },
    responsibilities: {
      ro: ["Strategie de comunicare și brand", "Calitate pe toate canalele", "Coordonare presă, social și storytelling"],
      en: ["Comms and brand strategy", "Quality across every channel", "Coordinates press, social and storytelling"]
    }
  },
  {
    id: "public-affairs",
    unit: "communication",
    level: "Head",
    person: "George Ropotă",
    photo: "",
    reportsTo: "Director Comunicare",
    title: { ro: "Head Comunicații & Public Affairs", en: "Head of Communications & Public Affairs" },
    responsibilities: {
      ro: ["Comunicate și media briefings", "Mesaje oficiale și talking points", "Monitorizare presă"],
      en: ["Press releases and media briefings", "Official messages and talking points", "Media monitoring"]
    }
  },
  {
    id: "social-media",
    unit: "communication",
    level: "Head",
    person: "Nicoleta Voina",
    photo: "",
    reportsTo: "Director Comunicare",
    title: { ro: "Head Social Media & Strategie Digitală", en: "Head of Social Media & Digital Strategy" },
    responsibilities: {
      ro: ["Strategie pe platforme", "Calendar editorial și community", "Analytics și optimizare"],
      en: ["Platform strategy", "Editorial calendar and community", "Analytics and optimization"]
    }
  },
  {
    id: "vertical-video",
    unit: "communication",
    level: "Head",
    person: "Melissa Sturza",
    photo: "",
    reportsTo: "Director Comunicare",
    title: { ro: "Head Producție Video Vertical & Post-Producție", en: "Head of Vertical Video Production & Post-Production" },
    responsibilities: {
      ro: ["Filmări vertical-first", "Editare rapidă pentru Reels/TikTok", "Hook-uri, captions și retention"],
      en: ["Vertical-first filming", "Rapid edits for Reels/TikTok", "Hooks, captions and retention"]
    }
  },
  {
    id: "trend-intel",
    unit: "communication",
    level: "Head",
    person: "Sara Manea",
    photo: "",
    reportsTo: "Director Comunicare",
    title: { ro: "Head Cultura Platformelor & Trend Intelligence", en: "Head of Platform Culture & Trend Intelligence" },
    responsibilities: {
      ro: ["Monitorizare TikTok/Reels", "Bancă de formate și sound-uri", "Filtru de brand safety"],
      en: ["TikTok/Reels monitoring", "Format and sound bank", "Brand-safety filter"]
    }
  },
  {
    id: "creator-partnerships",
    unit: "communication",
    level: "Head",
    person: "Anda Pașca",
    photo: "",
    reportsTo: "Director Comunicare",
    title: { ro: "Head Creator Partnerships & Amplificare Socială", en: "Head of Creator Partnerships & Social Amplification" },
    responsibilities: {
      ro: ["Creator outreach și ambasadori", "UGC briefs și colectare", "Amplificare prin parteneri"],
      en: ["Creator outreach and ambassadors", "UGC briefs and collection", "Partner-led amplification"]
    }
  },
  {
    id: "visual-storytelling",
    unit: "communication",
    level: "Head",
    person: "George Ropotă",
    photo: "",
    reportsTo: "Director Comunicare",
    title: { ro: "Head Storytelling Vizual", en: "Head of Visual Storytelling" },
    responsibilities: {
      ro: ["Shot lists foto-video", "Acoperire on-site", "Arhivă vizuală și aftermovie"],
      en: ["Photo-video shot lists", "On-site coverage", "Visual archive and aftermovie"]
    }
  },
  {
    id: "eu-affairs",
    unit: "institutional",
    level: "Head",
    person: "Viorel Lambu",
    photo: "",
    reportsTo: "Project Manager 1 - Afaceri Externe",
    title: { ro: "Head Afaceri Instituționale UE", en: "Head of EU Institutional Affairs" },
    responsibilities: {
      ro: ["Relații cu instituțiile UE", "Invitații MEP și endorsement-uri", "Delegații și calendar instituțional"],
      en: ["EU institutional relations", "MEP invitations and endorsements", "Delegations and institutional calendar"]
    }
  },
  {
    id: "academic-affairs",
    unit: "institutional",
    level: "Head",
    person: "Andrei Tufiș",
    photo: "",
    reportsTo: "Project Manager 1 - Afaceri Externe",
    title: { ro: "Head Academic Affairs (Safe Person)", en: "Head of Academic Affairs (Safe Person)" },
    responsibilities: {
      ro: ["Parteneriate universitare", "Advisors academici", "Recunoaștere credite și outreach"],
      en: ["University partnerships", "Academic advisors", "Credit recognition and outreach"]
    }
  },
  {
    id: "dir-fundraising",
    unit: "fundraising",
    level: "Director",
    person: "Cristiana Ozon",
    photo: "",
    reportsTo: "Project Manager 1 - Afaceri Externe",
    title: { ro: "Director Fundraising & Parteneriate", en: "Director of Fundraising & Partnerships" },
    responsibilities: {
      ro: ["Strategie de venituri", "Portofoliu sponsori și beneficii", "Parteneriate cash și in-kind"],
      en: ["Revenue strategy", "Sponsor portfolio and benefits", "Cash and in-kind partnerships"]
    }
  },
  {
    id: "fundraising-am",
    unit: "fundraising",
    level: "Assistant Manager",
    person: "Alexia Rain",
    photo: "",
    reportsTo: "Director Fundraising",
    title: { ro: "Assistant Manager Fundraising", en: "Assistant Manager (Fundraising)" },
    responsibilities: {
      ro: ["CRM și pipeline sponsori", "Brief-uri și minute de meeting", "Admin sponsor-facing"],
      en: ["Sponsor CRM and pipeline", "Meeting briefs and minutes", "Sponsor-facing admin"]
    }
  },
  {
    id: "corporate-sponsorships",
    unit: "fundraising",
    level: "Head",
    person: "Viorel Lambu",
    photo: "",
    reportsTo: "Director Fundraising",
    title: { ro: "Head Sponsorizări Corporate", en: "Head of Corporate Sponsorships" },
    responsibilities: {
      ro: ["Prospectare companii", "Negociere și contracte", "Activări și fulfilment sponsor"],
      en: ["Corporate prospecting", "Negotiations and contracts", "Sponsor activations and fulfilment"]
    }
  },
  {
    id: "grants",
    unit: "fundraising",
    level: "Head",
    person: "Viorel Lambu",
    photo: "",
    reportsTo: "Director Fundraising",
    title: { ro: "Head Granturi UE & Instituționale", en: "Head of EU & Institutional Grants" },
    responsibilities: {
      ro: ["Pipeline de granturi", "Scriere aplicații și bugete", "Raportare către finanțatori"],
      en: ["Grant pipeline", "Application and budget writing", "Funder reporting"]
    }
  },
  {
    id: "alumni",
    unit: "fundraising",
    level: "Head",
    person: "Viorel Lambu",
    photo: "",
    reportsTo: "Director Fundraising",
    title: { ro: "Head Alumni & Donor Relations", en: "Head of Alumni & Donor Relations" },
    responsibilities: {
      ro: ["Bază alumni și comunicare", "Cultivare donatori", "Stewardship și recunoaștere"],
      en: ["Alumni database and comms", "Donor cultivation", "Stewardship and recognition"]
    }
  }
];

const relationships = [
  {
    unit: "executive",
    title: {
      ro: "CTO cu raportare directă la DG",
      en: "CTO with direct reporting to DG"
    },
    body: {
      ro: "Tehnologia rămâne executive-adjacent: CTO raportează direct la Directorul General și lucrează strâns cu Operațiunile pentru event-day tech.",
      en: "Technology remains executive-adjacent: the CTO reports directly to the Director General and works closely with Operations for event-day tech."
    }
  },
  {
    unit: "communication",
    title: {
      ro: "George Ropotă - rol dual editorial",
      en: "George Ropotă - dual editorial role"
    },
    body: {
      ro: "Comunicațiile oficiale și storytelling-ul vizual au aceeași coloană editorială, utilă pentru coerența între presă, arhivă și conținut public.",
      en: "Official communications and visual storytelling share one editorial spine, keeping press, archive and public content coherent."
    }
  },
  {
    unit: "fundraising",
    title: {
      ro: "Viorel Lambu - portofoliu strategic multiplu",
      en: "Viorel Lambu - multiple strategic portfolio"
    },
    body: {
      ro: "Rolurile cumulate pe EU affairs, sponsorizări, granturi și alumni sunt tratate ca ownership strategic, cu execuție coordonată prin PM1 și Fundraising.",
      en: "The combined EU affairs, sponsorship, grants and alumni roles are treated as strategic ownership, coordinated through PM1 and Fundraising."
    }
  },
  {
    unit: "institutional",
    title: {
      ro: "Brand governance la nivel de Director Communication",
      en: "Brand governance at Director Communication level"
    },
    body: {
      ro: "Fără rol separat de Brand Head, standardele vizuale și aprobările de brand rămân la Directorul de Comunicare, cu handoff către Logistică și Producție.",
      en: "With no separate Brand Head, visual standards and brand approvals stay with the Communication Director, with handoff to Logistics and Production."
    }
  }
];

const hierarchy = {
  root: "dg",
  executive: ["cto", "ddg"],
  portfolios: [
    {
      key: "external",
      manager: "pm-external",
      units: [
        { unit: "communication", director: "dir-communication", heads: ["public-affairs", "social-media", "vertical-video", "trend-intel", "creator-partnerships", "visual-storytelling"], className: "communication-lane" },
        { unit: "institutional", director: null, heads: ["eu-affairs", "academic-affairs"], className: "support-lane" },
        { unit: "fundraising", director: "dir-fundraising", heads: ["fundraising-am", "corporate-sponsorships", "grants", "alumni"], className: "fundraising-lane" }
      ]
    },
    {
      key: "operations",
      manager: "pm-operations",
      units: [
        { unit: "hr", director: "dir-hr", heads: ["simulation", "recruitment", "participants", "wellbeing", "risk", "legal"], className: "hr-lane" },
        { unit: "logistics", director: "dir-logistics", heads: ["mobility", "event-production", "venues", "materials", "protocol"], className: "logistics-lane" }
      ]
    }
  ]
};

const orgEdges = [
  { parent: "dg", child: "ddg", type: "direct" },
  { parent: "dg", child: "cto", type: "dotted" },
  { parent: "ddg", child: "pm-external", type: "direct" },
  { parent: "ddg", child: "pm-operations", type: "direct" },
  { parent: "pm-external", child: "dir-communication", type: "direct" },
  { parent: "pm-external", child: "eu-affairs", type: "direct" },
  { parent: "pm-external", child: "academic-affairs", type: "direct" },
  { parent: "pm-external", child: "dir-fundraising", type: "direct" },
  { parent: "pm-operations", child: "dir-hr", type: "direct" },
  { parent: "pm-operations", child: "dir-logistics", type: "direct" },
  { parent: "dir-communication", child: "public-affairs", type: "direct" },
  { parent: "dir-communication", child: "social-media", type: "direct" },
  { parent: "dir-communication", child: "vertical-video", type: "direct" },
  { parent: "dir-communication", child: "trend-intel", type: "direct" },
  { parent: "dir-communication", child: "creator-partnerships", type: "direct" },
  { parent: "dir-communication", child: "visual-storytelling", type: "direct" },
  { parent: "dir-fundraising", child: "fundraising-am", type: "support" },
  { parent: "dir-fundraising", child: "corporate-sponsorships", type: "direct" },
  { parent: "dir-fundraising", child: "grants", type: "direct" },
  { parent: "dir-fundraising", child: "alumni", type: "direct" },
  { parent: "dir-hr", child: "simulation", type: "direct" },
  { parent: "dir-hr", child: "recruitment", type: "direct" },
  { parent: "dir-hr", child: "participants", type: "direct" },
  { parent: "dir-hr", child: "wellbeing", type: "direct" },
  { parent: "dir-hr", child: "risk", type: "direct" },
  { parent: "dir-hr", child: "legal", type: "direct" },
  { parent: "dir-logistics", child: "mobility", type: "direct" },
  { parent: "dir-logistics", child: "event-production", type: "direct" },
  { parent: "dir-logistics", child: "venues", type: "direct" },
  { parent: "dir-logistics", child: "materials", type: "direct" },
  { parent: "dir-logistics", child: "protocol", type: "direct" }
];

const initialParams = new URLSearchParams(window.location.search);
let currentLanguage = "ro";
let currentUnit = initialParams.get("unit") || "all";
let currentSearch = initialParams.get("q") || "";

const byId = Object.fromEntries(roles.map((role) => [role.id, role]));
const parentByChild = Object.fromEntries(orgEdges.map((edge) => [edge.child, edge.parent]));

const text = (value) => {
  if (typeof value === "string") return value;
  return value[currentLanguage] || value.ro || value.en || "";
};

const normalize = (value) =>
  value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const initials = (name) =>
  name
    .replace(/\+.*$/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const roleSearchText = (role) =>
  normalize(
    [
      role.person,
      role.level,
      role.title.ro,
      role.title.en,
      unitMeta[role.unit].ro.name,
      unitMeta[role.unit].en.name,
      role.reportsTo || "",
      ...role.responsibilities.ro,
      ...role.responsibilities.en
    ].join(" ")
  );

const roleMatchesFilters = (role, query) => {
  const unitMatches = currentUnit === "all" || role.unit === currentUnit;
  const queryMatches = !query || roleSearchText(role).includes(query);
  return unitMatches && queryMatches;
};

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[currentLanguage][key];
  });
  document.getElementById("languageSwitch").setAttribute("aria-pressed", currentLanguage === "en");
  document.getElementById("searchInput").placeholder = currentLanguage === "ro" ? "ex. Logistică, George, CTO" : "ex. Logistics, George, CTO";
  document.getElementById("searchInput").value = currentSearch;
}

function renderStats() {
  const stats = [
    [translations[currentLanguage].statRoles, roles.length],
    [translations[currentLanguage].statHeads, roles.filter((role) => role.level === "Head").length],
    [translations[currentLanguage].statUnits, Object.keys(unitMeta).length],
    [translations[currentLanguage].statDual, "3"]
  ];

  document.getElementById("statsGrid").innerHTML = stats
    .map(([label, value]) => `<div class="stat"><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function renderFilters() {
  const select = document.getElementById("unitFilter");
  select.innerHTML = [
    `<option value="all">${translations[currentLanguage].allUnits}</option>`,
    ...Object.entries(unitMeta).map(([key, meta]) => `<option value="${key}">${meta[currentLanguage].name}</option>`)
  ].join("");
  select.value = currentUnit;
}

function photoMarkup(role, compact = false) {
  const label = role.photo ? text(role.title) : initials(role.person) || (currentLanguage === "ro" ? "Foto" : "Photo");
  return `<div class="photo-slot${compact ? " compact" : ""}">${role.photo ? `<img src="${role.photo}" alt="${role.person}" />` : `<span>${label}</span>`}</div>`;
}

function orgCard(roleId, options = {}) {
  const role = byId[roleId];
  const meta = unitMeta[role.unit];
  const classes = ["org-card", options.small ? "small" : "", options.compact ? "compact" : "", role.relation === "dotted" ? "is-dotted" : ""]
    .filter(Boolean)
    .join(" ");
  const reports = role.reportsTo ? `${translations[currentLanguage].reportsTo}: ${role.reportsTo}` : translations[currentLanguage].apex;

  return `
    <article class="${classes}" style="--unit-color: ${meta.color}" data-role-id="${role.id}" data-unit="${role.unit}" data-search="${roleSearchText(role)}">
      ${options.compact ? "" : photoMarkup(role, true)}
      <div>
        <h4>${text(role.title)}</h4>
        <p>${role.person}</p>
        <span class="role-level">${role.level}</span>
        <p class="report-line">${reports}</p>
      </div>
    </article>
  `;
}

function unitLane(config) {
  const meta = unitMeta[config.unit];
  const director = config.director ? `<div class="unit-head">${orgCard(config.director, { small: true })}</div>` : "";
  const reportingNote = config.director
    ? currentLanguage === "ro"
      ? "Heads raportează către directorul de mai sus"
      : "Heads report to the director above"
    : currentLanguage === "ro"
      ? "Heads raportează direct către Project Manager 1"
      : "Heads report directly to Project Manager 1";
  return `
    <section class="unit-lane ${config.className} ${config.director ? "has-director" : "direct-to-pm"}" style="--unit-color: ${meta.color}" data-unit="${config.unit}">
      <h3>${meta[currentLanguage].name}</h3>
      ${director}
      <p class="unit-reporting-note">${reportingNote}</p>
      <div class="head-grid">
        ${config.heads.map((id) => orgCard(id, { small: true, compact: true })).join("")}
      </div>
    </section>
  `;
}

function renderOrgMap() {
  const externalLabel = translations[currentLanguage].externalPortfolio;
  const operationsLabel = translations[currentLanguage].operationsPortfolio;
  const canvas = `
    <div class="org-canvas clean-org">
      <div class="tree-root">
        <div class="tree-node apex-node">${orgCard(hierarchy.root)}</div>

        <div class="tree-children dg-children">
          <div class="tree-child ddg-branch">
            ${orgCard("ddg")}

            <div class="tree-children portfolio-children">
              ${hierarchy.portfolios
                .map((portfolio) => {
                  const label = portfolio.key === "external" ? externalLabel : operationsLabel;
                  return `
                    <div class="tree-child portfolio">
                      <div class="portfolio-title">
                        <span class="unit-count">${label}</span>
                        ${orgCard(portfolio.manager)}
                      </div>
                      <div class="unit-lanes">
                        ${portfolio.units.map(unitLane).join("")}
                      </div>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>

          <div class="tree-child dotted-child cto-branch">
            ${orgCard("cto")}
            <span class="connection-pill">${currentLanguage === "ro" ? "linie punctată către DG" : "dotted line to DG"}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById("orgMap").innerHTML = canvas;
}

function renderRelationships() {
  document.getElementById("relationshipGrid").innerHTML = relationships
    .map((item) => {
      const meta = unitMeta[item.unit];
      return `
        <article class="relationship-card" style="--unit-color: ${meta.color}">
          <h3>${text(item.title)}</h3>
          <p>${text(item.body)}</p>
        </article>
      `;
    })
    .join("");
}

function drawOrgConnectors() {
  const canvas = document.querySelector(".org-canvas");
  const svg = document.getElementById("connectorLayer");
  if (!canvas || !svg) return;

  const canvasRect = canvas.getBoundingClientRect();
  const width = Math.max(canvas.scrollWidth, canvasRect.width);
  const height = Math.max(canvas.scrollHeight, canvasRect.height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  const pathMarkup = orgEdges
    .map((edge) => {
      const parent = canvas.querySelector(`[data-role-id="${edge.parent}"]`);
      const child = canvas.querySelector(`[data-role-id="${edge.child}"]`);
      if (!parent || !child) return "";

      const parentRect = parent.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const startX = parentRect.left + parentRect.width / 2 - canvasRect.left;
      const startY = parentRect.bottom - canvasRect.top + 4;
      const endX = childRect.left + childRect.width / 2 - canvasRect.left;
      const endY = childRect.top - canvasRect.top - 6;
      const gap = Math.max(22, Math.min(72, (endY - startY) * 0.48));
      const midY = startY + gap;
      const path = `M ${startX} ${startY} V ${midY} H ${endX} V ${endY}`;

      return `<path class="connector-path connector-${edge.type}" data-parent="${edge.parent}" data-child="${edge.child}" d="${path}" marker-end="url(#arrowhead)" />`;
    })
    .join("");

  svg.innerHTML = `
    <defs>
      <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7a99"></path>
      </marker>
    </defs>
    ${pathMarkup}
  `;

  updateOrgSearchState();
}

function personCard(role) {
  const template = document.getElementById("personCardTemplate");
  const card = template.content.firstElementChild.cloneNode(true);
  const meta = unitMeta[role.unit];
  card.style.setProperty("--unit-color", meta.color);
  card.dataset.unit = role.unit;
  card.dataset.roleId = role.id;
  card.dataset.search = roleSearchText(role);

  const slot = card.querySelector(".photo-slot");
  slot.innerHTML = role.photo ? `<img src="${role.photo}" alt="${role.person}" />` : `<span>${initials(role.person) || "Foto"}</span>`;

  card.querySelector(".unit-kicker").textContent = `${meta[currentLanguage].name} · ${role.level}`;
  card.querySelector("h3").textContent = text(role.title);
  card.querySelector(".person-name").textContent = role.person;
  card.querySelector(".reports-line").textContent = `${translations[currentLanguage].reportsTo}: ${role.reportsTo || translations[currentLanguage].apex}`;
  card.querySelector(".responsibility-list").innerHTML = role.responsibilities[currentLanguage].map((item) => `<li>${item}</li>`).join("");

  return card;
}

function getContextIds(matchingIds) {
  const contextIds = new Set();
  matchingIds.forEach((id) => {
    let parent = parentByChild[id];
    while (parent) {
      contextIds.add(parent);
      parent = parentByChild[parent];
    }
  });
  return contextIds;
}

function updateOrgSearchState(matchingIds = null) {
  const query = normalize(currentSearch);
  const active = Boolean(query) || currentUnit !== "all";
  const matches = matchingIds || new Set(roles.filter((role) => roleMatchesFilters(role, query)).map((role) => role.id));
  const contextIds = getContextIds(matches);

  document.querySelectorAll(".org-card").forEach((card) => {
    const id = card.dataset.roleId;
    const isMatch = matches.has(id);
    const isContext = contextIds.has(id);
    card.classList.toggle("is-match", active && isMatch);
    card.classList.toggle("is-context", active && !isMatch && isContext);
    card.classList.toggle("is-dim", active && !isMatch && !isContext);
  });

  document.querySelectorAll(".connector-path").forEach((path) => {
    const parent = path.dataset.parent;
    const child = path.dataset.child;
    const connectsMatch = matches.has(parent) || matches.has(child);
    const connectsContext = contextIds.has(parent) || contextIds.has(child);
    path.classList.toggle("is-highlight", active && connectsMatch);
    path.classList.toggle("is-context", active && !connectsMatch && connectsContext);
    path.classList.toggle("is-muted", active && !connectsMatch && !connectsContext);
  });
}

function renderDirectory() {
  const directory = document.getElementById("directory");
  directory.innerHTML = "";

  Object.entries(unitMeta).forEach(([unitKey, meta]) => {
    const unitRoles = roles.filter((role) => role.unit === unitKey);
    const section = document.createElement("section");
    section.className = "unit-section";
    section.style.setProperty("--unit-color", meta.color);
    section.dataset.unit = unitKey;
    section.innerHTML = `
      <div class="unit-header">
        <div>
          <h3>${meta[currentLanguage].name}</h3>
          <p>${meta[currentLanguage].description}</p>
        </div>
        <span class="unit-count">${unitRoles.length} ${translations[currentLanguage].people}</span>
      </div>
      <div class="role-grid"></div>
    `;

    const grid = section.querySelector(".role-grid");
    unitRoles.forEach((role) => grid.appendChild(personCard(role)));
    directory.appendChild(section);
  });

  applyFilters();
}

function applyFilters() {
  const query = normalize(currentSearch);
  const matchingIds = new Set(roles.filter((role) => roleMatchesFilters(role, query)).map((role) => role.id));
  let visibleCount = 0;

  document.querySelectorAll(".person-card").forEach((card) => {
    const visible = matchingIds.has(card.dataset.roleId);
    card.classList.toggle("is-hidden", !visible);
    if (visible) visibleCount += 1;
  });

  document.querySelectorAll(".unit-section").forEach((section) => {
    const hasVisibleCards = section.querySelectorAll(".person-card:not(.is-hidden)").length > 0;
    section.classList.toggle("is-hidden", !hasVisibleCards);
  });

  let empty = document.querySelector(".empty-state");
  if (!visibleCount) {
    if (!empty) {
      empty = document.createElement("p");
      empty.className = "empty-state";
      document.getElementById("directory").appendChild(empty);
    }
    empty.textContent = translations[currentLanguage].noResults;
  } else if (empty) {
    empty.remove();
  }

  updateOrgSearchState(matchingIds);

  const active = Boolean(query) || currentUnit !== "all";
  const status = document.getElementById("searchStatus");
  if (status) {
    status.textContent = `${visibleCount} ${active ? translations[currentLanguage].searchActive : translations[currentLanguage].resultsShown}`;
  }
}

function rerender() {
  applyTranslations();
  renderStats();
  renderFilters();
  renderOrgMap();
  renderRelationships();
  renderDirectory();
}

document.getElementById("languageSwitch").addEventListener("click", () => {
  currentLanguage = currentLanguage === "ro" ? "en" : "ro";
  rerender();
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  currentSearch = event.target.value;
  applyFilters();
});

document.getElementById("unitFilter").addEventListener("change", (event) => {
  currentUnit = event.target.value;
  applyFilters();
});

document.getElementById("clearFiltersButton").addEventListener("click", () => {
  currentUnit = "all";
  currentSearch = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("unitFilter").value = "all";
  applyFilters();
});

document.getElementById("showAllButton").addEventListener("click", () => {
  document.getElementById("org-map").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("printButton").addEventListener("click", () => window.print());

window.addEventListener("resize", () => {
  window.clearTimeout(window.__orgConnectorTimer);
  window.__orgConnectorTimer = window.setTimeout(drawOrgConnectors, 120);
});

window.meuOrgChart = {
  redraw: drawOrgConnectors,
  setSearch(value) {
    currentSearch = value;
    document.getElementById("searchInput").value = value;
    applyFilters();
  },
  setUnit(value) {
    currentUnit = value;
    document.getElementById("unitFilter").value = value;
    applyFilters();
  }
};

rerender();
