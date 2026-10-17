export interface DayflowApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  iconBg: string;
  category: string;
  badge?: string;
  link: string;
}

export interface DayflowCollection {
  id: string;
  name: string;
  description: string;
  products: string;
  link?: string;
}

export interface AudienceCategory {
  id: string;
  name: string;
  headline: string;
  appIds: string[];
  collectionIds: string[];
}

export const DAYFLOW_APPS: Record<string, DayflowApp> = {
  miraz: {
    id: 'miraz',
    name: 'Miraz',
    tagline: 'Flexible project & software management',
    description: 'Project and software management.',
    accentColor: '#2563FF',
    iconBg: 'bg-[#2563FF]',
    category: 'Project Management',
    link: '#product-showcase'
  },
  vanta: {
    id: 'vanta',
    name: 'Vanta',
    tagline: 'Next-gen enterprise resource planning',
    description: 'Enterprise resource planning.',
    accentColor: '#0D9488',
    iconBg: 'bg-[#0D9488]',
    category: 'Enterprise Planning',
    link: '#features-grid'
  },
  relio: {
    id: 'relio',
    name: 'Relio',
    tagline: 'Modern customer relationship management',
    description: 'Customer relationship management.',
    accentColor: '#F97316',
    iconBg: 'bg-[#F97316]',
    category: 'Customer CRM',
    link: '#features-grid'
  },
  huma: {
    id: 'huma',
    name: 'Huma',
    tagline: 'Human resources and people operations',
    description: 'Human resources and people operations.',
    accentColor: '#8B5CF6',
    iconBg: 'bg-[#8B5CF6]',
    category: 'People & HR',
    link: '#features-grid'
  },
  prism: {
    id: 'prism',
    name: 'Prism',
    tagline: 'Business intelligence and analytics',
    description: 'Business intelligence and analytics.',
    accentColor: '#4F46E5',
    iconBg: 'bg-[#4F46E5]',
    category: 'BI & Analytics',
    link: '#features-grid'
  },
  assist: {
    id: 'assist',
    name: 'Assist',
    tagline: 'Customer support and service desk',
    description: 'Customer support and service desk.',
    accentColor: '#EAB308',
    iconBg: 'bg-[#EAB308]',
    category: 'Support & Service Desk',
    link: '#features-grid'
  },
  payra: {
    id: 'payra',
    name: 'Payra',
    tagline: 'Payroll and compensation automation',
    description: 'Payroll and compensation.',
    accentColor: '#16A34A',
    iconBg: 'bg-[#16A34A]',
    category: 'Finance & Payroll',
    link: '#features-grid'
  },
  flowdesk: {
    id: 'flowdesk',
    name: 'Flowdesk',
    tagline: 'Workflow automation and approvals',
    description: 'Workflow automation and approvals.',
    accentColor: '#0284C7',
    iconBg: 'bg-[#0284C7]',
    category: 'Workflow Automation',
    link: '#features-grid'
  },
  zuno: {
    id: 'zuno',
    name: 'Zuno',
    tagline: 'AI-powered work assistant',
    description: 'AI-powered work assistance across your Dayflow apps.',
    accentColor: '#0C66E4',
    iconBg: 'bg-[#0C66E4]',
    category: 'AI Assistant',
    badge: 'AI Powered',
    link: '#ai-era'
  }
};

export const DAYFLOW_COLLECTIONS: Record<string, DayflowCollection> = {
  work: {
    id: 'work',
    name: 'Work',
    description: 'Plan projects and deliver work together.',
    products: 'Miraz · Prism',
    link: '#product-showcase'
  },
  business: {
    id: 'business',
    name: 'Business',
    description: 'Manage business operations with confidence.',
    products: 'Vanta · Relio',
    link: '#features-grid'
  },
  people: {
    id: 'people',
    name: 'People',
    description: 'Manage teams and employee operations.',
    products: 'Huma · Payra',
    link: '#features-grid'
  },
  service: {
    id: 'service',
    name: 'Service',
    description: 'Deliver support and resolve requests efficiently.',
    products: 'Assist · Flowdesk',
    link: '#features-grid'
  },
  developer: {
    id: 'developer',
    name: 'Developer',
    description: 'Build, track and deliver software.',
    products: 'Miraz · Flowdesk · Prism',
    link: '#features-grid'
  }
};

export const AUDIENCE_CATEGORIES: AudienceCategory[] = [
  {
    id: 'featured',
    name: 'Featured',
    headline: 'FEATURED APPS',
    appIds: ['miraz', 'vanta', 'relio'],
    collectionIds: ['work', 'business', 'people', 'service', 'developer']
  },
  {
    id: 'developers',
    name: 'Developers',
    headline: 'DEVELOPER APPS',
    appIds: ['miraz', 'flowdesk', 'prism'],
    collectionIds: ['developer', 'work']
  },
  {
    id: 'product-managers',
    name: 'Product Managers',
    headline: 'PRODUCT MANAGEMENT APPS',
    appIds: ['miraz', 'prism'],
    collectionIds: ['work', 'business']
  },
  {
    id: 'it-professionals',
    name: 'IT professionals',
    headline: 'IT & SERVICE APPS',
    appIds: ['assist', 'miraz', 'flowdesk'],
    collectionIds: ['service', 'developer']
  },
  {
    id: 'business-teams',
    name: 'Business Teams',
    headline: 'BUSINESS OPERATIONS APPS',
    appIds: ['vanta', 'relio', 'huma', 'payra'],
    collectionIds: ['business', 'people']
  },
  {
    id: 'leadership-teams',
    name: 'Leadership Teams',
    headline: 'LEADERSHIP & EXECUTIVE APPS',
    appIds: ['prism', 'vanta', 'huma'],
    collectionIds: ['business', 'people', 'work']
  }
];
