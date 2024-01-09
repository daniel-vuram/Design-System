import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Type from "./assets/type.svg"
import Layout from "./assets/layout.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
import Dont_2 from "./assets/don't_2.svg"
import Do_2 from "./assets/do_2.svg"
import Demo from "./demo"
import "./tab.scss"

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
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Active Tab Item</li>
            <li>Other Tab Item</li>
            <li>Base Stick</li>
            <li>Tab Group</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="layout" className="mb-5">
      <h2>Layout</h2>
      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={Layout} />
      <ul className="ps-3">
        <li>Padding top: 4</li>
        <li>Padding bottom: 4</li>
        <li>Individual item spacing: 20px</li>
      </ul>
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">
        Tab items have four states available – enabled, hovered, active and
        disabled. When a tab item is active the container displays the content
        for that tab. Only one tab item within a tab group can be active.
      </p>
      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={State} />
      <ol className="ps-4">
        <li>Active Tab Item</li>
        <li>Hover</li>
        <li>Pressed</li>
        <li>Disabled</li>
      </ol>
    </section>

    <section id="types" className="mb-5">
      <h2>Type</h2>
      <p className="mt-2">Tabs can be displayed in four variations.</p>
      <img alt="Img" className="mt-2 placeholder_img" src={Type} />

      <ol className="ps-4 mt-4">
        <li>Active</li>
        <li>Inline</li>
        <li>Stacked</li>
        <li>Icon True</li>
      </ol>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>Avoid placing a tab group inside another tab group.</li>
          <li>
            Ensure a clear connection between tabs and their respective content
            by distinctly separating the container.
          </li>
          <li>For sequential content, opt for steps instead of tabs.</li>
          <li>Keep tab labels brief, adhering to the writing guidelines.</li>
          <li>Do not use punctuation in tab labels.</li>
          <li>Refrain from truncating tab labels.</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img alt="Img" src={Do_1} className="mt-2 mb-2 placeholder_img" />
          <p>Tabs make the most sense when there are at least two sections.</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>
            Do not use only tabs for only one section. Use Navigation bars with
            Large or Small Title variants.
          </p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Do_2} className="mt-2 mb-2 placeholder_img" />
          <p>Only one section of the tab can be active at a time.</p>
        </div>
        <div className="col-md-6">
          <img alt="Img" src={Dont_2} className="mt-2 mb-2 placeholder_img" />
          <p>Two sections can not be active at once.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Content
