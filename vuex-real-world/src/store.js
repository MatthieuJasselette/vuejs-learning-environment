import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: false,
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    user: {
      id: '',
      name: '',
      username: ''
    },
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    ADD_USER(state, user) {
      state.user = user
    },
    LOG_USER(state, user) {
      state.user = user
      state.session = true
    },
    KILL_USER(state, user) {
      state.user = user
      state.session = false
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    createUser({ commit }, user) {
      return EventService.postUser(user).then(() => {
        commit('ADD_USER', user)
      })
    },
    login({ commit }, username) {
      return EventService.getUsers().then(response => {
        // WRONG, response.filter !function
        const user = response.data.filter(user => user.username === username)
        commit('LOG_USER', user)
      })
    },
    logout({ commit }) {
      const user = {
        id: '',
        name: '',
        username: ''
      }
      commit('KILL_USER', user)
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
