import type { Project } from '../types/project';

export const commercialProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'erp-dashboard',
    title: 'ERP Dashboard',
    shortDescription:
      'A comprehensive ERP dashboard for managing business operations across multiple departments.',
    fullDescription:
      'A comprehensive ERP dashboard built for a mid-sized manufacturing company, covering inventory, HR, and finance modules. The system features advanced filtering, role-based access control, and real-time data synchronisation across departments. Developed with a focus on performance and a clean, accessible UI.',
    technologies: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Node.js'],
    imageUrl: '',
    imageAlt: 'ERP Dashboard project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-2',
    slug: 'scheduling-platform',
    title: 'Scheduling Platform',
    shortDescription:
      'A drag-and-drop scheduling platform for resource and shift management in enterprise teams.',
    fullDescription:
      'An enterprise scheduling platform enabling managers to assign shifts and resources via a drag-and-drop calendar interface. Built with a custom React scheduler component, the platform supports complex recurrence rules and conflict detection. Integrated with an existing HR system via a REST API.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Drizzle', 'PostgreSQL'],
    imageUrl: '',
    imageAlt: 'Scheduling Platform project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-3',
    slug: 'mobile-field-app',
    title: 'Mobile Field App',
    shortDescription:
      'A React Native app for field technicians to log service visits and sync data offline.',
    fullDescription:
      'A cross-platform React Native application used by field technicians to log service visits, capture signatures, and sync records when connectivity is restored. Offline-first architecture with SQLite local storage and background sync. Deployed to both iOS and Android via Expo.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'SQLite'],
    imageUrl: '',
    imageAlt: 'Mobile Field App project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-4',
    slug: 'cms-portal',
    title: 'CMS Portal',
    shortDescription:
      'A headless CMS portal enabling content editors to manage multilingual website content.',
    fullDescription:
      "A headless CMS portal built on Payload CMS, enabling non-technical editors to manage multilingual content across a marketing website. Custom field types and access control policies were developed to match the client's editorial workflow. The frontend consumes the REST API built into Payload.",
    technologies: ['Next.js', 'TypeScript', 'Payload', 'MongoDB'],
    imageUrl: '',
    imageAlt: 'CMS Portal project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-5',
    slug: 'analytics-reporting-tool',
    title: 'Analytics & Reporting Tool',
    shortDescription:
      'An internal analytics tool that visualises sales and operational KPIs with exportable reports.',
    fullDescription:
      'An internal analytics and reporting tool that aggregates sales, inventory, and operational data into interactive charts and exportable PDF/CSV reports. Built with a Remix frontend and a Node.js data-processing layer. Optimised for large datasets with server-side pagination and caching.',
    technologies: ['Remix', 'TypeScript', 'Node.js', 'PostgreSQL'],
    imageUrl: '',
    imageAlt: 'Analytics and Reporting Tool project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-6',
    slug: 'customer-segmentation-engine',
    title: 'Customer Segmentation Engine',
    shortDescription:
      'A rule-based segmentation engine that groups customers by behaviour for targeted campaigns.',
    fullDescription:
      'A rule-based segmentation engine allowing marketing teams to define complex customer cohorts by combining behavioural, demographic, and transactional criteria. Built as a microservice with a React admin UI. Supports real-time preview of segment sizes and scheduled audience exports.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
    imageUrl: '',
    imageAlt: 'Customer Segmentation Engine project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-7',
    slug: 'e-commerce-storefront',
    title: 'E-Commerce Storefront',
    shortDescription:
      'A performant e-commerce storefront with server-side rendering and a headless backend.',
    fullDescription:
      'A high-performance e-commerce storefront built with Next.js and Strapi as the headless backend. Features include dynamic product pages, cart management, and Stripe checkout integration. Static generation with incremental revalidation keeps load times under 100ms.',
    technologies: ['Next.js', 'TypeScript', 'Strapi', 'Stripe'],
    imageUrl: '',
    imageAlt: 'E-Commerce Storefront project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-8',
    slug: 'recruitment-platform',
    title: 'Recruitment Platform',
    shortDescription:
      'A recruitment platform connecting candidates with employers through a structured application flow.',
    fullDescription:
      'A full-stack recruitment platform where employers post vacancies and candidates apply through a structured multi-step form. Features include CV parsing, automated email notifications, and a kanban-style pipeline view for hiring managers. Built with Next.js, Prisma, and PostgreSQL.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Node.js'],
    imageUrl: '',
    imageAlt: 'Recruitment Platform project placeholder',
    category: 'commercial',
  },
  {
    id: 'proj-9',
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    shortDescription:
      'A real-time inventory system with barcode scanning, stock alerts, and supplier management.',
    fullDescription:
      'A real-time inventory management system supporting barcode scanning via a mobile web interface, low-stock alerts, and supplier order management. Built with Remix for streaming SSR and Drizzle ORM for type-safe database access. Deployed on a Node.js server with WebSocket-based stock updates.',
    technologies: ['Remix', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Node.js'],
    imageUrl: '',
    imageAlt: 'Inventory Management System project placeholder',
    category: 'commercial',
  },
];

export const sideProjects: Project[] = [
  {
    id: 'proj-10',
    slug: 'react-scheduler',
    title: '@bitnoi.se/react-scheduler',
    shortDescription:
      'An open-source drag-and-drop React scheduling component published on npm.',
    fullDescription:
      'An open-source drag-and-drop scheduling component for React, published under the @bitnoi.se scope on npm. Led the core implementation, covering resource lanes, event resizing, and multi-day spans. The package is actively maintained and used by teams building resource planning interfaces.',
    technologies: ['React', 'TypeScript'],
    imageUrl: '',
    imageAlt: '@bitnoi.se/react-scheduler open-source project placeholder',
    category: 'side',
  },
];
