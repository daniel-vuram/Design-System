import React, { useState } from "react"
import Badge from "react-bootstrap/Badge"
import Avatar1 from "./assets/1.png"

function BasicExample() {
  return (
    <div className="user-picker">
      <div className="use-tag">
        <div className="avatar avatar-md me-2">
          <img src={Avatar1} alt="Avatar" className="rounded-circle" />
        </div>
        <span>User Name</span>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Icon"
            d="M7 1L1 7M1 1L7 7"
            stroke="#959BA3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="use-tag">
        <div className="avatar avatar-md me-2">
          <img src={Avatar1} alt="Avatar" className="rounded-circle" />
        </div>
        <span>User Name</span>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Icon"
            d="M7 1L1 7M1 1L7 7"
            stroke="#959BA3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="count">
        <div className="avatar avatar-md me-2">
          <span className="avatar-initial rounded-circle">+3</span>
        </div>
      </div>

      <div className="add-btn">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="plus">
            <path
              id="Icon"
              d="M8.00001 3.33334V12.6667M3.33334 8H12.6667"
              stroke="#B8BFC7"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default BasicExample
