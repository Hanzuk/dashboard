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
import { mapGetters } from 'vuex'

export default {
  name: 'Customers',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      customersGoal: 9000,
      customersMin: 5000,
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
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: val => val + '%'
              }
            }
          }
        },
        labels: ['']
      },
      series: [0]
    }
  },
  computed: {
    ...mapGetters(['getCustomers'])
  },
  beforeUpdate() {
    if (this.getCustomers[0].net_total > this.customersGoal) {
      this.chartOptions = {
        labels: this.getCustomers.map(
          obj =>
            `${obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)} - ${
              obj.net_total
            }`
        ),
        colors: ['#67b7dc']
      }
    }

    if (
      this.getCustomers[0].net_total > this.customersMin &&
      this.getCustomers[0].net_total < this.customersGoal
    ) {
      this.chartOptions = {
        labels: this.getCustomers.map(
          obj =>
            `${obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)} - ${
              obj.net_total
            }`
        ),
        colors: ['#dcaf67']
      }
    }

    if (this.getCustomers[0].net_total < this.customersMin) {
      this.chartOptions = {
        labels: this.getCustomers.map(
          obj =>
            `${obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)} - ${
              obj.net_total
            }`
        ),
        colors: ['#dc6967']
      }
    }

    this.series = this.getCustomers.map(obj => {
      if (obj.net_total > this.customersGoal) {
        return 100
      } else {
        return parseInt((obj.net_total * 100) / this.customersGoal).toFixed(0)
      }
    })
  }
}
</script>
