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
      <p>
        Badges help to categorize information, spotlight a notification, or
        indicate status. These badges are included for indication and for user,
        with a leading icon, tailing icon, avatar and a base badge
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Accordion Item</li>
            <li>Label</li>
            <li>Chevron</li>
            <li>Accordion Panel</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout_spacing" className="mb-5">
      <h2>Layout & Spacing</h2>
      <p className="mt-3">Coming</p>
    </section>
    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        The variations of chip include the following categories,with leading
        icon(image), with tailing icon, with both learning and tailing icon,
        with avatar,with icon only, with only base label, with avatar and
        tailing icon.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Expanded- An expanded accordion item reveals an accordion panel with
            additional content. The panel is expanded and collapsed with a slide
            animation.
          </li>
          <li>
            A leading icon can be added before the title in an accordion item.
          </li>
        </ul>
      </div>
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Chips are available in two sizes, small and medium. When the chips are
        used inside the table, small size is used and in the rest of the cases
        the default size used is medium.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>Only include one label per badge.</li>
          <li>Keep label text concise and unambiguous.</li>
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
