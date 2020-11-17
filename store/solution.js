// state
export const state = () => ({
  items: [
    { id: 1, src: require('~/static/images/step/step_01.png') },
    { id: 2, src: require('~/static/images/step/step_02.png') },
    { id: 3, src: require('~/static/images/step/step_03.png') },
    { id: 4, src: require('~/static/images/step/step_04.png') }
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
