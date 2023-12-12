import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Toast from "react-bootstrap/Toast"

function DismissibleExample() {
  const [showA, setShowA] = useState(true)
  const [showB, setShowB] = useState(true)

  const toggleShowA = () => setShowA(!showA)
  const toggleShowB = () => setShowB(!showB)

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast className="success" show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8ZM11.29 5.29C11.47 5.11 11.72 5 12 5C12.55 5 13 5.45 13 6C13 6.28 12.89 6.53 12.71 6.71L7.71 11.71C7.53 11.89 7.28 12 7 12C6.72 12 6.47 11.89 6.29 11.71L3.29 8.71C3.11 8.53 3 8.28 3 8C3 7.45 3.45 7 4 7C4.28 7 4.53 7.11 4.71 7.29L7 9.59L11.29 5.29Z"
                fill="#039855"
              />
            </svg>

            <strong className="me-auto">Success message.</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowB} className="mb-2">
          Toggle Toast <strong>without</strong> Animation
        </Button>
        <Toast
          className="danger"
          onClose={toggleShowB}
          show={showB}
          animation={false}
        >
          <Toast.Header>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00282 0.00390625C3.58558 0.00390625 0.0078125 3.58167 0.0078125 7.99891C0.0078125 12.4161 3.58558 15.9939 8.00282 15.9939C12.4201 15.9939 15.9978 12.4161 15.9978 7.99891C15.9978 3.58167 12.4201 0.00390625 8.00282 0.00390625ZM7.00344 12.9958V10.997H9.00219V12.9958H7.00344ZM7.00344 3.00203V9.99766H9.00219V3.00203H7.00344Z"
                fill="#D92D20"
              />
            </svg>

            <strong className="me-auto">Danger message.</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  )
}

export default DismissibleExample
