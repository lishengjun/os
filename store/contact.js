// state
export const state = () => ({
  name: '',
  phone: '',
  content: ''
})
// getters
export const getters = {
  get(state) {
    return state
  }
}
// actions
export const actions = {}
// mutations
export const mutations = {
  submit(store, text) {
    console.log(store, text)
  }
}
