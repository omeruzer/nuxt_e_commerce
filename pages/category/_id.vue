<template>
  <div class="container">
    <div class="row mb-3">
      <div class="slider col-lg-12 mt-3">
        <Title :title="category.title" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-sm-12 mt-3">
        <Sidebar />
      </div>
      <div class="col-lg-9 col-sm-12">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 mt-3" v-if="category.get_product==0">
            Product Noting...
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mt-3" v-else v-for="product,i in category.get_product" :key="i" >
            <ProductCard :product="product" />
          </div>
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
          category:{}
        }
      },
      head:{
        title:"Category"
      },
      async fetch(){
        await axios.get(`https://bymmc.com.ua/api/category/${this.$route.params.id}`)
          .then((result) => {
            this.category=result.data
            console.log(this.category);
          }).catch((err) => {
              console.log(err);
          });
      }
        
    }
</script>

<style lang="scss" scoped>

</style>