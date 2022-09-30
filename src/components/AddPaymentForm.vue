<template>
    <div>
        <input type="date" required pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" placeholder="Data" v-model="date"><br>
        <!-- <input type="text" placeholder="Category" v-model="category"><br> -->
        <select v-model="category">
          <option v-for="category of categoryList"
          :key="category"
          :value="category"
          >{{ category }}</option>
        </select>
        <input type="text" :placeholder="value" v-model="value">
        <button @click="addPayment"><span>ADD PAYMENT</span><div><svg class="btn__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></div></button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddPaymentForm',
  // props: {
  //   paymentsList: {
  //     type: Array,
  //     default: () => ([])
  //   },
  //   categoryList: {
  //     type: Array,
  //     default: () => ([])
  //   },
  //   show: Boolean
  // },
  data: () => ({
    date: '',
    category: '',
    value: ''
  }),
  methods: {
    ...mapActions(['addNewPayment']),
    addPayment () {
      const { value, category, date, currenDate } = this
      const data = {
        value,
        category,
        date: date || currenDate
      }
      // this.$emit('add-payment', data)
      this.addNewPayment(data)
    },
    ...mapActions(['fetchCategoryData'])
  },
  computed: {
    ...mapGetters(['categoryList']),
    currenDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    }
  },
  // mounted () {
  //   if (this.$route.query.value !== null) {
  //     this.value = this.$route.query.value
  //     this.category = this.$route.params.category
  //     this.addPayment()
  //   }
  //   // this.value = this.$route.query.value
  //   // this.category = this.$route.params.category
  // },
  beforeMount () {
    if (this.$route.params.category !== undefined) {
      this.value = this.$route.query.value
      this.category = this.$route.params.category
      setTimeout(() => {
        this.addPayment()
      }, 2000)
    }
  }
}
</script>

<style scoped>
  button {
    margin-top: 20px;
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
    margin-bottom: 10px;
  }

  .btn__img {
    width: 15px;
  }

  input {
    outline: none;
    margin-bottom: 15px;
    width: 90%;
    height: 20px;
    border: 0.5px solid rgb(221, 221, 221);
    border-radius: 5px;
    padding: 10px;
  }

  select {
    outline: none;
    margin-bottom: 15px;
    width: 98%;
    height: 40px;
    border: 0.5px solid rgb(221, 221, 221);
    border-radius: 5px;
    padding: 10px;
  }

  input:focus {
    outline: 1px solid rgb(185, 185, 185);
  }

  .close__btn {
  margin-top: 100px;
}
</style>
