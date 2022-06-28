<template>
    <div class="product">
        <router-link :to="`/detail/${product.id}`">
            <img :src="product.image" />
        </router-link>
        <div class="info">
            <p>$ {{ product.price }}</p>
            <router-link :to="`/detail/${product.id}`">
                <h2>{{ product.title }}</h2>
            </router-link>
            <div>
                <button @click="addToCart">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product.id);
        },
    },
};
</script>
