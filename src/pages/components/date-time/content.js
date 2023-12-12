import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import Variation2 from "./assets/variation2.svg"
import Variation1 from "./assets/variation1.svg"
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
      <img className="mt-2 placeholder_img" src={Variation1} />
      <img className="mt-2 placeholder_img" src={Variation2} />
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
            If using a localization then dates can be formatted to the locally
            used conventions.
          </li>
          <li>
            Do not disable the ability to enter the date via keyboard directly
            into the input.
          </li>
          <li>
            If using Quick Selection, provide date presets with common date
            range selections, such a month, quarter, or today+1.
          </li>
        </ul>
      </div>

      
    </section>
  </div>
)

export default Content
