// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// moment
import moment from 'moment'

// lodash
import { sortBy, slice, map } from 'lodash'

// styles
import classes from './Post.css'

class Post extends Component {
  render () {
    const { posts, limit } = this.props

    const sortPosts = sortBy(posts, (o) => { return moment(o.date) }).reverse()

    const limitPosts = slice(sortPosts, 0, limit)

    return map(limitPosts, onePost => (
      <div className={classes.Post} key={onePost.id}>
        <p className={classes.Date}>Posted in: <span>{onePost.date}</span></p>
        <p className={classes.Divider}></p>
        <span className={classes.Head}>
          <h3>{onePost.title}</h3>
        </span>
        <p className={classes.Body}>{onePost.body}</p>
        <p className={classes.Body}>{onePost.body}</p>
        <p className={classes.Body}>{onePost.body}</p>
      </div>
    ))
  }
}

Post.propTypes = {
  posts: PropTypes.instanceOf(Array)
}

export default Post
