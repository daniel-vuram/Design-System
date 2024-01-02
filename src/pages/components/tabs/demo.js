import React, { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

function ControlledTabsExample() {
  const [key, setKey] = useState("home")

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={k => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <p>Tab content for Home</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Tab content for Profile</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>Tab content for Contact</p>
      </Tab>
    </Tabs>
  )
}

export default ControlledTabsExample
