<template>
	<div class="container-fluid">
		<!-- <div class="col-sm-6 col-md-4"> -->
		<div class="card mt-3" style="max-width: 28rem;">
			<!-- <div class="card-header"> -->
				<h4 class="card-header">{{ stock.name }}
				<small>(Price: {{ stock.price }})</small>
				</h4>
			<!-- </div> -->
			<div class="card-body">
				<h5 class="card-title">Success card title</h5>
				<div class="card-text float-left">
					<input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
				</div>
				<div class="float-right">
					<button class="btn btn-success" @click="buyStock" :disabled="!Number.isInteger(+quantity)">Buy</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['stock'],
	/*
	created(){
		alert('jaja')
	},
	*/
	data() {
		return {
			quantity: 0
		}
	},

	methods: {
		buyStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			console.log(order)
			this.quantity = 0;
		}
	}
}
</script>

<style scoped>

</style>