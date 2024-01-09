import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import Interaction from "./assets/interaction.svg"
import Interaction2 from "./assets/interaction2.svg"
import Demo from "./demo"
import "./accordion.scss"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo d-block bg-light">
        <Demo />
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
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
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

    <section id="interaction" className="mb-5">
      <h2>Interaction</h2>

      <img alt="Img" className="mt-2 placeholder_img" src={Interaction} />
      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Expanded- An expanded accordion item reveals an accordion panel with
            additional content. The panel is expanded and collapsed with a slide
            animation.
          </li>
        </ul>
        <img alt="Img" className="mt-2 placeholder_img" src={Interaction2} />
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
    </section>
  </div>
)

export default Content
