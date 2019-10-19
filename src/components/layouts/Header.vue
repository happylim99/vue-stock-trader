<template>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
			<router-link to="/" class="navbar-brand">Stock Trader</router-link>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<!-- <ul class="navbar-nav"> -->
						<router-link to="/portfolio" class="nav-item nav-link" active-class="active"><a>Portfolio</a></router-link>
					<li class="nav-item">
						<router-link to="/stocks" class="nav-link" active-class="active"><a>Stock</a></router-link>
					</li>
				</ul>
				<strong class="navbar-text">Amount needed : {{ amount }}</strong>
				<strong class="navbar-text">Funds : {{ funds | currency }}</strong>
				<ul class="navbar-nav">
					<router-link to="#" class="nav-item nav-link" active-class="active"><a>End day</a></router-link>
					<li class="nav-item dropdown navbar-right">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Save & Load</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Save Data</a>
						<a class="dropdown-item" href="#">Load Data</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
					</li>
				</ul>

				<!-- <form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form> -->
			</div>
			</div>
		</nav>
</template>

<script>
import { numberWithCommas } from '@/customFunction'
export default {
	computed: {
		funds() {
			// return numberWithCommas(this.$store.getters.funds)
			return this.$store.getters.funds
		},
		amount() {
			return numberWithCommas(this.$store.getters.amount)
		}
	}
}
</script>

<style scoped>
.container-fluid {
margin-left: 10px;
margin-right: 10px;
}
.active {
	background: rgb(230, 228, 228);
	border-radius: 50px;
}

/* .navbar-center
{
    position: absolute;
		width: 100%;
    left: 0;
    text-align: center;
} */


@media only screen and (min-width: 991px) {
  .navbar {
    padding-top: 0;
    padding-bottom: 0;
  }
  /* .nav-link {
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 0;
  } */
	.nav-link {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>