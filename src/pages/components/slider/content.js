import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Variation from "./assets/variation.svg"
import Demo from "./demo"
import "./slider.scss"

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
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Slider</li>
            <li>Background</li>
            <li>Progress line</li>
            <li>Left control</li>
            <li>Right control</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        The value of the sliders can be shown in percentage in the bottom,
        bottom floating and top floating states, with a setting of minimum and
        maximum value. Sliders can also be used without any value labels in
        false state
      </p>
      <img className="mt-2 placeholder_img" src={Variation} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">
        Slider can have three possible states — default, active (dragging) or
        disabled.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Where high-precision values are required consider an alternate
            interface, like a numeric input.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
