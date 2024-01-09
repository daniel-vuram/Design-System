import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/status.svg"
import State1 from "./assets/State1.svg"
import State2 from "./assets/State2.svg"
import State3 from "./assets/State3.svg"
import State4 from "./assets/state4.svg"
import Demo from "./demo"
import "./file.scss"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo bg-light">
        <Demo />
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
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

    <section id="status" className="mb-5">
      <h2>Status</h2>
      <p className="mt-2">
        File Upload inherits the status properties of Input — none, success,
        warning, error, loading.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={State} />
      <p>Clearable: File Upload can be set to be clearable</p>
    </section>

    <section id="drag-drop" className="mb-5">
      <h2>Drag and drop</h2>
      <p className="mt-3">
        A drag and drop area is same as the form field itself. Files can be
        clicked and uploaded or they can be dragged and dropped into the form
        field area.
      </p>
      <h3>Status</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={State1} />
      <img alt="Img" className="mt-2 placeholder_img" src={State2} />
      <img alt="Img" className="mt-2 placeholder_img" src={State3} />
      <img alt="Img" className="mt-2 placeholder_img" src={State4} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        File Upload can be displayed in large, medium and small sizes.
      </p>
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
    </section>
  </div>
)

export default Content
