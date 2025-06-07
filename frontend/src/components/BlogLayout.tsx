import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogList from './BlogList';

const BlogLayout: React.FC = () => (
  <div className="blog-container">
    <Outlet />
    <BlogList />
  </div>
);

export default BlogLayout;
