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
            breakpoint: 768,
            options: {
              chart: {
                height: 270
              }
            }
          }
        ],
        labels: [],
        tooltip: {
          y: {
            formatter: function(value) {
              return new Intl.NumberFormat('es-CR', {
                style: 'currency',
                currency: 'CRC'
              }).format(value)
            }
          },
          style: { fontSize: '14px' }
        },
        dataLabels: { style: { fontSize: '15px' } }
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
    this.series = this.getExpensesByHeadquarter.map(obj => obj.amount * -1)
  }
}
</script>

<style></style>
