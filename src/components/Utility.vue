<template>
  <div>
    <Chart height="300" type="area" :options="chartOptions" :series="series" />
    <p v-show="!true">{{ getUtility }}</p>
  </div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Utility',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'utility-chart',
          toolbar: { show: false }
        },
        xaxis: {
          categories: [],
          tooltip: { enabled: false }
        },
        yaxis: {
          labels: {
            maxWidth: 25,
            formatter: value => {
              let display = ''
              switch (value.toString().length) {
                case 6:
                  display = `${value.toString().slice(0, 1)}M`
                  break

                case 7:
                  display = `${value.toString().slice(0, 1)}M`
                  break

                case 8:
                  display = `${value.toString().slice(0, 2)}M`
                  break

                case 9:
                  display = `${value.toString().slice(0, 3)}M`
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
        fill: {
          colors: ['#8067dc'],
          type: 'solid',
          opacity: 0.9
        },
        dataLabels: { enabled: false },
        colors: ['#8067dc']
      },
      series: [{ name: 'Utilidad', data: [] }]
    }
  },
  computed: {
    ...mapGetters(['getUtility'])
  },
  methods: {
    ...mapActions(['fetchUtility'])
  },
  created() {
    this.fetchUtility()
  },
  beforeUpdate() {
    this.chartOptions = {
      xaxis: {
        categories: this.getUtility.map(obj => {
          let date = new Intl.DateTimeFormat('es-CR', {
            month: 'short'
          }).format(new Date(obj.date))
          return date[0].toUpperCase() + date.slice(1)
        })
      }
    }
    this.series = [
      {
        data: this.getUtility.map(obj => obj.amount)
      }
    ]
  }
}
</script>
