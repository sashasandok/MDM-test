// react
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'

// components
import Layout from '../Layout/Layout'
import Load from '../Loader/Loader'

// actions
import { getPosts } from '../../actions/post-actions'

// styles
import classes from './Blog.css'
import Posts from './Posts/Posts'

class Blog extends Component {
  componentWillMount () {
    this.props.getPosts()
  }

  render () {
    const { isFetching } = this.props
    return (
      <Layout>
        <div className={classes.Blog}>
          <header className={classes.Head}>
            <h1>Test for MDM</h1>
            <div>
              <Link to="/">
                <button className={classes.Button}>
                  Home
                </button>
              </Link>
            </div>
          </header>
          <div className={classes.Posts}>
            {isFetching ? (
              <Load />
            ) : (
              <Posts posts={this.props.posts} />
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  posts: state.post.items
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

Blog.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.instanceOf(Array),
  isFetching: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
