import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogFileTree from './BlogFileTree';

const BlogLayout: React.FC = () => (
  <div className="blog-container">
    <Outlet />
    <BlogFileTree />
  </div>
);

export default BlogLayout;
