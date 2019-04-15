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
        labels: ['Sede 01']
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
        colors: ['#67b7dc']
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
        colors: ['#dcaf67']
      }
    }

    if (this.getCustomers[0].net_total < this.customersMin) {
      this.chartOptions = {
        labels: this.getCustomers.map(
          obj => obj.headquarter[0].toUpperCase() + obj.headquarter.slice(1)
        ),
        colors: ['#dc6967']
      }
    }

    this.series = this.getCustomers.map(obj =>
      parseInt((obj.net_total * 100) / this.customersGoal).toFixed(0)
    )
  }
}
</script>
