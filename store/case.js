// state
export const state = () => ({
  items: [
    {
      title: '百度',
      desc: '官网设计',
      src: require('~/static/images/case/case_01.jpg')
    },
    {
      title: '腾讯',
      desc: '官网设计',
      src: require('~/static/images/case/case_02.jpg')
    },
    {
      title: '网易',
      desc: '官网设计',
      src: require('~/static/images/case/case_03.jpg')
    },
    {
      title: '新浪',
      desc: '官网设计',
      src: require('~/static/images/case/case_04.jpg')
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
