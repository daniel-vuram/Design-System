import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import Demo from "./demo"
import "./model.scss"

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
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Content</li>
            <li>Elevation</li>
            <li>Background</li>
            <li>Close</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="variation" className="mb-5">
      <h2>Variation</h2>
      <p className="mt-3">
        The modal have two variations – centre modal and right modal.The centre
        modal is used in places where a action is require from the user, whereas
        right modal is used for configurations.
      </p>
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Modal is available in three sizes — large, medium, and small.
      </p>
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
    </section>
  </div>
)

export default Content
