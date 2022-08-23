import React from 'react'

function BlogItem({details,OnShowBlogClick}) {

  return (
    <div className='blog-item'  onClick={() => OnShowBlogClick(details)}>
        <h2>{details.title}</h2>
    </div>
  )
}
export default BlogItem;