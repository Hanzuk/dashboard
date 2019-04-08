<template>
  <div>
    <Chart
      height="294"
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
import { CustomersChart } from '@/config/chartsconfig'

export default {
  name: 'Customers',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      chartOptions: CustomersChart,
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
    let goal = 7000

    this.chartOptions = {
      labels: this.getCustomers.map(obj => obj.headquarter)
    }
    this.series = this.getCustomers.map(obj =>
      parseInt((obj.net_total * 100) / goal).toFixed(0)
    )
  }
}
</script>
