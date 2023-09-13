import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import "../App.css";


const intro = () => {
  return (
    <div className="intro-container">
        <h1 className="bio">
            Hi, my name is Elham Nawabi and I'm a software developer
            with a passion for crafting seamless digital experiences!
        </h1>
        <span className="resume">
          <Button variant="dark" size="lg" href="https://drive.google.com/file/d/1uPhpdez7s9fkOLC-UThC-79c12uj2_qa/view?usp=sharing">Resume</Button>
        </span>
        <span className="linkedin">
          <SocialIcon className="custom-linked" network="linkedin" bgColor="#212529" href="https://www.linkedin.com/in/elham-nawabi-bb2171164/" />
        </span>
        <span className="github">
          <SocialIcon className="custom-hub" network="github" href="https://github.com/ElhamNawabi" />
        </span>
    </div>
  )
}

export default intro