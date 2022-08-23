import React from 'react'

function BlogDetails({ details, type, backtoHome }) {
    return (
        <div className="details">
            {
                type === 'new' ?
                    <div className="newpost">
                        <div>
                        <nav>
                        <button onClick={() => backtoHome()}><img src="../assets/home.svg"/></button>
                        </nav>
</div>
<div className="editor">
    <div className="editingtools"></div>
                    <textarea></textarea>
                    </div>
                    </div>
                    :
                    <>
                        <div className='blog-heading'>
                            <button onClick={() => backtoHome()}><img src="../assets/home.svg"/></button>
                            <h3>{details.title}</h3>
                        </div>
                        <div className="blog-content">
                            {details.content}
                        </div>
                    </>
            }
        </div>
    )
}
export default BlogDetails;