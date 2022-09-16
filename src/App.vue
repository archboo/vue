<template>
  <div id="app">
    <button @click="show = !show"><span>ADD NEW COST</span><div><svg class="btn__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></div></button>
    <AddPaymentForm class="modal-dialog" v-if="show" @add-payment="addPayment"/>
    <PaymentsDisplay
    :paymentsList="paymentsList"
    show
    />
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data: () => ({
    paymentsList: [],
    show: false
  }),
  methods: {
    fetchPaymentList () {
      return [{
        date: '28.3.2020',
        category: 'Food',
        value: 169
      },
      {
        date: '24.3.2020',
        category: 'Transport',
        value: 360
      }]
    },
    addPayment (data) {
      this.paymentsList.push(data)
    },
    addOverFlow () {
      if (this.show === true) {
        document.body.style.backgroundColor = '#black'
      }
    }
  },
  created () {
    this.paymentsList = this.fetchPaymentList()
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}

.btn__img {
  width: 12px;

}

button {
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  display: flex;
  justify-content: space-between;
  background-color: #3ecaa0;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
}

.modal-dialog {
  position: fixed;
  top: -50%;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
