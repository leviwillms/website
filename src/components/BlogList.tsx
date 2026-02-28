import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogList: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [postsPerPage, setPostsPerPage] = useState(blogs.length);
  const [page, setPage] = useState(0);

  useLayoutEffect(() => {
    const updateCounts = () => {
      const container = listRef.current;
      if (!container) return;
      const firstItem = container.querySelector('li');
      const pagination = container.querySelector('.pagination') as HTMLElement | null;
      if (!firstItem) return;
      const itemHeight = firstItem.getBoundingClientRect().height;
      const paginationHeight = pagination ? pagination.getBoundingClientRect().height : 0;
      const available = container.clientHeight - paginationHeight;
      const count = Math.floor(available / itemHeight);
      setPostsPerPage(count > 0 ? Math.min(count, blogs.length) : blogs.length);
    };
    updateCounts();
    window.addEventListener('resize', updateCounts);
    return () => window.removeEventListener('resize', updateCounts);
  }, []);

  const start = page * postsPerPage;
  const visible = blogs.slice(start, start + postsPerPage);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="blog-list" ref={listRef}>
      <ul>
        {visible.map(post => (
          <li key={post.slug} className="blog-item">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <span className="date">{post.date}</span>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>Prev</button>
          <span>{page + 1} / {totalPages}</span>
          <button disabled={page + 1 >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
