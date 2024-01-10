import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Accordion from "react-bootstrap/Accordion"
import { useLocation } from "@reach/router"

const ACCORDION_ROUTE = {
  FOUNDATION: "foundation",
  COMPONENT: "components",
  STATIONARY: "stationary",
}

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const Sidebar = ({ siteTitle }) => {
  const location = useLocation()
  const currentAccordion = location?.pathname
  let defaultAccordionKey = null

  if (currentAccordion.includes(ACCORDION_ROUTE.FOUNDATION))
    defaultAccordionKey = "1"
  else if (currentAccordion.includes(ACCORDION_ROUTE.COMPONENT))
    defaultAccordionKey = "2"
  else if (currentAccordion.includes(ACCORDION_ROUTE.STATIONARY))
    defaultAccordionKey = "3"
  return (
    <div id="sidebar" className="sidebar mob-sidebar">
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <Link to="/" className="navbar-brand" href="#">
          <svg
            width="140"
            height="24"
            viewBox="0 0 140 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1108_2695)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.6708 16.668L21.578 3.91304L19.0933 11.087L23.5078 23.76L27.8228 23.76L35.8788 0L30.7738 0L25.6708 16.668Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.5606 6.033L44.8386 6.036C50.0086 6.168 53.8716 9.956 53.8716 14.951V15.016C53.8716 20.055 49.7536 24 44.4956 24C39.2736 24 35.1836 20.082 35.1836 15.082V15.016C35.1836 9.978 39.3036 6.033 44.5606 6.033ZM44.4956 10C41.7596 10 39.7736 12.082 39.7736 14.951V15.016C39.7736 17.83 41.8776 20.032 44.5606 20.032C47.2976 20.032 49.2826 17.952 49.2826 15.082V15.016C49.2826 12.203 47.1806 10 44.4956 10ZM61.8066 10.553L61.8066 6.36L57.1516 6.36L57.1516 23.606L61.8066 23.606L61.8066 17.28C61.8066 13.178 63.7636 10.92 67.3166 10.92H67.4126V6.028C64.9236 5.959 63.2256 7.17 62.1226 9.802L61.8066 10.552V10.553ZM80.9296 6.36L74.8566 13.013L74.8566 0L70.2026 0L70.2026 23.607L74.8566 23.607L74.8566 18.362L76.7846 16.325L76.8966 16.503L81.4386 23.607L86.7526 23.607L79.9266 13.095L86.4396 6.36L80.9296 6.36ZM93.9046 8.79L93.6126 9.167L93.6126 0L88.9576 0L88.9576 23.607L93.6126 23.607L93.6126 13.967C93.6126 11.591 94.8076 10.229 96.8926 10.229C98.9416 10.229 100.073 11.556 100.073 13.967L100.073 23.607L104.728 23.607L104.728 12.393C104.728 8.41 102.558 6.033 98.9246 6.033C96.3916 6.033 94.9656 7.426 93.9046 8.789V8.79ZM115.188 6.164L115.536 6.168C117.95 6.224 119.79 6.868 121.006 8.083C122.236 9.313 122.858 11.161 122.858 13.573L122.858 23.607L118.368 23.607L118.368 21.443L118.082 21.759C116.761 23.223 115.062 23.935 112.891 23.935C109.97 23.935 107.024 22.323 107.024 18.722V18.656C107.024 15.197 109.544 13.213 113.941 13.213C115.843 13.213 117.153 13.573 118.183 13.925L118.4 14L118.4 13.475C118.4 11.299 117.003 10.099 114.466 10.099C112.611 10.099 111.301 10.429 109.716 11.001L108.57 7.501C110.425 6.697 112.282 6.164 115.188 6.164ZM115.122 15.869C112.83 15.869 111.514 16.814 111.514 18.459V18.524C111.514 19.918 112.647 20.819 114.399 20.819C116.793 20.819 118.466 19.485 118.466 17.573V16.583L118.37 16.539C117.434 16.107 116.28 15.869 115.122 15.869ZM131.056 23.607L131.056 0L126.4 0L126.4 23.607L131.055 23.607H131.056ZM139.645 23.607L139.645 0L134.99 0L134.99 23.607L139.645 23.607Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.22 6.895L12.396 9.694L10.343 16.668L5.244 0L0 0L8.056 23.76L12.372 23.76L14.681 16.919L15.634 14.099L17.85 7.53L20.394 0L15.248 0L13.22 6.895Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1108_2695">
                <rect width="140" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>

        <div className="collapse navbar-collapse" id="main-navbar">
          <h6>DESIGN SYSTEM</h6>
          <ul className="navbar-nav mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink to="/">Get started</ExactNavLink>
            </li>

            <Accordion defaultActiveKey={defaultAccordionKey}>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Foundation</Accordion.Header>
                <Accordion.Body>
                  <ul className="submenu mb-2 mb-md-0">
                    <li className="nav-item">
                      <ExactNavLink to="/foundation/accessibility">
                        Accessibility
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/foundation/logo">Logo</ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/foundation/color">Color</ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/foundation/icon">
                        Iconography
                      </ExactNavLink>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Component library</Accordion.Header>
                <Accordion.Body>
                  <ul className="submenu mb-2 mb-md-0">
                    <li className="nav-item">
                      <ExactNavLink to="/components/accordion">
                        Accordion
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/avatar">
                        Avatar
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/breadcrumbs">
                        Breadcrumbs
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/buttons">
                        Button
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/checkbox">
                        Checkbox
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/chip">Chip</ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/date-time">
                        Date and Time Picker
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/dropdown">
                        Dropdown
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/file-uploader">
                        File Uploader
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/header">
                        Header
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/input-field">
                        Input Field
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/modal">Modal</ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/pagination">
                        Pagination
                      </ExactNavLink>
                    </li>

                    <li className="nav-item">
                      <ExactNavLink to="/components/progress-bar">
                        Progress Bar
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/radio">Radio</ExactNavLink>
                    </li>

                    <li className="nav-item">
                      <ExactNavLink to="/components/rich-text-editor">
                        Rich Text Editor
                      </ExactNavLink>
                    </li>

                    <li className="nav-item">
                      <ExactNavLink to="/components/search">
                        Search
                      </ExactNavLink>
                    </li>

                    <li className="nav-item">
                      <ExactNavLink to="/components/slider">
                        Slider
                      </ExactNavLink>
                    </li>

                    <li className="nav-item">
                      <ExactNavLink to="/components/switch">
                        Switch
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/table">Table</ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/tabs">Tabs</ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/toast">Toast</ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/tooltip">
                        Tooltip
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/components/user-picker">
                        User Picker
                      </ExactNavLink>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Stationery</Accordion.Header>
                <Accordion.Body>
                  <ul className="submenu mb-2 mb-md-0">
                    <li className="nav-item">
                      <ExactNavLink to="/stationary/introduction">
                        Introduction
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/stationary/id-card">
                        ID Card
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/stationary/presentation">
                        Presentation
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/stationary/brochure">
                        Brochure
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/stationary/merchandise">
                        Branded Merchandise
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/stationary/letterhead">
                        Letter Head
                      </ExactNavLink>
                    </li>
                    <li className="nav-item">
                      <ExactNavLink to="/stationary/business-card">
                        Business Card
                      </ExactNavLink>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <li className="nav-item d-none">
              <ExactNavLink to="/social_media">Social media</ExactNavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <StaticImage
       src="../images/sidebar_element.svg"
       quality={100}
       formats={["AUTO", "WEBP"]}
       alt="sidebar"
       className="sidebar_element"
     /> */}
    </div>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
