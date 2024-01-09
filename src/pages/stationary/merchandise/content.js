import * as React from "react"
import Introduction from "./assets/introduction.svg"
import Merchandise1 from "./assets/merchandise_1.svg"
import Merchandise2 from "./assets/merchandise_2.svg"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img alt="Img" className="mb-4 placeholder_img" src={Introduction} />
      <h2>Introduction to Branded merchandise</h2>
      <p>
        Branded merchandise within a corporate company embodies more than just
        logo-emblazoned products; it's a strategic tool with multifaceted value.
        These custom items, from pens and apparel to bags and mugs, become
        tangible ambassadors of the brand, enhancing Workhall’s presence in the
        corporate world.{" "}
      </p>
    </section>

    <section id="important" className="mb-5">
      <h2>Why branded merchandise is important?</h2>
      <p>
        First and foremost, branded merchandise is a potent vehicle for brand
        awareness. When customers, employees, and even potential clients carry
        or use these items, they transform into walking billboards, extending
        the company's reach and visibility. This free advertising not only
        solidifies brand identity but also introduces it to new audiences.
        Moreover, branded merchandise fosters professionalism within the
        organisation. Providing employees with these items imparts a sense of
        belonging, reinforcing a corporate culture that values its team members.{" "}
      </p>
      <p>
        From a marketing standpoint, branded merchandise serves as an invaluable
        tool. Whether distributed at trade shows, events, or as part of
        promotional campaigns, these items engage and attract prospects. They
        create personal, lasting connections with customers, building brand
        loyalty and differentiating the company from competitors. Branded
        merchandise goes beyond the transactional, extending a personalised
        touch and leaving a profound impression. Lastly, the cost-effectiveness
        of this marketing strategy, coupled with its potential for long-term
        visibility, makes it a valuable asset in the corporate world,
        reinforcing the message that branding extends far beyond just a logo;
        it's a commitment to quality, consistency, and customer relationships.
      </p>
    </section>

    <section id="merchandise" className="mb-5">
      <h2>Our merchandise</h2>
      <p>
        At workhall we have the following merchandise which is provided to the
        employess and new joinees as a part of their welcome kit. The list
        includes
      </p>
      <ol>
        <li>Mugs with their name engraved in it</li>
        <li>Diary and Pens which have the empoyee’s name engraved in it</li>
        <li>T shirts</li>
      </ol>

      <img alt="Img" className="mt-2 placeholder_img" src={Merchandise1} />
      <img alt="Img" className="mt-2 placeholder_img" src={Merchandise2} />
    </section>
  </div>
)

export default Content
