<template>
	<div>
		<Chart height="300" type="bar" :options="chartOptions" :series="series"/>
		<p>{{getIncome}}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts';
import { mapGetters, mapActions } from 'vuex';
import { BarChart } from '@/config/chartsconfig';

export default {
	name: 'Income',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: BarChart,
			series: [{ name: 'Monto', data: [] }]
		};
	},
	computed: {
		...mapGetters(['getIncome'])
	},
	methods: {
		...mapActions(['fetchIncome', 'filterIndicators'])
	},
	created() {
		this.fetchIncome();
	},
	beforeUpdate() {
		console.log('Actualizado');
		this.chartOptions = {
			xaxis: {
				categories: this.getIncome.map(obj => obj.fecha)
			}
		};
		this.series = [
			{
				data: this.getIncome.map(obj => obj.monto)
			}
		];
	}
};
</script>
