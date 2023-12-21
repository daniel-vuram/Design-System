import * as React from "react"
import Layout from "../../../components/layout"
import { Seo } from "../../../components/seo"
import Scrollspy from "react-scrollspy"
import Content from "./content"
import Button from "react-bootstrap/Button"

const Page = () => (
  <Layout>
    <section className="page_header">
      <div className="title">
        <h1>Color</h1>
        <div className="btn-sec d-none">
          <a
            href="google.com"
            variant="link"
            className="d-flex align-items-center"
          >
            Source code
            <svg
              className="ms-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.17117 1.33301L6.66537 1.33301C7.03356 1.33301 7.33203 1.63149 7.33203 1.99968C7.33203 2.36786 7.03356 2.66634 6.66537 2.66634H5.1987C4.62765 2.66634 4.23945 2.66686 3.93939 2.69138C3.64711 2.71526 3.49764 2.75854 3.39338 2.81167C3.1425 2.9395 2.93852 3.14347 2.81069 3.39435C2.75756 3.49862 2.71428 3.64809 2.6904 3.94037C2.66588 4.24043 2.66537 4.62862 2.66537 5.19968V10.7997C2.66537 11.3707 2.66588 11.7589 2.6904 12.059C2.71428 12.3513 2.75756 12.5007 2.81069 12.605C2.93852 12.8559 3.14249 13.0599 3.39338 13.1877C3.49764 13.2408 3.64711 13.2841 3.93939 13.308C4.23945 13.3325 4.62765 13.333 5.1987 13.333H10.7987C11.3698 13.333 11.7579 13.3325 12.058 13.308C12.3503 13.2841 12.4998 13.2408 12.604 13.1877C12.8549 13.0599 13.0589 12.8559 13.1867 12.605C13.2398 12.5007 13.2831 12.3513 13.307 12.059C13.3315 11.7589 13.332 11.3707 13.332 10.7997V9.33301C13.332 8.96482 13.6305 8.66634 13.9987 8.66634C14.3669 8.66634 14.6654 8.96482 14.6654 9.33301V10.8272C14.6654 11.3639 14.6654 11.8068 14.6359 12.1676C14.6053 12.5423 14.5396 12.8868 14.3747 13.2103C14.1191 13.7121 13.7111 14.12 13.2093 14.3757C12.8858 14.5406 12.5413 14.6063 12.1666 14.6369C11.8058 14.6664 11.3629 14.6664 10.8262 14.6663H5.17115C4.63451 14.6664 4.19161 14.6664 3.83081 14.6369C3.45608 14.6063 3.11161 14.5406 2.78806 14.3757C2.28629 14.12 1.87834 13.7121 1.62268 13.2103C1.45782 12.8868 1.39211 12.5423 1.36149 12.1676C1.33202 11.8068 1.33202 11.3639 1.33203 10.8272V5.17214C1.33202 4.6355 1.33202 4.19259 1.36149 3.83179C1.39211 3.45706 1.45782 3.11259 1.62268 2.78903C1.87834 2.28727 2.28629 1.87932 2.78806 1.62366C3.11161 1.4588 3.45608 1.39309 3.83081 1.36247C4.19161 1.33299 4.63452 1.333 5.17117 1.33301ZM9.33202 1.99968C9.33202 1.63149 9.6305 1.33301 9.99869 1.33301H13.9987C14.3669 1.33301 14.6653 1.63149 14.6653 1.99968L14.6654 5.99968C14.6654 6.36787 14.3669 6.66635 13.9987 6.66635C13.6305 6.66635 13.332 6.36787 13.332 5.99968L13.332 3.60916L8.4701 8.47108C8.20975 8.73143 7.78764 8.73143 7.52729 8.47108C7.26694 8.21073 7.26694 7.78862 7.52729 7.52827L12.3892 2.66635H9.99869C9.6305 2.66635 9.33202 2.36787 9.33202 1.99968Z"
                fill="#0D69D4"
              />
            </svg>
          </a>
          <a variant="link" className="d-flex align-items-center">
            Figma file
            <svg
              className="ms-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.17117 1.33301L6.66537 1.33301C7.03356 1.33301 7.33203 1.63149 7.33203 1.99968C7.33203 2.36786 7.03356 2.66634 6.66537 2.66634H5.1987C4.62765 2.66634 4.23945 2.66686 3.93939 2.69138C3.64711 2.71526 3.49764 2.75854 3.39338 2.81167C3.1425 2.9395 2.93852 3.14347 2.81069 3.39435C2.75756 3.49862 2.71428 3.64809 2.6904 3.94037C2.66588 4.24043 2.66537 4.62862 2.66537 5.19968V10.7997C2.66537 11.3707 2.66588 11.7589 2.6904 12.059C2.71428 12.3513 2.75756 12.5007 2.81069 12.605C2.93852 12.8559 3.14249 13.0599 3.39338 13.1877C3.49764 13.2408 3.64711 13.2841 3.93939 13.308C4.23945 13.3325 4.62765 13.333 5.1987 13.333H10.7987C11.3698 13.333 11.7579 13.3325 12.058 13.308C12.3503 13.2841 12.4998 13.2408 12.604 13.1877C12.8549 13.0599 13.0589 12.8559 13.1867 12.605C13.2398 12.5007 13.2831 12.3513 13.307 12.059C13.3315 11.7589 13.332 11.3707 13.332 10.7997V9.33301C13.332 8.96482 13.6305 8.66634 13.9987 8.66634C14.3669 8.66634 14.6654 8.96482 14.6654 9.33301V10.8272C14.6654 11.3639 14.6654 11.8068 14.6359 12.1676C14.6053 12.5423 14.5396 12.8868 14.3747 13.2103C14.1191 13.7121 13.7111 14.12 13.2093 14.3757C12.8858 14.5406 12.5413 14.6063 12.1666 14.6369C11.8058 14.6664 11.3629 14.6664 10.8262 14.6663H5.17115C4.63451 14.6664 4.19161 14.6664 3.83081 14.6369C3.45608 14.6063 3.11161 14.5406 2.78806 14.3757C2.28629 14.12 1.87834 13.7121 1.62268 13.2103C1.45782 12.8868 1.39211 12.5423 1.36149 12.1676C1.33202 11.8068 1.33202 11.3639 1.33203 10.8272V5.17214C1.33202 4.6355 1.33202 4.19259 1.36149 3.83179C1.39211 3.45706 1.45782 3.11259 1.62268 2.78903C1.87834 2.28727 2.28629 1.87932 2.78806 1.62366C3.11161 1.4588 3.45608 1.39309 3.83081 1.36247C4.19161 1.33299 4.63452 1.333 5.17117 1.33301ZM9.33202 1.99968C9.33202 1.63149 9.6305 1.33301 9.99869 1.33301H13.9987C14.3669 1.33301 14.6653 1.63149 14.6653 1.99968L14.6654 5.99968C14.6654 6.36787 14.3669 6.66635 13.9987 6.66635C13.6305 6.66635 13.332 6.36787 13.332 5.99968L13.332 3.60916L8.4701 8.47108C8.20975 8.73143 7.78764 8.73143 7.52729 8.47108C7.26694 8.21073 7.26694 7.78862 7.52729 7.52827L12.3892 2.66635H9.99869C9.6305 2.66635 9.33202 2.36787 9.33202 1.99968Z"
                fill="#0D69D4"
              />
            </svg>
          </a>
        </div>
      </div>
      <p>
        Accessible digital design ensures that users of all different abilities
        can use and navigate an interface.{" "}
      </p>
    </section>
    <div className="content">
      <div className="row">
        <div className="col-xl-8">
          <Content />
        </div>
        <div className="col-xl-4">
          <h5 className="scrollspy_title">CONTENTS</h5>

          <Scrollspy
            className="scrollspy"
            items={["palette", "main", "indicator", "supporting", "grayscale"]}
            currentClassName="is-current"
          >
            <li>
              <a href="#palette">UI palette</a>
            </li>
            <li>
              <a href="#main">Main UI colors</a>
            </li>

            <li>
              <a href="#indicator">Indicator colors</a>
            </li>
            <li>
              <a href="#supporting">Supporting colors</a>
            </li>
            <li>
              <a href="#grayscale">Grayscale colors</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </div>
  </Layout>
)

export default Page

export const Head = () => <Seo />
