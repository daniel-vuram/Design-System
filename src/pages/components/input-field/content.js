import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import size from "./assets/size.svg"
import shape from "./assets/shape.svg"
import label from "./assets/label.svg"
import phone from "./assets/phone.svg"
import Sale from "./assets/Sale.svg"
import Website from "./assets/Website.svg"
import Card from "./assets/Card.svg"
import Date from "./assets/Date.svg"
import Scan from "./assets/Scan.svg"
import Datalist from "./assets/Datalist.svg"
import Description from "./assets/Description.svg"
import layout1 from "./assets/layout1.svg"
import layout2 from "./assets/layout2.svg"
import layout3 from "./assets/layout3.svg"
import layout4 from "./assets/layout4.svg"
import state from "./assets/state.svg"
import Demo from "./demo"

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
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Label</li>
            <li>Input</li>
            <li>Leading icon</li>
            <li>Placeholder Text</li>
            <li>Tailing icon</li>
            <li>Helper text</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="variation" className="mb-5">
      <h2>Variation</h2>
      <p className="mt-3">
        There are a list of variation in input field including email address,
        contact number, currency, external links, card details, scanner and
        datalist.
      </p>
      <h3 className="mt-5">Label</h3>
      <img className="mt-2 mb-4 placeholder_img" src={label} />
      <h3 className="mt-5">Phone</h3>
      <img className="mt-2 mb-4 placeholder_img" src={phone} />
      <h3 className="mt-5">Sale</h3>
      <img className="mt-2 mb-4 placeholder_img" src={Sale} />
      <h3 className="mt-5">Website</h3>
      <img className="mt-2 mb-4 placeholder_img" src={Website} />
      <h3 className="mt-5">Card</h3>
      <img className="mt-2 mb-4 placeholder_img" src={Card} />
      <h3 className="mt-5">Date</h3>
      <img className="mt-2 mb-4 placeholder_img" src={Date} />
      <h3 className="mt-5">Scan</h3>
      <img className="mt-2 mb-4 placeholder_img" src={Scan} />
      <h3 className="mt-5">Datalist</h3>
      <img className="mt-2 mb-4 placeholder_img" src={Datalist} />
      <h3 className="mt-5">Description</h3>
      <img className="mt-2 mb-4 placeholder_img" src={Description} />
    </section>

    <section id="states" className="mb-5">
      <h2>State</h2>
      <p className="mt-2">
        Input Icon inherits the status properties of Input — Default, Hover,
        Active, Disabled, Error.
      </p>
      <img className="mt-2 placeholder_img" src={state} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size and shape </h2>
      <p className="mt-2">
        Inputs can be displayed in large, medium and small sizes.
      </p>
      <img className="mt-2 placeholder_img" src={size} />
      <p className="mt-2">
        They can also be displayed in squared, curved or rounded edges.
      </p>

      <img className="mt-2 placeholder_img" src={shape} />
    </section>

    <section id="layout" className="mb-5">
      <h2>layout</h2>
      <img className="mt-2 placeholder_img" src={layout1} />
      <img className="mt-2 placeholder_img" src={layout2} />
      <img className="mt-2 placeholder_img" src={layout3} />
      <img className="mt-2 placeholder_img" src={layout4} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Keep input labels brief and use placeholder or supporting text to
            add additional explanatory information if necessary.
          </li>
          <li>Use a Input Icon to clarify the value an input field.</li>
          <li>Do not remove field borders.</li>
          <li>
            If you limit the number of characters in a field, you should display
            a counter to inform the user of the limitation.
          </li>
          <li>
            Field widths should roughly approximate the intended input. A field
            for a three-character month, for example, shouldn’t appear to
            accommodate twenty characters.
          </li>
          <li>Use status to provide user feedback for errors and warnings.</li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
