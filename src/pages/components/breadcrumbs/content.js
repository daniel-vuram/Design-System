import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
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
        Accordions can be used to group and hide content to keep an interface
        clean and reduce clutter. Accordions can be used to display only one or
        multiple panels at a time, depending on the use case.
      </p>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
        </div>
        <div className="col-md-6">
          <ol className="ps-4">
            <li>Page title and link</li>
            <li>Hover state</li>
            <li>Separator</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="states" className="mb-5">
      <h2>Interaction</h2>
      <ol className="ps-3">
        <li>
          Breadcrumb has five states available for breadcrumb items — enabled,
          hover, active, focus, and read-only.
        </li>
        <li className="inter mt-2">
          If a breadcrumb bar will exceed the content width one option is to
          wrap the full breadcrumb trail to allow overflow to the next line.
        </li>
      </ol>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Use only when the navigation has more than two levels of depth.
          </li>
          <li>
            Use only when it’s necessary to inform users of their location.
          </li>
          <li>
            Place breadcrumbs in the top left corner, typically above the page
            title.
          </li>
          <li>
            Breadcrumbs are especially useful when users are likely to have
            landed on the page from an outside source.
          </li>
          <li>
            Show progress from the highest navigation level to the lowest,
            without skipping a step.
          </li>
          <li>
            Use the exact section names. For example, don’t shorten My
            Applications to Applications.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
