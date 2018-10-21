import Vue from 'vue'
import Vuex from 'vuex'
import {getUserGists} from '@/services/gist'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gists:[]
  },
  mutations: {
    setGistsData(state, gists){
      state.gists = gists
    }
  },
  actions: {
    fetchUserGists(store,payload){
      return getUserGists(payload.username).then(response => {
                store.commit('setGistsData', response.data)
                return store.state.gists
              })
    }

  }
})
