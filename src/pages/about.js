import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layouts.js'
import Head from '../components/head.js'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>Kleines Webstudio von Lisa.</p>
            <p><Link to="/contact">Contact me</Link></p>
        </Layout>
            
    )
}

export default AboutPage