import * as React from "react"
import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"
import Scrollspy from "react-scrollspy"
import Content from "./content"

const Page = () => (
  <Layout>
    <section className="page_header">
      <h1>Button</h1>
      <p>
        A button is used for user interaction and action initiation across the
        interface. In simple terms buttons allow a user to take an action
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
              "live_demo",
              "anatomy",
              "layout&spacing",
              "states",
              "size&shape",
              "guidelines",
            ]}
            currentClassName="is-current"
          >
            <li>
              <a href="#live_demo">Live Demo</a>
            </li>
            <li>
              <a href="#anatomy">Anatomy</a>
            </li>
            <li>
              <a href="#layout&spacing">Layout and spacing</a>
            </li>
            <li>
              <a href="#states">States</a>
            </li>
            <li>
              <a href="#size&shape">Size and Shape</a>
            </li>
            <li>
              <a href="#guidelines">Guidelines</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </div>
  </Layout>
)

export default Page

export const Head = () => <Seo />
