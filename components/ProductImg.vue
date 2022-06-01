<template>
    <div>
        
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">

            <b-carousel-slide  :img-src="'https://bymmc.com.ua/assets/images/products/'+product.img"></b-carousel-slide>

            <b-carousel-slide v-for="img,i in product.get_img" :key="i"  :img-src="'https://bymmc.com.ua/assets/images/products/'+img.img"></b-carousel-slide>

 
        </b-carousel>
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