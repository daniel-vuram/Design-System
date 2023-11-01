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

  

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
      Rich text editor has different states depending on where it is used. The
        functionalities included in the rich text editor in different areas will
        have different functionalities based on the requirements.

        Rich text editor size varies based on the tab where it is used. The size
        can relatively vary depending on the context.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>
  </div>
)

export default Content
