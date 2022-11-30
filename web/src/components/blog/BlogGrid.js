import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  // console.log('blogs: ', blogs);
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            image={{
              imageData: blog.coverImage.asset.gatsbyImageData,
              altText: blog.coverImage.alt,
            }}
            publishedAt={blog.publishedAt}
            excerpt={blog.excerpt}
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
