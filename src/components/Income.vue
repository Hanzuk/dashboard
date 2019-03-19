<template>
	<div>
		<Chart height="300" type="bar" :options="chartOptions" :series="series"/>
		<p v-show="!true">{{ getIncomeDates }}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts';
import { mapGetters, mapActions } from 'vuex';
import { IncomeChart } from '@/config/chartsconfig';

export default {
	name: 'Income',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: IncomeChart,
			series: [{ name: 'Ingresos', data: [] }]
		};
	},
	computed: {
		...mapGetters(['getIncomeDates', 'getIncomeData'])
	},
	methods: {
		...mapActions(['fetchIncome'])
	},
	created() {
		this.fetchIncome();
	},
	beforeUpdate() {
		this.chartOptions = {
			xaxis: {
				categories: this.getIncomeDates
			}
		};
		this.series = [
			{
				data: this.getIncomeData
			}
		];
	}
};
</script>
