import Vue from 'vue'
import Vuex from 'vuex'
import { getUser, setUser } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getUser()
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setUser(user)
    }
  },
  actions: {

  }
})
