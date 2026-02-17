import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogLanding: React.FC = () => {
  // Get the 3 most recent posts
  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Truncate body text for preview
  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className="blog-content blog-landing">
      <div className="window-header">
        <h2>Blog - Welcome</h2>
      </div>

      <div className="fieldset">
        <legend>About This Blog</legend>
        <div className="text-box">
          <p>Welcome to my blog! Here I share thoughts on software development,
          research projects, and other interests. Browse the folders on the right
          to explore posts by category, or check out the recent posts below.</p>
        </div>
      </div>

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
                {truncate(post.body, 150)}
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
    </div>
  );
};

export default BlogLanding;
