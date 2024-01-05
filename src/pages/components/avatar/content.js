import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import Examples from "./assets/examples.svg"
import Variations from "./assets/variations.svg"
import Spacing from "./assets/spacing.svg"
import Size from "./assets/size.svg"
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
        Avatars are visual representations of people or entities and are often
        displayed within lists or cards.
      </p>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="mt-2 placeholder_img" src={Anatomy} />
        </div>
        <div className="col-md-6">
          <p>Container with the following optional variations:</p>
          <ol className="ps-4">
            <li>Image</li>
            <li>Placeholder</li>
            <li>Text</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout_spacing" className="mb-5">
      <h2>Layout and spacing</h2>
      <img className="mt-2 placeholder_img" src={Spacing} />
    </section>
    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        The avatar comes in three variations: text, icon, or image. Whenever
        feasible, using images to depict individuals or organizations is
        advised. In cases where images are absent, icons from the icon library
        can serve as alternatives. The default avatar employs the person icon.
      </p>
      <img className="mt-2 placeholder_img" src={Variations} />

      <ol className="mt-3">
        <li>Individual Avatar</li>
        <li>Avatar Group</li>
      </ol>
    </section>
    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Avatars can be displayed in x-large, large, medium, small and x-small
        sizes.
      </p>
      <img className="mt-2 placeholder_img" src={Size} />
    </section>
    <section id="examples" className="mb-5">
      <h2>Examples</h2>
      <img className="mt-2 placeholder_img" src={Examples} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Place avatars alongside additional information about the people or
            companies the avatars represent.
          </li>
          <li>
            Avatars can be displayed in lists that are searchable and
            selectable.
          </li>
          <li>Use inline avatars to mention people in a sentence.</li>
          <li>Prioritize images and icons over text.</li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
