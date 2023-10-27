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
            <li>First page button</li>
            <li>Previous page button</li>
            <li>Page hover</li>
            <li>Current page</li>
            <li>Truncation</li>
            <li>Last page</li>
            <li>Next page button</li>
            <li>Last page button</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout" className="mb-5">
      <h2>Layout and spacing</h2>
      <p className="mt-3">content needed</p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Pagination has four states available — enabled, hover, disabled or
        selected. Variations -
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Pagination size is variable according to the context of usage. When used
        inside components, the size of pagination will be variable according to
        the size of the components.In the rest of the cases, pagination will be
        of the same default size.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>Use a single pagination component per page.</li>
          <li>
            Position the pagination at the bottom right corner of each page and
          </li>
          <li>Position pagination in the same place on each page.</li>
          <li>Pagination can appear if the number of rows exceeding ten.</li>
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
