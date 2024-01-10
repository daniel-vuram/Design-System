import * as React from "react"
import Primary from "./assets/primary.svg"
import Slight from "./assets/secondary_light.svg"
import Sdark from "./assets/secondary_dark.svg"
import Sblack from "./assets/secondary_black.svg"
import Launcher from "./assets/launcher.svg"
import Banner from "./assets/banner.svg"
import WH_Logo_PNG from "./assets/download/WH_Logo_PNG.png"
import WH_Logo_SVG from "./assets/download/WH_Logo_SVG.svg"
import WH_Logo_Primary from "./assets/download/WH_Logo_Primary.svg"
import WH_Logo_Primary1 from "./assets/download/WH_Logo_Primary.png"
// import App_launcher_png from "./assets/download/app_launcher_png.zip"
// import App_launcher_svg1 from "./assets/download/app_launcher_svg.zip"

const Content = () => (
  <div>
    <section id="logo" className="mb-5">
      <img alt="Img" className="mb-4 placeholder_img" src={Banner} />

      <h2>What is a Logo?</h2>
      <p>
        A logo is a unique and distinctive graphical mark or symbol that
        represents a brand, company, product, or organization. It serves as a
        visual identifier and is a critical component of the brand's visual
        identity system. Logos are designed to be instantly recognizable and
        should evoke specific emotions, associations, and perceptions related to
        the brand they represent. Only the variations displayed below are
        permissible representations of our brand. Any alternative variations are
        considered invalid.
      </p>
    </section>

    <section id="about" className="mb-5">
      <h2>About Workhall logo</h2>
      <p>
        The goal of Workhall's logo is to represent the vision, mission, its
        people, and our services to the world.
      </p>
      <p>
        Workhall’s logo is a wordmark, also known as a Logotype, is a type of
        logo that primarily consists of the brand's name or a specific word,
        presented in a custom-designed and visually distinctive manner. In a
        Wordmark, the text itself becomes the logo, and it does not incorporate
        any additional symbols, icons, or graphic elements. As one can see, the
        W in Workhall has its second half in a different color than the rest of
        the font in the logo. It provides a distinction within the logo and
        represents a tick mark to give the perspective of completion and growth.
      </p>
    </section>

    <section id="primary" className="mb-5">
      <h2>Primary versions</h2>
      <p>
        The primary version of the workhall logo only consists of the wordmark
        logo. This is primarily used in digital medium with ideal light theme.
      </p>
      <div className="assets-download">
        <img alt="Img" className="placeholder_img" src={Primary} />
        <div className="download-options">
          <a
            style={{ color: "#fff" }}
            href={WH_Logo_Primary1}
            download="WH_Logo_Primary_PNG"
            className="d-flex align-items-center text-secondary"
          >
            Download PNG
          </a>
          &nbsp; |&nbsp;&nbsp;
          <a
            style={{ color: "#fff" }}
            href={WH_Logo_Primary}
            download="WH_Logo_Primary_SVG"
            className="d-flex align-items-center text-secondary"
          >
            Download SVG
          </a>
        </div>
      </div>
    </section>

    <section id="secondary" className="mb-5">
      <h2>Secondary versions</h2>
      <p>
        The secondary version of the workhall logo comes in two combinations to
        make it suited for different versions, like light theme , dark theme,
        print and other versions.
      </p>
      <div style={{ color: "#fff" }} className="assets-download mt-3">
        <img alt="Img" className="placeholder_img" src={Slight} />
        <div className="download-options">
          <a
            style={{ color: "#fff" }}
            href={WH_Logo_PNG}
            download="WH_Logo_PNG"
            className="d-flex align-items-center"
          >
            Download PNG
          </a>
          &nbsp; |&nbsp;&nbsp;
          <a
            style={{ color: "#fff" }}
            download="WH_Logo_SVG"
            href={WH_Logo_SVG}
            className="d-flex align-items-center"
          >
            Download SVG
          </a>
        </div>
      </div>

      <div style={{ color: "#fff" }} className="assets-download mt-3">
        <img alt="Img" className="placeholder_img" src={Sdark} />
        <div className="download-options">
          <a
            style={{ color: "#fff" }}
            href={WH_Logo_PNG}
            download="WH_Logo_PNG"
            className="d-flex align-items-center"
          >
            Download PNG
          </a>
          &nbsp; |&nbsp;&nbsp;
          <a
            style={{ color: "#fff" }}
            download="WH_Logo_SVG"
            href={WH_Logo_SVG}
            className="d-flex align-items-center"
          >
            Download SVG
          </a>
        </div>
      </div>
      <div style={{ color: "#fff" }} className="assets-download mt-3">
        <img alt="Img" className="placeholder_img" src={Sblack} />
        <div className="download-options">
          <a
            style={{ color: "#fff" }}
            href={WH_Logo_PNG}
            download="WH_Logo_PNG"
            className="d-flex align-items-center"
          >
            Download PNG
          </a>
          &nbsp; |&nbsp;&nbsp;
          <a
            style={{ color: "#fff" }}
            download="WH_Logo_SVG"
            href={WH_Logo_SVG}
            className="d-flex align-items-center"
          >
            Download SVG
          </a>
        </div>
      </div>
    </section>

    <section id="launcher" className="mb-5">
      <h2>App launcher icon</h2>
      <p>
        An app launcher icon, also known simply as an app icon, is a small
        graphical symbol or image that represents a application or software
        program on a user's device, typically on a smartphone, tablet, or
        computer. These icons serve several important purposes and play a
        significant role in user interaction with digital applications.
      </p>

      <h5>1. Visual Identification</h5>
      <p>
        An app launcher icon visually represents the corresponding application
        to users. It is often the first thing users see when looking for and
        accessing an app on their device.
      </p>

      <h5>2. Platform Specific design</h5>
      <p>
        Different operating systems (e.g., iOS, Android, Windows) have their own
        design guidelines for app icons. Designers and developers must adhere to
        these guidelines to ensure the icon fits seamlessly within the
        platform's user interface.
      </p>

      <h5>3. Adaptive design</h5>
      <p>
        App icons may need to adapt to different device resolutions and sizes.
        Adaptive design ensures the icon remains clear and recognizable on
        various screen types and densities.
      </p>

      <h5>4. Responsive design</h5>
      <p>
        For some platforms, app icons may need to support dynamic changes, such
        as badge notifications or animations, to provide users with additional
        information or feedback.
      </p>
      <h5>5 .User experience</h5>
      <p>
        A well-designed app icon contributes to a positive user experience. It
        should be aesthetically pleasing, conveying the app's purpose or
        function, and giving users confidence in the app's quality.
      </p>
      <h5>6. Consistency</h5>
      <p>
        App launcher icons should follow design guidelines to maintain a
        consistent and cohesive visual experience for users. This consistency
        helps users quickly find and interact with apps, especially when they
        have multiple apps installed.
      </p>
      <div className="assets-download mt-3">
        <img alt="Img" className="placeholder_img" src={Launcher} />
        <div className="download-options">
          <a
            href="./assets/download/WH_Logo.png"
            className="d-flex align-items-center"
          >
            Download PNG
          </a>
          &nbsp; |&nbsp;&nbsp;
          <a
            href="./assets/download/WH_Logo.svg"
            className="d-flex align-items-center"
          >
            Download SVG
          </a>
        </div>
      </div>
    </section>

    <section id="guidelines">
      <h2>Guidelines</h2>
      <p>
        <b> Usage Authorization:</b> Only authorized users may download and use
        Workhall's logos. A limited license is granted exclusively for editorial
        purposes.
      </p>
      <p>
        <b>Adherence to Brand Guidelines:</b> All materials using the Workhall
        logo must strictly adhere to the brand's guidelines to maintain
        consistency and integrity.
      </p>
      <p>
        <b>Commercial Use Policy:</b> Commercial use of logos or imagery without
        prior written consent from Workhall may result in legal consequences,
        including trademark and copyright infringement and state laws.
      </p>
      <p>
        <b>Prohibited Modifications:</b> Modifying the logos or imagery in any
        way is strictly prohibited and may lead to legal consequences.
      </p>
      <p>
        <b>Authorized Representation:</b> Only the variations displayed above
        are permissible representations for our brand. Any alternative
        variations are considered invalid.
      </p>
      <p>
        For detailed usage permissions or specific inquiries, contact Workhall
        for guidance.
      </p>
    </section>
  </div>
)

export default Content
