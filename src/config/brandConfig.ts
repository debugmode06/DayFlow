export interface BrandConfig {
  companyName: string;
  productName: string;
  aiName: string;
  logoText: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  fortune500TrustText: string;
  darkSectionTitle: string;
  darkSectionHighlight: string;
  kanbanSectionTitle: string;
  kanbanSectionSubtitle: string;
  statsSectionTitle: string;
  statsSectionSubtitle: string;
  stats: {
    value: string;
    label: string;
  }[];
  testimonials: {
    id: string;
    company: string;
    companyLogoType: 'lendi' | 'reddit' | 'canva';
    quote: string;
    author: string;
    role: string;
    themeBg: string;
    portraitBg: string;
    portraitInitials: string;
    portraitName: string;
    storyLinkText: string;
  }[];
  finalCtaTitle: string;
  finalCtaHighlight: string;
  finalCtaSubtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export const dayflowBrand: BrandConfig = {
  companyName: "dayflow",
  productName: "Dayflow",
  aiName: "Dayflow Brain",
  logoText: "dayflow",
  tagline: "MAKE WORK FLOW",
  heroHeadline: "Make work flow effortlessly",
  heroSubheadline: "Bring your team, projects, docs, and AI agents together in one connected workspace.",
  fortune500TrustText: "85% of Fortune 500 companies power team collaboration with Dayflow",
  darkSectionTitle: "Dayflow for the AI era",
  darkSectionHighlight: "anywhere",
  kanbanSectionTitle: "Every team moves faster in Dayflow",
  kanbanSectionSubtitle: "Bring design, marketing, HR, operations, and engineering into one shared place to plan work, track progress, and move faster together.",
  statsSectionTitle: "Trusted by teams big and small",
  statsSectionSubtitle: "Teams of all types turn teamwork into results with Dayflow.",
  stats: [
    {
      value: "300,000+",
      label: "companies power team collaboration with Dayflow"
    },
    {
      value: "200+",
      label: "countries and territories have teams that use Dayflow"
    },
    {
      value: "85%",
      label: "of Fortune 500 enterprises deploy Dayflow workspaces"
    }
  ],
  testimonials: [
    {
      id: "lendi",
      company: "lendi group",
      companyLogoType: "lendi",
      quote: "Agents in Dayflow raise the floor for what every team can do. You don't need to be an engineer or an AI expert. If you work in Dayflow, you get access to the same agentic patterns and automations. That's the real power—capability becomes a property of the system, not just the individual.",
      author: "MATTHEW HARGREAVES",
      role: "Head of Product Delivery and Automation",
      themeBg: "#2563FF",
      portraitBg: "#dbeafe",
      portraitInitials: "MH",
      portraitName: "Matthew Hargreaves",
      storyLinkText: "Read Story →"
    },
    {
      id: "reddit",
      company: "reddit",
      companyLogoType: "reddit",
      quote: "Our whole dev pipeline and product planning runs through Dayflow. It's driving a lot of velocity across squads, and agents help bridge the gap between backlog ideas and committed pull requests.",
      author: "SPENCER CHEN",
      role: "VP of Engineering Operations",
      themeBg: "#3b5e28",
      portraitBg: "#dcfce7",
      portraitInitials: "SC",
      portraitName: "Spencer Chen",
      storyLinkText: "Read Story →"
    },
    {
      id: "canva",
      company: "Canva",
      companyLogoType: "canva",
      quote: "Unifying our design sprints and engineering handoffs cut sprint kick-off latency by 40%. With integrated agent capabilities, specifications flow seamlessly from wireframes to deployable code.",
      author: "ELENA ROSTOVA",
      role: "Head of Product Operations",
      themeBg: "#8B5CF6",
      portraitBg: "#ede9fe",
      portraitInitials: "ER",
      portraitName: "Elena Rostova",
      storyLinkText: "Read Story →"
    }
  ],
  finalCtaTitle: "Ship faster with ",
  finalCtaHighlight: "agents in Dayflow",
  finalCtaSubtitle: "Get started for free – no credit card required.",
  primaryCtaLabel: "Get Dayflow free",
  secondaryCtaLabel: "Get started for free →"
};

export const referenceJiraBrand: BrandConfig = {
  companyName: "Atlassian",
  productName: "Jira",
  aiName: "Rovo AI",
  logoText: "Jira",
  tagline: "TEAM PLAYBOOK",
  heroHeadline: "Turn plans into agent-ready tasks",
  heroSubheadline: "Then build. Orchestrate work across your team and agents, with complete context.",
  fortune500TrustText: "85% of Fortune 500 companies use Atlassian products",
  darkSectionTitle: "Jira for the AI era",
  darkSectionHighlight: "anywhere",
  kanbanSectionTitle: "Every team works better in Jira",
  kanbanSectionSubtitle: "Bring design, marketing, HR, operations, and engineering into one shared place to plan work, track progress, and move faster together.",
  statsSectionTitle: "Trusted by teams big and small",
  statsSectionSubtitle: "Teams of all types turn teamwork into results with Jira.",
  stats: dayflowBrand.stats,
  testimonials: dayflowBrand.testimonials,
  finalCtaTitle: "Ship faster with ",
  finalCtaHighlight: "agents in Jira",
  finalCtaSubtitle: "Get started for free – no credit card required.",
  primaryCtaLabel: "Get Jira free",
  secondaryCtaLabel: "Get started for free →"
};
