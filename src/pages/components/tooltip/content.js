import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import State2 from "./assets/state2.svg"
import Layout from "./assets/layout.svg"
import Icon from "./assets/icon.svg"
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
      <div className="row align-items-center">
      
      
        <div className="col-md-6">
          <ol className="ps-4">
            <li>Label</li>
            <li>Container</li>
            <li>Tip</li>
          </ol>
        
      </div>
      <div className="col-md-6">
      <img className="mt-2 placeholder_img" src={Anatomy} />
      </div>
      </div>
    </section>

    <section id="layout" className="mb-5">
      <h2>Layout</h2>
      <div className="row align-items-center">
      <div className="col-md-6">
          <ul className="ps-3">

            <li>Padding top: 8</li>
            <li>Padding bottom: 8</li>
            <li>Padding left: 12</li>
            <li>Padding right: 12</li>
          </ul>
        </div>
        <div className="col-md-6">
      <img className="mt-2 mb-4 placeholder_img" src={Layout} />
      </div>
      </div>
      
    </section>

    <section id="placement" className="mb-5">
      <h2>Placement</h2>
      <p className="mt-2">A tooltip is positioned in relation to its target. Placement property values are at the: top, top left, top right, top start, top end, bottom, bottom left, bottom right, bottom start, bottom end, left, left top, left bottom, start, start top, start bottom, right, right top, right bottom, end, end top, end bottom. The default placement value is at the top.</p>
      <img className="mt-2 placeholder_img" src={State} />
      <img className="mt-2 placeholder_img" src={State2} />
      <p className="mt-4">Moreover, automatic adjustment of placement can be configured to prevent tooltips from being obscured by container boundaries or the browser edge.</p>
    </section>

    <section id="icons" className="mb-5">
      <h2>Tooltips to describe icons</h2>
      <div className="row align-items-center">
      <p className="mt-2">Icons are not always easy to identify on their own. When you use components that don’t have labels — for example, icon-only action buttons and tabs — make sure to use tooltips to provide context for the icons.</p>
      <div className="col-md-6">
      <img className="mt-2 placeholder_img" src={Icon} />
        </div>
      </div>
      
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
           Text inside tooltips has to be concise.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>Avoid long text in tooltips.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={Do_2} className="mt-2 mb-2 placeholder_img" />
          <p>
          Tooltips should be used for assistive information.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Dont_2} className="mt-2 mb-2 placeholder_img" />
          <p>Avoid tooltips for showing errors.</p>
        </div>
      </div>
    </section>
  </div> 
)

export default Content
 