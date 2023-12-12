import * as React from "react"
import Table from "react-bootstrap/Table"
import Avatar1 from "./assets/1.png"
import Avatar2 from "./assets/2.png"
import Avatar3 from "./assets/3.png"

const Content = () => (
  <div className="w-100">
    <h5>Basic Table</h5>
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    <h5 className="mt-5">Listing Table</h5>
    <Table hover className="listing-table">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Created By</th>
          <th>Assigned On</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.333 3.33341C14.108 3.33341 14.4955 3.33341 14.8134 3.4186C15.6761 3.64977 16.35 4.32364 16.5812 5.18637C16.6663 5.50428 16.6663 5.89177 16.6663 6.66675V14.3334C16.6663 15.7335 16.6663 16.4336 16.3939 16.9684C16.1542 17.4388 15.7717 17.8212 15.3013 18.0609C14.7665 18.3334 14.0665 18.3334 12.6663 18.3334H7.33301C5.93288 18.3334 5.23281 18.3334 4.69803 18.0609C4.22763 17.8212 3.84517 17.4388 3.60549 16.9684C3.33301 16.4336 3.33301 15.7335 3.33301 14.3334V6.66675C3.33301 5.89177 3.33301 5.50428 3.41819 5.18637C3.64936 4.32364 4.32323 3.64977 5.18596 3.4186C5.50388 3.33341 5.89136 3.33341 6.66634 3.33341M7.49967 12.5001L9.16634 14.1667L12.9163 10.4167M7.99967 5.00008H11.9997C12.4664 5.00008 12.6997 5.00008 12.878 4.90925C13.0348 4.82936 13.1623 4.70188 13.2422 4.54507C13.333 4.36681 13.333 4.13346 13.333 3.66675V3.00008C13.333 2.53337 13.333 2.30002 13.2422 2.12176C13.1623 1.96495 13.0348 1.83747 12.878 1.75758C12.6997 1.66675 12.4664 1.66675 11.9997 1.66675H7.99967C7.53296 1.66675 7.29961 1.66675 7.12135 1.75758C6.96455 1.83747 6.83706 1.96495 6.75717 2.12176C6.66634 2.30002 6.66634 2.53337 6.66634 3.00008V3.66675C6.66634 4.13346 6.66634 4.36681 6.75717 4.54507C6.83706 4.70188 6.96455 4.82936 7.12135 4.90925C7.29961 5.00008 7.53296 5.00008 7.99967 5.00008Z"
                stroke="#959BA3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a href="" className="ms-2">
              This task is complete - click here!
            </a>
          </td>
          <td>
            <div className="avatar avatar-md me-2">
              <img src={Avatar3} alt="Avatar" className="rounded-circle" />
            </div>
          </td>
          <td>31 Jan 2023</td>
          <td>
            <span className="badge rounded-pill bg-label-danger">Today</span>
          </td>
        </tr>
        <tr>
          <td>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.333 3.33341C14.108 3.33341 14.4955 3.33341 14.8134 3.4186C15.6761 3.64977 16.35 4.32364 16.5812 5.18637C16.6663 5.50428 16.6663 5.89177 16.6663 6.66675V14.3334C16.6663 15.7335 16.6663 16.4336 16.3939 16.9684C16.1542 17.4388 15.7717 17.8212 15.3013 18.0609C14.7665 18.3334 14.0665 18.3334 12.6663 18.3334H7.33301C5.93288 18.3334 5.23281 18.3334 4.69803 18.0609C4.22763 17.8212 3.84517 17.4388 3.60549 16.9684C3.33301 16.4336 3.33301 15.7335 3.33301 14.3334V6.66675C3.33301 5.89177 3.33301 5.50428 3.41819 5.18637C3.64936 4.32364 4.32323 3.64977 5.18596 3.4186C5.50388 3.33341 5.89136 3.33341 6.66634 3.33341M7.49967 12.5001L9.16634 14.1667L12.9163 10.4167M7.99967 5.00008H11.9997C12.4664 5.00008 12.6997 5.00008 12.878 4.90925C13.0348 4.82936 13.1623 4.70188 13.2422 4.54507C13.333 4.36681 13.333 4.13346 13.333 3.66675V3.00008C13.333 2.53337 13.333 2.30002 13.2422 2.12176C13.1623 1.96495 13.0348 1.83747 12.878 1.75758C12.6997 1.66675 12.4664 1.66675 11.9997 1.66675H7.99967C7.53296 1.66675 7.29961 1.66675 7.12135 1.75758C6.96455 1.83747 6.83706 1.96495 6.75717 2.12176C6.66634 2.30002 6.66634 2.53337 6.66634 3.00008V3.66675C6.66634 4.13346 6.66634 4.36681 6.75717 4.54507C6.83706 4.70188 6.96455 4.82936 7.12135 4.90925C7.29961 5.00008 7.53296 5.00008 7.99967 5.00008Z"
                stroke="#959BA3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a href="" className="ms-2">
              This task is complete - click here!
            </a>
          </td>
          <td>
            <div className="avatar avatar-md me-2">
              <img src={Avatar2} alt="Avatar" className="rounded-circle" />
            </div>
          </td>
          <td>31 Jan 2023</td>
          <td>
            <span className="badge rounded-pill bg-label-warning">
              Due to 3 days
            </span>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default Content
