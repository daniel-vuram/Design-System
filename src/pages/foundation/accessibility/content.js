import * as React from "react"

import Atomic from "./assets/atomic.svg"

const Content = () => (
  <div>
    <section id="accessible" className="mb-5">
      <img alt="Img" className="mb-2 placeholder_img" src={Atomic} />
      <h2 className="mt-4">What is accessible design?</h2>
      <p>
        An accessible design prioritizes usability and inclusivity for
        individuals with disabilities. It ensures that all users, regardless of
        their abilities, can interact with digital products effectively.{" "}
      </p>
    </section>

    <section id="organisation">
      <h2>How it helps the organisation</h2>
      <p>
        Incorporating accessible design principles into a design system offers
        several valuable benefits to an organization. Here's how an accessible
        design in a design system can help the organization:
      </p>
      <p>
        Inclusivity and Diversity: An accessible design ensures that your
        products and services are usable by a wider range of individuals,
        including those with disabilities. This demonstrates your commitment to
        inclusivity and diversity, aligning with social responsibility and
        ethical values.
      </p>

      <ol className="theory">
        <li>
          <strong>Expanded User Base:</strong> By catering to users with
          disabilities, you tap into an underserved market segment. This can
          lead to increased adoption and usage of your products, expanding your
          user base and potential revenue.
        </li>
        <li>
          <strong>Compliance and Risk Mitigation:</strong>Incorporating
          accessible design helps your organization meet legal and regulatory
          requirements related to accessibility standards. This reduces the risk
          of legal issues, fines, and negative publicity due to non-compliance.
        </li>
        <li>
          <strong>Positive Brand Image:</strong>An organization that prioritizes
          accessible design enhances its brand image as a socially conscious and
          user-centric entity. This can lead to positive associations, customer
          loyalty, and improved reputation.
        </li>
        <li>
          <strong>Consistency and Efficiency: </strong>A design system with
          accessible components ensures consistent application of accessibility
          standards across various products and interfaces. This streamlines
          design and development processes, reduces redundancies, and improves
          efficiency.
        </li>
        <li>
          <strong>Cost Savings:</strong>Addressing accessibility early in the
          design process can reduce the need for costly retrofits later. It also
          helps prevent user errors, reducing customer support inquiries and
          associated expenses.
        </li>
        <li>
          <strong>Faster Development: </strong>Accessible design components
          within a design system are pre-built and tested, accelerating the
          development process. Developers can focus on implementing components
          without needing to address accessibility concerns from scratch.
        </li>
        <li>
          <strong>Collaboration and Communication:</strong>A design system with
          accessible design guidelines fosters better communication and
          collaboration among design and development teams. Everyone works from
          a common set of standards, leading to smoother handoffs and reduced
          misinterpretations.
        </li>
        <li>
          <strong>Efficient Scaling:</strong>As your organization grows and
          introduces new products or features, an accessible design system
          ensures a consistent approach to accessibility across these
          expansions. This scalability helps maintain a high level of user
          experience across all touchpoints.
        </li>
        <li>
          <strong>Customer Loyalty:</strong>Users appreciate products that are
          easy to use and considerate of their needs. A positive user experience
          fosters customer loyalty, repeat business, and positive word-of-mouth
          recommendations.
        </li>
        <li>
          <strong>Innovation:</strong>The constraints imposed by accessible
          design can spur creative problem-solving and innovation. Designing
          with diverse user needs in mind can lead to unique and novel solutions
          that benefit all users.
        </li>
        <li>
          <strong>Employee Morale and Pride:</strong>Employees who work for an
          organization that values accessibility feel a sense of pride and
          purpose. They are more likely to be motivated and engaged in their
          work, contributing to a positive work environment.
        </li>
      </ol>
      <p>
        By integrating accessible design into Workhall's design system, we
        create a foundation that is compliant, user-friendly, and contributes to
        the overall success and positive impact of our product.
      </p>
    </section>
  </div>
)

export default Content
