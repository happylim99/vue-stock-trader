<template>
	<div>
		<app-header />
		<router-view />
	</div>
</template>

<script>
import Header from './components/layouts/Header'
export default {
	components: {
		appHeader: Header
	}
}
</script>

<style scoped>

</style>