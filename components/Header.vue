<template>
    <div class="navbarr">
        <b-navbar toggleable="lg" type="dark" variant="info">
                <nuxt-link to="/" tag="a"  class="navbar-brand">E-commerce</nuxt-link>
            <b-navbar-toggle target="nav-collapse">
                <nuxt-link style="color: #fff;" to="/cart"><i class="fa fa-cart-shopping"></i> ({{ $store.getters.getCart.length }})</nuxt-link>
            </b-navbar-toggle>

            <b-collapse is-nav class="d-sm-none">
                <b-navbar-nav>
                    <b-nav-item href="#">
                        <nuxt-link to="/" tag="a" class="nav-link">Home</nuxt-link>
                    </b-nav-item>
                    <b-nav-item href="#" >
                        <nuxt-link to="/cart" tag="a" class="nav-link">Cart ({{ $store.getters.getCart.length }})
                        </nuxt-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>