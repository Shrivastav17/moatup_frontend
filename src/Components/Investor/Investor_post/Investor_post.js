import React, { useState } from "react";
import "./Investor_post.css";

const posts = [
  {
    id: 1,
    name: "Name Surname",
    role: "Lorem ipsum dolor sit",
    time: "Today, 12.45",
    image: "https://source.unsplash.com/400x250/?coding,laptop",
    likes: 68,
    comments: 21,
  },
  {
    id: 2,
    name: "Name Surname",
    role: "Lorem ipsum dolor sit",
    time: "Today, 12.45",
    image: "https://source.unsplash.com/400x250/?crowd,people",
    likes: 45,
    comments: 15,
  },
];

const Investor_post = () => {
  const [postText, setPostText] = useState("");
  const [selectedSentiment, setSelectedSentiment] = useState(null);

  return (
    <div className="feed-container">
  
    


      {/* Posts Section */}
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-profile">
                <div className="profile-placeholder"></div>
                <div>
                  <h4>{post.name}</h4>
                  <p>{post.role}</p>
                  <p className="time">
                    <i className="ri-time-line"></i> {post.time}
                  </p>
                </div>
              </div>
            </div>

            <img src={post.image} alt="Post" className="post-image" />

            <div className="post-footer">
              <div className="actions">
                <button>
                  <i className="ri-thumb-up-line"></i> Like
                </button>
                <button>
                  <i className="ri-chat-3-line"></i> Comment
                </button>
              </div>
              <p className="stats">
                {post.likes} Likes • {post.comments} Comments
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investor_post;