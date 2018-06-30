// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// semantic components
import { Divider } from 'semantic-ui-react'

// moment
import moment from 'moment'

// styles
import classes from './Post.css'

class Post extends Component {
  render () {
    const { posts } = this.props
    return posts.map(onePost => (
      <div className={classes.Post} key={onePost.id}>
        <span>{onePost.date}</span>
        {console.log(onePost.date)}
        <Divider />
        <span className={classes.Head}>
          <h3>{onePost.title}</h3>
        </span>
        <p>{onePost.body}</p>
      </div>
    ))
  }
}

Post.propTypes = {
  posts: PropTypes.instanceOf(Array)
}

export default Post
