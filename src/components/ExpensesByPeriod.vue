<template>
  <div>
    <Chart height="300" type="line" :options="chartOptions" :series="series" />
    <p v-show="!true">{{ getExpensesByPeriod }}</p>
  </div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ExpensesByPeriod',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'income-chart',
          toolbar: { show: false },
          animations: {
            dynamicAnimation: {
              enabled: true,
              speed: 500
            }
          }
        },
        xaxis: {
          categories: [],
          tooltip: { enabled: false }
        },
        yaxis: {
          labels: {
            maxWidth: 33,
            formatter: value => {
              let display = ''
              switch (value.toString().length) {
                case 7:
                  display = `${value.toString().slice(0, 1)}M`
                  break

                case 8:
                  display = `${value.toString().slice(0, 2)}M`
                  break

                case 9:
                  display = `${value.toString().slice(0, 3)}M`
                  break

                case 10:
                  display = `${value.toString().slice(0, 4)}M`
                  break

                default:
                  display = '0'
                  break
              }
              return display
            }
          }
        },
        grid: {
          xaxis: {
            lines: { show: true }
          }
        },
        tooltip: {
          y: {
            formatter: value => {
              return new Intl.NumberFormat('es-CR', {
                style: 'currency',
                currency: 'CRC'
              }).format(value)
            }
          }
        },
        dataLabels: { enabled: false },
        colors: ['#dc6788']
      },
      series: [{ name: 'Gastos', data: [] }]
    }
  },
  computed: {
    ...mapGetters(['getExpensesByPeriod'])
  },
  methods: {
    ...mapActions(['fetchExpensesByPeriod'])
  },
  created() {
    this.fetchExpensesByPeriod()
  },
  beforeUpdate() {
    this.chartOptions = {
      xaxis: {
        categories: this.getExpensesByPeriod.map(obj => {
          let date = new Intl.DateTimeFormat('es-CR', {
            month: 'short'
          }).format(new Date(obj.date))
          return date[0].toUpperCase() + date.slice(1)
        })
      }
    }
    this.series = [
      {
        data: this.getExpensesByPeriod.map(obj => obj.amount)
      }
    ]
  }
}
</script>
