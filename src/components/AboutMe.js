import React from "react";
import author from "../me.jpg";

const Aboutme = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." width="100%" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Sonakshi. I have been working as a Frontend Engineer for 7 years. Technologies I use are
            ReactJS, JavaScript, HTML5, CSS3, JQuery I create responsive websites that are displayed on all devices,
            desktops and smartphones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
