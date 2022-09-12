<template>
<div>
  <div class="main">
    <input type="text" v-model.number="op1">
    <input type="text" v-model.number="op2">
    = {{ result }}
  </div>
  <div class="keyboard">
    <button @click="sum">+</button>
    <button @click="div">/</button>
    <button @click="sub">-</button>
    <button @click="mult">*</button>
    <button @click="exponentiation">^</button>
    <button @click="floor">%</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0
  }),
  methods: {
    sum () {
      this.result = this.op1 + this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    sub () {
      this.result = this.op1 - this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    exponentiation () {
      this.result = this.op1 ** this.op2
    },
    floor () {
      this.result = Math.floor( this.op1 / this.op2 )
    }    
  }
}
</script>

<style scoped lang="scss">

</style>