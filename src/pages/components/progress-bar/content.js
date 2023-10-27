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
          <p>coming soon</p>
        </div>
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <p>
        Pagination gives users the ability to move forward or backward, or go
        directly to a specific page.
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Process Label</li>
            <li>Completion Indicator</li>
            <li>Track</li>
            <li>Completion Label</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout" className="mb-5">
      <h2>Layout and spacing</h2>
      <p className="mt-3">content needed</p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        Progress has two available shapes — bar or a circle, with bar being the
        default shape.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">Progress bar has only one default size</p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Use progress indicator for long operation or a process that can take
            a considerable amount of time.
          </li>
          <li>
            Position Progress indicators in the center of a screen for general
            functions.
          </li>
          <li>
            For discrete tasks within a screen, position a Progress indicator
            adjacent to that task.
          </li>
          <li>
            Do not use Progress indicators for complex tasks with distinct
            milestones, instead use steps
          </li>
          <li>
            Use progress indicators to convey that data is being requested,
            transferred or processed.
          </li>
        </ul>
      </div>

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
    </section>
  </div>
)

export default Content
