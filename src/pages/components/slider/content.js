import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Variation from "./assets/variation.svg"
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
        Slider can be either a single point slider for setting a single value or
        a dual range slider for setting a minimum and maximum value.
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
