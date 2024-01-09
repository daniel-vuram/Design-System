import * as React from "react"
import State from "./assets/state.svg"
import "./rich-text.scss"
import Demo from "./demo"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo bg-light">
        <Demo />
      </div>
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Rich text editor size varies based on the tab where it is used. The
        functionalities included in the rich text editor in different areas will
        have different functionalities based on the requirements.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={State} />
    </section>
  </div>
)

export default Content
