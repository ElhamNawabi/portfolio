import React from 'react'
import Card from "react-bootstrap/Card"

const skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-header"> Skills </h1>
      <Card className="custom-card">
      <Card.Body>
        <Card.Title className="skills-title">Skills</Card.Title>
        <Card.Text>
          <div className="list">
            <ul>
              <li>
                <h5>Web Application Development</h5>
                <p>(JavaScript, React, Vue, TypeScript, Angular)</p>
              </li>
              <li>
                <h5>Mobile & Front-End Development</h5>
                <p>(Flutter/Dart, React Native, Vue, Electron, Ionic)</p>
              </li>
              <li>
                <h5>Server-Side Application</h5>
                <p>(Node.js, Express.js)</p>
              </li>
              <li>
                <h5>3rd Party API Integration</h5>
                <p>(REST, Oauth)</p>
              </li>
              <li>
                <h5>Database Development</h5>
                <p>(MongoDB, Firebase, SQL family)</p>
              </li>
              <li>
                <h5>UI/UX Design</h5>
              </li>
            </ul>
          </div>
        </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default skills