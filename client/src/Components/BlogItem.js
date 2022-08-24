import React from 'react';

function BlogItem({ details, onShowBlogClick }) {
  return (
    <div className="blog-item" onClick={() => onShowBlogClick(details)}>
      <h2>{details.postTitle}</h2>
    </div>
  );
}
export default BlogItem;
