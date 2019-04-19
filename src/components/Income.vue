<template>
  <div>
    <Chart height="300" type="bar" :options="chartOptions" :series="series" />
    <p v-show="!true">{{ getIncome }}</p>
  </div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters } from 'vuex'

export default {
  name: 'Income',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'expensesbyperiod-chart',
          toolbar: { show: false },
          animations: {
            dynamicAnimation: {
              enabled: true,
              speed: 500
            }
          }
        },
        xaxis: {
          categories: []
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
        grid: {
          xaxis: {
            lines: { show: true }
          }
        },
        dataLabels: { enabled: false },
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
        ],
        fill: {
          type: 'solid',
          opacity: 1
        },
        plotOptions: {
          bar: { distributed: true }
        }
      },
      series: [{ name: 'Ingresos', data: [] }]
    }
  },
  computed: {
    ...mapGetters(['getIncome'])
  },
  beforeUpdate() {
    this.chartOptions = {
      xaxis: {
        categories: this.getIncome.map(obj => {
          let date = new Intl.DateTimeFormat('es-CR', {
            month: 'short'
          }).format(new Date(obj.date))
          return date[0].toUpperCase() + date.slice(1)
        })
      }
    }
    this.series = [
      {
        data: this.getIncome.map(obj => obj.amount)
      }
    ]
  }
}
</script>
