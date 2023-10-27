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
            <li>Input field</li>
            <li>Button</li>
            <li>Drag and drop</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-3">
        There is only one standard variation for file uploader across the
        platform.
      </p>
    </section>
    <section id="drag-drop" className="mb-5">
      <h2>Drag and drop</h2>
      <p className="mt-3">
        A drag and drop area is same as the form field itself. Files can be
        clicked and uploaded or they can be dragged and dropped into the form
        field area.
      </p>
    </section>
    <section id="status" className="mb-5">
      <h2>Status</h2>
      <p className="mt-2">
        File Upload inherits the status properties of Input — none, success,
        warning, error, loading.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
      <p>Clearable: File Upload can be set to be clearable</p>
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        File Upload can be displayed in large, medium and small sizes.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>Uploading one or more files.</li>
          <li>
            Show the process of uploading for the user to identify the file is
            being uploaded while they wait.
          </li>
          <li>
            Do not use upload in a modal when multiple files are uploaded.
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
