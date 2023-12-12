import React, { useState } from "react"

function AdvancedExample() {
  return (
    <div>
      <div className="p-4">
        <h5>Default</h5>
        <label className="switch">
          <input type="checkbox" className="switch-input" />
          <span className="switch-toggle-slider">
            <span className="switch-on"></span>
            <span className="switch-off"></span>
          </span>
          <span className="switch-label">Default</span>
        </label>
      </div>

      <div className="p-4">
        <h5>Default with icon</h5>
        <label className="switch">
          <input type="checkbox" className="switch-input" />
          <span className="switch-toggle-slider">
            <span className="switch-on">
              <i className="bx bx-check"></i>
            </span>
            <span className="switch-off">
              <i className="bx bx-x"></i>
            </span>
          </span>
          <span className="switch-label">With icon</span>
        </label>
      </div>
    </div>
  )
}

export default AdvancedExample
