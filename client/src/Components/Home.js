import React, { useEffect, useState } from 'react'
import BlogDetails from './BlogDetails'
import BlogItem from './BlogItem'
import { getblogData,createBlog } from "../api";

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
       // getBlogData();
        setBlogItems(blogItems)
    }, [blogType])

    const getBlogData = async () => {
            try {
                const data = await getblogData();
                setBlogItems(data)
            }catch (err) { }
    }
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
    const NewBlogScreen = ()=>{
        setShowBlog(false)
        setBlogType('new')
        selectBlog({})
    }
    const createNewBlog=(title,content)=>{
        const data ={
            postTitle: title,
            postData: content,
        }
        createBlog(data)
        setShowBlog(true)
        getBlogData();
    }
    return (
        <div>
            <header>
                <h2>Eqaim Blog</h2>
            </header>
            {
                showBlogDetails ?
                <div>
                    <div className="items">
                        {blogItems.map((item, index) => (
                            <BlogItem
                                details={item}
                                OnShowBlogClick={OnShowBlogClick}
                            />
                        ))}
                    </div>
                      <div className="create-blog">
                      <button onClick={()=>NewBlogScreen()}><img src="../src/assets/create.svg"/></button>
                      </div>
                      </div>
                    :
                    <BlogDetails
                        details={selectedBlog}
                        type={blogType}
                        backtoHome={backtoHome}
                        createBlog={createNewBlog} />
            }

        </div>
    )
}
export default Home;