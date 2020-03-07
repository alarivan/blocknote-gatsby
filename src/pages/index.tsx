import React from "react"

import SimpleLayout from "../components/layout/simple"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <SimpleLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/app">Go To App</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </SimpleLayout>
)

export default IndexPage
