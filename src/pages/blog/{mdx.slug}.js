import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      name
      date
    }
    body
  }
}`

export default BlogPost