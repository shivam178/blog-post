import React ,{useState} from 'react'

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
                                <button onClick={() => backtoHome()}><img src="../assets/Group.svg" /></button>
                                <button onClick={() => createBlog(title,value)}><img src="../assets/home.svg" /></button>
                            </nav>
                        </div>
                        <div className="editor">
                            <div className="editingtools"></div>
                            <input 
                            type='text'
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}/>
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
                     <button onClick={() => backtoHome()}><img src="../assets/home.svg" /></button>   
                    </aside>
                        <div className='blog-heading'>
                            <h2>{details.title}</h2>
                            {details.content}
                        </div>
                    </>
            }
        </div>
    )
}
export default BlogDetails;