// state
export const state = () => ({
  items: [
    {
      title: '1',
      src: require('~/static/images/slide/slide_01.jpg')
    },
    {
      title: '2',
      src: require('~/static/images/slide/slide_02.jpg')
    }
  ]
})
// getters
export const getters = {
  get(state) {
    return state.items
  }
}
// actions
export const actions = {}
// mutations
export const mutations = {}
