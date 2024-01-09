import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import Variations from "./assets/variation.svg"
import Layout from "./assets/layout.svg"
import Demo from "./demo"
import "./dropdown.scss"
const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo d-block">
        <Demo />
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>

      <p>
        Select is a composite component utilizing the input and menu components.
        After clicking into the input to open the menu, the user can filter the
        available options by directly typing in the input.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Input field</li>
            <li>Input text</li>
            <li>Dropdown Arrow icon</li>
            <li>Menu Item</li>
            <li>Menu</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-3">
        Single Select allows the user to pick one option from a menu. Multiple
        Select allows the user to pick multiple options from a menu via
        checkboxes. Once selected, the items are shown as dismissible tags in
        the input field above
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Variations} />
    </section>
    <section id="states" className="mb-5">
      <h2>Layout</h2>
      <img alt="Img" className="mt-2 placeholder_img" src={Layout} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Placeholder text in Select should provide concise, informative
            context for user interaction, like "Select country" or "Search
            names."
          </li>
          <li>
            Utilize Select when offering more than three options for user
            selection.
          </li>
          <li>
            For three or fewer options with a single-choice requirement, use
            Radio or Single-select control buttons.
          </li>
          <li>
            For three or fewer options allowing multiple selections, employ
            Checkbox or Multi-select control buttons.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
