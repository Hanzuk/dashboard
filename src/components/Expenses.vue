<template>
	<div>
		<Chart height="300" type="bar" :options="chartOptions" :series="series"/>
		<p v-show="!true">{{ getExpensesDates }}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts';
import { mapGetters, mapActions } from 'vuex';
import { ExpensesChart } from '@/config/chartsconfig';

export default {
	name: 'Expenses',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: ExpensesChart,
			series: [{ name: 'Gastos', data: [] }]
		};
	},
	computed: {
		...mapGetters(['getExpensesDates', 'getExpensesData'])
	},
	methods: {
		...mapActions(['fetchExpenses'])
	},
	created() {
		this.fetchExpenses();
	},
	beforeUpdate() {
		this.chartOptions = {
			xaxis: {
				categories: this.getExpensesDates
			}
		};
		this.series = [
			{
				data: this.getExpensesData
			}
		];
	}
};
</script>
