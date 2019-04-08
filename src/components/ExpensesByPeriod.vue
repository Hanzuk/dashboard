<template>
	<div>
		<Chart height="300" type="bar" :options="chartOptions" :series="series"/>
		<p v-show="!true">{{ getExpensesByPeriod }}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'
import { ExpensesByPeriodChart } from '@/config/chartsconfig'

export default {
	name: 'ExpensesByPeriod',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: ExpensesByPeriodChart,
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
				categories: this.getExpensesByPeriod.map(obj => obj.date)
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
