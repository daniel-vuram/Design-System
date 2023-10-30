import * as React from "react"

const Content = () => (
  <div>
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" for="defaultCheck1">
        Unchecked
      </label>
    </div>

    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck3"
        checked
      />
      <label className="form-check-label" for="defaultCheck3">
        Checked
      </label>
    </div>
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="disabledCheck1"
        disabled
      />
      <label className="form-check-label" for="disabledCheck1">
        Disabled Unchecked
      </label>
    </div>
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="disabledCheck2"
        disabled
        checked
      />
      <label className="form-check-label" for="disabledCheck2">
        Disabled Checked
      </label>
    </div>
  </div>
)

export default Content
