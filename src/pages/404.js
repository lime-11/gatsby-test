import React from 'react'
import {Link} from 'gatsby'
import Head from '../components/head.js'

import Layout from '../components/layouts.js'

const NotFound = () => {
    return (
       <Layout>
           <Head title="404" />
           <h1>Page not found</h1>
           <p><Link to="/">Head home</Link></p>
       </Layout> 
    )
}


export default NotFound