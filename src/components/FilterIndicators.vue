<template>
	<div class="select is-rounded">
		<select @change="filterIndicators($event)">
			<option value="2019" selected>2019</option>
			<option value="2018">2018</option>
			<option value="2017">2017</option>
		</select>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'FilterIndicators',
	methods: mapActions(['filterIndicators'])
};
</script>
