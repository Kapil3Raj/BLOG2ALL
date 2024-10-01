import React from "react";
import { useNavigate } from "react-router-dom";
import pic_web from "../img/pic_web3.png"



function Herosec() {

  const navigate = useNavigate();

  function click(){
    navigate("/add");
  }

  return (
    <div className="container my-5 text-light">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" style={{ backgroundImage: `url(${pic_web})`, textShadow: "1px 1px 15px #000000" }}>
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">
            Share your thoughts through blogs.
          </h1>
          <p className="lead">
            Easy to create, edit and delete blogs. Sky is the only limit here.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              onClick={click}
            >
              Create
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded"
            src={pic_web}
            alt=""
            width="450"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosec;
