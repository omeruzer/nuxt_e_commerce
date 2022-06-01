<template>
    <div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-md-4">
                    <ProductImg :product="product" />
                </div>
                <div class="col-md-8">
                    <ProductInfo :product="product" />
                </div>
            </div>
            <br>
            <hr>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <ProductDesc :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            product: {}
        }
    },
    head: {
        title: "Product"
    },
    async fetch() {
        await axios.get(`https://bymmc.com.ua/api/product/${this.$route.params.id}`)
            .then((result) => {
                this.product = result.data[0]
            }).catch((err) => {
                console.log(err);
            });
    }
}
</script>

<style lang="scss" scoped>
</style>