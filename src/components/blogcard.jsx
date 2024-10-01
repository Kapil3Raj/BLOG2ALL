import React from "react";
import { Link } from "react-router-dom";

function Blogcard(props) {

  function nodata() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh", width: "100vw" }}>
        <div className="d-flex flex-column justify-content-around align-items-center gap-2 border border-dark rounded p-3 m-4">
          <h5>You have not yet created your first blog!</h5>
          <div>
            <Link to={`/add`}><button className="btn btn-sm btn-primary me-3">Create blog</button></Link>
          </div>
        </div>
      </div>
    );
  }

  const alldata = props.data.map((a) => {
    const { id, title, content } = a;

    return (
      <div className="col" key={id}>
        <div className="card shadow-sm">
          <div className="card-body">
            <h3>{title}</h3>
            <p className="card-text">{content.slice(0, 300) + "..."}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/viewblogs/${id}`} state={{ a }}>
                  <button type="button" className="btn btn-sm btn-primary me-1">View</button>
                </Link>
                <Link to={`/editblog/${id}`} state={{ a }}><button type="button" className="btn btn-sm btn-primary me-1">Edit</button></Link>
                
                <Link to={`/deleteblog/${id}`} state={{ a }}>
                  <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                </Link>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  });

  function renderContent() {
    return (
      <div className="container mt-4 mb-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {alldata}
        </div>
      </div>
    );
  }

  return (
    <>
      {props.data.length > 0 ? renderContent() : nodata()}
    </>
  );
}

export default Blogcard;
