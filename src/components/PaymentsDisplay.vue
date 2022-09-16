<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
    </table>
  <div v-for="(payment, index) in paymentsList" :key="index">
    <table>
      <tr>
        <td>{{ index+1 }}</td>
        <td>{{ payment.date }}</td>
        <td>{{ payment.category }}</td>
        <td>{{ payment.value }}</td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDispay',
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    },
    show: Boolean
  }
}
</script>

<style scoped>
  table {
    margin-left: auto;
    margin-right: auto;
    table-layout: fixed;
    width: 30%;
    border-collapse: collapse;
    border-bottom: 1px solid rgba(0, 0, 0, 0.137);
  }

  thead th:nth-child(1), td:nth-child(1) {
    width: 5%;
  }

  thead th:nth-child(2), td:nth-child(2) {
    width: 20%;
  }

  thead th:nth-child(3), td:nth-child(3) {
    width: 15%;
  }

  thead th:nth-child(4), td:nth-child(4) {
    width: 15%;
  }

  th, td {
    padding: 20px;
  }
</style>
