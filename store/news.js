// state
export const state = () => ({
  items: [
    {
      href: 'javascript:;',
      src: require('~/static/images/news/news_01.png'),
      title: '打造无界的内容！阅文集团亮相UP2019腾讯新文创生态大会',
      time: '2019-03-10',
      abstract: '关于近日青果阅读事件涉及本公司的有关言论，特声明如下。'
    },
    {
      href: 'javascript:;',
      src: require('~/static/images/news/news_02.jpeg'),
      title: '阅文发布2018年全年财报：营收50.4亿元 版权业务增长翻倍',
      time: '2019-04-05',
      abstract: '近日， UP2019腾讯新文创生态大会在北京举办。'
    },
    {
      href: 'javascript:;',
      src: require('~/static/images/news/news_03.jpeg'),
      title: '阅文集团发布2018年财报，一张图读懂阅文内容生态',
      time: '2018-11-01',
      abstract: '阅文2018年营收同比增23%至50.4亿元，在线业务、版权运营双轮驱动'
    },
    {
      href: 'javascript:;',
      src: require('~/static/images/news/news_04.jpeg'),
      title: '发士大夫士大夫手动阀',
      time: '2017-01-03',
      abstract: '犯得上发射点发射点sdfdsf粉丝'
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
