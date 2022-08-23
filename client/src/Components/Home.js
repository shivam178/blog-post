import React, { useEffect, useState } from 'react'
import BlogDetails from './BlogDetails'
import BlogItem from './BlogItem'

function Home() {
    const [showBlogDetails, setShowBlog] = useState(true)
    const [blogType, setBlogType] = useState('new');
    const [selectedBlog, selectBlog] = useState({})
    const [blogItems, setBlogItems] = useState([
        { title: 'Blog Title', content: 'blog content'},
        { title: 'Blog Title', content: 'blog content'},
        { title: 'Blog Title', content: 'blog content'},
        { title: 'Blog Title', content: 'blog content'},
        { title: 'Blog Title', content: 'blog content'},
        { title: 'Blog Title', content: 'blog content'},

    ])
    useEffect(() => {
        setBlogItems(blogItems)
    }, [blogType])
    const OnShowBlogClick = (item) => {
        console.log('sadas')
        setShowBlog(false);
        setBlogType('read')
        selectBlog(item)
    }
    const backtoHome = () => {
        setShowBlog(true)
        selectBlog({})
    }
    const createNewBlog = ()=>{
        setShowBlog(false)
        setBlogType('new')
        selectBlog({})
    }
    return (
        <div>
            <header>
                <h2>Eqaim Blog</h2>
            </header>
            {
                showBlogDetails ?
                    <div className="items">
                        {blogItems.map((item, index) => (
                            <BlogItem
                                details={item}
                                OnShowBlogClick={OnShowBlogClick}
                            />
                        ))}
                         <div className="create-blog">
            <button onClick={()=>createNewBlog()}><img src="../assets/create.svg"/></button>
            </div>
                    </div>
                    
                    :
                    <BlogDetails
                        details={selectedBlog}
                        type={blogType}
                        backtoHome={backtoHome} />
            }

        </div>
    )
}
export default Home;