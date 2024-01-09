import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import variation from "./assets/variation.png"
import variation1 from "./assets/variation1.svg"
import Demo from "./demo"
import "./table.scss"

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
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Column Headers</li>
            <li>Single Column</li>
            <li>Single Row</li>
            <li>Cell</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="variation" className="mb-5">
      <h2>Variation</h2>
      <p className="mt-3">
        Borders can be used between rows. Borders can be used to distinguish
        groupings. To create more distinction, use borders in conjunction with
        striping.
      </p>
      <p>The heading rows can have either a subtle or bold emphasis.</p>

      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={variation} />
      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={variation1} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">
        Table provides a hover state on rows to allow for easy scanning. While
        long pressing a row, that particular row and additional rows can be
        selected to apply overall changes to them. At the end of each row
        there's option to delete and edit each row.
      </p>
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Maintain uniformity throughout the visual elements in the tables,
            like headers, rows and columns.
          </li>
          <li>
            Include sorting, filtering and contextual actions for better
            usability.
          </li>
          <li>Avoid overcrowding and allow text wrapping.</li>
          <li>
            Maintain consistent column widths to avoid abrupt layout shifts and
            provide a neat appearance.
          </li>
          <li>
            Use distinct styling for header cells to clearly differentiate them
            from data cells and provide context for the columns.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
