import type { Project } from '../types/project';

export const commercialProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'internal-ai-platform',
    title: 'Internal AI Platform (Next.js)',
    shortDescription:
      'An internal AI workspace extending an open-source chatbot template into a multi-provider LLM platform with retrieval-augmented search, a task-management integration, and AI-editable content artifacts.',
    fullDescription:
      "Built out from an open-source Next.js AI chatbot template into a full internal AI workspace for an internal team: a chat interface that talks to 8+ LLM providers through one unified abstraction, retrieves answers from a private knowledge base via a Retrieval-Augmented Generation pipeline, reads and creates tasks in an external project-management tool through natural language, and lets the AI generate and iteratively edit structured documents (\"blocks\") — code, rich text, spreadsheets, and images — alongside the conversation.",
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Vercel AI SDK',
      'LangChain',
      'Drizzle ORM',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    imageUrl: '',
    imageAlt: 'Internal AI Platform project placeholder',
    category: 'commercial',
    eyebrow: 'AI Product / Internal Tooling',
    meta: [
      { label: 'Role', value: 'Full-stack contributor' },
      { label: 'Type', value: 'Web application (Next.js App Router)' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js 15 (App Router)' },
          { name: 'React 19 / RSC' },
          { name: 'Tailwind CSS' },
          { name: 'shadcn/ui' },
          { name: 'Radix UI' },
          { name: 'Framer Motion' },
        ],
      },
      {
        category: 'AI / LLM',
        items: [
          { name: 'Vercel AI SDK' },
          { name: '8+ LLM providers behind one abstraction' },
          { name: 'LangChain' },
          { name: 'Pinecone (RAG vector store)' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Next.js API Routes & Server Actions' },
          { name: 'Drizzle ORM' },
          { name: 'PostgreSQL' },
          { name: 'NextAuth.js' },
        ],
      },
      {
        category: 'Editing / Content',
        items: [
          { name: 'ProseMirror' },
          { name: 'CodeMirror' },
          { name: 'react-data-grid' },
        ],
      },
    ],
    architecture: [
      'Route-group segmentation isolating chat, auth, RAG search, and third-party task-integration concerns.',
      'Provider-agnostic LLM abstraction layer, so adding or swapping a model provider is a config change, not a rewrite.',
      'Server-side headless-browser pool for safe, reusable AI web-fetching instead of a per-request browser launch.',
      'Tool-calling agent layer letting the LLM search the knowledge base, fetch web pages, and read/create external tasks mid-conversation.',
    ],
    keyFeatures: [
      'Multi-model chat with runtime switching across 8+ LLM providers.',
      'Retrieval-Augmented Generation pipeline exposed as both a standalone search UI and an LLM-callable tool.',
      'OAuth2 integration with an external project-management tool, letting the assistant browse and act on live task data.',
      'Generative-UI "Blocks" system: AI-created, live-editable code/rich-text/spreadsheet/image documents with diff view and version history.',
      'Chat history organized into folders with drag-and-drop reordering and public/private visibility.',
    ],
    highlights: [
      'Unified 8+ LLM providers behind a single abstraction layer used across the whole platform.',
      'Built a working RAG pipeline exposed both as a UI feature and as a tool the LLM can call directly.',
      'Implemented an OAuth2 integration end-to-end, including per-user token persistence.',
      'Designed the generative-UI "Blocks" artifact system — a non-trivial state-management and streaming challenge.',
    ],
    stats: [
      { value: '8+', label: 'LLM Providers Unified' },
      { value: '6', label: 'Months in Development' },
    ],
    heroImage: '',
    heroImageAlt: 'Internal AI Platform hero placeholder',
  },
  {
    id: 'proj-2',
    slug: 'consultancy-website-cms',
    title: 'Software Consultancy Marketing Site & Headless CMS',
    shortDescription:
      'The public marketing and recruitment site for a software consultancy — a JAMstack frontend statically generated from a custom-modeled headless CMS, including a bilingual careers hub and an interactive 3D case-study configurator.',
    fullDescription:
      "A two-part JAMstack system pairing a statically-generated frontend with a headless CMS backend, serving as the company's public marketing presence: blog, service pages, client case studies (including an interactive 3D product configurator), and a bilingual recruitment platform integrated with an external applicant-tracking system.",
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Strapi',
      'PostgreSQL',
      'three.js',
      'Docker',
    ],
    imageUrl: '',
    imageAlt: 'Software Consultancy Marketing Site & Headless CMS project placeholder',
    category: 'commercial',
    eyebrow: 'Corporate Marketing Site + Headless CMS',
    meta: [
      { label: 'Role', value: 'Full-stack contributor' },
      { label: 'Type', value: 'Two-service repo (Next.js + headless CMS)' },
      { label: 'Deployment', value: 'Docker, self-hosted PaaS' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js (Pages Router)' },
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'Sass' },
          { name: 'Framer Motion' },
          { name: 'three.js (raw)' },
        ],
      },
      {
        category: 'CMS / Backend',
        items: [
          { name: 'Strapi (38 content types, 69 components)' },
          { name: 'Node.js' },
          { name: 'PostgreSQL' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { name: 'External applicant-tracking system' },
          { name: 'Transactional email' },
          { name: 'Google Maps' },
          { name: 'Google Tag Manager' },
        ],
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Docker (multi-stage builds)' },
          { name: 'Self-hosted PaaS' },
        ],
      },
    ],
    architecture: [
      'JAMstack: pages statically generated at build time from CMS content via a custom REST client.',
      'Dynamic-zone page-builder pattern (16 block types) letting editors assemble arbitrary layouts without developer involvement.',
      'Lightweight API routes acting as a backend-for-frontend for form submissions and draft-preview handshakes.',
      'Multi-stage, non-root Docker builds deployed to a self-hosted PaaS.',
    ],
    keyFeatures: [
      'Interactive 3D product configurator built with raw three.js (not a React wrapper).',
      'Full bilingual recruitment/careers hub with department filtering and ATS-integrated applications.',
      'Blog platform with infinite-scroll pagination and syntax-highlighted code blocks.',
      'Case-study/client portfolio linked to a reusable technology-tag taxonomy.',
      'Custom CMS preview-button plugin wiring draft content directly to the live frontend.',
    ],
    highlights: [
      'Built and maintained a 38-content-type, 69-component CMS schema powering a flexible page builder.',
      'Implemented a raw three.js 3D configurator — a differentiated, non-trivial frontend feature.',
      'Integrated a third-party ATS and bilingual transactional email into the recruitment flow.',
      'Delivered multi-stage, non-root Docker builds to a self-hosted PaaS.',
    ],
    stats: [
      { value: '38', label: 'CMS Content Types' },
      { value: '69', label: 'Reusable Components' },
    ],
    heroImage: '',
    heroImageAlt: 'Software Consultancy Marketing Site & Headless CMS hero placeholder',
  },
  {
    id: 'proj-3',
    slug: 'property-services-marketplace',
    title: 'Property Services Marketplace Platform',
    shortDescription:
      'A platform connecting homeowners and service vendors, combining public multi-step registration funnels with an internal admin dashboard, a CRM integration, and a decoupled email-notification worker.',
    fullDescription:
      'A two-audience product: prospective homeowners and vendors sign up through guided multi-step public funnels, while internal staff manage the underlying records — properties, vendors, homeowners, and a service catalog — through an authenticated admin dashboard. A standalone background worker reacts to record changes and sends templated notification emails, decoupled from the request/response cycle, and the platform syncs leads into an external CRM.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Drizzle ORM',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    imageUrl: '',
    imageAlt: 'Property Services Marketplace Platform project placeholder',
    category: 'commercial',
    eyebrow: 'PropTech Marketplace + Admin Platform',
    meta: [
      { label: 'Role', value: 'Full-stack contributor' },
      { label: 'Type', value: 'Full-stack web application (Next.js)' },
      { label: 'Deployment', value: 'Vercel, serverless PostgreSQL' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js 15 (App Router, Turbopack)' },
          { name: 'React 19' },
          { name: 'Tailwind CSS' },
          { name: 'MUI' },
          { name: 'Radix UI' },
          { name: 'React Hook Form + Zod' },
        ],
      },
      {
        category: 'Backend / Data',
        items: [
          { name: 'PostgreSQL (serverless)' },
          { name: 'Drizzle ORM (31+ migrations)' },
          { name: 'Server Actions as the primary mutation path' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { name: 'External CRM (OAuth2 lead sync)' },
          { name: 'Transactional email' },
          { name: 'Google Maps autocomplete' },
          { name: 'Headless CMS for marketing pages' },
        ],
      },
      {
        category: 'Observability',
        items: [{ name: 'Sentry' }, { name: 'OpenTelemetry' }],
      },
    ],
    architecture: [
      'Single codebase serving public registration funnels, an authenticated admin dashboard, and an embedded CMS studio.',
      'Server Actions as the primary mutation path per domain entity, reserving API routes for binary/streaming needs.',
      'Address/eligibility verification using Postgres trigram similarity matching against a parcel database.',
      'Standalone notification worker process, decoupled from the web app, so email delivery never blocks user requests.',
      "Production observability (Sentry + OpenTelemetry) wired in from the project's start.",
    ],
    keyFeatures: [
      'Multi-step homeowner and vendor registration funnels with client-side validation.',
      'Real-time address/parcel eligibility verification via fuzzy string matching.',
      'Full admin back office for properties, vendors, homeowners, and the service catalog.',
      'External CRM lead sync on every form submission.',
      'Automated, templated email notifications on status changes via a decoupled worker.',
    ],
    highlights: [
      'Clear separation between public funnels, an internal admin surface, and a CMS — all sharing one data layer.',
      'Decoupled notification worker so unreliable third-party email delivery never blocks user-facing requests.',
      "Production observability (Sentry + OpenTelemetry) in place from day one, not bolted on later.",
      'Maintained 31+ incremental database migrations without disruptive schema rewrites.',
    ],
    stats: [
      { value: '10+', label: 'Tenant Organizations' },
      { value: '31+', label: 'Database Migrations' },
    ],
    heroImage: '',
    heroImageAlt: 'Property Services Marketplace Platform hero placeholder',
  },
  {
    id: 'proj-4',
    slug: 'deepfake-detection-platform',
    title: 'Deepfake Detection & Video Analysis Platform',
    shortDescription:
      'A full-stack application for deepfake detection and video analysis — upload, queue-process, and review video files, with per-frame probability visualization and a from-scratch detection-smoothing algorithm suite.',
    fullDescription:
      'Users upload video or image files for automated deepfake analysis; the app queues and processes them, then visualizes per-frame deepfake-probability results with configurable smoothing algorithms and generates PDF reports. Beyond UI work, this included designing and rewriting the core probability-smoothing algorithm suite that turns noisy per-frame model output into a stable, report-ready signal.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Jotai',
      'React Query',
      'Vitest',
    ],
    imageUrl: '',
    imageAlt: 'Deepfake Detection & Video Analysis Platform project placeholder',
    category: 'commercial',
    eyebrow: 'AI / Video Analysis',
    meta: [
      { label: 'Role', value: 'Frontend & algorithm development' },
      { label: 'Type', value: 'Full-stack web application (Next.js)' },
      { label: 'Deployment', value: 'Docker' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js (Pages Router)' },
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'Jotai' },
          { name: 'React Query' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Next.js API Routes' },
          { name: 'Prisma ORM' },
          { name: 'PostgreSQL' },
        ],
      },
      {
        category: 'Media',
        items: [
          { name: 'Puppeteer (PDF generation)' },
          { name: 'Fluent-ffmpeg' },
          { name: 'Sharp' },
        ],
      },
      {
        category: 'Testing',
        items: [{ name: 'Vitest' }],
      },
    ],
    architecture: [
      'Frontend pages call thin API-route wrappers that talk to Prisma/PostgreSQL directly or proxy to an external detection worker service.',
      'State split by concern: Jotai for transient UI state, React Query for server state, Context for persisted config.',
      'A pure-TypeScript, framework-independent algorithm module with its own dedicated test suite.',
    ],
    keyFeatures: [
      'File processing queue with rich sorting/filtering (status, result, date range, detection threshold).',
      'Database-backed, per-file algorithm-tuning settings (quality threshold, moving-average threshold).',
      'A full smoothing-algorithm suite (three configurable methods) turning per-frame probabilities into a stable signal.',
      'Multi-face weighting and segment-stability gap-filling in the detection pipeline.',
      'PDF report generation and technical documentation for the detection pipeline.',
    ],
    highlights: [
      'Rewrote the core report-ready smoothing algorithm from an O(n)-per-step model to an O(1) prefix-sum formulation — described in the commit itself as making the algorithm "more responsive and scalable."',
      'Built a full Vitest regression suite covering the smoothing methods, multi-face overrides, and quality-filter interactions.',
      'Patched multiple dependency and Dockerfile CVEs to keep the build secure.',
      'Refactored a hot sorting hook to memoized comparators, removing per-render recomputation.',
    ],
    stats: [
      { value: '45', label: 'Commits' },
      { value: '3', label: 'Smoothing Algorithms Built' },
    ],
    heroImage: '',
    heroImageAlt: 'Deepfake Detection & Video Analysis Platform hero placeholder',
  },
  {
    id: 'proj-5',
    slug: 'venture-studio-website-cms',
    title: 'Venture Studio Marketing Site & Headless CMS',
    shortDescription:
      "A venture studio's public marketing site — a content-driven page builder backed by a self-hosted headless CMS, serving blog content, case studies, investor pitch decks, and job listings to a non-technical content team.",
    fullDescription:
      'A decoupled system pairing a Next.js frontend with a self-hosted headless CMS that supplies structured content — blog posts and case studies with custom rich-text blocks. On top of the CMS-driven content, the site hosts a family of investor/sales pitch-deck pages and lead-generation integrations (newsletter, careers, meeting scheduling).',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Payload CMS',
      'MongoDB',
      'GSAP',
      'Tailwind CSS',
    ],
    imageUrl: '',
    imageAlt: 'Venture Studio Marketing Site & Headless CMS project placeholder',
    category: 'commercial',
    eyebrow: 'Corporate Site / Headless CMS',
    meta: [
      { label: 'Role', value: 'Full-stack contributor' },
      {
        label: 'Type',
        value: 'Marketing website + headless CMS (two-service repo)',
      },
      { label: 'Deployment', value: 'Vercel (site) + Docker (CMS)' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js (Pages Router)' },
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS + Sass' },
          { name: 'GSAP' },
          { name: 'Swiper' },
          { name: 'Radix Themes' },
        ],
      },
      {
        category: 'CMS',
        items: [
          { name: 'Payload CMS (self-hosted, Dockerized)' },
          { name: 'MongoDB' },
          { name: 'Custom rich-text elements & 6 custom field types' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { name: 'Newsletter platform' },
          { name: 'Meeting scheduling' },
          { name: 'Job-board ATS' },
          { name: 'Workflow automation' },
          { name: 'RSS newsletter feed' },
        ],
      },
    ],
    architecture: [
      'Two-service repo: frontend and CMS deployed and versioned independently of each other.',
      'Content-driven page builder — a single dynamic route composes 25+ CMS-defined content blocks.',
      'Custom CMS field types (color/gradient pickers, layout-span, SEO/slug/sort-order fields) and a bespoke recommendations API endpoint.',
      'Incremental Static Regeneration with an on-demand revalidation webhook, plus CMS live-preview mode.',
    ],
    keyFeatures: [
      'CMS-managed blog and case-study sections with nested, block-based rich content.',
      'A suite of investor/pitch-deck pages sharing one underlying view abstraction.',
      'Newsletter signup and an auto-generated RSS feed.',
      'Careers page pulling live job listings from an external ATS.',
      'Marketing-workflow automation triggered via webhooks (contact form, deck requests, signups).',
    ],
    highlights: [
      'Built and maintained a private, versioned internal component library published to a scoped npm registry and reused across multiple projects.',
      'Deep CMS customization: 6 custom field types, nested block collections, and a bespoke recommendations endpoint.',
      'Wired 5+ third-party integrations into a single content/marketing pipeline.',
      'Owned both sides of a fully headless architecture — frontend and CMS as independently deployed services.',
    ],
    stats: [
      { value: '25+', label: 'Reusable CMS Blocks' },
      { value: '6', label: 'Custom CMS Field Types' },
    ],
    heroImage: '',
    heroImageAlt: 'Venture Studio Marketing Site & Headless CMS hero placeholder',
  },
  {
    id: 'proj-6',
    slug: 'hris-field-service-saas',
    title: 'Multi-Tenant HRIS & Field-Service SaaS',
    shortDescription:
      'A database-per-tenant HR platform combining employee lifecycle management, leave tracking, equipment/asset management, and a map-based work-order dispatch system, with application-layer encryption for sensitive employee data.',
    fullDescription:
      'A production HRIS built as a multi-tenant SaaS for field-service-oriented businesses. Each customer organization gets its own isolated database, provisioned automatically at sign-up. Beyond core HR functions, the platform also covers work-order dispatch — clients, equipment, locations, and map-based scheduling — closer to a combined HRIS and field-service management product than a typical HR tool.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'Leaflet',
    ],
    imageUrl: '',
    imageAlt: 'Multi-Tenant HRIS & Field-Service SaaS project placeholder',
    category: 'commercial',
    eyebrow: 'Multi-Tenant B2B SaaS',
    meta: [
      { label: 'Role', value: 'Full-stack contributor' },
      { label: 'Type', value: 'Multi-tenant SaaS (Next.js)' },
      { label: 'Deployment', value: 'Docker, self-hosted PaaS' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js (App Router)' },
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'Leaflet (map clustering)' },
          { name: 'Custom 60+ component library' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Prisma ORM (multi-schema, database-per-tenant)' },
          { name: 'Custom JWT auth' },
          { name: 'PBKDF2 password hashing' },
        ],
      },
      {
        category: 'Documents & Email',
        items: [
          { name: 'Playwright (server-side PDF)' },
          { name: 'Handlebars email templates' },
          { name: 'Nodemailer' },
          { name: 'QR code + iCal generation' },
        ],
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Docker' },
          { name: 'Self-hosted PaaS' },
          { name: 'Scheduled cron jobs' },
        ],
      },
    ],
    architecture: [
      'Database-per-tenant multi-tenancy: an admin database resolves tenants by subdomain and provisions an isolated database per organization.',
      'Hexagonal/clean architecture per business domain, decoupling business logic from the database and framework.',
      'Server Actions as the primary mutation path, API routes reserved for binary/streaming needs.',
      'Application-layer PII encryption with deterministic hash columns, keeping encrypted fields searchable.',
      'Scheduled cron job safely processing queued, compliance-driven organization-deletion requests.',
    ],
    keyFeatures: [
      'Full employee lifecycle management with a multi-step onboarding wizard and skills/education history.',
      'Automated PDF résumé generation rendered server-side via headless Chromium.',
      'Leave and absence management with a request/approval workflow and calendar feed.',
      'Equipment/asset tracking with a full audit-trail changelog and QR-code check-in.',
      'Map-based work-order dispatch with a week-view scheduler and clustered location markers.',
      'Fully bilingual product across UI and transactional email.',
    ],
    highlights: [
      'Implemented application-layer encryption for sensitive employee data with searchable deterministic hashes.',
      'Contributed to a database-per-tenant architecture — a deliberate isolation-first multi-tenancy pattern.',
      'Built server-rendered PDF generation and map-based scheduling UI.',
      'Delivered a fully bilingual product across UI and transactional email.',
    ],
    stats: [
      { value: '5', label: 'PII Fields Encrypted' },
      { value: '6', label: 'Months in Development' },
    ],
    heroImage: '',
    heroImageAlt: 'Multi-Tenant HRIS & Field-Service SaaS hero placeholder',
  },
  {
    id: 'proj-7',
    slug: 'ai-coaching-subscription-platform',
    title: 'AI-Powered Coaching Subscription Platform',
    shortDescription:
      "A personal-development coaching product built around a persistent, threaded AI coach, with subscription payments and a lightweight, low-ops backend built on tools the team already used daily.",
    fullDescription:
      "Combines a marketing/sign-up site with a subscription product built around an AI coach. Rather than a conventional SQL database and transactional email service, the backend deliberately runs on a spreadsheet-style database (as the user store, via a custom auth adapter) and a workflow-automation tool (for email and form handling) — a lightweight, low-ops stack matched to a small product team's existing tools.",
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'OpenAI Assistants API',
      'Vercel AI SDK',
      'Stripe',
    ],
    imageUrl: '',
    imageAlt: 'AI-Powered Coaching Subscription Platform project placeholder',
    category: 'commercial',
    eyebrow: 'AI-Powered Coaching Platform',
    meta: [
      { label: 'Role', value: 'Full-stack contributor' },
      { label: 'Type', value: 'Web application (Next.js)' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js' },
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'Radix Themes' },
          { name: 'GSAP' },
          { name: 'React Hook Form + Zod' },
        ],
      },
      {
        category: 'AI',
        items: [
          { name: 'OpenAI Assistants API (persistent per-user thread)' },
          { name: 'Vercel AI SDK streaming' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Custom auth adapter & email provider (non-standard infrastructure)' },
          { name: 'Stripe (checkout + webhooks)' },
        ],
      },
      {
        category: 'Email',
        items: [{ name: 'MJML + Handlebars (custom build-time loader)' }],
      },
    ],
    architecture: [
      'Custom auth adapter implementing the standard interface against a non-standard, spreadsheet-style user store.',
      'Custom email provider routing through a workflow-automation tool instead of a dedicated transactional-email vendor.',
      'A persistent, per-user AI Assistant thread (not stateless completions), streamed to the client.',
      'Stripe checkout and webhook-driven subscription-state updates, decoupled from the page-render path.',
    ],
    keyFeatures: [
      'Conversational AI coach with persistent per-user memory across sessions, streamed token-by-token.',
      'Stripe-powered checkout with webhook-driven subscription state.',
      'Custom magic-link-style authentication built on non-standard infrastructure.',
      'Guided multi-step onboarding, including a selfie-capture step.',
      'Newsletter and contact-form handling routed through workflow automation.',
    ],
    highlights: [
      'Built a fully spec-compliant custom auth adapter around infrastructure not designed for that role.',
      'Delivered a stateful, threaded AI integration for a genuinely conversational (not stateless) coaching experience.',
      'Built a self-contained email templating pipeline with no external template-editor dependency.',
      "Matched infrastructure choices pragmatically to a small team's existing tools rather than defaulting to a heavier stack.",
    ],
    stats: [{ value: '3-Step', label: 'Onboarding Funnel' }],
    heroImage: '',
    heroImageAlt: 'AI-Powered Coaching Subscription Platform hero placeholder',
  },
  {
    id: 'proj-8',
    slug: 'coaching-platform-admin-console',
    title: 'Coaching Platform Admin Console',
    shortDescription:
      'The internal admin console for a coaching/mentorship program, used by staff to manage every entity in the program — students, coaches, communities, and companies — paired with a native mobile app for end users.',
    fullDescription:
      'A web-based admin console used by internal staff — admins, coaches, and supervisors — to manage every entity in a coaching program: students, parents, coaches, coaching groups, partner communities, and companies, along with contracts, white-labeled branding, and usage analytics. Built as the primary contributor over an 8-month build-out, authoring the large majority of the codebase.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'React Aria',
      'TanStack Query',
      'TanStack Table',
    ],
    imageUrl: '',
    imageAlt: 'Coaching Platform Admin Console project placeholder',
    category: 'commercial',
    eyebrow: 'Admin / Back-Office Web App',
    meta: [
      { label: 'Role', value: 'Lead/primary contributor' },
      { label: 'Type', value: 'Admin dashboard (Next.js)' },
      { label: 'Deployment', value: 'Paired with native iOS/Android app' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js (App Router)' },
          { name: 'React' },
          { name: 'TypeScript (strict)' },
          { name: 'Tailwind CSS (custom design tokens)' },
        ],
      },
      {
        category: 'UI / Design System',
        items: [
          { name: 'React Aria / React Stately (custom component library, built from scratch)' },
          { name: 'class-variance-authority' },
        ],
      },
      {
        category: 'Data & State',
        items: [
          { name: 'TanStack Query' },
          { name: 'TanStack Table' },
          { name: 'React Hook Form + Zod' },
        ],
      },
      {
        category: 'Auth & Security',
        items: [
          { name: 'Custom JWT auth' },
          { name: 'Edge Middleware route protection' },
          { name: '3-layer RBAC system across 6 roles' },
        ],
      },
    ],
    architecture: [
      'API-driven frontend (no local database) consuming a REST backend through a typed, per-domain client layer.',
      'Three-layer RBAC: Edge Middleware route blocking, a declarative permission matrix, and a client-side conditional-rendering hook.',
      'Consistent admin-CRUD pattern across every entity type — creation wizards, tabbed profiles, sortable data tables, and an audit changelog.',
      'Universal Links / App Links configuration integrating the console with a companion native mobile app.',
    ],
    keyFeatures: [
      'Full entity management suite (students, parents, coaches, coaching groups, communities, companies) with multi-step wizards.',
      'White-label theming system generating a full design-token set, live-previewed for partner branding.',
      'Account lifecycle management (invite, suspend, delete) with a tracked status pipeline.',
      'Per-entity changelog/audit log of relationship and field-level changes.',
      'Analytics dashboards for program usage, surveys, and session data.',
    ],
    highlights: [
      'Authored 81% of all commits over 8 months of active development — the majority of the codebase.',
      'Built a custom accessible component library from scratch rather than adopting an off-the-shelf UI kit.',
      'Designed a three-layer RBAC system supporting 6 distinct user roles.',
      'Delivered a white-label theming feature enabling partner-branded mobile experiences.',
    ],
    stats: [
      { value: '81%', label: 'Of All Commits Authored' },
      { value: '6', label: 'User Roles Supported' },
      { value: '8', label: 'Months in Development' },
    ],
    heroImage: '',
    heroImageAlt: 'Coaching Platform Admin Console hero placeholder',
  },
  {
    id: 'proj-9',
    slug: 'childrens-media-platform',
    title: "Children's Media Platform (Backend + Mobile)",
    shortDescription:
      "A kids' media platform spanning a NestJS backend and its companion React Native app — video content ingestion, watch history, developmental-domain scoring, biometric-gated sign-in, and a custom video player.",
    fullDescription:
      "The backend is the system of record for a kids' media product: it ingests video content, tracks watch history, and runs background scoring workflows across child-development domains, exposing a contract-first API consumed by the companion mobile app. The mobile app is the consumer-facing surface — biometric-gated sign-in, a custom video player, show browsing, and a dedicated parent dashboard.",
    technologies: [
      'NestJS',
      'React Native',
      'Expo',
      'TypeScript',
      'Firestore',
      'Google Cloud',
      'TanStack Query',
    ],
    imageUrl: '',
    imageAlt: "Children's Media Platform project placeholder",
    category: 'commercial',
    eyebrow: "EdTech / Children's Media",
    meta: [
      { label: 'Role', value: 'Contributor (backend + mobile)' },
      { label: 'Type', value: 'NestJS backend + React Native mobile app' },
      { label: 'Deployment', value: 'Google Cloud (backend), EAS Build (mobile)' },
    ],
    techStack: [
      {
        category: 'Backend',
        items: [
          { name: 'NestJS' },
          { name: 'Firebase / Firestore' },
          { name: 'Google Cloud Storage / Run' },
          { name: 'Trigger.dev (background jobs)' },
          { name: 'Swagger / OpenAPI' },
        ],
      },
      {
        category: 'Mobile',
        items: [
          { name: 'React Native (New Architecture)' },
          { name: 'Expo Router' },
          { name: 'TanStack Query' },
          { name: 'Jotai' },
          { name: 'MMKV' },
        ],
      },
      {
        category: 'Auth',
        items: [
          { name: 'Webhook-driven user lifecycle sync' },
          { name: 'Biometric sign-in (Face ID / Touch ID)' },
        ],
      },
      {
        category: 'CI/CD',
        items: [{ name: 'EAS Build + GitHub Actions (TestFlight / Play Store)' }],
      },
    ],
    architecture: [
      'Asynchronous media pipeline: content submission creates a tracked task, a background workflow processes and uploads it, and a webhook callback marks completion — fully decoupled from the API request thread.',
      'An 8-stage background scoring pipeline evaluating content across child-development domains.',
      "Contract-first API: the backend's OpenAPI schema compiles directly into the mobile app's type-safe client, eliminating a category of type-mismatch bugs.",
      'Feature-module mobile architecture with enforced public-API boundaries between features.',
    ],
    keyFeatures: [
      'Asynchronous video ingestion, processing, and storage pipeline.',
      'Automated multi-stage developmental-domain scoring running entirely as background jobs.',
      'Biometric-gated authentication layered on top of session auth.',
      'Custom video player with its own state/store and controls.',
      'Dedicated parent-dashboard feature, separate from the child-facing experience.',
      'Fully automated three-branch mobile release pipeline (develop → staging → main).',
    ],
    highlights: [
      'Designed an asynchronous, event-driven pipeline that fully decouples long-running processing from the API request thread.',
      "Set up contract-first API documentation so the mobile client's types generate directly from the backend schema.",
      'Delivered a mock-auth escape hatch for local development that preserves the exact production route surface.',
      'Shipped a fully automated release pipeline from a tagged release to store-ready binaries on both platforms.',
    ],
    stats: [
      { value: '8', label: 'Domain-Scoring Pipeline Stages' },
      { value: '3', label: 'Months in Development' },
    ],
    heroImage: '',
    heroImageAlt: "Children's Media Platform hero placeholder",
  },
  {
    id: 'proj-10',
    slug: 'creator-tooling-product-site',
    title: 'Creator & Developer Tooling Product Site',
    shortDescription:
      'A corporate and product marketing site for a creative/developer technology company — products, use-cases, customer showcases, documentation, and CMS-driven pricing pages, backed by a heavily customized, embedded headless CMS.',
    fullDescription:
      'The site presents products, use-cases, customer showcases, news, documentation, and learning resources, all managed through a heavily customized headless CMS embedded directly in the frontend framework. Includes CMS-driven pricing/purchase-offer pages, gated admin login, and cloud-backed media storage.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Payload CMS',
      'MongoDB',
      'AWS S3',
    ],
    imageUrl: '',
    imageAlt: 'Creator & Developer Tooling Product Site project placeholder',
    category: 'commercial',
    eyebrow: 'Technology / Product Marketing',
    meta: [
      { label: 'Role', value: 'Contributor' },
      {
        label: 'Type',
        value: 'Product marketing site + embedded headless CMS (Next.js)',
      },
      { label: 'Deployment', value: 'Docker, self-hosted PaaS' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js (App Router)' },
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS + Sass' },
          { name: 'GSAP' },
          { name: 'Swiper' },
        ],
      },
      {
        category: 'CMS',
        items: [
          { name: 'Payload CMS (embedded in the frontend app)' },
          { name: 'MongoDB' },
          { name: 'Rich-text editor migration (legacy → modern editor)' },
        ],
      },
      {
        category: 'Media & Auth',
        items: [
          { name: 'Cloud object storage with automatic image optimization' },
          { name: 'OAuth-gated admin access with an approval workflow' },
        ],
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Docker (multi-stage)' },
          { name: 'Self-hosted PaaS' },
        ],
      },
    ],
    architecture: [
      'Headless CMS embedded directly inside the frontend app rather than run as a separate service.',
      'Custom collections modeling a full product-marketing site: products, use-cases, case studies, news, documentation, pricing.',
      'Three custom in-house CMS plugins: object-storage integration, OAuth admin-auth with an approval gate, and automatic record-ownership tracking.',
      'Dual rich-text editor support during a zero-downtime migration from the legacy editor to a modern one.',
    ],
    keyFeatures: [
      'Full CMS-driven product marketing site across products, use-cases, case studies, and news.',
      'Pricing/subscription content model supporting single- and multi-seat plans.',
      'Gated CMS admin access with an approval workflow.',
      'Cloud-backed media pipeline with automatic image optimization.',
      'Per-collection dynamic sitemaps and structured technical SEO.',
    ],
    highlights: [
      'Built three custom CMS plugins in-house (storage integration, gated admin auth, ownership tracking).',
      'Migrated production rich-text content to a new editor without a hard cutover.',
      'Delivered comprehensive technical SEO across multiple content types.',
      'Shipped a production-hardened, multi-stage Docker build with a minimal runtime image.',
    ],
    stats: [
      { value: '3', label: 'Custom CMS Plugins Built' },
      { value: '2', label: 'Months in Development' },
    ],
    heroImage: '',
    heroImageAlt: 'Creator & Developer Tooling Product Site hero placeholder',
  },
  {
    id: 'proj-11',
    slug: 'react-scheduler',
    title: '@bitnoi.se/react-scheduler',
    shortDescription:
      'An open-source, TypeScript React component for building Gantt-chart/scheduler/timeline UIs, built from its initial commit through its first public npm releases.',
    fullDescription:
      'A published open-source npm package for building Gantt-chart, scheduler, and timeline UIs in React. Built essentially every layer of the library — from the HTML5 Canvas-based rendering engine through pagination, tooltips, localization, and the npm publishing pipeline — as the primary contributor across its active development period.',
    technologies: [
      'React',
      'TypeScript',
      'HTML5 Canvas API',
      'Vite',
      'styled-components',
    ],
    imageUrl: '',
    imageAlt: '@bitnoi.se/react-scheduler project placeholder',
    category: 'commercial',
    eyebrow: 'Open Source npm Package',
    meta: [
      { label: 'Role', value: 'Core contributor' },
      { label: 'Type', value: 'Open-source React component (npm)' },
      { label: 'Deployment', value: 'Published on npm' },
    ],
    techStack: [
      {
        category: 'Rendering',
        items: [
          {
            name: 'HTML5 Canvas API (grid/header drawing across hour/day/week/month/year zoom levels)',
          },
        ],
      },
      {
        category: 'Frontend',
        items: [
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'styled-components' },
          { name: 'dayjs' },
        ],
      },
      {
        category: 'Build & Publishing',
        items: [
          { name: 'Vite (library mode: ESM + UMD + generated type declarations)' },
          { name: 'npm' },
        ],
      },
    ],
    architecture: [
      'Canvas-based rendering engine for the grid/header instead of the DOM, avoiding hundreds of individual nodes for dense timelines.',
      'Lazy grid loading — only the visible date range is computed and drawn.',
      'React components layered on top of the canvas engine for tiles, tooltips, pagination, and configuration.',
    ],
    keyFeatures: [
      'Canvas-rendered grid/header supporting hourly, daily, monthly, and yearly zoom levels.',
      'Custom pagination system for paging through scheduler rows.',
      'Interactive tooltips and a configuration panel with zoom/filter controls.',
      'English/Polish localization support.',
      'Vite library-mode build producing ESM + UMD bundles with generated TypeScript declarations.',
    ],
    highlights: [
      'Core contributor from the initial commit through the first public npm releases.',
      'Built the entire Canvas-based rendering engine, avoiding DOM node proliferation on dense timelines.',
      'Landed several explicit performance passes: consolidated array iterations, removed redundant work, debounced resize handling.',
      "Designed the library's public API, packaging, and TypeScript developer experience.",
    ],
    stats: [
      { value: '86', label: 'Commits' },
      { value: '16', label: 'Months as Core Contributor' },
    ],
    heroImage: '',
    heroImageAlt: '@bitnoi.se/react-scheduler hero placeholder',
  },
  {
    id: 'proj-12',
    slug: 'field-service-marketing-site',
    title: 'Field Service Management — Marketing Site',
    shortDescription:
      'The public marketing/landing site for a field-service management platform — built solo end-to-end, from the component library to a rate-limited contact-form backend.',
    fullDescription:
      'Built the entire marketing site solo: a component library from scratch, the full homepage, an industries area with dynamic per-industry pages, a pricing page, bilingual (EN/PL) localization, and comprehensive technical SEO — plus a small backend endpoint handling contact-form submissions.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TanStack Router',
      'Tailwind CSS',
      'Hono',
    ],
    imageUrl: '',
    imageAlt: 'Field Service Management — Marketing Site project placeholder',
    category: 'commercial',
    eyebrow: 'Field Service Management — Marketing Site',
    meta: [
      { label: 'Role', value: 'Sole contributor' },
      { label: 'Type', value: 'Marketing site (React/Vite SPA)' },
      { label: 'Deployment', value: 'Static SPA + lightweight API' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Vite' },
          { name: 'TanStack Router' },
          { name: 'TanStack Query' },
          { name: 'Tailwind CSS (design-token based)' },
          { name: 'Motion' },
        ],
      },
      {
        category: 'Backend',
        items: [
          {
            name: 'A lightweight server framework handling one validated, rate-limited contact-form endpoint with email delivery',
          },
        ],
      },
      {
        category: 'i18n & SEO',
        items: [
          { name: 'i18next (EN/PL)' },
          {
            name: 'A reusable page-meta hook (title/description/canonical/OG/hreflang)',
          },
          { name: 'Structured data' },
        ],
      },
    ],
    architecture: [
      'A Vite SPA with typed, file-based routing, paired with a lightweight server sidecar for the one endpoint that needs it.',
      'Design-token-based styling system with no separate config file.',
      'A reusable page-metadata hook driving per-page SEO tags across every route.',
    ],
    keyFeatures: [
      'Full component library built from scratch (buttons, cards, accordion, navigation).',
      'Complete homepage, industries area with dynamic per-industry pages, and a pricing page.',
      'Rate-limited, validated contact-form backend with email delivery.',
      'Full bilingual (EN/PL) localization with a language switcher.',
      'Comprehensive technical SEO: sitemap, robots.txt, structured data, Open Graph, hreflang.',
    ],
    highlights: [
      'Sole contributor — built the entire site (component library, all pages, i18n, SEO, backend) in about 5 weeks.',
      'Delivered comprehensive technical SEO from scratch, including structured data and hreflang alternates.',
      "Applied rate limiting and schema validation on the site's only public write endpoint.",
    ],
    stats: [
      { value: '46', label: 'Commits' },
      { value: '5', label: 'Weeks (Solo Build)' },
    ],
    heroImage: '',
    heroImageAlt: 'Field Service Management — Marketing Site hero placeholder',
  },
  {
    id: 'proj-13',
    slug: 'field-service-mobile-app',
    title: 'Field Service Management — Mobile App',
    shortDescription:
      'A cross-platform workforce-management and time-tracking app for field service employees and owners, built solo — including a from-scratch background geolocation system with an original fix for a platform-specific reliability bug.',
    fullDescription:
      'A role-based mobile app for field-service businesses: employees track time and manage work orders, while owners get dispatch, client CRM, and staff oversight. Built solo across navigation, data layers, and native integrations, including a background geolocation/geofencing system built from scratch — with an original architectural fix for an Android notification-latency bug that had made automatic time tracking unreliable.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'TanStack Query',
      'Jotai',
    ],
    imageUrl: '',
    imageAlt: 'Field Service Management — Mobile App project placeholder',
    category: 'commercial',
    eyebrow: 'Field Service Management — Mobile App',
    meta: [
      { label: 'Role', value: 'Sole/primary mobile developer' },
      { label: 'Type', value: 'Cross-platform mobile app (React Native)' },
      { label: 'Deployment', value: 'EAS Build' },
    ],
    techStack: [
      {
        category: 'Mobile',
        items: [
          { name: 'React Native (New Architecture)' },
          { name: 'Expo Router (typed, file-based)' },
          { name: 'TanStack Query' },
          { name: 'Jotai' },
        ],
      },
      {
        category: 'Native Integrations',
        items: [
          { name: 'Background geolocation / geofencing' },
          { name: 'Push notifications' },
          { name: 'Secure storage' },
          { name: 'Document signing' },
        ],
      },
      {
        category: 'i18n & Real-time',
        items: [
          { name: 'i18next (EN/PL)' },
          { name: 'A real-time client for live updates' },
        ],
      },
    ],
    architecture: [
      'Role-scoped route groups distinguishing owner and employee experiences.',
      'Domain hook folders per concern (clients, work orders, employees, tracking) with a dedicated services layer for background work.',
      'A "notification-as-timer-proxy" pattern replacing polling-based geofence detection to wake the app precisely at the right moment.',
    ],
    keyFeatures: [
      'Role-based navigation and dashboards for owners and employees.',
      'Shared, filterable work-order list with infinite-scroll pagination.',
      'Client CRM module with reminders and document upload/download.',
      'Manual and automatic (GPS-geofenced) time tracking.',
      'In-app document signing with content sanitization.',
    ],
    highlights: [
      'Sole/primary mobile developer — built the app end to end over roughly 3 months.',
      'Root-caused an Android notification-latency bug and designed an original pattern to fix it architecturally, not just by tuning polling intervals.',
      'Resolved multiple cross-platform location-accuracy issues (iOS dead zones, Android batched-location ordering, OS execution-budget limits).',
    ],
    stats: [
      { value: '116', label: 'Commits' },
      { value: '3', label: 'Months (Sole Developer)' },
    ],
    heroImage: '',
    heroImageAlt: 'Field Service Management — Mobile App hero placeholder',
  },
  {
    id: 'proj-14',
    slug: 'field-service-management-saas',
    title: 'Multi-Tenant Field Service Management SaaS',
    shortDescription:
      'A multi-tenant platform for coordinating field service businesses — work orders, clients, employees, documents, and supplies — spanning a Next.js frontend, a backoffice app, and a NestJS backend API.',
    fullDescription:
      'A database-per-tenant SaaS platform coordinating field-service operations: work orders, client relationships, employee resources, documents, and supplies. As a major contributor across the monorepo, work spanned the supplies/inventory module, a CRM leads pipeline, a document-signing workflow, a dedicated mobile API surface, and a resilient notification system — plus a companion notifications microservice (bilingual templates, a subtle templating-engine bug fix) — including diagnosing and fixing a production database connection-pool exhaustion incident, documented as an architecture decision record.',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Socket.IO',
    ],
    imageUrl: '',
    imageAlt: 'Multi-Tenant Field Service Management SaaS project placeholder',
    category: 'commercial',
    eyebrow: 'Multi-Tenant B2B SaaS',
    meta: [
      { label: 'Role', value: 'Full-stack contributor' },
      { label: 'Type', value: 'Monorepo (Next.js + NestJS)' },
      { label: 'Deployment', value: 'Docker' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Next.js (App Router)' },
          { name: 'React' },
          { name: 'TypeScript' },
          { name: 'Tailwind CSS' },
          { name: 'React Aria Components' },
          { name: 'Jotai' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'NestJS (domain-driven, layered architecture)' },
          { name: 'Prisma ORM' },
          { name: 'Database-per-tenant PostgreSQL' },
          { name: 'Redis' },
        ],
      },
      {
        category: 'Real-time & Notifications',
        items: [
          { name: 'Socket.IO' },
          {
            name: 'Resilient notification system with retry/backoff and per-recipient failure isolation',
          },
        ],
      },
      {
        category: 'Monitoring',
        items: [{ name: 'Sentry' }, { name: 'PostHog' }],
      },
    ],
    architecture: [
      'Monorepo: a customer-facing frontend, a backoffice app, and a NestJS backend API, plus shared domain-logic packages.',
      'Domain-driven, layered NestJS architecture (use cases → repositories → permission checks → controllers) per business module.',
      'Database-per-tenant multi-tenancy with a shared admin database resolving tenant context.',
      'Cron-job concurrency bounding and a resilient, retrying notification pipeline with per-recipient failure isolation.',
    ],
    keyFeatures: [
      'Supplies/inventory module end-to-end with a full changelog/audit-log system.',
      'CRM leads pipeline with lead-to-client conversion and a client reminders system.',
      'Document template editor with live-data variable auto-fill and an in-app signing workflow.',
      'Dedicated REST API surface purpose-built for the companion mobile app.',
      'Daily/scheduled notification digests, plus transactional email for key lifecycle events.',
      'Bilingual (EN/PL) product maintained throughout.',
    ],
    highlights: [
      'Diagnosed and fixed a production database connection-pool exhaustion incident as tenant load grew, and documented the fix as an architecture decision record.',
      'Fixed a cross-tenant data-isolation defect in a scheduled digest-trigger endpoint.',
      'Built a resilient notification system (exponential backoff, per-recipient failure isolation) — including bilingual template content and a subtle templating-engine bug fix in the companion notifications microservice.',
      'Designed the dedicated mobile-facing API surface consumed by the companion app.',
      'Hardened file-upload handling with content-type verification beyond trusting file extensions.',
    ],
    stats: [
      { value: '235', label: 'Commits' },
      { value: '4', label: 'Tenant Organizations' },
      { value: '10', label: 'Months in Development' },
    ],
    heroImage: '',
    heroImageAlt: 'Multi-Tenant Field Service Management SaaS hero placeholder',
  },
  {
    id: 'proj-15',
    slug: 'financial-saas-backend',
    title: 'Financial SaaS Backend',
    shortDescription:
      'A multi-tenant backend for a card-based membership network, covering billing, campaigns, contracts, and payments for its admin portal.',
    fullDescription:
      'A backend feature developer on the admin/member-portal domain of a multi-tenant financial SaaS backend: streaming bulk data exports, a campaign-management admin API, a discounts subsystem, and multiple balance-calculation correctness fixes in a system that directly affects customer billing.',
    technologies: [
      'NestJS',
      'TypeScript',
      'Drizzle ORM',
      'PostgreSQL',
      'AWS',
      'Redis',
    ],
    imageUrl: '',
    imageAlt: 'Financial SaaS Backend project placeholder',
    category: 'commercial',
    eyebrow: 'Multi-Tenant B2B SaaS',
    meta: [
      { label: 'Role', value: 'Backend contributor' },
      { label: 'Type', value: 'Multi-tenant backend (NestJS)' },
      { label: 'Deployment', value: 'AWS Lambda' },
    ],
    techStack: [
      {
        category: 'Backend',
        items: [
          { name: 'NestJS' },
          { name: 'Drizzle ORM' },
          { name: 'PostgreSQL (per-tenant)' },
          { name: 'Redis' },
        ],
      },
      {
        category: 'Cloud',
        items: [
          { name: 'AWS Lambda (serverless-express)' },
          { name: 'S3' },
          { name: 'Cognito' },
          { name: 'SES' },
        ],
      },
      {
        category: 'Real-time',
        items: [{ name: 'Server-Sent Events for live status streaming' }],
      },
    ],
    architecture: [
      'Modular, domain-oriented NestJS application (per-module API/controller/database/ACL layout) deployed on AWS Lambda.',
      'Database-per-tenant provisioning via CLI scripts, resolved per request.',
      'Batched keyset-pagination streaming for large data exports, avoiding full in-memory result sets.',
    ],
    keyFeatures: [
      'Fourteen streaming data-export endpoints (payments, invoices, transactions, balances, and more), each uploading to cloud storage with a presigned download link.',
      'Campaign-management admin API: coupon selection, image upload, search, sorting, status-change notifications.',
      'A discounts subsystem with date-ranged and targeted rules, bulk actions, and enriched admin listings.',
      'A live status-streaming endpoint for a remote-initiated action, using Server-Sent Events.',
      'Multiple balance-calculation correctness fixes across a financial ledger system.',
    ],
    highlights: [
      'Delivered 14 streaming export endpoints using batched keyset pagination to handle large tenant datasets without loading full result sets into memory.',
      'Replaced a per-request aggregate query with a denormalized balance column — removing a runtime aggregate and fixing a null-value bug in the same change.',
      'Fixed multiple balance-correctness bugs (ledger divergence, inconsistent debt-blocking logic) across diverging code paths in a live billing system.',
    ],
    stats: [
      { value: '14', label: 'Streaming Export Endpoints' },
      { value: '5-7', label: 'Tenant Organizations' },
    ],
    heroImage: '',
    heroImageAlt: 'Financial SaaS Backend hero placeholder',
  },
];

export const sideProjects: Project[] = [];
