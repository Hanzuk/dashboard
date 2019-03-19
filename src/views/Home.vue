<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<div class="columns">
			<div class="column">
				<FilterIndicators/>
			</div>
		</div>
		<div class="columns">
			<div class="column is-four-fifths">
				<Income/>
			</div>
		</div>
		<div class="columns">
			<div class="column is-four-fifths">
				<Expenses/>
			</div>
		</div>
		<div class="columns">
			<div class="column is-four-fifths">
				<Utility/>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import FilterIndicators from '@/components/FilterIndicators.vue';
import Income from '@/components/Income.vue';
import Expenses from '@/components/Expenses.vue';
import Utility from '@/components/Utility.vue';

export default {
	name: 'home',
	components: {
		FilterIndicators,
		Income,
		Expenses,
		Utility
	}
};
</script>
