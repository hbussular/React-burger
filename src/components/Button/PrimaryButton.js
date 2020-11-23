import React from "react"
import { Button } from "react-bootstrap"
import "./PrimaryButton.css"

const PrimaryButton = ({ block, children, style }) => (
  <Button className="btn--primary" variant="primary" block={block} style={style}>
    {children}
  </Button>
)

export default PrimaryButton
