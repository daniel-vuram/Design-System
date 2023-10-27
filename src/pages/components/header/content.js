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
        The header spans the full width of the viewport and is the topmost
        element in the browser window. The header is persistent throughout the
        product experience.
      </p>
      <p>
        For each header, left-to-right translates to product-to-global. The left
        side of the header contains items relevant at the product level. Moving
        to the right along the header, the functions become more global.
        Elements in the middle of the header should represent system-level
        controls
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Hamburger menu </li>
            <li>Page header</li>
            <li>App links</li>
            <li>Search</li>
            <li>Header utilities</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="placements" className="mb-5">
      <h2>Placements</h2>
      <p className="mt-3">
        Icons should always be aligned to the right of the header with 24px
        padding gaps between icons.
      </p>
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Select has the following states — enabled, hovered, focused, selected,
        and read-only.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="usage" className="mb-5">
      <h2>Usage</h2>
      <p className="mt-2">
        Use a page header to create a consistent experience at the top of a full
        page. The page header provides the core information users need when
        viewing the page.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Headings should be sentence case unless they include proper nouns.
          </li>
          <li>
            Headings should be short and let users know what to expect on the
            page.
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
