import React, { useState } from "react";
import "../CreatePost/createpost.css";

import url from '../../env';
const CreatePost = () => {
  const [content, setContent] = useState(""); // Post content (message)
  const [media, setMedia] = useState([]); // Array of selected media files (images, videos, documents)

  // Handle content change (text message)
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convert FileList to array

    // Append newly selected files to the existing media array
    setMedia((prevMedia) => [...prevMedia, ...selectedFiles]);
};

  // Submit the post
  const handleSubmit = async (e) => {
    // e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);

    // Append each file to the FormData object
    for (let i = 0; i < media.length; i++) {
      formData.append("media", media[i]);
    }

    try {
      const response = await fetch(`${url.apipath}post`, {
        method: "POST",
        credentials: "include", 
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData, // Use FormData as the request body
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Post created successfully", data);
        setContent(""); // Clear the content input
        setMedia([]); // Clear the media files
      } else {
        const errorData = await response.json();
        console.error("Error creating post", errorData);
      }
    } catch (error) {
      console.error("Error creating post", error);
    }
  };
  return (
<div className="create-post-container">
  <div className="create-post-header">
    <h3>Create Post</h3>
    <div className="audience-selector">
      <i className="fa-solid fa-earth-americas"></i>
      <span>Anyone</span>
      <i className="fa-solid fa-chevron-down"></i>
    </div>
  </div>

  <textarea
    className="post-input"
    placeholder="What do you talk about?"
    value={content}
    onChange={handleContentChange}
  ></textarea>

  <div className="post-actions">
    {/* Image Upload */}
    <div className="action-item" onClick={() => document.getElementById("image-upload").click()}>
      <i className="fa-solid fa-image"></i>
      <span>Photos</span>
      <input type="file" accept="image/*" multiple id="image-upload" onChange={handleFileChange} style={{ display: "none" }} />
    </div>

    {/* Video Upload */}
    <div className="action-item" onClick={() => document.getElementById("video-upload").click()}>
      <i className="fa-solid fa-video"></i>
      <span>Videos</span>
      <input type="file" accept="video/*" multiple id="video-upload" onChange={handleFileChange} style={{ display: "none" }} />
    </div>

    {/* Document Upload */}
    <div className="action-item" onClick={() => document.getElementById("document-upload").click()}>
      <i className="fa-solid fa-file"></i>
      <span>Documents</span>
      <input type="file" accept=".pdf, .doc, .docx, .ppt, .txt" multiple id="document-upload" onChange={handleFileChange} style={{ display: "none" }} />
    </div>

    <div className="action-item">
      <i className="fa-solid fa-calendar"></i>
      <span>Event</span>
    </div>

    <button className="post-button" onClick={handleSubmit}>Post</button>
  </div>
</div>
  );
};

export default CreatePost;



