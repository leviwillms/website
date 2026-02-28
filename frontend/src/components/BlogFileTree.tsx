import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogs, Blog } from '../data/blogs';

interface TreeNode {
  name: string;
  path: string;
  children: TreeNode[];
  blogs: Blog[];
}

function buildTree(blogs: Blog[]): TreeNode {
  const root: TreeNode = { name: 'root', path: '', children: [], blogs: [] };

  blogs.forEach(blog => {
    const parts = blog.folder.split('/').filter(Boolean);
    let current = root;

    parts.forEach((part, index) => {
      const path = parts.slice(0, index + 1).join('/');
      let child = current.children.find(c => c.name === part);

      if (!child) {
        child = { name: part, path, children: [], blogs: [] };
        current.children.push(child);
      }

      current = child;
    });

    current.blogs.push(blog);
  });

  // Sort children alphabetically
  const sortNode = (node: TreeNode) => {
    node.children.sort((a, b) => a.name.localeCompare(b.name));
    node.blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    node.children.forEach(sortNode);
  };

  sortNode(root);

  return root;
}

interface FolderProps {
  node: TreeNode;
  level: number;
  expandedFolders: Set<string>;
  toggleFolder: (path: string) => void;
  currentSlug?: string;
}

const Folder: React.FC<FolderProps> = ({ node, level, expandedFolders, toggleFolder, currentSlug }) => {
  const isExpanded = expandedFolders.has(node.path);
  const hasContent = node.children.length > 0 || node.blogs.length > 0;

  if (!hasContent && level > 0) return null;

  return (
    <div className="file-tree-folder">
      {level > 0 && (
        <div
          className={`file-tree-item file-tree-folder-header ${isExpanded ? 'expanded' : ''}`}
          style={{ paddingLeft: `${level * 16}px` }}
          onClick={() => toggleFolder(node.path)}
        >
          <span className={`folder-icon ${isExpanded ? 'open' : 'closed'}`}>
            {isExpanded ? '📂' : '📁'}
          </span>
          <span className="folder-name">{node.name}</span>
        </div>
      )}

      {(isExpanded || level === 0) && (
        <div className="file-tree-contents">
          {node.children.map(child => (
            <Folder
              key={child.path}
              node={child}
              level={level + 1}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              currentSlug={currentSlug}
            />
          ))}

          {node.blogs.map(blog => (
            <div
              key={blog.slug}
              className={`file-tree-item file-tree-file ${blog.slug === currentSlug ? 'active' : ''}`}
              style={{ paddingLeft: `${(level + 1) * 16}px` }}
            >
              <span className="file-icon">📄</span>
              <Link to={`/blog/${blog.slug}`} className="file-name">
                {blog.title}
              </Link>
              <span className="file-date">{blog.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BlogFileTree: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tree = useMemo(() => buildTree(blogs), []);

  // Find the folder path for the current blog
  const currentBlog = slug ? blogs.find(b => b.slug === slug) : undefined;
  const currentFolderPath = currentBlog?.folder || '';

  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(() => {
    // Start with top-level folders expanded
    return new Set(tree.children.map(c => c.path));
  });

  // Auto-expand folder containing current blog
  useEffect(() => {
    if (currentFolderPath) {
      setExpandedFolders(prev => {
        const next = new Set(prev);
        // Expand all parent folders
        const parts = currentFolderPath.split('/').filter(Boolean);
        let path = '';
        parts.forEach(part => {
          path = path ? `${path}/${part}` : part;
          next.add(path);
        });
        return next;
      });
    }
  }, [currentFolderPath]);

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  return (
    <div className="blog-list file-tree">
      <div className="file-tree-header">
        <span className="file-tree-title">Explorer</span>
      </div>
      <div className="file-tree-content">
        <Folder
          node={tree}
          level={0}
          expandedFolders={expandedFolders}
          toggleFolder={toggleFolder}
          currentSlug={slug}
        />
      </div>
    </div>
  );
};

export default BlogFileTree;
