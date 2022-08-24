import React, { useEffect, useState } from 'react';
import BlogDetails from './BlogDetails';
import BlogItem from './BlogItem';
import { getblogData, createBlog } from '../api';
import createIcon from '../assets/create.svg';

const dummyData = [
  { title: 'Blog Title', content: 'blog content' },
  { title: 'Blog Title', content: 'blog content' },
  { title: 'Blog Title', content: 'blog content' },
  { title: 'Blog Title', content: 'blog content' },
  { title: 'Blog Title', content: 'blog content' },
  { title: 'Blog Title', content: 'blog content' },
];

function Home() {
  const [showBlogDetails, setShowBlog] = useState(true);
  const [blogType, setBlogType] = useState('new');
  const [selectedBlog, selectBlog] = useState({});
  const [blogItems, setBlogItems] = useState([]);
  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    try {
        const data = await getblogData();
        
      setBlogItems(data.result);
    } catch (err) {}
  };

  const onShowBlogClick = (item) => {
    console.log('sadas');
    setShowBlog(false);
    setBlogType('read');
    selectBlog(item);
  };
  const backtoHome = () => {
    setShowBlog(true);
    selectBlog({});
  };
  const NewBlogScreen = () => {
    setShowBlog(false);
    setBlogType('new');
    selectBlog({});
  };
  const createNewBlog = async(title, content) => {
    const data = {
      postTitle: title,
      postData: content,
    };
    await createBlog(data);
    setShowBlog(true);
    getBlogData();
  };
  return (
    <div>
      <header>
        <h2>Eqaim Blog</h2>
      </header>
      {showBlogDetails ? (
        <div>
          <div className="items">
            {blogItems.map((item, index) => (
              <BlogItem details={item} onShowBlogClick={onShowBlogClick} />
            ))}
          </div>
          <div className="create-blog">
            <button onClick={() => NewBlogScreen()}>
              <img src={createIcon} alt="create" />
            </button>
          </div>
        </div>
      ) : (
        <BlogDetails
          details={selectedBlog}
          type={blogType}
          backtoHome={backtoHome}
          createBlog={createNewBlog}
        />
      )}
    </div>
  );
}
export default Home;
