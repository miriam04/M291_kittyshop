<template>
    <div class="cartItem" :set="(product = products.find((p) => p.id === cartItem.productId))">
        <router-link :to="`/detail/${product.id}`">{{ product.title }}</router-link>
        <div>{{ product.price.toFixed(2) }} CHF</div>
        <div>
            <button @click="removeFromCart(product.id)">-</button>
            <!-- Weil Amount sich ändern kann wurde er als v-text angegeben -->
            <span v-text="cartItem.amount"></span>
            <button @click="addToCart(product.id)">+</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'CartItem',
    props: {
        cartItem: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapState({
            products: 'products',
        }),
    },
    methods: {
        addToCart(productId) {
            this.$store.commit('addToCart', productId);
        },
        removeFromCart(productId) {
            this.$store.commit('removeFromCart', productId);
        },
    },
};
</script>
