<template>
<div>
  <div class="main">
    <p v-if="error">{{ error }}</p>
    <input type="text" v-model.number="op1">
    <input type="text" v-model.number="op2">
    = {{ result }}
  </div>
  <div class="keyboard">
    <button class="keyboard_btn" v-for="operation of operations" @click="calculate(operation)" :key="operation">{{ operation }}</button>
  </div>
  <div class="keyboardNumber">
    <input type="checkbox" id="checkbox" v-model="showKeyboard">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <div class="keyboardNumber-wrp" v-if="showKeyboard">
      <button class="keyboardNumber__btn" v-for="number of keyboardNumber" :key="number" v-bind:value="number" @click="pickedNumber(number)">{{ number }}</button>
      <button class="keyboardNumber__btn" :key="backspace" v-bind:value="backspace" @click="deleteElement()">{{ backspace }}</button>
      <div class="keyboardNumber__radio">
        <br>
        <input type="radio" id="one" value="op1" v-model="selectedOperand">
        <label for="one">Операнд 1</label>
        <input type="radio" id="two" value="op2" v-model="selectedOperand">
        <label for="two">Операнд 2</label>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '/', '*', '^', '%'],
    keyboardNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    backspace: '←',
    showKeyboard: false,
    selectedOperand: 'op1'
  }),
  methods: {
    calculate (operation) {
      this.error = ''
      switch (operation) {
        case '+': return this.sum()
        case '-': return this.sub()
        case '/': return this.div()
        case '*': return this.mult()
        case '^': return this.exp()
        case '%': return this.floor()
      }
    },
    pickedNumber (number) {
      this[this.selectedOperand] = Number(`${this[this.selectedOperand]}${number}`)
    },
    deleteElement () {
      this[this.selectedOperand] = Math.trunc(this[this.selectedOperand] / 10)
    },
    sum () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    div () {
      const { op1, op2 } = this
      this.result = op1 / op2
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
      }
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    mult () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    exp () {
      const { op1, op2 } = this
      this.result = op1 ** op2
    },
    floor () {
      const { op1, op2 } = this
      this.result = Math.floor(op1 / op2)
    }
  }
}
</script>

<style scoped lang="scss">
  .keyboardNumber {
    margin-top: 50px;
  }
  .keyboardNumber__btn, .keyboard_btn {
    margin-top: 20px;
    margin-right: 5px;
  }
</style>