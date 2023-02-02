import React from "react";
import me from "../../images/me.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="">
        <h3>Prottay Badhon</h3>
        <div className="img-container mt-4"></div>
      </div>
      <p className="my-5">
        I am Badhon. I am studying CSE at University of Chittagong. Recently I
        have completed some web application with authentication using firebase.
        My future plan is to be fullstack web app developer. Already I acquired
        a good practice about React js. Next I want to learn Mongo DB and Redux.
        The process to acquire deep knowledge I am following the documentation
        about React js organization website. Currently I am practicing about 6 or
        7 hours in a day. I also organize my social link like github, linkedin,
        gitlab, protfolio website. Now I have about 49 github repositories with
        live site link. My target is to develope a full frontend and backend
        website with responsive layout.Thank you so much for valuable time.
      </p>
    </div>
  );
};

export default About;
