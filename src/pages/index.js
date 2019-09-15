import React from "react"
import { Link } from  'gatsby'
import Layout from '../components/layouts.js'
import Head from '../components/head.js'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>             
            <h1>Willkommen in Lisas kleinem Webstudio</h1>
            <p>Need a developer?<a href="contact">Contact me</a></p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>            
        </Layout>
        
    )
}

export default IndexPage