// Blog loader using Vite's import.meta.glob to load markdown files

export interface Blog {
  title: string;
  subtitle: string;
  category: string;
  folder: string;
  author: string;
  date: string;
  body: string;
  slug: string;
  pinned?: boolean;
  published?: boolean;
}

// Parse metadata from markdown content
function parseMarkdown(content: string, filename: string, folder: string): Blog {
  const lines = content.split('\n');

  // Extract title from first # heading
  let title = 'Untitled';
  let titleLineIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ')) {
      title = lines[i].substring(2).trim();
      titleLineIndex = i;
      break;
    }
  }

  // Extract date - try from Date: line, fallback to filename
  let date = filename.replace('.md', '');
  let dateLineIndex = -1;
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    const line = lines[i].trim();
    if (line.toLowerCase().startsWith('date:')) {
      date = line.substring(5).trim();
      dateLineIndex = i;
      break;
    }
  }

  // Extract author - try from Author: line, fallback to default
  let author = 'Levi Willms';
  let authorLineIndex = -1;
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    const line = lines[i].trim();
    if (line.toLowerCase().startsWith('author:')) {
      author = line.substring(7).trim();
      authorLineIndex = i;
      break;
    }
  }

  // Extract pinned status - try from Pinned: line
  let pinned = false;
  let pinnedLineIndex = -1;
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    const line = lines[i].trim();
    if (line.toLowerCase().startsWith('pinned:')) {
      pinned = line.substring(7).trim().toLowerCase() === 'true';
      pinnedLineIndex = i;
      break;
    }
  }

  // Extract published status - try from Published: line, default to true
  let published = true;
  let publishedLineIndex = -1;
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    const line = lines[i].trim();
    if (line.toLowerCase().startsWith('published:')) {
      published = line.substring(10).trim().toLowerCase() !== 'false';
      publishedLineIndex = i;
      break;
    }
  }

  // Build body: remove title and metadata lines, keep the rest
  const metadataLines = new Set([titleLineIndex, dateLineIndex, authorLineIndex, pinnedLineIndex, publishedLineIndex]);
  const bodyLines = lines.filter((_, i) => !metadataLines.has(i));

  // Remove leading empty lines
  let body = bodyLines.join('\n');
  body = body.replace(/^\n+/, '').trim();

  // Generate slug from folder and date
  const slug = `${folder}-${filename.replace('.md', '')}`;

  // Capitalize folder name for display
  const folderDisplay = folder.charAt(0).toUpperCase() + folder.slice(1);

  return {
    title,
    subtitle: '',
    category: folderDisplay,
    folder: folderDisplay,
    author,
    date,
    body,
    slug,
    pinned,
    published,
  };
}

// Use Vite's import.meta.glob to load all markdown files
const markdownFiles = import.meta.glob('./blog/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

// Parse all markdown files into Blog objects
function loadBlogs(): Blog[] {
  const blogs: Blog[] = [];

  for (const [path, content] of Object.entries(markdownFiles)) {
    // path looks like: ./blog/thesis/2025-09-30.md
    const pathParts = path.split('/');
    const filename = pathParts[pathParts.length - 1];
    const folder = pathParts.length > 2 ? pathParts[pathParts.length - 2] : 'general';

    const blog = parseMarkdown(content, filename, folder);
    blogs.push(blog);
  }

  // Sort by date, newest first
  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
}

// Load all blogs (including unpublished for potential admin use)
export const allBlogs = loadBlogs();

// Export only published blogs for public display
export const blogs = allBlogs.filter(blog => blog.published !== false);
