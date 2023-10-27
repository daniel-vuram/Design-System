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
      <img className="mt-2 placeholder_img" src={Anatomy} />
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

    <section id="appearance" className="mb-5">
      <h2>Appearance</h2>
      <p className="mt-3">
        Borders can be used between rows, between columns or on all sides of a
        cell. Borders can be used to distinguish groupings. To create more
        distinction, use borders in conjunction with striping.
      </p>
      <p>The heading rows can have either a subtle or bold emphasis.</p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">
        Table provides a hover state on rows to allow for easy scanning. While
        long pressing a row, that particular row and additional rows can be
        selected to apply overall changes to them. At the end of each row
        there's option to delete and edit each row.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Tables are of only one size throughout and the width and height of the
        tables can be variable when used in widgets.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
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
