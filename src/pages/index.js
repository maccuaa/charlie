import React from "react"
import 'normalize.css';
import Layout from "../components/layout"
import SEO from "../components/seo"

import { formatDistanceStrict } from "date-fns"

const CHARLIE_BIRTHDAY = new Date(2019, 5, 19);

const IndexPage = () => {
  console.log('hello')
  return (
  <Layout>
    <SEO title="Home" />
    <h1>{`Charlie is ${formatDistanceStrict(CHARLIE_BIRTHDAY, new Date())} old`}</h1>
  </Layout>
)}

export default IndexPage
