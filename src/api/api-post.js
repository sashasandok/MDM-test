import { get } from './api-client'

export default {
  getPosts: () => get('posts')
}
