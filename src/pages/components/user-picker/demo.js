import React, { useState } from "react"
import Avatar1 from "./assets/1.png"
import Dropdown from "react-bootstrap/Dropdown"
import Userlist from "./assets/user_list.svg"

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
        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
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
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <img src={Userlist} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default BasicExample
