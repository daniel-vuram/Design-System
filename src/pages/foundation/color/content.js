import * as React from "react"
import Colors from "./assets/colors.png"
import Main from "./assets/main.svg"
import IndicatorR from "./assets/indicator_red.svg"
import IndicatorG from "./assets/indicator_green.svg"
import IndicatorO from "./assets/indicator_orange.svg"
import Gray from "./assets/gray.svg"

const Content = () => (
  <div>
    <section id="palette" className="mb-5">
      <img alt="Img" className="mb-5 placeholder_img" src={Colors} />
      <h2>UI palette</h2>
      <p>
        Our color palette is a selection of colors that work together to create
        consistency in products.
      </p>

      <p>
        The UI color palette for the Workhall Design System is defined by four
        overarching goals
      </p>
      <p>
        <strong>Brand Consistency-</strong> Align with and reinforce the
        Workhall brand identity, reflecting the brand's personality, values, and
        visual language across all digital and print material.
      </p>
      <p>
        <strong>Accessibility and Inclusivity -</strong>Prioritize
        accessibility, ensuring content is legible and usable by all users,
        including those with disabilities, complying with established standards
        such as WCAG (Web Content Accessibility Guidelines).
      </p>
      <p>
        <strong>User Experience Enhancement -</strong> Enhance the overall user
        experience by using visually pleasing colors that create cohesion,
        helping users navigate, understand, and engage with Workhall's digital
        products and interfaces.
      </p>
      <p>
        <strong>Versatility and Scalability -</strong> Be versatile and
        scalable, functioning effectively across various platforms, devices, and
        media, maintaining clarity, vibrancy, and impact in different contexts.
      </p>
      <p>
        These goals provide a strategic framework for selecting, using, and
        maintaining the colors within the Workhall Design System, ensuring that
        the color palette serves both the brand's identity and the practical
        needs of users in digital and real-world contexts.
      </p>
    </section>

    <section id="main" className="mb-5">
      <h2>Primary colors</h2>
      <img alt="Img" className="mt-2 mb-4 placeholder_img" src={Main} />
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
          Used for call-to-action (CTA) buttons that encourage users to take
          specific actions, such as "Sign Up," "Submit," or "Get Started."
        </li>
      </ul>

      <h5>2. Navigation Elements:</h5>
      <ul>
        <li>
          Applied to key navigation elements like primary menus, tabs, or links
          that guide users to important sections or features.
        </li>
      </ul>

      <h5>3. Selection and Highlighting:</h5>
      <ul>
        <li>
          Used to highlight selected items or elements, helping users understand
          their current state or choices.
        </li>
      </ul>

      <h5>4. Progress Indicators:</h5>
      <ul>
        <li>
          Applied to indicate progress, such as in progress bars or step
          indicators, showing users how far they are in a process or workflow.
        </li>
      </ul>

      <h5>5. Links and Interactive Elements:</h5>
      <ul>
        <li>
          Used for hyperlinks and other interactive elements within text or
          content to make them easily recognizable as clickable or tappable.
        </li>
      </ul>

      <h5>6. Primary Branding Elements:</h5>
      <ul>
        <li>
          May be used for primary branding elements, such as the company logo or
          brand name, reinforcing brand recognition.
        </li>
      </ul>

      <h5>7. Buttons for Positive Actions:</h5>
      <ul>
        <li>
          Applied for buttons that represent positive actions, like "Save,"
          "Confirm," or "Continue," indicating actions that move the user
          forward in a process.
        </li>
      </ul>

      <h5>8. Icons and Iconography:</h5>
      <ul>
        <li>
          Applied to icons and iconography that represent actions or
          interactions, providing visual cues to users.
        </li>
      </ul>
    </section>

    <section id="indicator" className="mb-5">
      <h2>Semantic colors</h2>
      <p>
        Status, progress, validation, and interactive elements. For example, red
        for errors, green for success, and yellow for warnings.
      </p>
      <img alt="Img" className=" placeholder_img" src={IndicatorR} />
      <img alt="Img" className="mt-5 placeholder_img" src={IndicatorG} />
      <img alt="Img" className="mt-5 placeholder_img" src={IndicatorO} />
    </section>

    <section id="grayscale" className="mb-5">
      <h2>Grayscale colors</h2>
      <p>
        Background, text, and non-essential elements to maintain readability and
        a clean interface. Highlight the areas where changes are made and
        wherever new content has been added.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Gray} />
    </section>
  </div>
)

export default Content
