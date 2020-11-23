import React from "react"
import "./Layout.css"

/**
 * HeaderComponent (existe?) E (<div></div>) logo, <div></div> é renderizado. Lembrando que o argumento <div></div> sempre é verdadeiro.
 */

const Layout = ({ children, headerComponent: HeaderComponent }) => (
  <div className="layout">
    <div className="layout__portrait">
      {HeaderComponent && (
        <div className="layout__header">
          <HeaderComponent />
        </div>
      )}
      {children}
    </div>
  </div>
)

export default Layout
