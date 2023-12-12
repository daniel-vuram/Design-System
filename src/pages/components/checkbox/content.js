import * as React from "react"
import Anatomy from "./assets/anatomy.svg"
import State from "./assets/state.svg"
import Dont_1 from "./assets/don't_1.svg"
import Dont_2 from "./assets/don't_2.svg"
import Dont_3 from "./assets/don't_3.svg"
import Do_1 from "./assets/do_1.svg"
import Do_2 from "./assets/do_2.svg"
import Do_3 from "./assets/do_3.svg"
import Layout from "./assets/layout.svg"
import Size from "./assets/size.svg"
import Variation from "./assets/variation.svg"
import Demo from "./demo"

const Content = () => (
  <div>
    <section id="live_demo" className="mb-5">
      <h2>Live Demo</h2>
      <div className="live-demo">
        <Demo />
      </div>
    </section>

    <section id="anatomy" className="mb-5">
      <h2>Anatomy</h2>
      
      <img className="mt-2 placeholder_img" src={Anatomy} />
      <div className="row mt-3">
        <div className="col-md-12">
          <ol className="ps-4">
            <li>Checkbox</li>
            <li>Label</li>
            <li>Check box Group</li>
            
          </ol>
        </div>
      </div>
      <p>
      Checkboxes can stand alone, be grouped, or nested.
      </p>
    </section>

    <section id="appearance" className="mb-5">
      <h2>Layout and spacing</h2>
      <p className="mt-3">
      The checkbox component layout and spacing ensure consistent and balanced arrangement within the design system.
      </p>
      <div className="row">
        <div className="col-md-6">
        <img className="mt-2 placeholder_img" src={Layout} />
        </div>
        <div className="col-md-6">
        <ul>
          <li>
          checkbox and label : 12px
          </li>
        </ul>
        </div>
      </div>
      <section id="size" className="mb-5">
      <h2>Sizes</h2>
      <p className="mt-2">
      The checkbox can be integrated in two sizes, small and medium.

      </p>
      <img className="mt-2 placeholder_img" src={Size} />
      
    </section>
    
    </section>
    <section id="variation" className="mb-5">
      <h2>Variations</h2>
      
      
      <div className="mt-3">
        <ul className="ps-3">
          <li>
          Checkbox components exhibit several interaction states: enabled, hovered, and disabled
          </li>
          <li>
          The feature selection states: checked, unchecked, and indeterminate.
          </li>
          <li>
          Default configurations determine how checkboxes appear: checked, unchecked, or disabled. Notably, checkboxes must enable actions that users can undo by simply unchecking the box, ensuring reversible choices. For instance, checkboxes are suitable for filters but unsuitable for deletions. To incorporate actions, consider utilizing Button Status.
          </li>
        
        </ul>
        <img className="mt-2 placeholder_img" src={Variation} />
      </div>
    </section>


    

    <section id="guidelines" className="mb-5">
      <h2>Guidelines</h2>

      <div className="mt-3">
        <ul className="ps-3">
          <li>
          Ensure a label is consistently provided.
          </li>
          <li>
          Employ sentence case for label text.
          </li>
          <li>
          Refrain from using punctuation in labels or after checkbox entries.
          </li>
          <li>
          Opt for concise labels to facilitate swift and confident checking.
          </li>
          <li>
          Frame labels as affirmations in the checked state and negations in the unchecked state.
          </li>
          <li>
          Title a checkbox collection when its content isn't instantly clear.
          </li>
          <li>
          Enable both checkbox and label for selection.
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-md-12">
          <img src={Do_1} className="mt-2 mb-2 placeholder_img" />

          <p>
          Label and checkbox should be top aligned
          </p>
        </div>
        <div className="col-md-12">
          <img src={Dont_1} className="mt-2 mb-2 placeholder_img" />
          <p>Do not center align or bottom align label and checkbox</p>
        </div>
        <div className="col-md-6">
          <img src={Do_2} className="mt-2 mb-2 placeholder_img" />

          <p>
          Checkboxes should phrased in a clearer, positive way
          </p>
        </div>
        <div className="col-md-6">
          <img src={Dont_2} className="mt-2 mb-2 placeholder_img" />
          <p>Using negative phrasing in checkboxes can be confusing; in the example, the ambiguous phrasing doesn’t indicate whether the action performed by the user is positive or not.</p>
        </div>
        <div className="col-md-6">
          <img src={Do_3} className="mt-2 mb-2 placeholder_img" />

          <p>
          Labels should be brief
          </p>
        </div>
        <div className="col-md-6">
          <img src={Dont_3} className="mt-2 mb-2 placeholder_img" />
          <p>Do not use lengthy labels.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Content
