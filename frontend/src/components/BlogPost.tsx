import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { blogs } from '../data/blogs';
import RetroPDFViewer from './RetroPDFViewer';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const post = blogs.find(b => b.slug === slug);
  const [pdfViewer, setPdfViewer] = useState<{ url: string; title: string } | null>(null);

  if (!post) {
    return (
      <div className="blog-content">
        <div className="window-header">
          <h2>Error - Post Not Found</h2>
        </div>
        <div className="fieldset">
          <legend>404 Error</legend>
          <div className="text-box">
            <p>The requested blog post could not be found.</p>
            <p>Please check the URL and try again.</p>
          </div>
        </div>
      </div>
    );
  }

  // Count words in the markdown body (excluding markdown syntax)
  const wordCount = post.body
    .replace(/[#*`\[\]()|\-_]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 0).length;

  return (
    <div className="blog-content">
      <div className="window-header">
        <h2>Blog Reader - {post.title}</h2>
      </div>

      <div className="toolbar">
        <Link to="/blog" className="toolbar-button" style={{ textDecoration: 'none' }}>⬅️ Back</Link>
        <button className="toolbar-button">📁 File</button>
        <button className="toolbar-button">✏️ Edit</button>
        <button className="toolbar-button">👁️ View</button>
        <button className="toolbar-button">🔍 Search</button>
        <button className="toolbar-button">❓ Help</button>
      </div>

      <div className="fieldset">
        <legend>Article Information</legend>
        <div className="info-grid">
          <div className="info-item">
            <strong>Title:</strong> {post.title}
          </div>
          <div className="info-item">
            <strong>Category:</strong> {post.category}
          </div>
          <div className="info-item">
            <strong>Author:</strong> {post.author}
          </div>
          <div className="info-item">
            <strong>Date:</strong> {post.date}
          </div>
        </div>
      </div>

      <div className="fieldset">
        <legend>Content</legend>
        <div className="text-box blog-text markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // Handle spans with data-pdf attribute for PDF viewer
              span: ({ node, children, ...props }) => {
                const dataPdf = (props as Record<string, unknown>)['data-pdf'] as string | undefined;
                if (dataPdf) {
                  const title = typeof children === 'string' ? children : 'PDF Viewer';
                  return (
                    <button
                      type="button"
                      className="retro-button pdf-link-button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setPdfViewer({ url: dataPdf, title: String(title) });
                      }}
                    >
                      📄 {children}
                    </button>
                  );
                }
                return <span {...props}>{children}</span>;
              }
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </div>

      {pdfViewer && (
        <RetroPDFViewer
          pdfUrl={pdfViewer.url}
          title={pdfViewer.title}
          onClose={() => setPdfViewer(null)}
        />
      )}

      <div className="status-bar">
        <div className="status-item">📖 Reading Mode</div>
        <div className="status-item">Words: ~{wordCount}</div>
        <div className="status-item">📅 {post.date}</div>
      </div>
    </div>
  );
};

export default BlogPost;
