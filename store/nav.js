// state
export const state = () => ({
  items: [
    { title: '首页', url: '/' },
    { title: '解决方案', url: '/solution' },
    { title: '案例展示', url: '/case' },
    { title: '关于我们', url: '/about' },
    { title: '联系我们', url: '/contact' },
    { title: '新闻中心', url: '/news' }
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
