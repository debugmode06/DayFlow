export interface CollectionAppItem {
  id: string;
  name: string;
  role: string;
}

export interface CollectionShowcaseItem {
  id: 'teamwork' | 'strategy' | 'service' | 'software' | 'product';
  tabName: string;
  collectionName: string;
  backplateColor: string;
  backplatePolygon: string;
  backplateOffset: string;
  apps: CollectionAppItem[];
  headline: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
}

export const COLLECTION_SHOWCASE_DATA: CollectionShowcaseItem[] = [
  {
    id: 'teamwork',
    tabName: 'Teamwork',
    collectionName: 'Teamwork',
    backplateColor: '#0C66E4',
    backplatePolygon: 'polygon(0% 14%, 100% 0%, 100% 88%, 0% 100%)',
    backplateOffset: 'top-[-28px] bottom-[-24px] left-[-32px] right-[-24px]',
    apps: [
      { id: 'miraz', name: 'Miraz', role: 'Project and software management.' },
      { id: 'prism', name: 'Prism', role: 'Team analytics and insights.' },
      { id: 'zuno', name: 'Zuno', role: 'AI-powered work assistance.' }
    ],
    headline: 'The connected workspace for the way modern teams work',
    description:
      'Bring projects, tasks, knowledge, and AI-powered assistance together in one connected workspace so your team can plan clearly and deliver work with confidence.',
    ctaLabel: 'Explore Teamwork Collection →',
    ctaLink: '#features-grid',
    image: '/assets/collections/teamwork.jpg',
    imageAlt: 'A professional team collaborating around a laptop in a bright modern office'
  },
  {
    id: 'strategy',
    tabName: 'Strategy',
    collectionName: 'Strategy',
    backplateColor: '#FF9F0A',
    backplatePolygon: 'polygon(0% 0%, 100% 14%, 100% 100%, 0% 86%)',
    backplateOffset: 'top-[-32px] bottom-[-28px] left-[-36px] right-[-20px]',
    apps: [
      { id: 'prism', name: 'Prism', role: 'Business intelligence and analytics.' },
      { id: 'vanta', name: 'Vanta', role: 'Business operations and performance.' },
      { id: 'zuno', name: 'Zuno', role: 'AI-powered decision support.' }
    ],
    headline: 'Turn business strategy into measurable outcomes',
    description:
      'Connect goals, budgets, resources, and performance insights to help leadership teams make informed decisions and align execution with business priorities.',
    ctaLabel: 'Explore Strategy Collection →',
    ctaLink: '#features-grid',
    image: '/assets/collections/strategy.jpg',
    imageAlt: 'A diverse group of business leaders analyzing plans and performance'
  },
  {
    id: 'service',
    tabName: 'Service',
    collectionName: 'Service',
    backplateColor: '#FFC61A',
    backplatePolygon: 'polygon(0% 12%, 100% 0%, 100% 86%, 0% 100%)',
    backplateOffset: 'top-[-30px] bottom-[-24px] left-[-34px] right-[-24px]',
    apps: [
      { id: 'assist', name: 'Assist', role: 'Customer support and service desk.' },
      { id: 'flowdesk', name: 'Flowdesk', role: 'Workflow automation.' },
      { id: 'huma', name: 'Huma', role: 'Internal employee services.' }
    ],
    headline: 'Deliver exceptional service across every team',
    description:
      'Manage requests, automate repetitive processes, and connect support teams so employees and customers receive faster, more consistent service.',
    ctaLabel: 'Explore Service Collection →',
    ctaLink: '#features-grid',
    image: '/assets/collections/service.jpg',
    imageAlt: 'A professional support and operations team collaborating to resolve issues'
  },
  {
    id: 'software',
    tabName: 'Software',
    collectionName: 'Software',
    backplateColor: '#94C943',
    backplatePolygon: 'polygon(0% 8%, 100% 18%, 100% 92%, 0% 82%)',
    backplateOffset: 'top-[-36px] bottom-[-28px] left-[-30px] right-[-26px]',
    apps: [
      { id: 'miraz', name: 'Miraz', role: 'Software project management.' },
      { id: 'flowdesk', name: 'Flowdesk', role: 'Workflow automation and approvals.' },
      { id: 'prism', name: 'Prism', role: 'Engineering analytics.' }
    ],
    headline: 'Build better software. Deliver it faster.',
    description:
      'Connect planning, development workflows, releases, and engineering insights in one workspace to improve delivery quality and help software teams move with confidence.',
    ctaLabel: 'Explore Software Collection →',
    ctaLink: '#features-grid',
    image: '/assets/collections/software.jpg',
    imageAlt: 'Software developers reviewing code and discussing a technical project'
  },
  {
    id: 'product',
    tabName: 'Product',
    collectionName: 'Product',
    backplateColor: '#C56BEA',
    backplatePolygon: 'polygon(0% 0%, 100% 8%, 100% 90%, 0% 100%)',
    backplateOffset: 'top-[-28px] bottom-[-32px] left-[-36px] right-[-24px]',
    apps: [
      { id: 'miraz', name: 'Miraz', role: 'Product planning and roadmaps.' },
      { id: 'relio', name: 'Relio', role: 'Customer insights and relationships.' },
      { id: 'prism', name: 'Prism', role: 'Product performance analytics.' }
    ],
    headline: 'Make better product decisions with confidence',
    description:
      'Connect customer feedback, prioritization, roadmaps, and performance insights so product teams can understand what matters and deliver meaningful outcomes.',
    ctaLabel: 'Explore Product Collection →',
    ctaLink: '#features-grid',
    image: '/assets/collections/product.jpg',
    imageAlt: 'Product managers reviewing a roadmap and customer insights on a laptop'
  }
];
