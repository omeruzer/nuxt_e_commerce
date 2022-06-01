<template>
    <div>
        <h3>Description: </h3>

        <p v-html="product.content"></p>
    </div>
</template>

<script>
    export default {
     props:[
        'product'
     ]   
    }
</script>

<style lang="scss" scoped>

</style>