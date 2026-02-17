import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const post = blogs.find(b => b.slug === slug);

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

  return (
    <div className="blog-content">
      <div className="window-header">
        <h2>Blog Reader - {post.title}</h2>
      </div>
      
      <div className="toolbar">
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
        <div className="text-box blog-text">
          <h3>{post.subtitle}</h3>
          <div className="blog-body">
            {post.body.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="status-bar">
        <div className="status-item">📖 Reading Mode</div>
        <div className="status-item">Words: {post.body.split(' ').length}</div>
        <div className="status-item">📅 {post.date}</div>
      </div>
    </div>
  );
};

export default BlogPost;
