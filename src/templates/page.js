import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default ({data}) => {
    var pageDetails = data.allSitePage.edges[0].node.context;
    return (
        <Layout>
            <h2>{pageDetails.blogBody[0].header }</h2>
            <p>{pageDetails.blogBody[0].content }</p>
        </Layout>
    )
}

export const query = graphql `
    query($path: String){
        allSitePage(filter: { path: {eq: $path} }) {
            edges{
                node{
                    context{
                        blogName
                        blogBody{
                            header
                            content
                        }
                    }
                }
            }
        }
    }
`