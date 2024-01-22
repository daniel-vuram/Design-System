import * as React from "react"
import Introduction from "./assets/introduction.png"
import Significance from "./assets/significance.png"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img alt="Img" className="mb-4 placeholder_img" src={Introduction} />
      <h2>Introduction to brochures</h2>
      <p>
        They are typically folded into two or three panels and contain
        information such as logo, contact information, and a brief overview of
        its offerings. Brochures can be distributed at trade shows, events, and
        in-store locations. They can also be mailed directly to potential
        customers.
      </p>
      <p>
        Brochures play an important role in corporate companies for a number of
        reasons.
      </p>
      <ul>
        <li>
          They provide a tangible and memorable way to communicate information.
          Brochures can be held in someone's hands and flipped through at their
          own pace. This makes them more likely to be remembered than digital
          marketing materials, such as emails and social media posts.
        </li>
        <li>
          They can be used to target specific audiences. Brochures can be
          customised to appeal to specific demographics or interests. This
          allows businesses to reach the right people with the right message.
        </li>
        <li>
          They can be used to generate leads. Brochures can include a call to
          action, such as a URL or phone number, that encourages people to learn
          more about the company or its offerings. This can help businesses to
          generate leads and convert them into customers.
        </li>
      </ul>
    </section>

    <section id="significance" className="mb-5">
      <h2>Significance of brochures</h2>
      <ol>
        <li>
          Comprehensive Information: Brochures provide a comprehensive platform
          to communicate in-depth information, making them ideal for presenting
          a full picture of the company's offerings and value proposition.
        </li>
        <li>
          Tangible Representation: They offer a tangible, physical
          representation of the identity and offerings, which can leave a more
          lasting impression compared to digital marketing materials.
        </li>
        <li>
          Versatility: Brochures come in various formats, such as bi-fold,
          tri-fold, and booklets, making them versatile marketing tools suitable
          for different occasions and objectives.
        </li>
        <li>
          Personal Touch: Handing out brochures in face-to-face interactions or
          events can create a personal touch, which can be invaluable in
          relationship-building.
        </li>
        <li>
          Educational Aid: Brochures make it easier for customers and clients to
          understand complex information, which can be especially useful in
          industries with technical or intricate products and services.
        </li>
        <li>
          Promotion and Engagement: They actively engage customers and clients,
          fostering interest and encouraging them to explore the company's
          offerings further.
        </li>
        <li>
          Visibility: Brochures are a cost-effective way to increase the
          company's visibility and reach a broader audience, particularly at
          events, trade shows, or distributed in high-traffic areas.
        </li>
      </ol>

      <img alt="Img" className="mt-2 placeholder_img" src={Significance} />
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines for Brochure</h2>
      <div className="guide-do mt-3">
        <h5>Do’s:</h5>
        <ol>
          <li>
            Write clear and concise copy. The text on your brochure should be
            easy to read and understand. Avoid using jargon or technical terms.
          </li>
          <li>
            Use high-quality images and graphics. Visuals can make your brochure
            more engaging and visually appealing.
          </li>
          <li>
            Include a call to action. Tell people what you want them to do after
            reading your brochure. Do you want them to visit your website? Call
            you for a consultation? Sign up for your newsletter?
          </li>
          <li>
            Make sure your brochure is consistent with your overall branding.
            Use the same logo, colors, and fonts as used on your website and
            other marketing materials.
          </li>
          <li>
            Proofread your brochure carefully before printing it. Make sure
            there are no errors in grammar or spelling.
          </li>
        </ol>
      </div>

      <div className="guide-dont">
        <h5>Don'ts:</h5>
        <ol>
          <li>
            Don't overload your brochure with information. Keep your brochure
            focused on the most important information about your company or its
            offerings.
          </li>
          <li>
            Don't use too much text. Your brochure should be visually appealing,
            not text-heavy.
          </li>
          <li>
            Don't use low-quality paper or printing. This will make your
            brochure look unprofessional.
          </li>
          <li>
            Don't forget to include your contact information. Make it easy for
            people to get in touch with you if they have any questions or are
            interested in learning more.
          </li>
          <li>
            Don't use your brochure for personal communications. Brochures are a
            marketing tool, so use them to promote your business, not yourself.
          </li>
        </ol>
      </div>
    </section>
  </div>
)

export default Content
