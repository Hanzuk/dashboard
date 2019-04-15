<template>
  <div>
    <Chart height="300" type="pie" :options="chartOptions" :series="series" />
    <p v-show="!true">{{ getExpensesByHeadquarter }}</p>
  </div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ExpensesByHeadquarter',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      chartOptions: {
        chart: { id: 'expensesbyheadquarter-chart' },
        responsive: [
          {
            breakpoint: 576,
            options: {
              legend: { show: false }
            }
          },
          {
            breakpoint: 768,
            options: {
              legend: { show: true }
            }
          }
        ],
        labels: [],
        tooltip: {
          y: {
            formatter: value => {
              return new Intl.NumberFormat('es-CR', {
                style: 'currency',
                currency: 'CRC'
              }).format(value)
            }
          },
          style: { fontSize: '14px' }
        },
        dataLabels: { style: { fontSize: '15px' } },
        colors: [
          '#67b7dc',
          '#6794dc',
          '#6771dc',
          '#8067dc',
          '#a367dc',
          '#c767dc',
          '#dc67ce',
          '#dc67ab',
          '#dc6788',
          '#dc6967',
          '#dc8c67',
          '#dcaf67'
        ]
      },
      series: []
    }
  },
  computed: {
    ...mapGetters(['getExpensesByHeadquarter'])
  },
  methods: {
    ...mapActions(['fetchExpensesByHeadquarter'])
  },
  created() {
    this.fetchExpensesByHeadquarter()
  },
  beforeUpdate() {
    this.chartOptions = {
      labels: this.getExpensesByHeadquarter.map(
        obj => obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)
      )
    }
    this.series = this.getExpensesByHeadquarter.map(obj => obj.amount)
  }
}
</script>

<style></style>
