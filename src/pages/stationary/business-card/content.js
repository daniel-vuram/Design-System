import * as React from "react"
import Introduction from "./assets/introduction.svg"
import BusinesscardDesign from "./assets/businesscard-design.svg"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img className="mb-4 placeholder_img" src={Introduction} />
      <h2>Introduction to Business card</h2>
      <p>
        A business card plays an important role in a corporate company for a
        number of reasons.
      </p>
      <ul>
        <li>
          It provides a professional way to exchange contact information. When
          meeting with new clients, partners, or potential employees, a business
          card provides a quick and easy way to exchange contact information.
          This can help to build relationships and make it easier to stay in
          touch.
        </li>
        <li>
          It promotes your brand. A well-designed business card can help to
          promote your brand and make a positive first impression. It is an
          opportunity to showcase your company's logo, colors, and overall
          aesthetic.
        </li>
        <li>
          It establishes credibility. A business card can help to establish your
          credibility as a professional. It shows that you are serious about
          your work and that you are connected to a reputable company.
        </li>
      </ul>
      <p>
        In addition to these general benefits, business cards can also be used
        to achieve specific goals in a corporate setting. For example, a
        salesperson may use their business card to follow up with potential
        clients after a meeting. Or, a recruiter may use business cards to
        collect contact information from job candidates at a career fair.
      </p>
    </section>

    <section id="business-card" className="mb-5">
      <h2>How we design our Business cards </h2>
      <p>
        Business cards are meticulously crafted with a focus on print medium,
        quality, and material to mirror Workhall's objectives and vision. These
        cards are intended for distribution to our valued customers, clients,
        and internal communication partners
      </p>
      <img className="mt-2 mb-2 placeholder_img" src={BusinesscardDesign} />
      <p>
        We have selected these specific CMYK colors for printing because they
        closely align with Workhall's primary and supplementary colors. These
        additional colors are employed for text, QR codes, and other
        informational elements. In the design process, we have utilized Adobe
        Illustrator to ensure high-quality graphics suitable for printing and to
        enhance the ease of collaboration with the printing agency.
      </p>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines for Business Cards</h2>
      <div className="guide-do mt-3">
        <h5>Do’s:</h5>
        <ol>
          <li>
            Maintain simplicity and consistency: Keep the design clean and
            uncluttered for easy readability and make sure to follow workhall’s
            brand color palette.
          </li>
          <li>
            Contact Information: Make sure to include all essential details like
            your name, job title, company name, phone number, email, and
            website.
          </li>
          <li>
            High quality image and Professional Printing: Choose a quality
            printing service to ensure quality production.
          </li>
          <li>
            Test Prints: Always print and review a test card to check colours
            and layout.
          </li>
        </ol>
      </div>

      <div className="guide-dont">
        <h5>Don'ts:</h5>
        <ol>
          <li>
            Overcrowding: Avoid cramming too much information or design elements
            onto the card.
          </li>
          <li>
            Illegible Fonts: Steer clear of fonts that are difficult to read or
            too small.
          </li>
          <li>
            Low-Quality Images: Don't use poor-quality images or graphics.
          </li>
          <li>
            Skipping Test Prints: Never skip the test print phase; it's crucial
            for quality control.
          </li>
        </ol>
      </div>
    </section>
  </div>
)

export default Content
