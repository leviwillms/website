import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import BlogFileTree from './BlogFileTree';

const BlogLayout: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="blog-container">
      <Outlet />

      {/* Overlay - closes drawer when clicked */}
      <div
        className={`blog-drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
      />

      {/* File tree with conditional class */}
      <div className={`blog-list file-tree ${drawerOpen ? 'open' : ''}`}>
        <BlogFileTree onNavigate={closeDrawer} />
      </div>

      {/* Toggle button - visible only on mobile via CSS */}
      <button
        className="blog-drawer-toggle retro-button"
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-label="Toggle file explorer"
      >
        📁
      </button>
    </div>
  );
};

export default BlogLayout;
