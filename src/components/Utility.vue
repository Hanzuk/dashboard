<template>
	<div>
		<Chart height="300" type="area" :options="chartOptions" :series="series"/>
		<p v-show="!true">{{ getUtilityDates }}</p>
	</div>
</template>

<script>
import VueApexChart from 'vue-apexcharts';
import { mapGetters, mapActions } from 'vuex';
import { UtilityChart } from '@/config/chartsconfig';

export default {
	name: 'Utility',
	components: {
		Chart: VueApexChart
	},
	data() {
		return {
			chartOptions: UtilityChart,
			series: [{ name: 'Utilidad', data: [] }]
		};
	},
	computed: {
		...mapGetters(['getUtilityDates', 'getUtilityData'])
	},
	methods: {
		...mapActions(['makeUtility'])
	},
	created() {
		// this.makeUtility();
	},
	beforeUpdate() {
		this.chartOptions = {
			labels: this.getUtilityDates
		};
		// this.chartOptions = {
		// 	xaxis: {
		// 		categories: this.getUtilityDates
		// 	}
		// };
		this.series = [
			{
				data: this.getUtilityData
			}
		];
	}
};
</script>
