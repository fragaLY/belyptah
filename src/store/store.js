import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pageTitle: 'BELY PTAH',
    loading: false,
    principal: {
      id: null,
      email: '',
      roles: []
    },
    theme: false,
    messages: []
  },
  getters: {
    title: state => {
      return state.title
    },
    principal: state => {
      return state.principal
    },
    theme: state => {
      return state.theme
    },
    messages: state => {
      return state.messages
    }
  },
  mutations: {
    UPDATE_MESSAGES(state, messages) {
      state.messages = messages
    },
    UPDATE_PAGE_TITLE(state, title) {
      state.pageTitle = title
    },
    UPDATE_LOADING(state, loading) {
      state.loading = loading;
    },
    UPDATE_THEME(state, enable) {
      state.dark = enable
    },
    UPDATE_AUTH(state, principal) {
      state.principal = principal;
    },
    DELETE_AUTH(state) {
      state.principal = {
        id: null,
        email: '',
        roles: []
      };
    }
  },
  actions: {
    updatePageTitle({commit}, title) {
      commit('UPDATE_PAGE_TITLE', title)
    },
    auth({commit}, principal) {
      commit('UPDATE_AUTH', principal)
    },
    logout({commit}) {
      commit('DELETE_AUTH')
    },
    checkAuth({commit}) {
      commit('UPDATE_AUTH', store.getters.principal)
    },
    loading({commit}, loading) {
      commit('UPDATE_LOADING', loading)
    },
    theme({commit}, dark) {
      commit('UPDATE_THEME', dark)
    },
    updateMessages({commit}, messages) {
      commit('UPDATE_MESSAGES', messages)
    }
  }
});

export default store;
