import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Illustration from "../images/404-illustration.png"
import FournotFour from "../images/404.png"

const NotFoundPage = () => (
  <Layout>
    <div className="container page-404 text-center my-5">
      <div className="row justify-content-center align-items-center">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div className="row mt-5">
              <div className="col-lg-6 text-center text-lg-start">
                <img
                  className="img-fluid mb-5 w-75 w-lg-75 d-dark-none"
                  src={FournotFour}
                  alt="Img"
                />
                <h2 className="text-body-secondary fw-bolder mb-3">
                  Page Missing!
                </h2>
                <p className="text-body mb-3">
                  But no worries! Our ostrich is looking everywhere <br />
                  while you wait safely.{" "}
                </p>
                <button className="btn btn-lg btn-primary">
                  <Link to="/" className="navbar-brand" href="#">
                    Go Home
                  </Link>
                </button>
              </div>
              <div className="col-lg-6">
                <img alt="Img" className="img-fluid" src={Illustration} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="404: Not found" />
