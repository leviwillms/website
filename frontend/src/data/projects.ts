export interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  screenshot?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'retro-website',
    name: 'Retro Website',
    description: 'A personal portfolio website styled like Windows 98. Built with React, TypeScript, and Go. Features include animated page transitions, CRT screen effects, a startup sequence, and this very portfolio page you\'re looking at!',
    icon: '💻',
    technologies: ['React', 'TypeScript', 'Go', 'CSS'],
    githubUrl: 'https://github.com/leviwillms/website',
    year: '2024'
  },
  {
    id: 'ppx-thesis',
    name: 'PPX: Parsed Page eXplorer',
    description: 'A semantic search engine for document understanding. PPX aligns spatial OCR fragments with semantic LLM text to enable queries that return precise page coordinates, establishing semantic provenance — tracing answers to their exact spatial origin in PDF documents. Undergraduate thesis at Ontario Tech University.',
    icon: '🔍',
    screenshot: '/thesis_ppx_poster.pdf',
    technologies: ['Python', 'PaddleOCR', 'MistralOCR', 'Sentence Transformers', 'LLMs', 'DocLayout'],
    year: '2025'
  },
  {
    id: 'project-3',
    name: 'Project Three',
    description: 'Description of your third project. Replace this with your actual project details.',
    icon: '📱',
    technologies: ['Technology 1', 'Technology 2'],
    liveUrl: 'https://example.com',
    year: '2023'
  },
  {
    id: 'project-4',
    name: 'Project Four',
    description: 'Description of your fourth project. Replace this with your actual project details.',
    icon: '🌐',
    technologies: ['Technology 1', 'Technology 2'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://example.com',
    year: '2023'
  },
  {
    id: 'project-5',
    name: 'Project Five',
    description: 'Description of your fifth project. Replace this with your actual project details.',
    icon: '🔧',
    technologies: ['Technology 1', 'Technology 2'],
    githubUrl: 'https://github.com/...',
    year: '2022'
  }
];
