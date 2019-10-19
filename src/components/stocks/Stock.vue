<template>
	<div>
		<!-- <div class="card mt-3" style="max-width: 23rem;"> -->
			<div class="card mt-3 ml-2 mr-2" style="max-width: 100%;">
			<!-- <div class="card-header"> -->
				<h4 class="card-header">{{ stock.name }}
				<small>(Price: {{ stock.price }})</small>
				</h4>
			<!-- </div> -->
			<div class="card-body">
				<h5 class="card-title">{{ computedAmount }}</h5>
				<div class="card-text float-left">
					<!-- <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" @change="kup" @keyup="kup" :class="{danger:insufficientFunds}"> -->
					<input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger:insufficientFunds}">
				</div>
				<div class="float-right">
					<button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || +quantity <= 0 || !Number.isInteger(+quantity)">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['stock'],
	
	data() {
		return {
			quantity: 0
		}
	},

	watch: {
		quantity: function(value) {
			const amount = this.stock.price * value
			this.$store.commit('CALCULATE_AMOUNT', amount)
		}
	},

	computed: {
		funds() {
			return this.$store.getters.funds
		},
		insufficientFunds() {
			return this.quantity * this.stock.price > this.funds
		},
		computedAmount() {
			return this.quantity * this.stock.price
		}
	},

	methods: {
		buyStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			this.$store.dispatch('buyStock', order)
			this.quantity = 0;
		},
		kup(event) {
			const amount = this.stock.price * event.target.value
			this.$store.commit('CALCULATE_AMOUNT', amount)
		}
	}
}
</script>

<style scoped>
.danger {
	border: 1px solid red;
}
</style>