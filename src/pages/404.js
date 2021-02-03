import React, { useLayoutEffect} from "react";
import { useLocation } from "@reach/router";

// markup
const NotFoundPage = () => {
  const location = useLocation();
  const browser = typeof window !== "undefined" && window;
  const dest = "https://alumni.stanford.edu" + location.pathname + location.search

  useLayoutEffect(() => {
    window.location = dest;
  }, [location, dest]);

  return (
    browser && (
      <script>window.location = {dest}</script>
    )
  )
}

export default NotFoundPage
