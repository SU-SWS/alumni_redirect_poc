import * as React from "react"
import Navigation from "./nav"
import MastHead from "./masthead"
import{ GlobalFooter } from "decanter-react"

// markup
const Layout = (props) => {
  return (
    <>
      <main>
        <MastHead />
        <div className="su-cc">
          <Navigation />
          {props.children}
        </div>
      </main>
      <GlobalFooter />
    </>
  )
}

export default Layout
