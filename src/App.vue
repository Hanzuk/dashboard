<template>
	<div class="wrapper">
		<div class="sidebar">
			<router-link to="/">Home</router-link>|
			<router-link to="/about">About</router-link>
		</div>
		<div class="main">
			<router-view/>
		</div>
	</div>
</template>

<style lang="scss">
@import 'bulma/sass/utilities/_all.sass';
@import 'bulma/sass/grid/columns.sass';
@import 'bulma/sass/elements/form.sass';

:root {
	--sidebar-width: 280px;
}

.wrapper {
	display: flex;
	flex-direction: row-reverse;
	height: 100vh;
}

.sidebar {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: var(--sidebar-width);
	background-color: #a18cd1;
}

.main {
	width: calc(100% - var(--sidebar-width));
}
</style>
