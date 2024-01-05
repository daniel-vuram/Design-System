import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import Layout from "./assets/layout.svg"
import Variation1 from "./assets/variation1.svg"
import Variation2 from "./assets/variation2.svg"
import Demo from "./demo"
import "./progress.scss"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo">
        <Demo />
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
            <li>Progress bar</li>
            <li>Background</li>
            <li>Progress</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout" className="mb-5">
      <h2>Layout and spacing</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="mt-2 mb-4 placeholder_img" src={Layout} />
        </div>
        <div className="col-md-6">
          <ul>
            <li> Height : 8px</li>
            <li> Border radius : 8px </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        Progress has two available shapes — bar or a circle, with bar being the
        default shape.
      </p>
      <img className="mt-2 placeholder_img" src={Variation1} />
      <img className="mt-2 placeholder_img" src={Variation2} />
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
    </section>
  </div>
)

export default Content
