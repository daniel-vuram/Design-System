import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import Primary_header from "./assets/Primary_header.svg"
import Secondary_header from "./assets/Secondary_header.svg"
import Demo from "./demo"
import "./header.scss"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo d-block bg-light">
        <Demo />
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <p>
        The header spans the full width of the viewport and is the topmost
        element in the browser window. The header is persistent throughout the
        product experience. For each header, left-to-right translates to
        product-to-global. The left side of the header contains items relevant
        at the product level. Moving to the right along the header, the
        functions become more global. Elements in the middle of the header
        should represent system-level controls
      </p>
      <p>
        For each header, left-to-right translates to product-to-global. The left
        side of the header contains items relevant at the product level. Moving
        to the right along the header, the functions become more global.
        Elements in the middle of the header should represent system-level
        controls
      </p>
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-6">
          <h3>Admin mode</h3>
          <ol className="ps-3">
            <li> Header base</li>
            <li> Page title</li>
            <li>Search </li>
            <li>Notification</li>
            <li>User profile</li>
          </ol>
        </div>
        <div className="col-md-6">
          <h3> Normal user mode</h3>
          <ol className="ps-3">
            <li> Header base</li>
            <li> LOG/ branding</li>
            <li>Home </li>
            <li>page name</li>
            <li>Create task button</li>
            <li>Search </li>
            <li>System directory </li>
            <li>Notification</li>
            <li>User profile</li>
          </ol>
        </div>
      </div>
    </section>
    <section id="placements" className="mb-5">
      <h2>Interaction</h2>
      <p className="mt-3">
        The interaction in the header is specifically designed to give the
        utmost information to the user while interacting with the application.
        For both the admin and normal user, the interaction remains the same
        although the visuals differ. When the user scrolls to view the content
        in the screen, the breadcrumbs are hidden and only the page title is
        displayed with the tabs below.
      </p>
      <h4 className="mt-3">Primary header</h4>
      <img className="mt-2 placeholder_img" src={Primary_header} />

      <h4 className="mt-3">Secondary header</h4>
      <img className="mt-2 placeholder_img" src={Secondary_header} />
    </section>
    <section id="states" className="mb-5">
      <h2>Usage</h2>
      <p className="mt-2">
        Use a page header to create a consistent experience at the top of a full
        page. The page header provides the core information users need when
        viewing the page.
      </p>
    </section>
    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Headings should be sentence case unless they include proper nouns.
          </li>
          <li>
            Headings should be short and let users know what to expect on the
            page.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
