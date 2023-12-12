import * as React from "react"

const Content = () => (
  <div>
    <div className="select">
      <div className="selectBtn" data-type="firstOption">
        First option
      </div>
      <div className="selectDropdown">
        <div className="option" data-type="firstOption">
          First option
        </div>
        <div className="option" data-type="secondOption">
          Second option
        </div>
        <div className="option" data-type="thirdOption">
          Third option
        </div>
      </div>
    </div>
  </div>
)

export default Content
