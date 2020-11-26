import React from "react";
import { Button } from "react-bootstrap";
import "./PrimaryButton.css";

const PrimaryButton = ({ block, children, style, disabled, onClick }) => (
  <Button
    className="btn--primary"
    variant="primary"
    block={block}
    style={style}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default PrimaryButton;
