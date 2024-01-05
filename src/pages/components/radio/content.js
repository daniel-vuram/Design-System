import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Spacing from "./assets/spacing.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
import Layout from "./assets/layout.svg"
import Dont_2 from "./assets/don't_2.svg"
import Dont_3 from "./assets/don't_3.svg"
import Do_2 from "./assets/do_2.svg"
import Do_3 from "./assets/do_3.svg"
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
      <p>Radio button can stand alone, be grouped, or nested</p>
      <img className="mt-2 mb-4 placeholder_img" src={Anatomy} />
      <ol>
        <li>Checkbox</li>
        <li>Text</li>
      </ol>
    </section>
    <section id="layout" className="mb-5">
      <h2>Layout and spacing</h2>
      <p className="mt-3">
        The radio component layout and spacing ensure consistent and balanced
        arrangement within the design system.
      </p>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img className="mt-2 mb-4 placeholder_img" src={Layout} />
        </div>
        <div className="col-md-6">
          <ul>
            <li>Padding : 12px</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="variations" className="mb-5">
      <h2>Variations</h2>
      <p className="mt-2">
        Radio buttons exhibit four states: unselected, selected, disabled, or
        erroneous. Exclusive selection is maintained within a radio button
        group. In cases allowing multiple selections, opt for checkboxes or
        multi-select options.
      </p>
      <img className="mt-2 placeholder_img" src={State} />
    </section>

    <section id="size" className="mb-5">
      <h2>Size</h2>
      <p className="mt-2">
        Radio can be integrated in two sizes, small and medium.
      </p>
      <img className="mt-2 placeholder_img" src={Size} />
      <ol className="size p-3">
        <li>small size : sm</li>
        <li>Medium size : md</li>
      </ol>
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>Only a single option within a radio group can be chosen.</li>
          <li>
            If you have two options representing an on/off setting, think about
            using a Switch instead.
          </li>
          <li>
            Arrange the options in a contextually appropriate logical order,
            which could involve methods like alphabetical sorting or
            prioritization.
          </li>
          <li>Ensure that a label is always provided for each radio button.</li>
          <li>
            If the list contains more than ten options, contemplate using a
            Select element.
          </li>
          <li>
            If you have only two or three options with concise labels, think
            about using a Button Select approach.
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-md-12">
          <img src={Do_1} className="mt-2 mb-2 placeholder_img" />
          <p>Label and checkbox should be top aligned</p>
        </div>
        <div className="col-md-12">
          <img src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>Do not center align or bottom align label and checkbox</p>
        </div>
        <div className="col-md-6">
          <img src={Do_2} className="mt-2 mb-2 placeholder_img" />
          <p>Checkboxes should phrased in a clearer, positive way</p>
        </div>
        <div className="col-md-6">
          <img src={Dont_2} className="mt-2 mb-2 placeholder_img" />
          <p>
            Using negative phrasing in checkboxes can be confusing; in the
            example, the ambiguous phrasing doesn’t indicate whether the action
            performed by the user is positive or not
          </p>
        </div>
        <div className="col-md-6">
          <img src={Do_3} className="mt-2 mb-2 placeholder_img" />
          <p>Labels should be brief</p>
        </div>
        <div className="col-md-6">
          <img src={Dont_3} className="mt-2 mb-2 placeholder_img" />
          <p>Do not use lengthy labels</p>
        </div>
      </div>
    </section>
  </div>
)

export default Content
