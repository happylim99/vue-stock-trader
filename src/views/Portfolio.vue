<template>
	<div class="stock-both-padding">
		<div class="row no-gutters">
			<div class="col-md-4" v-for="(stock, index) in stocks" :key="index">
				<div class="text-center">
					<app-stock :stock="stock"/>
				</div>
    	</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from '../components/portfolio/Stock.vue'

export default {
	computed: {
		...mapGetters({
			stocks: 'stockPortfolio'
		})
	},
	components: {
		appStock: Stock
	}
}
</script>

<style scoped>
.stock-both-padding {
	padding-left: 30px;
	padding-right: 30px
}
</style>