import User from '@/store/models/User'
import users from '../json/users.json'

const state = {
  fetched: false
}

const mutations = {
  SET_FETCHED (state, fetched) {
    state.fetched = fetched
  }
}

const actions = {
  loadUsers ({dispatch, commit}) {
    if (!state.fetched) {
      return User.insert({data: users}).then(() => {
        commit('SET_FETCHED', true)
      })
    }
  }
}

export default {
  state,
  mutations,
  actions
}
