import * as React from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {

  // Get out of the url and keep track of specific utm parameters.
  const location = useLocation();
  navigate("https://alumni.stanford.edu/" + location.pathname + "?" + location.search);

  return (
    <Layout>
    <h1>You have reached the 404 page.</h1>
    <p>This page should redirect you to alumni.stanford.edu.</p>
    </Layout>
  )
}

export default NotFoundPage
