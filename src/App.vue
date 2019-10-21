<template>
	<div>
		<app-header />
		<transition :name="transitionName" mode="out-in">
			<router-view />
		</transition>
		<div>{{ transitionName }}</div>
	</div>
</template>

<script>
import Header from './components/layouts/Header'
export default {
	data() {
		return {
			transitionName: ''
		}
	},

	watch: {
		'$route'(to, from) {
			if(from.path == '/stocks') {
				return this.transitionName = 'slide'
			}
			if(to.path == '/stocks') {
				return this.transitionName = 'slide'
			}
			return this.transitionName = ''
		}
		//const path = this.$route.name
	},

	components: {
		appHeader: Header
	},

	created() {
		this.$store.dispatch('initStocks')
	},

	computed: {
		routeName() {
			return this.$route.name === 'stocks'
		}
	}
}
</script>

<style scoped>
@import './css/slide.css'
/* .slide-enter-active {
	animation: slide-in 200ms ease-out forwards
}
.slide-leave-active {
	animation: slide-out 200ms ease-out forwards
}

@keyframes slide-in {
	from {
		transform: translateY(-30px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
		opacity: 1;
	}
	to {
		transform: translateY(-30px);
		opacity: 0;
	}
} */

</style>