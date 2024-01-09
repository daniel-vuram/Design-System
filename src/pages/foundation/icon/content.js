import * as React from "react"
import General from "./assets/General.svg"
import Arrows from "./assets/Arrows.svg"
import Charts from "./assets/Charts.svg"
import Layout from "./assets/layout.svg"
import Users from "./assets/Users.svg"
import Icon from "./assets/icon.png"

const Content = () => (
  <div>
    <section id="Iconography" className="mb-5">
      <img alt="Img" className="mb-5 placeholder_img" src={Icon} />

      <h2>Iconography</h2>
      <p>
        Iconography in Workhall simplifies user interactions by providing
        intuitive visual cues and representations for various functions and
        features within the application.{" "}
      </p>
      <p>
        Icons are graphical representations of actions, entities or concepts.
        These symbols are designed to be easily recognizable and convey meaning
        quickly, often without the need for text or detailed explanations.{" "}
      </p>
    </section>

    <section id="types" className="mb-5">
      <h2>Types</h2>
      <p>
        At workhall, the icons are categorized under categories like Arrows,
        Charts, communication, users, security, alerts and feedback, layout,
        media and devices etc. These grouping of icons makes it easier to access
        them under different required categories and also provide uniformity and
        accessibility throught the platform enhancing the visual communication
        facilitating navigation and communication
      </p>
      <h3 className="mt-5">General</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={General} />
      <h3 className="mt-5">Arrows</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={Arrows} />
      <h3 className="mt-5">Charts</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={Charts} />
      <h3 className="mt-5">Layout</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={Layout} />
      <h3 className="mt-5">Users</h3>
      <img alt="Img" className="mt-2 placeholder_img" src={Users} />
    </section>
  </div>
)

export default Content
