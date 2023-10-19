import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import Atomic from "./assets/atomic.svg"

const Content = () => (
  <div>
    <section id="accessible" className="mb-5">
      <h2>What is accessible design?</h2>
      <p>
        An accessible design prioritizes usability and inclusivity for
        individuals with disabilities. It ensures that all users, regardless of
        their abilities, can interact with digital products effectively.{" "}
      </p>
      <img className="mt-2 placeholder_img" src={Atomic} />
    </section>

    <section id="organisation" className="mb-5">
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
        By integrating accessible design into our workhall’s design system, we
        can create a foundation that is not only compliant and user-friendly but
        also contribute to the overall success and positive impact of our
        product.
      </p>
    </section>

    <section id="achieve" className="mb-5">
      <h2>What we thrive to achieve</h2>
      <ol className="ps-4">
        <li>Flawless customer experience</li>
        <li>Simplify complex designs</li>
        <li>Futuristic scalability</li>
        <li>Dynamic team collaboration</li>
        <li>Uniform Design Consistency</li>
      </ol>
    </section>

    <section id="atomic" className="mb-5">
      <h2>What is an atomic design system?</h2>
      <p>
        Atomic design is a methodology for creating design systems that
        emphasizes the creation and organization of design components at a
        modular level. It was introduced by Brad Frost and is used to streamline
        and scale the design and development process by breaking down interfaces
        into smaller, reusable parts.
      </p>
      <p>
        The term "atomic" refers to the analogy with the atomic elements in
        chemistry, where atoms are the building blocks of matter. Similarly, in
        atomic design, components are the fundamental building blocks of an
        interface. These components are organized into a hierarchy based on
        their complexity and how they combine to form larger elements.{" "}
      </p>
      <h5 className="mb-3">
        The five levels of the atomic design methodology are:
      </h5>
      <h5>1. Atoms: The Fundamental Building Blocks</h5>

      <p>
        Atoms are the elemental particles of a design system. They encompass the
        simplest UI elements, such as buttons, input fields, icons, and
        typography. These atomic components are the foundation upon which the
        entire design system is constructed. Individually, atoms might appear
        mundane, but collectively, they form the basis for more complex UI
        elements.
      </p>

      <h5>2. Molecules: Functional Combinations</h5>
      <p>
        Molecules arise from the fusion of atoms. They represent groups of atoms
        working together harmoniously to fulfill specific functions. Examples of
        molecules include search bars, which amalgamate an input field atom, a
        search button atom, and perhaps a text label atom. Molecules serve as
        the functional units that facilitate user interactions.
      </p>

      <h5>3. Organisms: Complex Components with Purpose</h5>
      <p>
        Organisms are higher-level components that combine molecules and atoms
        to create more intricate UI sections. These components, such as
        navigation bars, headers, and product cards, encapsulate meaningful
        sections of the user interface. Organisms contribute to both modularity
        and consistency, enabling designers and developers to efficiently manage
        and update complex structures.
      </p>
      <h5>4. Templates: Blueprinting Layouts</h5>
      <p>
        Templates define the layout and arrangement of organisms and molecules
        within a given screen or page. They serve as blueprints, guiding the
        placement of different components while maintaining consistency across
        various pages. Templates provide a systematic framework for designers to
        create consistent and visually appealing designs.
      </p>
      <h5>Pages: Realisation of the Design System</h5>
      <p>
        Pages are the tangible manifestations of the design system. They combine
        templates, organisms, molecules, and atoms to create fully realised user
        interfaces with real content. Pages showcase how the design system comes
        to life in actual user interactions, representing the culmination of the
        Atomic Design process.
      </p>
    </section>

    <section id="utilizing" className="mb-5">
      <h2>Utilizing an atomic design system</h2>
      <p>
        An Atomic Design System serves as a robust foundation for designing and
        developing digital products across various contexts, including:
      </p>

      <h5>1. No-Code Platforms:</h5>

      <p>
        For no-code platforms, an Atomic Design System empowers users with
        limited technical skills to create and customise design elements. It
        offers a structured framework to maintain design consistency while
        simplifying the process of interface creation.
      </p>

      <h5>2. Web and Mobile Applications:</h5>
      <p>
        In the realm of web and mobile apps, an Atomic Design System ensures
        that design elements remain consistent and visually appealing across
        different screens and devices. It expedites the design and development
        process by providing a library of pre-designed components.
      </p>

      <h5>3. Branding and Marketing:</h5>
      <p>
        The design system becomes a repository for brand elements like colours,
        typography, and logos, ensuring brand consistency across marketing
        materials and digital touch-points.
      </p>
      <h5>4. Collaborative Design and Development:</h5>
      <p>
        An Atomic Design System fosters collaboration between designers and
        developers. Designers create components while developers implement them,
        streamlining communication and enhancing efficiency.
      </p>
    </section>

    <section id="advantages" className="mb-5">
      <h2>Advantages for Designers and Developers:</h2>

      <h5>1. Designers:</h5>
      <p>
        - Maintain Consistency: Establish a unified visual language throughout
        the design.
      </p>
      <p>
        - Increase Efficiency: Quickly create mockups and prototypes using
        reusable components.
      </p>
      <p>
        - Foster Modularity: Develop and update individual components while
        preserving overall consistency.
      </p>
      <p>
        - Ensure Scalability: Easily expand the system as projects evolve and
        grow.
      </p>

      <h5>2. Developers:</h5>
      <p>
        - Enhance Efficiency: Leverage documented design components to
        accelerate development.
      </p>
      <p>
        - Enable Interoperability: Facilitate seamless collaboration between
        design and development teams.
      </p>
      <p>
        - Simplify Maintenance: Modify and update components without disrupting
        the broader design system.
      </p>
      <p>
        - Implement Responsive Design: Utilise guidelines for responsive layouts
        to ensure adaptability across devices.
      </p>

      <p>
        An Atomic Design System serves as a structured methodology for creating
        cohesive and consistent user interfaces. This approach empowers
        designers and developers to collaborate effectively, streamline their
        workflow, and produce high-quality, user-centric digital experiences.
      </p>
    </section>
  </div>
)

export default Content
