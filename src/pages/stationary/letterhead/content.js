import * as React from "react"
import Introduction from "./assets/introduction.svg"
import Professionalism from "./assets/professionalism.svg"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img alt="Img" className="mb-4 placeholder_img" src={Introduction} />
      <h2>Introduction to Letterhead</h2>
      <p>
        Letterheads are not just a piece of stationery; they are a vital aspect
        of a corporate business's branding, communication, and professionalism.
        They play a crucial role in shaping the way the company is perceived and
        in establishing trust with various stakeholders
      </p>

      <p>
        The significance of a letterhead in a corporate business is
        multi-faceted:
      </p>
      <ul>
        <li>
          They create a professional image. A well-designed letterhead can help
          to create a professional image for your company and make your
          communications look more polished and credible.
        </li>
        <li>
          They make it easy for people to contact you. A letterhead includes all
          of your company's contact information, so it is easy for people to get
          in touch with you if they have any questions or concerns.
        </li>
        <li>
          They promote your brand. A letterhead is a great way to promote your
          brand and make your company more recognizable. It is an opportunity to
          showcase your company's logo, colors, and overall aesthetic.
        </li>
        <li>
          They build trust. A letterhead can help to build trust with your
          customers, clients, and other stakeholders. It shows that you are a
          serious and professional company.
        </li>
      </ul>
    </section>

    <section id="professionalism" className="mb-5">
      <h2>Professionalism in letterhead</h2>
      <ul>
        <li>
          Use a neutral color scheme, such as black and white or navy blue and
          gray.
        </li>
        <li>Use the designated font to display consistency</li>
        <li>Use a consistent font size throughout your letterhead.</li>
        <li>Make sure your letterhead is well-organised and easy to read.</li>
        <li>Proofread your letterhead carefully before using it.</li>
      </ul>
      <img alt="Img" className="mt-2 placeholder_img" src={Professionalism} />
    </section>

    <section id="examples" className="mb-5">
      <h2>Examples of how letterheads can be used</h2>
      <ul>
        <li>
          Sales and marketing: Letterheads can be used on sales letters,
          marketing brochures, and other promotional materials. This can help to
          promote your brand and make your company more recognizable to
          potential customers.{" "}
        </li>
        <li>
          Customer service: Letterheads can be used on customer service letters,
          emails, and other communications. This can help to create a
          professional image and build trust with your customers.
        </li>
        <li>
          Human resources: Letterheads can be used on job postings, employment
          contracts, and other HR-related documents. This can help to create a
          professional image and make your company more attractive to potential
          employees.
        </li>
        <li>
          Financial communications: Letterheads can be used on invoices,
          statements, and other financial communications. This can help to
          create a professional image and build trust with your customers and
          clients.
        </li>
        <p>
          Overall, letterheads are an important tool for corporate companies.
          They can help to create a professional image, promote your brand, and
          build trust with your customers, clients, and other stakeholders.
        </p>
      </ul>
    </section>

    <section id="guidelines" className="mb-5">
      <h2>Guidelines for Letterheads</h2>
      <div className="guide-do mt-3">
        <h5>Do’s:</h5>
        <ol>
          <li>
            Use high-quality paper and printing. This will help to create a
            professional image for your company
          </li>
          <li>
            Include all essential contact information, such as your name,
            address, phone number, email address, and website.
          </li>
          <li>
            Make sure our letterhead is consistent with your overall branding.
            Use the same logo, colours, and fonts as you use on your website and
            other marketing materials.
          </li>
          <li>
            Use your letterhead for all of our business communications,
            including letters, memos, invoices, and presentations. This will
            help to create a cohesive and professional image for your company
          </li>
        </ol>
      </div>

      <div className="guide-dont">
        <h5>Don'ts:</h5>
        <ol>
          <li>
            Don't use too much text on your letterhead. It should be easy to
            read and scannable.
          </li>
          <li>
            Don't use low-quality paper or printing. This will make your
            letterhead look unprofessional.
          </li>
          <li>
            Don't use a letterhead that is inconsistent with your overall
            branding.
          </li>
          <li>Don't use your letterhead for personal communications</li>
        </ol>
      </div>
    </section>
  </div>
)

export default Content
