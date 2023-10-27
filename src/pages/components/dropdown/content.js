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
      <p>
        Select is a composite component utilizing the input and menu components.
        After clicking into the input to open the menu, the user can filter the
        available options by directly typing in the input.
      </p>
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Input text</li>
            <li>Input field</li>
            <li>Focused Menu Item</li>
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
    </section>
    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Select has the following states — enabled, hovered, focused, selected,
        disabled and read-only.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">Select dropdowns are of only one size</p>
      <img className="mt-2 placeholder_img" src={State} />
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
