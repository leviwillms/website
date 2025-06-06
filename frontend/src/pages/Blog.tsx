import React, { useEffect, useState } from 'react';
import { getBlogPosts, BlogPost } from '../services/blogService';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      {posts.map(post => (
        <div key={post.id} className="window">
          <div className="window-body">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
