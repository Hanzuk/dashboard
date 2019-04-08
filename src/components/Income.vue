<template>
	<div>
		<Chart height="300" type="line" :options="chartOptions" :series="series"/>
		<p v-show="!true">{{ getIncome }}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'
import { IncomeChart } from '@/config/chartsconfig'

export default {
	name: 'Income',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: IncomeChart,
			series: [{ name: 'Ingresos', data: [] }]
		}
	},
	computed: {
		...mapGetters(['getIncome'])
	},
	methods: {
		...mapActions(['fetchIncome'])
	},
	created() {
		this.fetchIncome()
	},
	beforeUpdate() {
		this.chartOptions = {
			xaxis: {
				categories: this.getIncome.map(obj => {
					let date = new Intl.DateTimeFormat('es-CR', {
						month: 'long'
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
