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
  },
  data: () => ({
    page: 'DashBoard'

  }),
  computed: {

  },
  methods: {

  },
  created () {
    console.log(this.$route.query.value)
    console.log(this.$route.params.category)
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

nav {
  margin-bottom: 15px;
}

.router-link {
  margin: 0 5px;
}
</style>
