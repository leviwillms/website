import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogLanding: React.FC = () => {
  // Get pinned post (first one found, if any)
  const pinnedPost = blogs.find(post => post.pinned);

  // Get the 3 most recent posts (excluding pinned post)
  const recentPosts = [...blogs]
    .filter(post => !post.pinned)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Strip markdown syntax and truncate for preview
  const getExcerpt = (text: string, maxLength: number) => {
    // Remove markdown headings, bold, italic, links, code, etc.
    const plainText = text
      .replace(/^#{1,6}\s+/gm, '')           // Remove headings
      .replace(/\*\*([^*]+)\*\*/g, '$1')     // Remove bold
      .replace(/\*([^*]+)\*/g, '$1')         // Remove italic
      .replace(/`([^`]+)`/g, '$1')           // Remove inline code
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
      .replace(/^\s*[-*+]\s+/gm, '')         // Remove list markers
      .replace(/^\s*\d+\.\s+/gm, '')         // Remove numbered list markers
      .replace(/\|[^|]+\|/g, '')             // Remove table content
      .replace(/[-]{3,}/g, '')               // Remove horizontal rules
      .replace(/\n+/g, ' ')                  // Replace newlines with spaces
      .trim();

    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className="blog-content blog-landing">
      <div className="window-header">
        <h2>Blog - Welcome</h2>
      </div>

      <div className="fieldset">
        <legend>About This Blog</legend>
        <div className="text-box">
          <p>
          <i>"Write about what really interests you, whether it is real things or imaginary things,
            and nothing else."</i> - C.S. Lewis to Thomasine (December 14, 1959).
          <br/>
          <br/>
          In this blog I aim to share my opinionated and unashamed view on a variety of topics. The
          range of which is technology, research, software development, literature, theology, and
          some general philosophy. Blog categories are mixed into folders on the right-hand explorer.
          Feel free to explore.
          </p>
        </div>
      </div>

      {pinnedPost && (
        <div className="fieldset">
          <legend>📌 Pinned Post</legend>
          <div className="blog-preview-list">
            <div className="blog-preview-item pinned">
              <div className="blog-preview-header">
                <Link to={`/blog/${pinnedPost.slug}`} className="blog-preview-title">
                  📌 {pinnedPost.title}
                </Link>
                <span className="blog-preview-date">{pinnedPost.date}</span>
              </div>
              <div className="blog-preview-meta">
                <span className="blog-preview-folder">📁 {pinnedPost.folder}</span>
                <span className="blog-preview-author">by {pinnedPost.author}</span>
              </div>
              <div className="blog-preview-excerpt">
                {getExcerpt(pinnedPost.body, 200)}
              </div>
              <Link to={`/blog/${pinnedPost.slug}`} className="retro-button blog-preview-read">
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="fieldset">
        <legend>Recent Posts</legend>
        <div className="blog-preview-list">
          {recentPosts.map(post => (
            <div key={post.slug} className="blog-preview-item">
              <div className="blog-preview-header">
                <Link to={`/blog/${post.slug}`} className="blog-preview-title">
                  📄 {post.title}
                </Link>
                <span className="blog-preview-date">{post.date}</span>
              </div>
              <div className="blog-preview-meta">
                <span className="blog-preview-folder">📁 {post.folder}</span>
                <span className="blog-preview-author">by {post.author}</span>
              </div>
              <div className="blog-preview-excerpt">
                {getExcerpt(post.body, 200)}
              </div>
              <Link to={`/blog/${post.slug}`} className="retro-button blog-preview-read">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="blog-landing-footer">
        <p>📂 Browse all posts in the file tree on the right →</p>
      </div>

      <div className="status-bar">
        <div className="status-item">📂 Browse Mode</div>
        <div className="status-item">Posts: {blogs.length}</div>
        <div className="status-item">Categories: {new Set(blogs.map(b => b.folder)).size}</div>
      </div>
    </div>
  );
};

export default BlogLanding;
