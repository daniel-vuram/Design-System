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
        Tooltips can display definitions, clarifications, or hints. Use tooltips
        for text that is nonessential to the user journey
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Label</li>
            <li>Container</li>
            <li>Tip</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="layout" className="mb-5">
      <h2>Layout</h2>
      <p className="mt-3">
        Tooltips have the flexibility to be positioned above, below, to the
        left, or to the right of their associated content. In the case of top or
        bottom tooltips, further alignment options include top left, top right,
        bottom left, or bottom right. Moreover, automatic adjustment of
        placement can be configured to prevent tooltips from being obscured by
        container boundaries or the browser edge.
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">Tooltips are of only one size.</p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>Refrain from concealing vital content within tooltips.</li>
          <li>
            Ensure tooltips stay within container limits and page boundaries.
          </li>
          <li>
            Exclude multimedia content like videos or images from tooltips.
          </li>
          <li>Avoid simultaneous display of multiple tooltips.</li>
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
