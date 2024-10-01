import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function Viewblogs(props){
const a = useLocation().state?.a;

  return(<div style={{width:"100vw"}} className="container text-light bg-dark rounded p-3 mb-3 mt-3">
    <div className="container d-flex " style={{height:"3rem",gap:"7px"}} >
        <h2 className="p-2 flex-grow-1">{a.title}</h2>
        <Link to={`/editblog/${a.id}`} state={{ a }}><button type="button" className="btn btn-outline-primary btn-lg px-4 text-light">
              Edit
        </button></Link>
        <Link to={`/deleteblog/${a.id}`} state={{ a }}><button type="button" className="btn btn-outline-primary btn-lg px-4 text-light">
              Delete
        </button></Link>
    </div>
    <hr></hr> 
    <h4>{a.content}</h4>
    <hr></hr>
    <h5 className="text-end">9:00 AM</h5>

  </div>)

}

export default Viewblogs;