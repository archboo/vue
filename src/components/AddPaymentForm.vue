<template>
    <div class="create">
        <input type="text" placeholder="Data" v-model="date"><br>
        <input type="text" placeholder="Category" v-model="category"><br>
        <input type="text" placeholder="Value" v-model="value">
        <button @click="addPayment"><span>ADD PAYMENT</span><div><svg class="btn__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></div></button>
    </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    },
    show: Boolean
  },
  data: () => ({
    date: '',
    category: '',
    value: ''
  }),
  methods: {
    addPayment () {
      const { value, category, date, currenDate } = this
      const data = {
        value,
        category,
        date: date || currenDate
      }
      this.$emit('add-payment', data)
    }
  },
  computed: {
    currenDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style scoped>
  button {
    margin-top: 20px;
  }

  input {
    outline: none;
    margin-bottom: 15px;
    width: 90%;
    height: 20px;
    border: none;
    border-radius: 5px;
    padding: 10px;
  }

  input:focus {
    outline: 1px solid rgb(185, 185, 185);
  }

  .create {
    margin:auto;
    background-color: rgb(245, 245, 245);
    width: 15%;
    height: 220px;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(131, 131, 131, 0.397);
    z-index: 2;
  }
</style>
