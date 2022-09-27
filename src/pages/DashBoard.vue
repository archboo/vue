<template>
  <div>
    <button @click="show = !show"><span id="swap"></span><div><svg class="btn__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></div></button>
    <AddPaymentForm
    class="modal-dialog"
    v-if="show" @add-payment="addPayment"
    :categoryList="categoryList" />
    <PaymentsDisplay
    :paymentsList="paymentsList"
    show
    />
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters(['paymentsList', 'categoryList'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment (data) {
      // this.paymentsList.push(data)
      // this.$store.commit('ADD_PAYMENT_DATA', data)
      this.ADD_PAYMENT_DATA(data)
    },
    renameBTN () {
      if (this.show === true) {
        document.getElementById('swap').innerHTML = 'sdsdvsv'
      } else {
        document.getElementById('swap').innerHTML = 'ADD NEW COST'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.$route.params.category !== undefined) {
        this.show = true
      }
    }, 2000)
    this.renameBTN()
  },
  created () {
    this.fetchData()
    this.fetchCategoryData()
    // this.$store.commit('SET_PAYMENTS_LIST', this.fetchPaymentsData())
  }
}
</script>

<style scoped>
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
  top: -40%;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
