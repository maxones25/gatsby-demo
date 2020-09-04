import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h2>WordPress Posts:</h2>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div
          style={{
            margin: 5,
            padding: 5,
            backgroundColor: '#ddd'
          }}
        >
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      <h2>Links</h2>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}


export default IndexPage
