<template>
	<div>
			<div class="card mt-3 ml-2 mr-2" style="max-width: 100%;">
				<h4 class="card-header">{{ stock.name }}
				<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
				</h4>
			<div class="card-body">
				<h5 class="card-title">Success card title</h5>
				<div class="card-text float-left">
					<input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger:insufficientQuantity}">
				</div>
				<div class="float-right">
					<button class="btn btn-info" @click="sellStock" :disabled="insufficientQuantity || +quantity <= 0 || !Number.isInteger(+quantity)">{{ insufficientQuantity ? 'Not enough stocks' : 'Sell'}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
	props: ['stock'],
	
	data() {
		return {
			quantity: 0
		}
	},

	computed: {
		insufficientQuantity() {
			return this.quantity > this.stock.quantity
		}
	},

	methods: {
		/*
		...mapActions([
			'sellStock'
		]),
		*/
		...mapActions({
			xSellStock: 'sellStock'
		}),
		sellStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			this.xSellStock(order)
			this.quantity = 0
		}
	}
}
</script>

<style scoped>
.danger {
	border: 1px solid red;
}
</style>