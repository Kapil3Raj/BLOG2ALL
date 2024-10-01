import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

function Addblog(prop) {
  const [details, setDetails] = useState({
    title: "",
    content: ""
  });

  const navigate = useNavigate();

  function change(event) {
    const { name, value } = event.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  }

  function onsave(event) {
    event.preventDefault();
    if(details.title !== "" && details.content !==""){
      prop.condata(details);
    setDetails({
      title: "",
      content: ""
    });
    navigate("/blogcard"); // Programmatically navigate to /blogcard after saving
    }
    else{alert("fields are empty");}
    
    
  }

  return (
    <div className="container p-3 bg-dark rounded shadow-lg d-flex flex-column align-items-center mt-4">
      <h1 className="m-3 text-light">Please fill the details</h1>
      <form className="container d-flex flex-column justify-content-around align-items-center" style={{ height: '400px' }} onSubmit={onsave}>
        <input className="w-100 h-20" name="title" placeholder="Title" type="text" onChange={change} value={details.title} />
        <textarea className="w-100 h-75" name="content" placeholder="Write your blog here" type="text" onChange={change} value={details.content} />
        <button type="submit" className="btn btn-outline-primary btn-lg px-4 text-light">Save</button>
      </form>
    </div>
  );
}

export default Addblog;
