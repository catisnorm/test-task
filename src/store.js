import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dummies: [{ id: 1, name: 'one', color: 'yellow' }, { id: 2, name: 'two', color: 'red' }, { id: 3, name: 'three', color: 'white' }]
  },
  getters: {
    dummyObjects: state => {
      return state.dummies || []
    },
    lastId: (state, getters) => {
      let last = getters.dummyObjects.length - 1
      if (last > -1) {
        return state.dummies[last].id
      } else {
        return 0
      }
    }
  },
  mutations: {
    pushDummy (state, data) {
      state.dummies.push(data)
    },
    spliceDummy (state, index) {
      state.dummies.splice(index, 1)
    },
    updateDummy (state, newDummy) {
      let newArr = []
      state.dummies.forEach(element => {
        if (element.id === newDummy.id) {
          newArr.push(newDummy)
        } else {
          newArr.push(element)
        }
      })
      state.dummies = newArr
    }
  },
  actions: {
    addDummy (context, dummy) {
      context.commit('pushDummy', dummy)
    },
    editDummy (context, data) {
      context.commit('updateDummy', {
        id: data.id,
        name: data.name,
        color: data.color
      })
    },
    removeDummy (context, id) {
      let index = context.getters.dummyObjects.findIndex(element => {
        return element.id === id
      })
      context.commit('spliceDummy', index)
    }
  }
})
