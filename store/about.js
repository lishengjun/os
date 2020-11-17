// state
export const state = () => ({
  items: [
    {
      src: require('~/static/images/about/about_01.png'),
      desc: '超过10种主流设计开发服务',
      startVal: 0,
      endVal: 10
    },
    {
      src: require('~/static/images/about/about_01.png'),
      desc: '已自主开发超过200个项目',
      startVal: 0,
      endVal: 200
    },
    {
      src: require('~/static/images/about/about_01.png'),
      desc: '服务超过100家企业',
      startVal: 0,
      endVal: 100
    },
    {
      src: require('~/static/images/about/about_01.png'),
      desc: '完成超过1000张产品设计',
      startVal: 0,
      endVal: 1000
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
