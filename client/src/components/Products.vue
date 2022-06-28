<template>
    <div>
        <input class="searchInput" @keyup="onChange" type="text" placeholder="Search..." />
        <!-- falls Produkte noch nicht geladen sind, kommt Loading Screen -->
        <div v-if="!products">
            <Loading />
        </div>
        <!-- falls keine Produkte existieren, zeigt Meldung an das keine Produkte gefunden wurden -->
        <div v-else-if="products.filter((p) => p.title.includes(searchText)).length === 0">
            <p>No products found.</p>
        </div>
        <div class="products" v-else>
            <!-- iteriert über jedes Produkt und rendert die Produktkarten -->
            <ProductCard
                v-for="(product, idx) in products.filter((p) => p.title.includes(searchText))"
                :key="idx"
                :product="product"
            >
            </ProductCard>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from './ProductCard.vue';
import Loading from './common/Loading.vue';

export default {
    name: 'Products',
    computed: {
        ...mapState({
            products: 'products',
        }),
    },
    components: {
        ProductCard,
        Loading,
    },
    data() {
        return {
            searchText: '',
        };
    },
    methods: {
        onChange(e) {
            this.searchText = e.target.value;
            console.log(this.searchText);
        },
    },
    created() {
        this.$store.dispatch('fetchProducts');
    },
};
</script>
