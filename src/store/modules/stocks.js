import stocks from '@/data/stocks'

const state = {
	stocks: [],
	amount: 0
}

const mutations = {
	'SET_STOCKS' (state, stocks) {
		state.stocks = stocks
	},
	'RND_STOCKS' (state) {
		
	},
	CALCULATE_AMOUNT: (state, amount) => {
		state.amount = amount
	}
}

const actions = {
	buyStock: ({commit}, order) => {
		commit('BUY_STOCK', order);
	},
	initStocks: ({commit}) => {
		commit('SET_STOCKS', stocks)
	},
	randomizeStocks: ({commit}) => {
		commit('RND_STOCKS')
	}

}

const getters = {
	stocks: state => {
		return state.stocks
	},
	amount: state => {
		return state.amount
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}