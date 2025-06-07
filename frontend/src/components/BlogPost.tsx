import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const post = blogs.find(b => b.slug === slug);

  if (!post) {
    return <div className="blog-content"><p>Post not found</p></div>;
  }

  return (
    <div className="blog-content">
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p className="meta">{post.date} — {post.author} — {post.category}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
