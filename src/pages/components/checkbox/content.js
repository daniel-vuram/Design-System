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

    <section id="when_to_use" className="mb-5">
      <h2>When to use</h2>
      <ul className="ps-4">
        <li>To organize related information.</li>
        <li>
          Shorten pages and reduce scrolling when content is not crucial to read
          in full
        </li>
        <li>
          When space is at a premium and long content cannot be displayed all at
          once, like on a mobile interface or in a side panel
        </li>
      </ul>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <p>
        Accordions can be used to group and hide content to keep an interface
        clean and reduce clutter. Accordions can be used to display only one or
        multiple panels at a time, depending on the use case.
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Accordion Item</li>
            <li>Label</li>
            <li>Chevron</li>
            <li>Accordion Panel</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="appearance" className="mb-5">
      <h2>Appearance</h2>
      <p className="mt-3">
        Accordion has two core style types available — product and marketing.
        Product style is bolder and uses tighter spacing and marketing style is
        lighter and more spacious.
      </p>
    </section>
    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Accordions have four styled states available — enabled, hover, focus and
        disabled.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Expanded- An expanded accordion item reveals an accordion panel with
            additional content. The panel is expanded and collapsed with a slide
            animation.
          </li>
          <li>
            A leading icon can be added before the title in an accordion item.
          </li>
        </ul>
      </div>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Make the entire title label area clickable to trigger expansion.
          </li>
          <li>
            Ideal for use when you have no more than 10 modules of content.
          </li>
          <li>
            Do not use if it is a priority to have your users see all content at
            once.
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
