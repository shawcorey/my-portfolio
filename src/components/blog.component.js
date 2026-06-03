import React, { useState } from 'react';
import { blogPosts } from '../data/index';
import './blog.component.css';

const Blog = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="blog" style={{ paddingTop: 'var(--nav-h)' }}>
      <div className="container section">
        <span className="section-label">Writing</span>
        <h1 className="section-title">Blog</h1>

        <div className="blog__posts">
          {blogPosts.map((post) => (
            <article key={post.id} className={`blog-post${openId === post.id ? ' blog-post--open' : ''}`}>
              <div className="blog-post__header" onClick={() => toggle(post.id)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && toggle(post.id)}>
                <div className="blog-post__meta">
                  <span className="blog-post__date">{post.date}</span>
                  <span className="blog-post__read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-post__title">{post.title}</h2>
                <p className="blog-post__excerpt">{post.excerpt}</p>
                <div className="blog-post__footer">
                  <div className="blog-post__tags">
                    {post.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span className="blog-post__toggle">
                    {openId === post.id ? 'Collapse ↑' : 'Read more ↓'}
                  </span>
                </div>
              </div>

              {openId === post.id && (
                <div className="blog-post__body">
                  {post.body.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
