// react
import React from 'react'
import { Link } from 'react-router-dom'

// semantic components
import { Image, Button, Header } from 'semantic-ui-react'

// components
import Layout from '../Layout/Layout'

// stytles
import classes from './Home.css'

const home = () => (
  <Layout>
    <div className={classes.Home}>
      <Header className={classes.Head}>
        <h1>Welcome To </h1>
        <Link to="/my-blog">
          <Button compact color="grey" size="small">
            MDM Test
          </Button>
        </Link>
      </Header>
      <div className={classes.Logo}>
        <Image src="../../assets/logo.png" />
      </div>
    </div>
  </Layout>
)

export default home
