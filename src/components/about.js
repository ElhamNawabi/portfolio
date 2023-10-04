import React, {useState} from 'react';
import Collapse from "react-bootstrap/Collapse";
import "../App.css";

function About() {

  const [open, setOpen] = useState(false);

  return (
    <div className="about-container">
        <h1 className="about-header" onClick={() => setOpen(!open)}>Click Me If You Want To Learn A Little About Me...</h1>
        <Collapse in={open}>
          <div className="about-text">
          <p className="about-p1">If you've taken the time to click, that means a lot to me! To get to it - I'm a software developer born, raised and based in Toronto, Ontario, Canada.
          I've always been curious when it came to many things (growing up and even to this day) and to solve solutions, design, and develop
          align with my characteristics. I thoroughly enjoy building applications from the ground up and all the research and knowledge that comes with
          the process when developing apps and threading into new territories!
          </p>
          <p className="about-p2">
            Being a passionate supporter of collaborative efforts, I've had the privilege of participating in dynamic teams. 
            In these teams, I've not only lent my technical expertise but also actively embraced knowledge-sharing and open communication.
             I firmly believe that the most outstanding outcomes emerge from collective endeavors.
          </p>
          <p className="close-text" onClick={() => setOpen(!open)}>*Feel free to close this egregiously long wall of text by clicking me :)*</p>
          </div>
        </Collapse>
        
    </div>
  )
}

export default About