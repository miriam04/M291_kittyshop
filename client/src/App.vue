<template>
    <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
    <div id="app">
        <div id="header">
           <router-link to="/">
                <div id="logo">
                    <img src="https://cdn.pixabay.com/photo/2021/02/19/09/36/heart-6029680_960_720.png" />
                    <h1>Kittyshop</h1>
                </div>
            </router-link>
            <div id="nav">
                <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
                <router-link to="/contact">Contact</router-link>
            </div>
            <Cart />
        </div>

        <router-view />
        <CustomFooter />
    </div>
</template>

<script>
import Cart from './components/Cart.vue';
import CustomFooter from './components/CustomFooter.vue';
export default {
    components: { Cart, CustomFooter },
};
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
