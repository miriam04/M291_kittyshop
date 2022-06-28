import Vue from 'vue';
import Vuex from 'vuex';
import { getProducts } from '../utils/product';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: null,
        cart: [],
    },
    getters: {
        getCartTotal(state) {
            return state.cart.reduce((total, item) => {
                let product = state.products.find((product) => product.id === item.productId);
                return total + product.price * item.amount;
            }, 0);
        },
        getCartTotalProducts(state) {
            return state.cart.reduce((total, item) => {
                return total + item.amount;
            }, 0);
        },
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addToCart: (state, productId) => {
            let index = state.cart.findIndex((p) => p.productId === productId);
            if (index !== -1) {
                state.cart[index].amount++;
            } else {
                state.cart.push({ productId: productId, amount: 1 });
            }
        },
        removeFromCart: (state, productId) => {
            let index = state.cart.findIndex((p) => p.productId === productId);
            if (index !== -1) {
                state.cart[index].amount--;
                if (state.cart[index].amount === 0) state.cart.splice(index, 1);
            }
        },
    },
    actions: {
        fetchProducts: async (context) => {
            context.commit('setProducts', await getProducts());
        },
    },
});
