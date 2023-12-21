import * as React from "react"
import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"
import Scrollspy from "react-scrollspy"
import Content from "./content"
import Header from "./header"

const Page = () => (
  <Layout>
    <Header />
    <div className="content">
      <div className="row">
        <div className="col-xl-8">
          <Content />
        </div>
        <div className="col-xl-4">
          <h5 className="scrollspy_title">CONTENTS</h5>

          <Scrollspy
            className="scrollspy"
            items={[
              "live_demo",
              "anatomy",
              "layout",
              "placement",
              "icons",
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
              <a href="#layout">Layout</a>
            </li>
            <li>
              <a href="#placement">Placement</a>
            </li>
            <li>
              <a href="#icons">Icon</a>
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
