import * as React from "react"
import Dropdown from "react-bootstrap/Dropdown"

function BasicExample() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Dropdown className="form">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              Dropdown here
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-6">
          <Dropdown.Menu show>
            <Dropdown.Header>Dropdown header</Dropdown.Header>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </div>
      </div>
    </div>
  )
}

export default BasicExample
