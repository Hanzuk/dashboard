<template>
  <div>
    <Chart height="300" type="area" :options="chartOptions" :series="series" />
    <p v-show="!true">{{ getUtility }}</p>
  </div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'
import { UtilityChart } from '@/config/chartsconfig'

export default {
  name: 'Utility',
  components: {
    Chart: VueApexChart
  },
  data() {
    return {
      chartOptions: UtilityChart,
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
            month: 'long'
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
