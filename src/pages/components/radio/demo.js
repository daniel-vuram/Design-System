import * as React from "react"

const Content = () => (
  <div>
    <div class="form-check mb-3">
      <input
        name="default-radio-1"
        class="form-check-input"
        type="radio"
        value=""
        id="defaultRadio1"
      />
      <label
        htmlFor="defaultRadio1"
        class="form-check-label"
        for="defaultRadio1"
      >
        Unchecked
      </label>
    </div>
    <div class="form-check mb-3">
      <input
        htmlFor="defaultRadio2"
        name="default-radio-1"
        class="form-check-input"
        type="radio"
        value=""
        id="defaultRadio2"
        checked
      />
      <label class="form-check-label" for="defaultRadio2">
        Checked
      </label>
    </div>
    <div class="form-check mb-3">
      <input
        htmlFor="disabledRadio1"
        class="form-check-input"
        type="radio"
        value=""
        id="disabledRadio1"
        disabled
      />
      <label class="form-check-label" for="disabledRadio1">
        Disabled unchecked
      </label>
    </div>
    <div class="form-check mb-3">
      <input
        class="form-check-input"
        type="radio"
        value=""
        id="disabledRadio2"
        htmlFor="disabledRadio2"
        disabled
        checked
      />
      <label class="form-check-label" for="disabledRadio2">
        Disabled checkbox
      </label>
    </div>
  </div>
)

export default Content
