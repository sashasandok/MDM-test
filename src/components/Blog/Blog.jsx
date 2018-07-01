// react
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'

// components
import Layout from '../Layout/Layout'
import Load from '../Loader/Loader'
import Modal from '../Modal/Modal'
import NewPost from './NewPost/NewPost'

// actions
import { getPosts, deletePost } from '../../actions/post-actions'

// styles
import classes from './Blog.css'
import Posts from './Posts/Posts'

class Blog extends Component {
  state = {
    isOpenModal: false
  }
  componentWillMount () {
    this.props.getPosts()
  }

  openModalHandler = () => {
    this.setState({
      isOpenModal: true
    })
  }

  closedModalHandler = () => {
    this.setState({
      isOpenModal: false
    })
  }

  render () {
    const { isFetching } = this.props
    return (
      <Layout>
        <Modal show={this.state.isOpenModal} closed={this.closedModalHandler}>
          <NewPost />
        </Modal>
        <div className={classes.Blog}>
          <header className={classes.Head}>
            <h1>TEST for MDM</h1>
            <div>
              <Link to="/">
                <button className={classes.Button}>
                  went home
                </button>
              </Link>
              <button
                onClick={this.openModalHandler}
                className={classes.Button}>
                New Post
              </button>
            </div>
          </header>
          <div className={classes.Posts}>
            {isFetching ? (
              <Load />
            ) : (
              <Posts posts={this.props.posts} />
            )}
          </div>
          <div className={classes.BottomSide}>
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
