import React, { useLayoutEffect} from "react";
import { useLocation } from "@reach/router";
import { Redirect } from "gatsby-link"

// markup
const NotFoundPage = () => {
  const location = useLocation();
  const browser = typeof window !== "undefined" && window;

  useLayoutEffect(() => {
    let dest = "https://alumni.stanford.edu" + location.pathname + "?" + location.search
    window.location = dest;
  }, [location]);

  return (
    browser && (
      <Redirect to={"https://alumni.stanford.edu" + location.pathname + "?" + location.search} />
    )
  )
}

export default NotFoundPage
