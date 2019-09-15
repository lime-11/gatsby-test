import React from "react"
import Layout from '../components/layouts.js'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head.js'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost (
          sort: {
          fields: publishedDate,
          order : DESC
        }
        )
         { 
          edges {
            node {
              title
              slug
              publishedDate (formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    return (
        <Layout>
          <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}> 
            {data.allContentfulBlogPost.edges.map((elem) => 
                <li className={blogStyles.post}>
                   <Link to={`/blog/${elem.node.slug}`}><h2>{elem.node.title}</h2>
                   <p>{elem.node.publishedDate}</p>
                   </Link> 
                </li>)}                  
            </ol>
        </Layout>     
       
    )
}


export default BlogPage