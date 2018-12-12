import Article from '../models/Article'
import articles from '../json/articles.json'

const state = {
  fetched: false
}

const mutations = {
  SET_FETCHED (state, fetched) {
    state.fetched = fetched
  }
}

const actions = {
  loadArticles ({dispatch, commit}) {
    if (!state.fetched) {
      return Article.insert({ data: articles }).then(() => {
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
