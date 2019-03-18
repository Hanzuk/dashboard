<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<FilterIndicators/>
		<Income/>
	</div>
</template>

<script>
// @ is an alias to /src
import Income from '@/components/Income.vue';
import FilterIndicators from '@/components/FilterIndicators.vue';

export default {
	name: 'home',
	components: {
		FilterIndicators,
		Income
	}
};
</script>
