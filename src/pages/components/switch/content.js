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
        Switches can perform an action immediately and without confirmation.
        Switches may be grouped for multiple
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Switch toggle</li>
            <li>Label</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="variants" className="mb-5">
      <h2>Variants</h2>
      <p className="mt-3">
        Default toggle switches - Use the default toggle when you need to
        specify a label text in addition to the toggle action text. Default
        toggles appear in forms or within full pages of information
      </p>
      <p>
        Small toggle - Use the small toggle when you do not need to specify
        label or action text. Small toggles are more compact in size and are
        used inline with other components
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">
        Switches have four possible states – selected, unselected or disabled.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>Set switches to either "on" or "off" states.</li>
          <li>Always accompany switches with labels or context.</li>
          <li>
            Label switches in sentence case without punctuation, limiting to six
            words or fewer.
          </li>
          <li>
            For longer labels, consider shortening and providing context in an
            outer container.
          </li>
          <li>Utilize Radio for single selections other than "on" or "off."</li>
          <li>
            Choose switches for instant responses, like "Save" or "Apply."
          </li>
          <li>
            Opt for Checkboxes for multi-select options that need further user
            steps for changes to take effect.
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