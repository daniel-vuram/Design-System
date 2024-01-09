import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/types.svg"
import Type from "./assets/variation.svg"
import Demo from "./demo"
import "./toast.scss"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo d-block">
        <Demo />
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Leading icon</li>
            <li>Message</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="type" className="mb-5">
      <h2>Type</h2>
      <p className="mt-3">
        Toasts offer the following messaging states — information, success,
        warning, or Danger
      </p>
      <img alt="Img" className="mt-2  placeholder_img" src={Type} />
    </section>

    <section id="variation" className="mb-5">
      <h2>Variation</h2>
      <p className="mt-2">
        Toast width and height are varied based on the data that has to be
        displayed
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>Toasts are meant to be short and brief..</li>
          <li>Avoid using toasts for critical messages that a user must see</li>
          <li>
            Use a large size for toasts that have actionable areas and need a
            larger tap area.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
