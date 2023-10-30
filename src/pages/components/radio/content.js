import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
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
      <p>Radio button can stand alone, be grouped, or nested</p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
    </section>
    <section id="layout" className="mb-5">
      <h2>Layout and spacing</h2>
      <p className="mt-3">
        The radio component layout and spacing ensure consistent and balanced
        arrangement within the design system.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        Radio buttons exhibit four states: unselected, selected, disabled, or
        erroneous. Exclusive selection is maintained within a radio button
        group. In cases allowing multiple selections, opt for checkboxes or
        multi-select options.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Radio can be integrated in two sizes, small and medium.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>Only a single option within a radio group can be chosen.</li>
          <li>
            If you have two options representing an on/off setting, think about
            using a Switch instead.
          </li>
          <li>
            Arrange the options in a contextually appropriate logical order,
            which could involve methods like alphabetical sorting or
            prioritization.
          </li>
          <li>Ensure that a label is always provided for each radio button.</li>
          <li>
            If the list contains more than ten options, contemplate using a
            Select element.
          </li>
          <li>
            If you have only two or three options with concise labels, think
            about using a Button Select approach.
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
