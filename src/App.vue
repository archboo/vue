<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="dashboard" class="router-link">Dashboard</router-link>
        <router-link to="about" class="router-link">About</router-link>
        <router-link to="notfound" class="router-link">NotFound</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <transition name="fade">
      <ModalWindowAddPayment
        v-if="showModal"
        :settings="modalSettings"
      />
    </transition>
  </div>
</template>

<script>
// import About from '../src/pages/About.vue'
// import NotFound from '../src/pages/NotFound.vue'
// import Dashboard from '../src/pages/Dashboard.vue'

export default {
  name: 'App',
  components: {
    // About
    // NotFound
    // Dashboard
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ModalWindowAddPayment.vue')
  },
  data: () => ({
    showModal: false,
    modalSettings: {}
  }),
  computed: {

  },
  methods: {
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },

    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
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
}

nav {
  margin-bottom: 15px;
}

.router-link {
  margin: 0 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
