import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import Variation from "./assets/variation.png"
import Variation2 from "./assets/variation2.png"
import Variation3 from "./assets/variation3.png"
import Demo from "./demo"
import "./search.scss"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo bg-light">
        <Demo />
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <img alt="Img" className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Input field</li>
            <li>Instant Search menu</li>
            <li>Clear field button</li>
            <li>Filter tabs</li>
            <li>Recently viewed</li>
          </ol>
          <p>
            The global search must be placed next to the notification icon in
            the header on all screens and is collapsible.It also contains filter
            options within the search for better search results
          </p>
        </div>
      </div>
    </section>

    <section id="variations" className="mb-5">
      <h2>Interaction</h2>
      <ul className="interaction_ol p-3">
        <li>
          The search bar should expand to the left and occupy the top right
          corner of the screen.
        </li>
        <img alt="Img" className="mt-1 mb-4 placeholder_img" src={Variation} />
        <li className="mt-5">
          Once the search value is entered, the recent search results disappear
          and relevant search results based on the value entered will be
          displayed there.
        </li>
        <img alt="Img" className="mt-1 mb-4 placeholder_img" src={Variation2} />
        <li className="mt-5">
          The user can select single or multiple filters to narrow down their
          search results.
        </li>
        <img alt="Img" className="mt-1 mb-4 placeholder_img" src={Variation3} />
        <li className="">
          The clear field button will clear all search values that were entered
          and the results that were shown along with it. Clicking anywhere
          outside the search bar will collapse the search bar.
        </li>
      </ul>
    </section>

    <section id="states" className="mb-5">
      <h2>States</h2>
      <p className="mt-3">
        Search inputs come in different states depending on how the user is
        interacting with it — Default, expanded and applied filter.
      </p>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>
      <div className="mt-3">
        <ul className="ps-3">
          <li>
            Use descriptive placeholder text within the search input field to
            guide users on what to search for
          </li>
          <li>
            Ensure the search feature is responsive and functional across
            various devices and screen sizes
          </li>
          <li>
            Organize search results in a clear and scannable format, showing
            relevant information and options.
          </li>
          <li>
            Include loading indicators or progress bars to inform users that the
            search is in progress.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Content
