import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button';

function Footer() {

  const [colorLink, setLinkColor] = useState(false);
  const [colorGit, setGitColor] = useState(false);

  return (
    <div className="footer-container">
      <div className="email">
        <p>Have a question for me or wanna work on a project together?</p>
        <p>email me at:</p>
        <p className="email-color">nawabi.elham@gmail.com</p>
      </div>

      <div className="footer-links">
        <span className="resume-footer">
          <Button className="custom-button" variant="dark" size="lg" href="https://drive.google.com/file/d/1uPhpdez7s9fkOLC-UThC-79c12uj2_qa/view?usp=sharing">Resume</Button>
        </span>
        <span className="linkedin-footer">
          <SocialIcon className="custom-linked-f" network="linkedin"
            onMouseEnter={() => setLinkColor(true)}
            onMouseLeave={() => setLinkColor(false)}
            bgColor={colorLink ? "#424649" : "#212529"}
            href="https://www.linkedin.com/in/elham-nawabi-bb2171164/" />
        </span>
        <span className="github-footer">
          <SocialIcon className="custom-hub-f" network="github"
            onMouseEnter={() => setGitColor(true)}
            onMouseLeave={() => setGitColor(false)}
            bgColor={colorGit ? "#424649" : "#212529"}
            href="https://github.com/ElhamNawabi" />
        </span>
      </div>
    </div>
  )
}

export default Footer