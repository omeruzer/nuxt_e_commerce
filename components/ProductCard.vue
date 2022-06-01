<template>
    <div>
        <b-card :img-src="'https://bymmc.com.ua/assets/images/products/' + product.img" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-title>
                <nuxt-link :to="{ name: 'product-id', params: { id: product.id } }">{{ product.name }}</nuxt-link>
            </b-card-title>
            <b-card-text>Code : {{ product.code }}</b-card-text>
            <b-card-text>pack qty: {{ product.packQty }} ({{ product.size }})</b-card-text>
            <b-card-text>Price : <b>{{ product.price }} ₴</b></b-card-text>
            <b-card-text>Pack Price : <b>{{ product.price * product.packQty }} ₴</b></b-card-text>

            <b-button href="#" variant="primary" @click="addCart(product.id)"><i class="fa fa-cart-shopping"></i> Add to Card</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    props: [
        'product'
    ],
    methods: {
        addCart(id) {
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Added to Cart',
                background: '#47C78E',

            })
            this.$store.dispatch('addCart', id)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>