export interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  screenshot?: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'retro-website',
    name: 'Retro Website',
    description: 'A personal portfolio website styled like Windows 98. Built with React and TypeScript. Features include animated page transitions, CRT screen effects, Markdown blog posts, a startup sequence, and this very portfolio page you\'re looking at!',
    icon: '💻',
    technologies: ['React', 'TypeScript', 'Go', 'CSS'],
    githubUrl: 'https://github.com/leviwillms/website',
    year: '2025-26'
  },
  // {
  //   id: 'ppx-thesis',
  //   name: 'PPX: Parsed Page eXplorer',
  //   description: 'A semantic search engine for document understanding. PPX aligns spatial OCR fragments with semantic LLM text to enable queries that return precise page coordinates, establishing semantic provenance — tracing answers to their exact spatial origin in PDF documents. Undergraduate thesis at Ontario Tech University.',
  //   icon: '🔍',
  //   screenshot: '/thesis_ppx_poster.pdf',
  //   technologies: ['Python', 'PaddleOCR', 'MistralOCR', 'Sentence Transformers', 'LLMs', 'DocLayout'],
  //   year: '2025-26'
  // },
  {
    id: 'ppx-thesis',
    name: 'Parsed Page eXplorer (PPX)',
    description: 'Parsed Page eXplorer (PPX): A Tool Towards Agentic Human Knowledge Distillation \n\nNavigating the boundaries between vast document spaces—textbooks, papers, and articles—and abstract concepts represents the grand challenge of agentic knowledge distillation. To help humanity learn faster, AI agents need specialized tools to traverse these layers. A critical missing link is the exact alignment between raw information (source text) and structured text (Markdown), which is essential for agents to translate raw data into actionable concepts and abstractions. \n\nThis thesis tackles this specific bottleneck by focusing on the navigation mechanism between documents and information. I introduce the Parsed Page eXplorer, a foundational tool that facilitates agentic learning through strict alignment between source text and Markdown. Establishing this foundation with semantic provenance empowers AI agents to seamlessly bridge the gap from documents to accessible information. Ultimately, this mechanism is designed to fundamentally transform the speed and scale of human knowledge distillation. Undergraduate thesis at Ontario Tech University.',
    icon: '🔍',
    screenshot: '/ppx-document-viewer.gif',
    technologies: ['Python', 'TypeScript', 'PaddleOCR', 'PaddleX', 'PyTorch', 'Sentence Transformers', 'FastAPI', 'Pydantic', 'SvelteKit', 'Tailwind CSS', 'LaTeX',],
    githubUrl: 'https://github.com/dbresearch-ontariotech/ppx-dev',
    liveUrl: 'https://dbresearch-ontariotech.github.io/ppx-paper/',
    year: '2026'
  },
  {
    id: 'the-public-square',
    name: 'The Public Square',
    description: 'This is a fun one. For one of my University courses I created a book club application. It was one of the more enjoyable projects because I got to implement a prototype of my new application structure theory (handlers, data transport, backend/frontend folder structures) as well as integrate with my favourite hobby: reading.',
    icon: '🏦',
    screenshots: [
      '/project-assets/tps_login.png',
      '/project-assets/tps_library.png',
      '/project-assets/tps_clubs.png'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'Postgres', 'FastAPI', 'Alembic', 'GitHub Actions'],
    githubUrl: 'https://github.com/levi-otu/csci4230u',
    year: '2025'
  }
];
