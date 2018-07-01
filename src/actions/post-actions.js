// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// api
import api from '../api/api-post'

// mappers
import postMapper from '../mappers/post'

const actions = createActions({
  post: {
    request: x => x,
    success: x => x,
    error: x => x
  }
})

export default actions

export const getPosts = () => async dispatch => {
  dispatch(actions.post.request())

  try {
    const result = await api.getPosts()
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
