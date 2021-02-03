import React, { useLayoutEffect} from "react";
import { useLocation } from "@reach/router";
import Layout from "../components/layout";

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
      <Layout>
        <h1>You have reached the 404 page.</h1>
        <p>This page should redirect you to pg-dev.stanford.edu.</p>
        <script>window.location = {}</script>
      </Layout>
    )
  )
}

export default NotFoundPage
