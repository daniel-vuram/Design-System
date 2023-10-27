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
        <div className="col-xxl-8">
          <Content />
        </div>
        <div className="col-xxl-4">
          <h5 className="scrollspy_title">CONTENTS</h5>

          <Scrollspy
            className="scrollspy"
            items={[
              "live_demo",
              "anatomy",
              "variations",
              "states",
              "size",
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
              <a href="#variations">Variations</a>
            </li>
            <li>
              <a href="#states">States</a>
            </li>
            <li>
              <a href="#size">Size</a>
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
