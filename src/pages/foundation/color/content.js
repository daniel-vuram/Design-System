import * as React from "react"
import Atomic from "./assets/atomic.svg"
import Main from "./assets/main.svg"
import IndicatorR from "./assets/indicator_red.svg"
import IndicatorG from "./assets/indicator_green.svg"
import IndicatorO from "./assets/indicator_orange.svg"
import Gray from "./assets/gray.svg"

const Content = () => (
  <div>
    <section id="palette" className="mb-5">
      <h2>UI palette</h2>
      <p>
        Our color palette is a selection of colors that work together to create
        consistency in products.
      </p>
      <img className="mt-2 placeholder_img" src={Atomic} />

      <p>
        The UI color palette for the Workhall Design System is defined by four
        overarching goals
      </p>
      <p>
        <strong>Brand Consistency-</strong> The color palette should align with
        and reinforce the Workhall brand identity. It must consistently reflect
        the brand's personality, values, and visual language across all digital
        and print material.
      </p>
      <p>
        <strong>Accessibility and Inclusivity -</strong>Colors selected for the
        palette should prioritize accessibility, ensuring that content is
        legible and usable by all users, including those with disabilities. The
        palette should comply with established accessibility standards, such as
        WCAG (Web Content Accessibility Guidelines).
      </p>
      <p>
        <strong>User Experience Enhancement -</strong> The chosen colors should
        enhance the overall user experience. They should be visually pleasing,
        create a sense of cohesion, and help users navigate, understand, and
        engage with Workhall's digital products and interfaces.
      </p>
      <p>
        <strong>Versatility and Scalability -</strong> The color palette must be
        versatile and scalable, functioning effectively across various
        platforms, devices, and media. It should maintain its clarity, vibrancy,
        and impact whether viewed on small mobile screens, large desktop
        monitors, or in print materials
      </p>
      <p>
        These goals provide a strategic framework for selecting, using, and
        maintaining the colors within the Workhall Design System, ensuring that
        the color palette serves both the brand's identity and the practical
        needs of users in digital and real-world contexts
      </p>
    </section>

    <section id="main" className="mb-5">
      <h2>Main UI colors</h2>
      <img className="mt-2 mb-4 placeholder_img" src={Main} />
      <p>
        <strong>Action Blue / Primary Blue -</strong> In the Workhall
        application, the use of Primary Blue or Action Blue should be
        intentional and strategic, serving specific purposes within the user
        interface (UI). Here are some common ways in which Primary Blue or
        Action Blue can be used in a UI:
      </p>

      <h5>1. Call-to-Action Buttons:</h5>
      <ul>
        <li>
          Primary Blue can be used for call-to-action (CTA) buttons that
          encourage users to take specific actions, such as "Sign Up," "Submit,"
          or "Get Started." This color choice helps draw attention to these
          important actions, making them stand out.
        </li>
      </ul>

      <h5>2. Navigation Elements:</h5>
      <ul>
        <li>
          Use Primary Blue for key navigation elements like primary menus, tabs,
          or links that guide users to important sections or features of the
          application. It helps users easily identify where they can go to
          access specific functions.
        </li>
      </ul>

      <h5>3. Selection and Highlighting:</h5>
      <ul>
        <li>
          Action Blue can be used to highlight selected items or elements, such
          as selected menu items, checkboxes, or radio buttons. This helps users
          understand their current state or choices.
        </li>
      </ul>

      <h5>4. Progress Indicators:</h5>
      <ul>
        <li>
          Primary Blue can be used to indicate progress, such as in progress
          bars or step indicators, showing users how far they are in a process
          or workflow.
        </li>
      </ul>

      <h5>5. Links and Interactive Elements:</h5>
      <ul>
        <li>
          Use Action Blue for hyperlinks and other interactive elements within
          text or content to make them easily recognizable as clickable or
          tappable.
        </li>
      </ul>

      <h5>6. Primary Branding Elements:</h5>
      <ul>
        <li>
          In some cases, Primary Blue may be used for primary branding elements,
          such as the company logo or brand name. This reinforces brand
          recognition.
        </li>
      </ul>

      <h5>7. Buttons for Positive Actions:</h5>
      <ul>
        <li>
          Action Blue can be used for buttons that represent positive actions,
          like "Save," "Confirm," or "Continue," indicating actions that move
          the user forward in a process.
        </li>
      </ul>

      <h5>8. Icons and Iconography:</h5>
      <ul>
        <li>
          Action Blue can be applied to icons and iconography that represent
          actions or interactions, providing visual cues to users.
        </li>
      </ul>
    </section>

    <section id="indicator" className="mb-5">
      <h2>Indicator colors</h2>
      <p>
        Use them to convey status, progress, validation, and interactive
        elements. For example, red for errors, green for success, and yellow for
        warnings.
      </p>
      <img className=" placeholder_img" src={IndicatorR} />
      <img className="mt-5 placeholder_img" src={IndicatorG} />
      <img className="mt-5 placeholder_img" src={IndicatorO} />
    </section>

    <section id="supporting" className="mb-5">
      <h2>Supporting colors</h2>
      <p>
        Apply them to secondary actions, data visualization, and additional
        information to create visual hierarchy.
      </p>
    </section>

    <section id="grayscale" className="mb-5">
      <h2>Grayscale colors</h2>
      <p>
        Use grayscale tones for background, text, and non-essential elements to
        maintain readability and a clean interface
      </p>
      <img className="mt-2 placeholder_img" src={Gray} />
    </section>
  </div>
)

export default Content
