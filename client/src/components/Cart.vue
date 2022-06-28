<template>
    <div id="cart">
        <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-256.png" @click="toggleModal" />
        <p @click="toggleModal">Cart ({{ getCartTotalProducts }})</p>
        <div class="modal" ref="modal" v-if="isModalOpen">
            <p>
                {{ getCartTotalProducts }} Products in your cart with a total value of CHF {{ getCartTotal.toFixed(2) }}
            </p>

            <div class="table" v-if="getCartTotal !== 0">
                <div class="headerRow">
                    <div>Artikel</div>
                    <div>Menge</div>
                </div>
                <div v-for="(item, idx) in cart" :key="idx">
                    <CartItem :cartItem="item" />
                </div>
            </div>
            <div class="table" v-else-if="getCartTotal === 0">
                <b>Your cart is empty.</b>
            </div>
            <div class="table" v-else>
                <b>Loading...</b>
            </div>

            <div class="total">
                <b>TOTAL</b>
                <b>{{ getCartTotal.toFixed(2) }} CHF</b>
            </div>
            <button @click="alert('message')">Checkout now!</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import CartItem from './CartItem.vue';

export default {
    name: 'Cart',
    computed: {
        ...mapState({
            cart: 'cart',
            products: 'products',
        }),
        ...mapGetters({
            getCartTotal: 'getCartTotal',
            getCartTotalProducts: 'getCartTotalProducts',
        }),
    },
    data() {
        return {
            isModalOpen: false,
        };
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
        },
    },
    components: { CartItem },
};
</script>
