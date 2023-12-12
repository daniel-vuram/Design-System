import React, { useState } from "react"
import Pagination from "react-bootstrap/Pagination"

function AdvancedExample() {
  return (
    <Pagination>
      <li className="page-item nav-btn">
        <a className="page-link" href="#">
          <svg
            width="12"
            height="12"
            className="me-2"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70404 6.08835H3.26172M3.26172 6.08835L6.48288 9.30951M3.26172 6.08835L6.48288 2.86719"
              stroke="#9E9E9E"
              stroke-width="0.922172"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Previous
        </a>
      </li>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <li className="page-item nav-btn">
        <a className="page-link" href="#">
          Next
          <svg
            width="12"
            height="12"
            className="ms-2"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.90625 5.54147H9.34857M9.34857 5.54147L6.12741 2.32031M9.34857 5.54147L6.12741 8.76263"
              stroke="#9E9E9E"
              stroke-width="0.922172"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </li>
    </Pagination>
  )
}

export default AdvancedExample
