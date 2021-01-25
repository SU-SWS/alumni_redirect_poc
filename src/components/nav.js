import * as React from "react"
import { Link } from "gatsby"

// markup
const Navigation = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/page-1">Page One</Link>&nbsp;|&nbsp;
      <Link to="/page-2">Page Two</Link>
    </nav>
  )
}

export default Navigation
