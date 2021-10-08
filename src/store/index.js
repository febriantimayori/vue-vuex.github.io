import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Top 5 Recommended Webtoons',
    links: [
      'Eggnoid | webtoons.com/id/romance/eggnoid/list?title_no=593',
      'True Beauty | webtoons.com/id/romance/goddess/list?title_no=1392',
      'Little Rain | webtoons.com/id/romance/little-rain/list?title_no=2915',
      'Mystique | webtoons.com/id/romance/mystique/list?title_no=1991',
      'Flawless | webtoons.com/id/romance/flawless/list?title_no=595'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {        
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {                    
      state.links = []
    }
  },
  actions: {
    removeLink: (context, link) => {       
      context.commit("REMOVE_LINK", link)
    },
    removeAll ({commit}) {                       
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  },
  modules: {
  }
})
