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
            <li>Tab Item</li>
            <li>Active Tab Item</li>
            <li>Tab Group</li>
            <li>Separator</li>
            <li>Selected Tab Content</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">
        Tab items have four states available – enabled, hovered, active and
        disabled. When a tab item is active the container displays the content
        for that tab. Only one tab item within a tab group can be active.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">Tabs can be displayed in medium and small sizes.</p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>Avoid placing a tab group inside another tab group.</li>
          <li>
            Ensure a clear connection between tabs and their respective content
            by distinctly separating the container.
          </li>
          <li>For sequential content, opt for steps instead of tabs.</li>
          <li>Keep tab labels brief, adhering to the writing guidelines.</li>
          <li>Do not use punctuation in tab labels.</li>
          <li>Refrain from truncating tab labels.</li>
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
