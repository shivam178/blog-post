import React from 'react'

function BlogItem({details,OnShowBlogClick}) {

  return (
    <div className='blog-item'  onClick={() => OnShowBlogClick(details)}>
        <h3>{details.title}</h3>
    </div>
  )
}
export default BlogItem;