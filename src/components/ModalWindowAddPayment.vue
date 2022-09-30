<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div>{{ title }}</div>
      <div :class="$style.content">
        <component :is="settings.content"/>
      </div>
      <footer :class="$style.footer">
        <button :class="$style.close__btn" @click="close">✖</button>
      </footer>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ModalWindowAddPayment',
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    AddPaymentForm
  },
  computed: {
    title () {
      return this.settings?.title || 'Modal window'
    }
  },
  methods: {
    ...mapActions(['addPayment']),
    addNewPayment (data) {
      this.addPayment(data)
    },

    close () {
      this.$modal.hide()
    }
  },

  mounted () {
    console.log(this.$modal)
  }
}
</script>

<style module>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}

.close__btn {
  position: absolute;
  background-color: transparent;
  top: -100%;
  right: -200%;
  border: none;
  font-size: 25px;
  font-weight: 700;
}
</style>
