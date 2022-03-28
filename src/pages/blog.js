import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from "gatsby"
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.name}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
  allMdx {
    nodes {
      frontmatter {
        date
        name
      }
      id
      body
    }
  }
}
`

export default BlogPage