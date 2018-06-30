import momentRandom from 'moment-random'

export default item => {
  return {
    id: item.id,
    userId: item.userId,
    title: item.title,
    body: item.body,
    date: momentRandom().toString()
  }
}
