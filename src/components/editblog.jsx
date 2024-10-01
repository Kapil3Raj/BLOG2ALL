import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditBlog(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const blog = location.state?.a;

  const [title, setTitle] = useState(blog?.title || '');
  const [content, setContent] = useState(blog?.content || '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const setdata = (e) => {
    e.preventDefault();
    if (title !== "" && content !== "") {
      const updatedBlog = { ...blog, title, content };
      const updatedData = props.data.map(item => item.id === blog.id ? updatedBlog : item);
      props.condata1(updatedData);
      navigate("/blogcard"); 
    } else {
      alert("Fields are empty");
    }
  };

  return (
    <div className="container p-3 bg-dark rounded shadow-lg d-flex flex-column align-items-center mt-4">
      <h1 className="m-3 text-light">Make your changes.</h1>
      <form 
        className="container d-flex flex-column justify-content-around align-items-center" 
        style={{ height: '400px' }} 
        onSubmit={setdata}
      >
        <input 
          className="w-100 h-20" 
          name="title" 
          placeholder="Title" 
          type="text" 
          value={title} 
          onChange={handleTitleChange} 
        />
        <textarea 
          className="w-100 h-75" 
          name="content" 
          placeholder="Write your blog here" 
          value={content} 
          onChange={handleContentChange} 
        />
        <div className="container d-flex justify-content-around">
          <button 
            type="button" 
            className="btn btn-outline-primary btn-lg px-4 text-light" 
            onClick={() => navigate("/blogcard")}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn btn-primary btn-lg px-4 text-light"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBlog;
