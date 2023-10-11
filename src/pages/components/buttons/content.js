import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Spacing from "./assets/spacing.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
import Dont_2 from "./assets/don't_2.svg"
import Do_2 from "./assets/do_2.svg"
import Size from "./assets/size.svg"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo">
        <div>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button variant="danger">Danger</Button>{" "}
          <Button variant="light">Light</Button>{" "}
          <Button variant="link">Link</Button>
        </div>
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <p>
        A button contains a call to action, container and can also include an
        icon sometimes.
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-6">
          <h4>Primary Button</h4>
          <ol className="ps-4">
            <li>Text label</li>
            <li>Container</li>
            <li>Icon (optional)</li>
          </ol>
        </div>
        <div className="col-md-6">
          <h4>Outlined button</h4>
          <ol className="ps-4">
            <li>Text label</li>
            <li>Container</li>
            <li>Icon (optional)</li>
          </ol>
        </div>
        <div className="col-md-6">
          <h4>Ghost button</h4>
          <ol className="ps-4">
            <li>Text label</li>
            <li>Icon (optional)</li>
          </ol>
        </div>
        <div className="col-md-6">
          <h4>Icon button</h4>
          <ol className="ps-4">
            <li>Container (optional)</li>
            <li>Icon</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout&spacing" className="mb-5">
      <h2>Layout and spacing</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <ul className="ps-3">
            <li>Item spacing: 8</li>
            <li>Padding top: 8</li>
            <li>Padding bottom: 8</li>
            <li>Padding left: 16</li>
            <li>Padding right: 16</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img className="mt-2 placeholder_img" src={Spacing} />
        </div>
      </div>
    </section>
    <section id="states" className="mb-5">
      <h2>States</h2>
      <img className="mt-2 placeholder_img" src={State} />
      <div className="mt-3">
        <ol className="ps-3">
          <li>Default</li>
          <li>Hover</li>
          <li>Active</li>
          <li>Disabled</li>
        </ol>
      </div>
    </section>

    <section id="size&shape" className="mb-5">
      <h2>Size and Shape</h2>
      <img className="mt-2 placeholder_img" src={Size} />
      <ul className="ps-3 mt-4">
        <li>Buttons can be displayed in Small,Medium and Large sizes..</li>
        <li>
          By default, the width of a button should be defined by the length of
          the text.
        </li>
        <li>
          Alternatively, a button can be set to a custom fixed width in order to
          maintain a consistent look across a page design.
        </li>
        <li>
          Buttons can be built with a square or circle shape. The square shape
          maintains 3 pixel rounded corners.
        </li>
      </ul>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={Do_1} className="mt-2 mb-2 placeholder_img" />

          <p>
            Button styles should reflect the priority of actions required in the
            interface.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>Same view must not have more than one primary button.</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <img src={Do_2} className="mt-2 mb-2 placeholder_img" />
          <p>
            Button styles should reflect the priority of actions required in the
            interface.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Dont_2} className="mt-2 mb-2 placeholder_img" />
          <p>Same view must not have more than one primary button.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Content
