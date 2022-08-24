import React, { useState } from 'react'
import homeSvg from '../assets/home.svg'
import grpSvg from '../assets/Group.svg'


function BlogDetails({ details, type, backtoHome, createBlog }) {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    return (
        <div className="details">
            {
                type === 'new' ?
                    <div className="newpost">
                        <div>
                            <nav>
                                <button onClick={() => backtoHome()}><img src={homeSvg} alt='home' /></button>
                                <button onClick={() => createBlog(title, value)}><img src={grpSvg} alt='create' /></button>
                            </nav>
                        </div>
                        <div className="editor">
                            <div className="editingtools"></div>
                            <input
                                type='text'
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }} />
                            <textarea type='text'
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}></textarea>
                        </div>
                    </div>
                    :
                    <>
                        <aside>
                            <button onClick={() => backtoHome()}><img src={homeSvg} alt='home' /></button>
                        </aside>
                        <div className='blog-heading'>
                            <h2>{details.postTitle}</h2>
                            {details.postData}
                        </div>
                    </>
            }
        </div>
    )
}

export default BlogDetails;
