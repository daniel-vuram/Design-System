import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => (
  <div>
    <section id="section-1" className="mb-5">
      <h2>Design system at workhall</h2>
      <p>
        At workhall, we have created this design system to ensure that the
        company's branding, visual elements, and user interface components
        remain consistent across all products, platforms, and interactions.
      </p>
      <StaticImage
        src="../images/get_started/img_1.png"
        quality={100}
        formats={["AUTO", "WEBP"]}
        alt="sidebar"
      />
    </section>
    <section id="section-3" className="mb-5">
      <h2>What we thrive to achieve</h2>
      <p>1. Flawless customer experience</p>
      <p>2. Simplify complex designs</p>
      <p>3. Futuristic scalability</p>
      <p>4. Dynamic team collaboration</p>
      <p>5. Uniform Design Consistency</p>
    </section>
  </div>
)

export default Content
