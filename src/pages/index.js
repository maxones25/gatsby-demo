import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            slug
            featured_media {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <h2>WordPress Posts:</h2>
      {data.allWordpressPost.edges.map(({ node }, i) => (
        <PostPreviewCard
          key={i}
          {...node}
        />
      ))}
      <h2>Links</h2>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

const PostPreviewCard = ({
  title,
  excerpt,
  featured_media,
  slug,
}) => (
    <div
      style={{
        margin: 5,
        padding: 5,
        backgroundColor: '#ddd'
      }}
    >
      <p>{title}</p>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      {featured_media && <Img fluid={featured_media.localFile.childImageSharp.fluid} />}
      <Link to={`/${slug}`}>zum Artikel</Link> <br />
    </div>
  )


export default IndexPage
