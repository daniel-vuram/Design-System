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
            <li>Header</li>
            <li>Inner Content Container</li>
            <li>Footer</li>
            <li>Title</li>
            <li>Close</li>
            <li>Scrollbar</li>
            <li>Action buttons</li>
            <li>Outer Container</li>
            <li>Elevation</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="variation" className="mb-5">
      <h2>Variation</h2>
      <p className="mt-3">
        The header can have two variations – title only or title with
        subtitle.The footer can vary depending on the number of actions that
        need to be shown to the user.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="allignment" className="mb-5">
      <h2>Allignment</h2>
      <p className="mt-2">
        A modal is always centered horizontally within the viewport and has two
        options for vertical alignment – top or centered.A transparent overlay
        separates the page and the modal.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-2">
        Search inputs come in different states depending on how the user is
        interacting with it — enabled, hover, focus, active, and filled.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Modal is available in three sizes — large, medium, and small.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>Modals are disruptive and should be used sparingly.</li>
          <li>
            Do not use for important error notifications, instead use Alert.
          </li>
          <li>
            Do not use for short messaging confirming successful interactions
            such as "Email sent", instead use Alert or Toast.
          </li>
          <li>Avoid using modals on top of modals.</li>
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
