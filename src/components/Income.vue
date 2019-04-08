<template>
	<div>
		<Chart height="300" type="line" :options="chartOptions" :series="series"/>
		<p v-show="!true">{{ getIncome }}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Income',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: {
				chart: {
					id: 'income-chart',
					toolbar: { show: false },
					animations: {
						dynamicAnimation: {
							enabled: true,
							speed: 500
						}
					}
				},
				xaxis: {
					categories: [],
					tooltip: { enabled: false }
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
				},
				dataLabels: { enabled: false },
				colors: ['#42eb86']
			},
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
