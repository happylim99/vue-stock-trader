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
	},

	created() {
		console.log('app created')
		this.$store.dispatch('initStocks')
	}
}
</script>

<style scoped>

</style>