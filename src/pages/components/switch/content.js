import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Variation from "./assets/variation.svg"
import Layout from "./assets/layout.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
import Dont_2 from "./assets/don't_2.svg"
import Do_2 from "./assets/do_2.svg"
import Demo from "./demo"
import "./switch.scss"

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
        Switches can perform an action immediately and without confirmation.
        Switches may be grouped for multiple
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Switch toggle</li>
            <li>Label</li>
            <li>Supporting text</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="layout" className="mb-5">
      <h2>Layout</h2>
      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={Layout} />
      <div className="col-md-6">
        <ul className="ps-3">
          <li>Inbetween Padding: 12px</li>
          <li>Content Padding bottom: 2px</li>
        </ul>
      </div>
      <div className="col-md-6"></div>
    </section>

    <section id="variants" className="mb-5">
      <h2>Variants</h2>
      <p className="mt-3">
        <b>Default Toggle Switches:</b> Use the default toggle when you need to
        specify label text in addition to the toggle action text. Default
        toggles appear in forms or within full pages of information.
      </p>
      <p>
        <b> Small Toggle:</b> Use the small toggle when you do not need to
        specify label or action text. Small toggles are more compact in size and
        are used inline with other components.
      </p>
      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={Variation} />
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">The possible states of switches</p>
      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={State} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>Set switches to either "on" or "off" states.</li>
          <li>Always accompany switches with labels or context.</li>
          <li>
            Label switches in sentence case without punctuation, limiting to six
            words or fewer.
          </li>
          <li>
            For longer labels, consider shortening and providing context in an
            outer container.
          </li>
          <li>Utilize Radio for single selections other than "on" or "off."</li>
          <li>
            Choose switches for instant responses, like "Save" or "Apply."
          </li>
          <li>
            Opt for Checkboxes for multi-select options that need further user
            steps for changes to take effect.
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img alt="Img" src={Do_1} className="mt-2 mb-2 placeholder_img" />
          <p>Label and toggle should be top aligned.</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>Do not center align or bottom align label and toggle..</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Do_2} className="mt-2 mb-2 placeholder_img" />
          <p>Toggle should be used on their own to define their value.</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Dont_2} className="mt-2 mb-2 placeholder_img" />
          <p>
            Using negative phrasing in checkboxes can be confusing; in the
            example, the ambiguous phrasing doesn’t indicate whether the action
            performed by the user is positive or not.
          </p>
        </div>
      </div>
    </section>
  </div>
)

export default Content
