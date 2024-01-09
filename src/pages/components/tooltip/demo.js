import React from "react"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

function TooltipPositionedExample() {
  return (
    <>
      {["top", "right", "bottom", "left"].map(placement => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip className="tooltip" id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button className="ms-3" variant="secondary">
            Tooltip on {placement}
          </Button>
        </OverlayTrigger>
      ))}
    </>
  )
}

export default TooltipPositionedExample
