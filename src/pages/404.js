import React, { useEffect} from "react";
import { useLocation } from "@reach/router";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    let dest = "https://alumni.stanford.edu" + location.pathname + "?" + location.search
    window.location = dest;
  }, []);

  return (
    <Layout>
    <h1>You have reached the 404 page.</h1>
    <p>This page should redirect you to pg-dev.stanford.edu.</p>
    </Layout>
  )
}

export default NotFoundPage
