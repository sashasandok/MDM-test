// react
import React from 'react'
import { Link } from 'react-router-dom'

// components
import Layout from '../Layout/Layout'

// stytles
import classes from './Home.css'

const home = () => (
  <Layout>
    <div className={classes.Home}>
      <header className={classes.Head}>
        <h1>Welcome To </h1>
        <Link to="/test">
          <button className={classes.Button}>Blog</button>
        </Link>
      </header>
      <div className={classes.Logo}>
        <img src="../../assets/logo.png" />
      </div>
    </div>
  </Layout>
)

export default home
