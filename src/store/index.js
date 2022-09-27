import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    categoryList: (state) => state.categoryList
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    SET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    }
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = [
          {
            date: '28.3.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '24.3.2020',
            category: 'Transport',
            value: 360
          }
        ]

        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },
    fetchCategoryData ({ commit }) {
      setTimeout(() => {
        const categoryList = ['Food', 'Transport', 'Education', 'Sport']
        commit('SET_CATEGORY_LIST', categoryList)
      }, 1000)
    }
  }
})
