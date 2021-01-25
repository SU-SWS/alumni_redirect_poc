import React from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  const location = useLocation();
  const windowGlobal = typeof window !== 'undefined'

  if (windowGlobal) {
    navigate("https://alumni.stanford.edu" + location.pathname + "?" + location.search);
    return null
  }

  return (
    <Layout>
    <h1>You have reached the 404 page.</h1>
    <p>This page should redirect you to alumni.stanford.edu.</p>
    </Layout>
  )
}

export default NotFoundPage
