import * as React from "react"
import Introduction from "./assets/introduction.png"
import Layout1 from "./assets/layout_1.png"
import Layout2 from "./assets/layout_2.png"
import Layout3 from "./assets/layout_3.png"
import Layout4 from "./assets/layout_4.png"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img alt="Img" className="mb-4 placeholder_img" src={Introduction} />
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
      <img alt="Img" className="mt-2 placeholder_img" src={Layout1} />
    </section>

    <section id="timeline_1" className="mb-5">
      <h2>Timeline slides</h2>
      <p>
        Displays a chronological sequence of events or milestones, often used
        for historical or project-related presentations.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Layout2} />
    </section>
    <section id="timeline_2" className="mb-5">
      <h2>Timeline slides</h2>
      <p>
        Displays a chronological sequence of events or milestones, often used
        for historical or project-related presentations.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Layout3} />
    </section>

    <section id="timeline_3" className="mb-5">
      <h2>Timeline slides</h2>
      <p>
        Displays a chronological sequence of events or milestones, often used
        for historical or project-related presentations.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Layout4} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines for while editing presentation templates</h2>
      <div className="guide-do mt-3">
        <h5>Do’s:</h5>
        <ol>
          <li>
            <b>Maintain Consistency:</b> Ensure that all design elements, fonts,
            colors, and branding adhere to workhall’s design standards.
          </li>
          <li>
            <b>Use Clear Typography:</b> Use only inter font and maintain
            consistent font styles and sizes, and allow for proper spacing.{" "}
          </li>
          <li>
            <b>Incorporate Branding Elements:</b> Include Workhall’s logos and
            other branding elements consistently but not intrusively{" "}
          </li>
          <li>
            <b> Follow Colour Palette:</b> Stick to Workhall’s colour palette to
            maintain a professional and harmonious look
          </li>
          <li>
            <b>Use High-Quality Images:</b> Select relevant, high-quality images
            and graphics that enhance the content
          </li>
          <li>
            <b>Establish a Content Hierarchy:</b> Utilise headings, subheadings,
            and bullet points to create a clear content hierarchy
          </li>
          <li>
            <b>Present Data Effectively:</b> Employ clear charts, graphs, and
            tables with proper labelling and titles for data presentations.
          </li>
          <li>
            <b>Limit Slide Transitions and Animations:</b> Use slide transitions
            and animations sparingly to enhance the message without distraction.
          </li>
          <li>
            <b>Maintain Readability:</b> Keep text concise, avoid lengthy
            paragraphs, and use readable fonts.
          </li>
          <li>
            <b>Use White Space:</b> Allow for adequate white space to reduce
            clutter and improve visual appeal.
          </li>
          <li>
            <b>Gather Feedback:</b> Seek input from stakeholders to ensure the
            template meets their needs and expectations.
          </li>
          <li>
            <b>Provide Training:</b> Offer training and guidelines to ensure
            consistent and effective use of the templates within the
            organisation.
          </li>
        </ol>
      </div>
      <div className="guide-dont">
        <h5>Don'ts:</h5>
        <ol>
          <li>
            <b>Overcomplicate Design:</b> Avoid overly complex or cluttered
            designs that can distract from the content.
          </li>
          <li>
            <b> Stray from Brand Guidelines:</b> Do not deviate from workhall’s
            branding and design standards
          </li>
          <li>
            <b>Use Unreadable Fonts:</b> Stay away from fonts that are difficult
            to read, especially in smaller sizes.
          </li>
          <li>
            <b>Oversaturate with Branding Elements:</b> Do not overload slides
            with logos, slogans, or branding elements; they should be tastefully
            incorporated.
          </li>
          <li>
            <b> Misalign Content:</b> Avoid misalignments, overlapping elements,
            or inconsistent positioning of text and graphics.
          </li>
          <li>
            <b>Ignore the Colour Palette:</b> Resist the temptation to use
            colours outside of our approved palette.
          </li>
          <li>
            <b>Include Low-Quality Images:</b> Steer clear of low-resolution or
            irrelevant images that do not enhance the content.
          </li>
          <li>
            <b>Neglect Content Hierarchy:</b> Do not create slides with equal
            emphasis on all elements; prioritise the main message.
          </li>
          <li>
            <b>Mislabel or Leave Data Unexplained:</b> Ensure that charts,
            graphs, and tables are appropriately labeled and contextualised.
          </li>
          <li>
            <b> Neglect Slide Master:</b> Refrain from creating slides without a
            consistent master template.
          </li>
          <li>
            <b>Overuse Transitions and Animations:</b> Avoid excessive slide
            transitions and animations that can distract or become tiresome.
          </li>
          <li>
            <b>Present Dense Text:</b> Do not overwhelm slides with lengthy
            paragraphs of text.
          </li>
          <li>
            <b>Overcrowd with Elements:</b> Maintain proper spacing and avoid
            cramming too many elements onto one slide.
          </li>
          <li>
            <b> Don't Oversimplify:</b> While minimalism is good, ensure all
            crucial information is present.
          </li>
        </ol>
      </div>
    </section>
  </div>
)

export default Content
