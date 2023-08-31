import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Sidebar from "./sidebar"
import "./apps.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Sidebar />
      <div className="wrapper">
        <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <footer>Copyright© Workhall 2023. All Rights Reserved.</footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
