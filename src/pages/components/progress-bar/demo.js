import * as React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"

function BasicExample() {
  return (
    <div className="d-block w-100">
      <ProgressBar className="w-100 mb-5" now={60} />
      <ProgressBar animated className="w-100" now={80} />
    </div>
  )
}

export default BasicExample
