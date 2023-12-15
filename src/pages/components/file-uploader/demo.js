import * as React from "react"

const Content = () => (
  <div>
    <div className="drag-drop">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="upload">
          <path
            id="Icon"
            d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20M22.6667 10.6667L16 4M16 4L9.33333 10.6667M16 4V20"
            stroke="#9E9E9E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      <p>
        Drag and drop files here or <b>Choose File</b>
      </p>
    </div>
  </div>
)

export default Content
