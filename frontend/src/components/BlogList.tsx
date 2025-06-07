import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

interface BlogListProps {
  postsPerPage?: number;
}

const BlogList: React.FC<BlogListProps> = ({ postsPerPage = 3 }) => {
  const [page, setPage] = useState(0);
  const start = page * postsPerPage;
  const visible = blogs.slice(start, start + postsPerPage);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="blog-list">
      <ul>
        {visible.map(post => (
          <li key={post.slug} className="blog-item">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <span className="date">{post.date}</span>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>Prev</button>
        <span>{page + 1} / {totalPages}</span>
        <button disabled={page + 1 >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default BlogList;
