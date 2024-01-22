import * as React from "react"
import Introduction from "./assets/introduction.png"
import Print from "./assets/print.svg"

const Content = () => (
  <div>
    <section id="introduction" className="mb-5">
      <img alt="Img" className="mb-4 placeholder_img" src={Introduction} />
      <h2>Introduction</h2>
      <p>
        Workhall’s stationery guidelines in a design system are a set of rules
        for applying a brand's visual identity consistently in printed and
        digital materials. They create a harmonious and professional image,
        ensuring recognition, trust, and efficiency in communication.
      </p>
    </section>

    <section id="style_guide" className="mb-5">
      <h2>The Significance of Expanding the Brand Style Guide to Stationery</h2>
      <p>
        As our digital presence upholds a consistent design language,
        maintaining the same level of consistency in Workhall's print and
        stationery materials is equally vital. This section encompasses all
        aspects of print promotion for Workhall, ensuring that branding remains
        strong and memorable across diverse mediums and platforms in our
        increasingly visual world. Please note that social media guidelines will
        be detailed in a separate section.
      </p>
      <p>
        This document will serve as a definitive resource, offering insights,
        guidelines, and best practices to ensure that our brand's identity is
        consistently communicated through the tactile experience of printed
        materials. By embracing and adhering to these principles, we not only
        enhance our brand's recognition but also reinforce our commitment to
        professionalism and quality across all touchpoints. Let's embark on this
        journey to harmonize our design language and elevate our brand's impact
        in the physical realm.
      </p>
    </section>

    <section id="print" className="mb-5">
      <h2>Color palette for print</h2>
      <p>
        In the context of print media, utilizing identical hex codes for colors
        may not yield the intended results. Therefore, it is imperative to
        convert these hex colors into the nearest CMYK color codes to achieve
        the desired and accurate color output.
      </p>
      <img alt="Img" className="mt-2 placeholder_img" src={Print} />
    </section>
  </div>
)

export default Content
