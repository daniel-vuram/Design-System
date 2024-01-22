import * as React from "react"
import Introduction from "./assets/introduction.png"
import StyleGuide from "./assets/style_guide.svg"
import Design from "./assets/design.png"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img alt="Img" className="mb-4 placeholder_img" src={Introduction} />
      <h2>Introduction to ID card</h2>
      <p>
        An employee ID card is a company-issued credential containing the
        employee's identifying information. It serves various purposes,
        including providing access to the workplace, tracking attendance,
        enhancing security, and verifying an employee's identity and affiliation
        with the organization.
      </p>
    </section>

    <section id="style_guide" className="mb-5">
      <h2>Style Guide to designing ID cards</h2>
      <p>
        At workhall, every ID card is designed to encompass professionalism,
        uniformity and visibility. Every employee’s image is adjusted to black
        and white with a tint of blue for printing in order to ensure a
        consistent and standardized appearance for all employees, helping to
        maintain a cohesive corporate identity.
      </p>
      <p>
        This also helps us achieve a minimalist or monochromatic aesthetic for
        their ID cards and the blue tint helps us to convey a sense of formality
        and simplicity alligning with workhall’s brand colors.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={StyleGuide} />
    </section>

    <section id="step_by_step" className="mb-5">
      <h2>Step by step guide for ID card design</h2>
      <ol>
        <li>
          Remove the background of the image in photoshop without compromising
          the quality of the image.
        </li>
        <li>
          Add a layer property, Image &gt; Adjustments &gt; Black and White.
          Apply the values to the hues as shown in the image.
        </li>
        <li>
          Add tone highlights, Image &gt; Adjustments &gt; Color Balance to add
          a tint of blue to the image (refer the images provided below)
        </li>
        <li>The dimension for ID card is Height: 1020 pt, Width: 645 pt.</li>
      </ol>
      <p>
        Source file link :<a href="">samplefile.ai</a>
      </p>

      <img alt="Img" className="mt-2 placeholder_img" src={Design} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines for designing ID card</h2>
      <div className="guide-do mt-3">
        <h5>Do’s:</h5>
        <ol>
          <li>
            <b>Maintain Consistency:</b> Incorporate the company's branding,
            logo, and color scheme.
          </li>
          <li>
            <b>Use High-Quality Images:</b> Utilize clear and high-resolution
            employee photos with a white or solid background.
          </li>
          <li>
            <b>Include Essential Information:</b> Feature the employee's name,
            photo, unique ID on the front, along with additional info like blood
            group, emergency contact number, and Workhall address.
          </li>
          <li>
            <b>Secure Design:</b> The Workhall ID card is encrypted for entry
            access and attendance verification, serving as an entry ticket to
            leisure areas, pantry, and the food court.
          </li>
        </ol>
      </div>
      <div className="guide-dont">
        <h5>Don'ts:</h5>
        <ol>
          <li>
            <b>Avoid Clutter:</b> Keep the design clean and uncluttered for a
            professional appearance, adhering to spacing guidelines.
          </li>
          <li>
            <b>Don't Oversimplify:</b> While minimalism is good, ensure all
            crucial information is present.
          </li>
          <li>
            <b>Steer Clear of Unapproved Elements:</b> Exclude unauthorized
            graphics or elements that go against Workhall’s style guide.
          </li>
          <li>
            <b>Don't Sacrifice Quality:</b> Refrain from using low-resolution
            images or inexpensive printing methods.
          </li>
          <li>
            <b> Avoid unprofessional images:</b> The images used in the ID card
            must be straight facing, showing all the features of the person
            clearly.{" "}
          </li>
          <li>
            <b> Don't Neglect Security:</b> Don't overlook security measures
            that protect against counterfeiting or forgery.
          </li>
        </ol>
      </div>
    </section>
  </div>
)

export default Content
