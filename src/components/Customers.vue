<template>
	<Chart height="294" type="radialBar" :options="chartOptions" :series="series"/>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { CustomersChart } from '@/config/chartsconfig'

export default {
	name: 'Customers',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: CustomersChart,
			series: [76]
		}
	}
}
</script>

<style>
</style>
