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
        <Divider />
        <p className={classes.Footer}>
          <Icon name="hand scissors" color="red" /> by Alex_Sandok
        </p>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
