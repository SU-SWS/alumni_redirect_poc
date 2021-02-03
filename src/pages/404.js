import React from "react"
import { useLocation, redirectTo } from "@reach/router";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  const location = useLocation();
  const windowGlobal = typeof window !== 'undefined'

  if (windowGlobal) {
    redirectTo("https://pg-dev.stanford.edu" + location.pathname + "?" + location.search);
  }

  return (
    <Layout>
    <h1>You have reached the 404 page.</h1>
    <p>This page should redirect you to alumni.stanford.edu.</p>
    </Layout>
  )
}

export default NotFoundPage
