<template>
  <div class="container">
    <div class="row mb-3">
      <div class="slider col-lg-12 mt-3">
        <Slider />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-sm-12 mt-3">
        <Sidebar />
      </div>
      <div class="col-lg-9 col-sm-12">
        <div class="row" v-if="load">
          <div   class="col-lg-4 col-md-6 col-sm-12 mt-3"  v-for="product, i in products" :key="i">
            <ProductCard :product='product' />
          </div>
        </div>
          <div class="" v-else>
            <b-spinner label="Spinning"></b-spinner>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Sidebar from '../components/Sidebar.vue'
import Slider from '../components/Slider.vue'
import axios from 'axios'
export default {
  data() {
    return {
      products: [],
      load:false
    }
  },
  async fetch() {
    await axios.get('https://bymmc.com.ua/api/products')
      .then((result) => {
        this.products = result.data
        this.load=true
      }).catch((err) => {
        console.log(err);
      });
  },
  components: {
    ProductCard,
    Sidebar,
    Slider
  }
}
</script>

<style scoped>
</style>