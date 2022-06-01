<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3  ">
                <Title :title="title" />
            </div>
        </div>
        <div class="" v-if="$store.getters.getCart.length == 0">
            Cart Empty...
        </div>
        <div class="" v-else>
            <div class="row">
                <div class="col-md-12">
                    <CartTable />
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-md-3 mb-3 mt-3 ">
                    <CartTotal />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Cart'
        }
    },
      head:{
    title:'Cart'
  },
}
</script>

<style lang="scss" scoped>
</style>