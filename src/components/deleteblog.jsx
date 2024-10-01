import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Deleteblog(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.a;
  

  function handleCancel() {
    navigate('/blogcard');
  }

  function handleDelete(){
   const fin = props.data.filter(bl => bl.id !== blog.id);
   props.deleteb(fin);
   navigate('/blogcard');
  }

    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh", width: "100vw" }}>
        <form className="d-flex flex-column justify-content-around align-items-center gap-2 border border-dark rounded p-3 m-4">
          <h5>Are you sure you want to delete "{blog.title}" blog?</h5>
          <div>
            <button className="btn btn-sm btn-primary me-3" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    )

}

export default Deleteblog;
