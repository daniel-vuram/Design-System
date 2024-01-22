import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import variation from "./assets/variation.png"
import layout from "./assets/layout.svg"
import size from "./assets/size.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
import Dont_2 from "./assets/don't_2.svg"
import Do_2 from "./assets/do_2.svg"
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
        Badges serve to categorize information, highlight notifications, or
        indicate status. Each badge includes:
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Badge base</li>
            <li>Avatar</li>
            <li>Label</li>
            <li>Close</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="layout_spacing" className="mb-5">
      <h2>Layout & Spacing</h2>
      <p>
        Ensure proper spacing and layout considerations for badges, including
        elements such as badge base, avatar, label, and icons.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={layout} />
    </section>
    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        The variations of chip include the following categories,with leading
        icon(image), with tailing icon, with both leading and tailing icon, with
        avatar,with icon only, with only base label, with avatar and tailing
        icon.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={variation} />
      <div className="mt-3"></div>
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Chips are available in two sizes, small and medium. When the chips are
        used inside the table, small size is used and in the rest of the cases
        the default size used is medium.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={size} />
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
          <img alt="Img" src={Do_1} className="mt-2 mb-2 placeholder_img" />

          <p>Keep label text concise and unambiguous.</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>Use buttons for actions (instead of chips).</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Do_2} className="mt-2 mb-2 placeholder_img" />

          <p>Chips should be used in a group.</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Dont_2} className="mt-2 mb-2 placeholder_img" />
          <p>Avoid using standalone chips.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Content
