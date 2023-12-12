import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/layout.svg"
import Variations1 from "./assets/Variations1.svg"
import Demo from "./demo"
import "./pagination.scss"

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
            <li>Pagination base</li>
            <li>Previous page button</li>
            <li>Current page</li>
            <li>Truncation</li>

            <li>Next page button</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout" className="mb-5">
      <h2>Layout</h2>

      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Pagination has four states available — enabled, hover, disabled or
        selected. Variations -
      </p>
    </section>

    <section id="size" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        There are two variations in pagination which are, With label and without
        label
      </p>
      <img className="mt-2 placeholder_img" src={Variations1} />
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
    </section>
  </div>
)

export default Content
