// babel
import 'babel-polyfill'

import { createActions } from 'redux-actions'

import api from '../api/api-post'
import postMapper from '../mappers/post'

// utils
// import _ from 'lodash';

const actions = createActions({
  post: {
    request: x => x,
    success: x => x,
    error: x => x
  },
  deletePost: x => x
})

export default actions

export const getPosts = () => async dispatch => {
  dispatch(actions.post.request())

  try {
    const result = await api.getPosts()
    // console.log('result', result)

    const items = result.map(postMapper)

    dispatch(
      actions.post.success({
        items: items
      })
    )
  } catch (e) {
    dispatch(actions.post.error({ error: e }))
  }
}
