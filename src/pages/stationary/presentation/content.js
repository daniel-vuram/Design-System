import * as React from "react"
import Introduction from "./assets/introduction.svg"
import Layout1 from "./assets/layout_1.svg"
import Layout2 from "./assets/layout_2.svg"
import Layout3 from "./assets/layout_3.svg"
import Layout4 from "./assets/layout_4.svg"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img className="mb-4 placeholder_img" src={Introduction} />
      <h2>Introduction</h2>
      <p>
        Design templates for workhall presentation encompass 75 fundamental
        layouts that pre-configure essential elements like fonts, sizes,
        spacing, and colors. These templates, aligned with Workhall's style
        guide, ensure cohesive and uniform visuals across various communication
        contexts. They empower the creation of limitless design variations,
        suitable for a wide array of purposes, such as business presentations,
        knowledge sharing, onboarding, and more. The aim is to maintain a
        consistent and professional brand image throughout all communication
        platforms.
      </p>
    </section>

    <section id="layouts_specialised" className="mb-5">
      <h2>Layouts and Specialised Slides for Engaging Content Delivery</h2>
      <p>
        Title and content slides within our template collection offer the
        flexibility of one, two, and three-column layouts, with easy access via
        the Google Presentation link provided on this page. In addition to these
        versatile options, we've curated a set of specialised templates for
        various data representations. These include agenda slides, timelines,
        data and chart slides, quote slides, comparison slides, as well as
        timeline and infographic templates. The usage of these templates can be
        tailored to the specific needs of your content, your target audience,
        and the objectives of your presentation.
      </p>
      <p>
        By leveraging this comprehensive presentation template collection, you
        can craft an impactful presentation that not only sustains audience
        engagement but also delivers information in a lucid and compelling
        manner.
      </p>
      <img className="mt-2 placeholder_img" src={Layout1} />
    </section>

    <section id="timeline_1" className="mb-5">
      <h2>Timeline slides</h2>
      <p>
        Displays a chronological sequence of events or milestones, often used
        for historical or project-related presentations.
      </p>
      <img className="mt-2 placeholder_img" src={Layout2} />
    </section>
    <section id="timeline_2" className="mb-5">
      <h2>Timeline slides</h2>
      <p>
        Displays a chronological sequence of events or milestones, often used
        for historical or project-related presentations.
      </p>
      <img className="mt-2 placeholder_img" src={Layout3} />
    </section>

    <section id="timeline_3" className="mb-5">
      <h2>Timeline slides</h2>
      <p>
        Displays a chronological sequence of events or milestones, often used
        for historical or project-related presentations.
      </p>
      <img className="mt-2 placeholder_img" src={Layout4} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines for while editing presentation templates</h2>
      <div className="guide-do mt-3">
        <h5>Do’s:</h5>
        <ol>
          <li>
            Maintain Consistency: Ensure that all design elements, fonts,
            colors, and branding adhere to workhall’s design standards.
          </li>
          <li>
            Use Clear Typography: Use only inter font and maintain consistent
            font styles and sizes, and allow for proper spacing.{" "}
          </li>
          <li>
            Incorporate Branding Elements: Include Workhall’s logos and other
            branding elements consistently but not intrusively{" "}
          </li>
          <li>
            Follow Colour Palette: Stick to Workhall’s colour palette to
            maintain a professional and harmonious look
          </li>
          <li>
            Use High-Quality Images: Select relevant, high-quality images and
            graphics that enhance the content
          </li>
          <li>
            Establish a Content Hierarchy: Utilise headings, subheadings, and
            bullet points to create a clear content hierarchy
          </li>
          <li>
            Present Data Effectively: Employ clear charts, graphs, and tables
            with proper labelling and titles for data presentations.
          </li>
          <li>
            Limit Slide Transitions and Animations: Use slide transitions and
            animations sparingly to enhance the message without distraction.
          </li>
          <li>
            Maintain Readability: Keep text concise, avoid lengthy paragraphs,
            and use readable fonts.
          </li>
          <li>
            Use White Space: Allow for adequate white space to reduce clutter
            and improve visual appeal.
          </li>
          <li>
            Gather Feedback: Seek input from stakeholders to ensure the template
            meets their needs and expectations.
          </li>
          <li>
            Provide Training: Offer training and guidelines to ensure consistent
            and effective use of the templates within the organisation.
          </li>
        </ol>
      </div>
      <div className="guide-dont">
        <h5>Don'ts:</h5>
        <ol>
          <li>
            Overcomplicate Design: Avoid overly complex or cluttered designs
            that can distract from the content.
          </li>
          <li>
            Stray from Brand Guidelines: Do not deviate from workhall’s branding
            and design standards
          </li>
          <li>
            Use Unreadable Fonts:Stay away from fonts that are difficult to
            read, especially in smaller sizes.
          </li>
          <li>
            Oversaturate with Branding Elements: Do not overload slides with
            logos, slogans, or branding elements; they should be tastefully
            incorporated.
          </li>
          <li>
            Misalign Content:Avoid misalignments, overlapping elements, or
            inconsistent positioning of text and graphics.
          </li>
          <li>
            Ignore the Colour Palette: Resist the temptation to use colours
            outside of our approved palette.
          </li>
          <li>
            Include Low-Quality Images: Steer clear of low-resolution or
            irrelevant images that do not enhance the content.
          </li>
          <li>
            Neglect Content Hierarchy: Do not create slides with equal emphasis
            on all elements; prioritise the main message.
          </li>
          <li>
            Mislabel or Leave Data Unexplained: Ensure that charts, graphs, and
            tables are appropriately labeled and contextualised.
          </li>
          <li>
            Neglect Slide Master: Refrain from creating slides without a
            consistent master template.
          </li>
          <li>
            Overuse Transitions and Animations: Avoid excessive slide
            transitions and animations that can distract or become tiresome.
          </li>
          <li>
            Present Dense Text: Do not overwhelm slides with lengthy paragraphs
            of text.
          </li>
          <li>
            Overcrowd with Elements:Maintain proper spacing and avoid cramming
            too many elements onto one slide.
          </li>
          <li>
            Don't Oversimplify: While minimalism is good, ensure all crucial
            information is present.
          </li>
        </ol>
      </div>
    </section>
  </div>
)

export default Content
