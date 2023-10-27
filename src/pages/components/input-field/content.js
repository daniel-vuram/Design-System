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
            <li>Label</li>
            <li>Input text</li>
            <li>Field</li>
            <li>Supportive text</li>
            <li>Tailing icon</li>
            <li>Leading icon</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="variation" className="mb-5">
      <h2>Variation</h2>
      <p className="mt-3">
        <strong>There are two variations of Input —</strong> basic or leading
        content. To include an icon within the input use
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />

      <p className="mt-3">
        <strong>Labeling -</strong> Input can have no label and a top label
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />

      <p className="mt-3">
        <strong>Supportive text -</strong> Supportive text helps to instructs
        the user on what the field requires.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />

      <p className="mt-3">
        <strong>Placeholder text -</strong> It is shown in the initial enabled
        state and guides the user on what type of entry or formatting the field
        requires.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />

      <p className="mt-3">
        <strong>Icons -</strong> They can be added in the leading or trailing
        position within the Input by using the Input icon component.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="status" className="mb-5">
      <h2>Status</h2>
      <p className="mt-2">
        Input has five types of status available that should be used for form
        validation — none, success, warning, error, and loading.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Select has the following states — enabled, hovered, focused, selected,
        and read-only.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
      <p>
        Clearable - Input fields can be optionally made to be immediately
        clearable with one click.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
      <p>
        Password visibility toggle -Password fields can be built to show and
        hide text by using the Input group component with an icon only button.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size and shape </h2>
      <p className="mt-2">
        Inputs can be displayed in large, medium and small sizes.They can also
        be displayed in squared, curved or rounded edges.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Input Icon inherits the status properties of Input — none, success,
        warning, error, and loading.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
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
