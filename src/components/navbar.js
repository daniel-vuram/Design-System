import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Button from "react-bootstrap/Button"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const onClickNavbar = () => {
  var element = document.getElementById("sidebar")
  element.classList.add("sidebar-mob")
}

const onClickClose = () => {
  var element = document.getElementById("sidebar")
  element.classList.remove("sidebar-mob")
}

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="cus_top_nav navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <button
          onClick={onClickNavbar}
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarSupportedContent"
          // aria-controls="navbarSupportedContent"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <button onClick={onClickClose} className="navbar-toggler">
          close
        </button> */}

        <h4>Workhall Design system V1.0</h4>
        <Link to="/" className="top-navbar-brand" href="#">
          <svg width="140" height="24" viewBox="0 0 140 24" fill="none">
            <g id="WH_Logo">
              <path
                id="Fill 1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.5124 20.033C41.8322 20.033 39.7309 17.8312 39.7309 15.0174V14.9526C39.7309 12.0837 41.7147 10.0019 44.4477 10.0019C47.1291 10.0019 49.2292 12.2049 49.2292 15.0174V15.0834C49.2292 17.9524 47.2466 20.033 44.5124 20.033ZM35.1465 15.0164V15.0824C35.1465 20.0823 39.2316 24 44.4483 24C49.6997 24 53.8136 20.0547 53.8136 15.0164V14.9516C53.8136 9.86761 49.816 6.03394 44.513 6.03394C39.2616 6.03394 35.1465 9.9792 35.1465 15.0164Z"
                fill="white"
              />
              <path
                id="Fill 4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.7429 10.5462V6.35379H57.0933V23.5987H61.7429V17.2717C61.7429 13.1704 63.698 10.9122 67.2473 10.9122H67.3432V6.02142C64.8571 5.95302 63.161 7.16372 62.0594 9.7951L61.7429 10.5462Z"
                fill="white"
              />
              <path
                id="Fill 6"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M80.8405 6.35946L74.774 13.0117V0H70.1243V23.6044H74.774V18.3596L76.699 16.3234L76.8117 16.501L81.3487 23.6044H86.6565L79.8384 13.0933L86.3424 6.35946H80.8405Z"
                fill="white"
              />
              <path
                id="Fill 8"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M93.8069 8.78806L93.5144 9.16602V0H88.8647V23.6044H93.5144V13.9656C93.5144 11.5898 94.7083 10.2279 96.7904 10.2279C98.8378 10.2279 99.9669 11.555 99.9669 13.9656V23.6044H104.618V12.3913C104.618 8.40889 102.451 6.03189 98.821 6.03189C96.2906 6.03189 94.8665 7.42497 93.8069 8.78806Z"
                fill="white"
              />
              <path
                id="Fill 10"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M114.274 20.8166C112.524 20.8166 111.393 19.9155 111.393 18.5212V18.4564C111.393 16.8114 112.706 15.867 114.996 15.867C116.153 15.867 117.306 16.1046 118.241 16.5366L118.337 16.581V17.5709C118.337 19.4823 116.666 20.8166 114.274 20.8166ZM108.451 7.50075L109.597 11.0009C111.179 10.4285 112.488 10.0985 114.341 10.0985C116.875 10.0985 118.27 11.2984 118.27 13.475V13.9994L118.053 13.925C117.025 13.5734 115.716 13.2123 113.816 13.2123C109.424 13.2123 106.907 15.1969 106.907 18.655V18.721C106.907 22.3219 109.85 23.9334 112.767 23.9334C114.937 23.9334 116.633 23.2218 117.953 21.7579L118.238 21.4424V23.6058H122.723V13.5734C122.723 11.1604 122.101 9.3138 120.873 8.0827C119.601 6.80961 117.645 6.16406 115.061 6.16406C112.159 6.16406 110.304 6.69682 108.451 7.50075Z"
                fill="white"
              />
              <path
                id="Fill 12"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M130.911 23.6044V0H126.261V23.6044H130.911Z"
                fill="white"
              />
              <path
                id="Fill 14"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M139.489 23.6044V0H134.839V23.6044H139.489Z"
                fill="white"
              />
              <path
                id="Fill 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.5997 16.6666L22.5982 7.0974L20.1936 14.346L23.4384 23.758H27.7489L35.7956 0H30.6965L25.5997 16.6666Z"
                fill="white"
              />
              <path
                id="Fill 19"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2047 6.89461L12.3824 9.69278L10.3314 16.6666L5.23824 0H0L8.04675 23.758H12.3584L14.6647 16.9174L15.6164 14.0976L17.8316 7.52936L20.3716 0H15.2316L13.2047 6.89461Z"
                fill="white"
              />
            </g>
          </svg>
        </Link>
        <div>
          <span className="navbar-text me-2">Powered by:</span>

          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip className="tooltip" id="1">
                <nobr>HEART (House of Experience & ART)</nobr>
              </Tooltip>
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.306547 0H0V24H24V0H0.306547Z"
                fill="#FF194B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 8.06268C21 10.8586 18.7336 13.125 15.9373 13.125C13.1414 13.125 10.875 10.8586 10.875 8.06268C10.875 5.26643 13.1414 3 15.9373 3C18.7336 3 21 5.26643 21 8.06268"
                fill="white"
              />
            </svg>
          </OverlayTrigger>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
