import * as React from "react"
import Form from "react-bootstrap/Form"
import "./input.scss"
const Content = () => (
  <div className="w-75">
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email here..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password here..."
        />
      </Form.Group>

      <div className="row">
        <div className="col-lg-6">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
        </div>
        <div className="col-lg-6">
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
        </div>
      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
    </Form>
  </div>
)

export default Content
