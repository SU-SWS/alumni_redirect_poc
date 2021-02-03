import React from "react";
import { useLocation } from "@reach/router";
import { Redirect } from "gatsby-link";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  const location = useLocation();
  const windowGlobal = typeof window !== 'undefined'

  if (windowGlobal) {
    let wherto = "https://alumni.stanford.edu" + location.pathname + "?" + location.search;
    return (
      <Redirect to={wherto} />
    )
  }

  return (
    <Layout>
    <h1>You have reached the 404 page.</h1>
    <p>This page should redirect you to pg-dev.stanford.edu.</p>
    </Layout>
  )
}

export default NotFoundPage
