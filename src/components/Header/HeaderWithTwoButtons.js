import React from "react"
import PrimaryButton from "../Button/PrimaryButton"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons"

import "./HeaderWithTwoButtons.css"

const HeaderWithTwoButtons = () => (
  <div className="header-with-two-buttons">
    <PrimaryButton style={{ paddingTop: 5, paddingBottom: 5 }}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </PrimaryButton>
    <PrimaryButton style={{ float: "right", paddingTop: 5, paddingBottom: 5 }}>
      <FontAwesomeIcon icon={faTimes} />
    </PrimaryButton>
  </div>
)

export default HeaderWithTwoButtons
