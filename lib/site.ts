// Single source of truth for the Sparrow Group site. Edit copy / contact details here.
export const SITE = {
  name: "Sparrow Group",
  domain: "sparrowgroup.com",
  tagline: "Design. Build. Retail. Learn.",
  since: 2016,
  // TODO: replace with real contact details
  email: "hello@sparrowgroup.com",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  address: "India",
};

export type Division = {
  slug: string;
  href: string;
  name: string;
  short: string;
  eyebrow: string;
  headline: string;
  description: string;
  icon: "pmc" | "retail" | "design" | "shopfits" | "academy";
  services: { title: string; text: string }[];
  process: { title: string; text: string }[];
  highlights: string[];
  image: string;
};

export const DIVISIONS: Division[] = [
  {
    slug: "design",
    href: "/design",
    name: "SS Interiors",
    short: "Design",
    eyebrow: "Interior Design · Since 2016",
    headline: "Spaces composed with intent.",
    description:
      "Residential, commercial and hospitality interiors — conceived by designers, detailed for execution and delivered with a finish that lasts.",
    icon: "design",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    services: [
      { title: "Residential Interiors", text: "Apartments, villas and penthouses designed around how you actually live." },
      { title: "Commercial & Office", text: "Workspaces that express brand, support teams and scale gracefully." },
      { title: "Hospitality", text: "Restaurants, cafés and boutique stays with memorable atmosphere." },
      { title: "3D Visualisation", text: "Photo-real renders and walkthroughs before a single brick moves." },
      { title: "Furniture & Styling", text: "Custom furniture, lighting, art and finishing touches." },
      { title: "Turnkey Delivery", text: "One accountable team from concept to handover." },
    ],
    process: [
      { title: "Discover", text: "Brief, site study, budget and lifestyle mapping." },
      { title: "Concept", text: "Mood, layouts and material palette." },
      { title: "Detail", text: "Working drawings, BOQ and specifications." },
      { title: "Deliver", text: "Site execution, quality checks and styling." },
    ],
    highlights: ["Concept to handover", "Custom joinery", "Transparent BOQ", "Dedicated project lead"],
  },
  {
    slug: "shopfits",
    href: "/shopfits",
    name: "Sparrow Shopfits",
    short: "Shopfits",
    eyebrow: "Retail Fit-outs & Execution",
    headline: "Stores built to sell — on time.",
    description:
      "Retail and commercial fit-out execution with disciplined site management, vendor control and rollout consistency across locations.",
    icon: "shopfits",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80",
    services: [
      { title: "Retail Fit-outs", text: "Flagships, shop-in-shops, kiosks and pop-ups." },
      { title: "Multi-store Rollouts", text: "Brand-consistent execution across cities." },
      { title: "Fixtures & Joinery", text: "In-house fabrication of display systems." },
      { title: "MEP & Lighting", text: "Electrical, HVAC and lighting designed for merchandising." },
      { title: "Branding & Signage", text: "Façades, signage and visual graphics." },
      { title: "Handover & Snagging", text: "Structured close-out with documentation." },
    ],
    process: [
      { title: "Survey", text: "Site audit and feasibility." },
      { title: "Plan", text: "Schedule, procurement and vendor lock-in." },
      { title: "Build", text: "Daily site control with progress reporting." },
      { title: "Launch", text: "Snag-free handover, ready to trade." },
    ],
    highlights: ["Fixed timelines", "In-house fabrication", "Pan-India vendors", "Weekly progress reports"],
  },
  {
    slug: "pmc",
    href: "/pmc",
    name: "Sparrow PMC",
    short: "PMC",
    eyebrow: "Project Management Consultancy",
    headline: "Control cost, time and quality.",
    description:
      "Independent project management for owners and brands — we represent your interests from feasibility to final handover.",
    icon: "pmc",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    services: [
      { title: "Pre-construction Planning", text: "Feasibility, budgeting and master scheduling." },
      { title: "Tendering & Procurement", text: "Competitive bids, negotiation and contract strategy." },
      { title: "Site Supervision", text: "On-ground quality and safety oversight." },
      { title: "Cost Control", text: "Budget tracking, variation and billing audit." },
      { title: "Quality Assurance", text: "Checklists, mock-ups and inspection protocols." },
      { title: "Reporting & Dashboards", text: "Clear, decision-ready project visibility." },
    ],
    process: [
      { title: "Define", text: "Scope, budget and milestones." },
      { title: "Procure", text: "Select the right contractors." },
      { title: "Monitor", text: "Track progress, cost and quality." },
      { title: "Close", text: "Handover, documentation, final accounts." },
    ],
    highlights: ["Owner-side representation", "Cost transparency", "Risk tracking", "Audit-ready records"],
  },
  {
    slug: "retail-intelligence",
    href: "/retail-intelligence",
    name: "Retail Intelligence",
    short: "Retail Intelligence",
    eyebrow: "Data-led Retail Strategy",
    headline: "Know your store before you build it.",
    description:
      "Location analysis, footfall insight and store-performance benchmarking that turn retail decisions into evidence.",
    icon: "retail",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    services: [
      { title: "Site & Catchment Analysis", text: "Evaluate locations on demand, access and competition." },
      { title: "Footfall & Conversion", text: "Understand how shoppers move and buy." },
      { title: "Store Layout Optimisation", text: "Plan-o-grams and zoning that lift sales per sq. ft." },
      { title: "Market Benchmarking", text: "Compare formats, rents and performance." },
      { title: "Expansion Planning", text: "Prioritise cities and clusters with confidence." },
      { title: "Performance Dashboards", text: "Live KPIs for every outlet." },
    ],
    process: [
      { title: "Collect", text: "Field and digital data gathering." },
      { title: "Analyse", text: "Models and benchmarks." },
      { title: "Recommend", text: "Actionable store strategy." },
      { title: "Track", text: "Measure impact post-launch." },
    ],
    highlights: ["Evidence over instinct", "Custom dashboards", "Format benchmarking", "Expansion roadmaps"],
  },
  {
    slug: "academy",
    href: "/academy",
    name: "Sparrow Academy",
    short: "Academy",
    eyebrow: "Training & Skill Development",
    headline: "Grow the people who build.",
    description:
      "Practical programmes in interior design, site execution, project management and retail — taught by working professionals.",
    icon: "academy",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    services: [
      { title: "Interior Design Programme", text: "From fundamentals to portfolio-ready projects." },
      { title: "Site Execution Training", text: "Hands-on supervision and quality skills." },
      { title: "Project Management", text: "Planning, costing and scheduling in practice." },
      { title: "Software Workshops", text: "AutoCAD, SketchUp, 3ds Max and rendering." },
      { title: "Retail Operations", text: "Store design, VM and performance basics." },
      { title: "Corporate Training", text: "Custom programmes for teams." },
    ],
    process: [
      { title: "Enrol", text: "Choose a track that fits your goal." },
      { title: "Learn", text: "Live sessions with industry mentors." },
      { title: "Build", text: "Real project assignments." },
      { title: "Launch", text: "Portfolio review and career support." },
    ],
    highlights: ["Industry mentors", "Live project work", "Portfolio support", "Small batches"],
  },
];

export const getDivision = (slug: string) => DIVISIONS.find((d) => d.slug === slug)!;

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
