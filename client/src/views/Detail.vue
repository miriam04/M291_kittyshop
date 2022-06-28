<template>
    <div>
        <Back />
        <div v-if="!product">
            <Loading />
        </div>
        <div class="loading" v-else-if="!product.title">
            <p>No product found.</p>
        </div>
        <div class="productDetail" v-else>
            <img :src="product.image" />
            <div>
                <h1>{{ product.title }}</h1>
                <p>{{ product.description }}</p>
                <b>{{ product.price }} CHF</b>
                <div>
                    <button @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getProduct } from '../utils/product';
import Back from '../components/common/Back.vue';
import Loading from '../components/common/Loading.vue';
export default {
    name: 'Detail',
    created() {
        getProduct(this.$route.params.id).then((product) => {
            this.product = product;
        });
    },
    watch: {
        $route(to, from) {
            getProduct(this.$route.params.id).then((product) => {
                this.product = product;
            });
        },
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product.id);
        },
    },
    data() {
        return {
            product: this.product,
        };
    },
    components: { Back, Loading },
};
</script>
