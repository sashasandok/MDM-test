// react
import React from 'react'
import PropTypes from 'prop-types'

// components
import Post from '../Post/Post'

// styles
import classes from './Posts.css'

const posts = props => (
  <div className={classes.Posts}>
    <Post posts={props.posts} limit={props.limit} />
  </div>
)

posts.propTypes = {
  posts: PropTypes.instanceOf(Array)
}

export default posts
