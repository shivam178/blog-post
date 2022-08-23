import React from 'react';
import HomeSvg from '../assets/home.svg';

function BlogDetails({ details, type, backtoHome }) {
  return (
    <div className="details">
      {type === 'new' ? (
        <div className="newpost">
          <div>
            <nav>
              <button onClick={() => backtoHome()}>
                <img src={HomeSvg} alt="home" />
              </button>
            </nav>
          </div>
          <div className="editor">
            <div className="editingtools"></div>
            <textarea></textarea>
          </div>
        </div>
      ) : (
        <>
          <div className="blog-heading">
            <button onClick={() => backtoHome()}>
              <img src={HomeSvg} alt="home" />
            </button>
            <h3>{details.title}</h3>
          </div>
          <div className="blog-content">{details.content}</div>
        </>
      )}
    </div>
  );
}
export default BlogDetails;
