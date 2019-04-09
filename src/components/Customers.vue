<template>
  <div>
    <Chart
      height="300"
      type="radialBar"
      :options="chartOptions"
      :series="series"
    />
    <p v-show="!true">{{ getCustomers }}</p>
  </div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Customers',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      customersGoal: 6800,
      customersMin: 4000,
      chartOptions: {
        chart: {
          id: 'customers-chart',
          height: 350,
          animations: {
            enabled: true,
            easing: 'easeinout',
            dynamicAnimation: {
              enabled: true,
              speed: 1600
            }
          }
        },
        labels: ['Sede 01'],
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            colorStops: [
              {
                offset: 0,
                color: '#c41432',
                opacity: 1
              },
              {
                offset: 100,
                color: '#fc5a44',
                opacity: 1
              }
            ]
          }
        }
      },
      series: [0]
    }
  },
  computed: {
    ...mapGetters(['getCustomers'])
  },
  methods: {
    ...mapActions(['fetchCustomers'])
  },
  created() {
    this.fetchCustomers()
  },
  beforeUpdate() {
    if (this.getCustomers[0].net_total > this.customersGoal) {
      this.chartOptions = {
        labels: this.getCustomers.map(
          obj => obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)
        ),
        fill: {
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: '#43e97b',
                opacity: 1
              },
              {
                offset: 100,
                color: '#38f9d7',
                opacity: 1
              }
            ]
          }
        }
      }
    }

    if (
      this.getCustomers[0].net_total > this.customersMin &&
      this.getCustomers[0].net_total < this.customersGoal
    ) {
      this.chartOptions = {
        labels: this.getCustomers.map(
          obj => obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)
        ),
        fill: {
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: '#f9d423',
                opacity: 1
              },
              {
                offset: 100,
                color: '#ff4e50',
                opacity: 1
              }
            ]
          }
        }
      }
    }

    if (this.getCustomers[0].net_total < this.customersMin) {
      this.chartOptions = {
        labels: this.getCustomers.map(
          obj => obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)
        ),
        fill: {
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: '#c41432',
                opacity: 1
              },
              {
                offset: 100,
                color: '#fc5a44',
                opacity: 1
              }
            ]
          }
        }
      }
    }

    this.series = this.getCustomers.map(obj =>
      parseInt((obj.net_total * 100) / this.customersGoal).toFixed(0)
    )
  }
}
</script>
