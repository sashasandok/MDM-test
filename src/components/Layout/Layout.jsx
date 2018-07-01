// react
import React from 'react'

// semantic components
import { Divider, Icon } from 'semantic-ui-react'

// prop-types
import PropTypes from 'prop-types'

// styles
import classes from './Layout.css'

const Layout = ({ children }) => (
  <div className={classes.Contain}>
    <div className={classes.Main}>{children}</div>
    <div>
      <div>
        <p className={classes.Divider}></p>
        <p className={classes.Footer}>
          <img src='../../assets/happy.png' /> by Alex_Sandok
        </p>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
