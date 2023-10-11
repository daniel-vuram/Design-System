import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Scrollspy from "react-scrollspy"
import Content from "../sections/component_library/content"

const Page = () => (
  <Layout>
    <section className="page_header">
      <h1>Get started</h1>
      <p>
        Start designing and developing beautiful product experiences with
        Workhall Design System UI foundations, components, and standards.
      </p>
    </section>
    <div className="content">
      <div className="row">
        <div className="col-md-8">
          <Content />
        </div>
        <div className="col-md-4">
          <h5 className="scrollspy_title">CONTENTS</h5>

          <Scrollspy
            className="scrollspy"
            items={[
              "section-1",
              "section-2",
              "section-3",
              "section-4",
              "section-5",
              "section-6",
            ]}
            currentClassName="is-current"
          >
            <li>
              <a href="#section-1">Design system at workhall</a>
            </li>
            <li>
              <a href="#section-2">Why do we need a design system</a>
            </li>
            <li>
              <a href="#section-3">What we thrive to achieve</a>
            </li>
            <li>
              <a href="#section-4">What is an atomic design system</a>
            </li>
            <li>
              <a href="#section-5">Utilizing an atomic design system</a>
            </li>
            <li>
              <a href="#section-6">Advantages for designers and developers</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </div>
  </Layout>
)

export default Page

export const Head = () => <Seo />
