<template>
	<div class="stock-both-padding">
		<!-- <app-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"/> -->
		<div class="row no-gutters">
    	<!-- <div class="col-md-4 bit" v-for="(stock, index) in stocks" :key="index"> -->
			<!-- <div class="col-xs-8 col-md-4 col-lg-4 col-sm-4" v-for="(stock, index) in stocks" :key="index"> -->
			<div class="col-md-4" v-for="(stock, index) in stocks" :key="index">
				<div class="text-center">
					<app-stock :stock="stock"/>
				</div>
    	</div>
		</div>
	</div>
</template>

<script>
import Stock from '../components/stocks/Stock.vue'
export default {
	data() {
		return {
			
		}
	},

	components: {
		appStock: Stock
	},

	computed: {
		stocks() {
			return this.$store.getters.stocks
		}
	}
}
</script>

<style scoped>
/* @import '../css/slide.css'; */

.stock-both-padding {
	padding-left: 30px;
	padding-right: 30px
}

</style>