import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import State2 from "./assets/state2.svg"
import Layout from "./assets/interaction.svg"
import Variation from "./assets/variation.svg"
import Icon from "./assets/icon.svg"
import Spacing from "./assets/spacing.svg"
import Dont_1 from "./assets/don't_1.svg"
import Do_1 from "./assets/do_1.svg"
import Dont_2 from "./assets/don't_2.svg"
import Do_2 from "./assets/do_2.svg"
import Size from "./assets/size.svg"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo">
        <div>
          <p>coming soon</p>
        </div>
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      <p>
        Tooltips can display definitions, clarifications, or hints. Use tooltips
        for text that is nonessential to the user journey
      </p>
      <div className="row align-items-center">
         
      <div className="col-md-12">
      <img className="mt-2 mb-2 placeholder_img" src={Anatomy} />
      </div>
      <div className="col-md-6">
          <ol className="ps-4">
            <li>Label</li>
            <li>User badge</li>
            <li>User badge Close</li>
            <li>Remaining numbers</li>
            <li>Add button</li>
            <li>Hint text</li>
          </ol>
        
      </div>
      </div>
    </section>

    <section id="layout" className="mb-5">
      <h2>Interaction</h2>
      <div className="row align-items-center">
      <div className="col-md-12">
          <ul className="ps-3">
            <li>The default state of a user picker features a plus button with a dotted circle.</li>
            <li>When the user clicks this button, a dropdown menu appears, containing a search input field and a list of users. This allows the user to manually search for individuals or type relevant letters, which dynamically filters the dropdown list to display users matching the input.
</li>
            <li>Users can select one or more users or groups by simply clicking on their names within the dropdown.</li>
            <li>The selected users are then shown as chips with a remove (X) button at the right end. These chips are displayed above the search input, making it convenient for the user to modify the list of selected users.</li>
            <li>To prevent visual clutter when a large number of users are chosen, a button with a plus icon and the count of additional selected users is shown. Clicking this button expands the view to display all the users who have been added. This design ensures a clean and user-friendly way to manage user selections in the user picker.</li>
          </ul>
        </div>
        <div className="col-md-12">
      <img className="mt-2 mb-4 placeholder_img" src={Layout} />
      </div>
      </div>
      <h3>State</h3>
      <p>
        User picker can have default, active, filled, and destructive states
      </p>
      <img className="mt-2 mb-4 placeholder_img" src={Variation} />
    </section>

      
  

    
  </div> 
)

export default Content
 