<template>
    <div class="product-info">
        <div class="row">
            <div class="col-lg-12 ml-5">
                <div class="row">
                    <h3>{{ product.name }}</h3>
                </div>
                <div class="row">
                    <p>Kod: <b>{{ product.name }}</b></p>
                </div>
                <div class="row">
                    <p>Color: <b>{{ product.colors }}</b> </p>
                </div>
                <div class="row">
                    <p>Material: <b>{{ product.material }}</b> </p>
                </div>
                <div class="row">
                    <p>Pack Qty: <b>{{ product.packQty }} ({{ product.size }})</b> </p>
                </div>
                <div class="row">
                    <p>Pack Price: <b>{{ product.price * product.packQty }} ₴</b> </p>
                </div>

                <div class="row">
                    <h2>{{ product.price }} ₴</h2>
                </div>

                <div class="row">
                    <button class="btn btn-success" @click="addCart(product.id)"><i class="fa fa-cart-shopping"></i> Add to Card </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        addCart(id) {
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,

            })

            Toast.fire({
                icon: 'success',
                background: '#47C78E',
                title: 'Added to Cart',
            })
            this.$store.dispatch('addCart', id)
        }
    }
}
</script>

<style scoped>
@media screen and (max-device-width: 640px) {

    /* some CSS here */
    .product-info {
        margin-top: 30px;
    }
}
</style>