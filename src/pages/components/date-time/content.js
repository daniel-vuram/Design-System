import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import Variation2 from "./assets/variation2.svg"
import Variation1 from "./assets/variation1.svg"
import Variation3 from "./assets/variation3.svg"
import Demo from "./demo"
import "./date.scss"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo align-items-start">
        <Demo />
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li> Date picker</li>
            <li>label</li>
            <li>Input field</li>
            <li>Placeholder</li>
            <li>Date picker icon</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-3">
        Single, date range, month, quick select, date and time ,and time
      </p>

      <h3 className="mt-5">Default Date Picker</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={Variation1} />
      <h3 className="mt-5">Multi Date Picker</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={Variation2} />
      <h3 className="mt-5">Date and Time Picker</h3>
      <img alt="Img" className="mb-5 placeholder_img" src={Variation3} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            When using for a global date entry field, the date should be
            formatted: DD Mon YYYY.
          </li>
          <li>
            If using localization, then dates can be formatted to the locally
            used conventions.
          </li>
          <li>
            Do not disable the ability to enter the date via the keyboard
            directly into the input.
          </li>
          <li>
            If using Quick Selection, provide date presets with common date
            range selections, such as month, quarter, or today+1.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
