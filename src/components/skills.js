import React from 'react'
import Card from "react-bootstrap/Card"

const skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-header"> Skills </h1>
      <Card className="custom-card">
      <Card.Body>
        <Card.Title className="skills-title"></Card.Title>
        <Card.Text>
          <div className="list">
            <ul>
              <li>
              <img src="/images/layers.png" alt="web app icon" className="skills-logo" />
                <h5>Web Application Development</h5>
                <p>(JavaScript, React, Vue, TypeScript, Angular)</p>
              </li>
              <li>
              <img src="/images/physics.png" alt="mobile dev icon" className="skills-logo" />
                <h5>Mobile & Front-End Development</h5>
                <p>(Flutter/Dart, React Native, Vue, Electron, Ionic)</p>
              </li>
              <li>
              <img src="/images/api.png" alt="backend icon" className="skills-logo" />
                <h5>Server-Side Application</h5>
                <p>(Node.js, Express.js)</p>
              </li>
              <li>
              <img src="/images/api3.png" alt="3rd party api icon" className="skills-logo" />
                <h5>3rd Party API Integration</h5>
                <p>(REST, Oauth)</p>
              </li>
              <li>
                <img src="/images/database.png" alt="database icon" className="skills-logo" />
                <h5>Database Development</h5>
                <p>(MongoDB, Firebase, SQL family)</p>
              </li>
              <li>
                <img src="/images/ui.png" alt="ui/ux icon" className="skills-logo" />
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