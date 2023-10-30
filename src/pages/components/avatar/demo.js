import * as React from "react"
import Avatar1 from "./assets/1.png"
import Avatar2 from "./assets/2.png"
import Avatar3 from "./assets/3.png"

const Content = () => (
  <div className="d-flex align-items-center">
    <div className="me-4">
      <h6>Avatar</h6>
      <div className="d-flex align-items-center mb-4">
        <div className="avatar avatar-md me-2">
          <img src={Avatar1} alt="Avatar" className="rounded-circle" />
        </div>
        <div className="avatar avatar-md me-2">
          <span className="avatar-initial rounded-circle">KM</span>
        </div>
      </div>
    </div>
    <div className="me-4">
      <h6>Groups</h6>
      <div className="d-flex align-items-center avatar-group mb-4">
        <div className="avatar avatar-md me-2">
          <img src={Avatar1} alt="Avatar" className="rounded-circle" />
        </div>

        <div className="avatar avatar-md me-2">
          <img src={Avatar2} alt="Avatar" className="rounded-circle" />
        </div>

        <div className="avatar avatar-md me-2">
          <img src={Avatar3} alt="Avatar" className="rounded-circle" />
        </div>
        <div className="avatar avatar-md me-2">
          <span className="avatar-initial rounded-circle">KM</span>
        </div>
      </div>
    </div>
    <div className="me-4">
      <h6>Groups with count</h6>
      <div className="d-flex align-items-center avatar-group mb-4">
        <div className="avatar avatar-md me-2">
          <img src={Avatar3} alt="Avatar" className="rounded-circle" />
        </div>

        <div className="avatar avatar-md me-2">
          <img src={Avatar2} alt="Avatar" className="rounded-circle" />
        </div>
        <div className="avatar avatar-md me-2">
          <img src={Avatar3} alt="Avatar" className="rounded-circle" />
        </div>
        <div className="avatar avatar-md me-2">
          <span className="avatar-initial rounded-circle">+4</span>
        </div>
      </div>
    </div>
  </div>
)

export default Content
