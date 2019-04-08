<template>
	<div>
		<Chart height="300" type="bar" :options="chartOptions" :series="series"/>
		<p v-show="!true">{{ getExpensesByPeriod }}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'ExpensesByPeriod',
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
				},
				dataLabels: { enabled: false },
				colors: ['#df353b']
			},
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
				categories: this.getExpensesByPeriod.map(obj => {
					let date = new Intl.DateTimeFormat('es-CR', {
						month: 'long'
					}).format(new Date(obj.date))
					return date[0].toUpperCase() + date.slice(1)
				})
			}
		}
		this.series = [
			{
				data: this.getExpensesByPeriod.map(obj => obj.amount * -1)
			}
		]
	}
}
</script>
