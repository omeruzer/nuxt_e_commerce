<template>
    <div>
        <div class="row  justify-content-end">
            <button class="btn btn-danger mb-3 mr-3" @click="removeAllCart()">Remove to Cart</button>
        </div>
        <table class="table table-responsive ">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Pack Qty</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item, i in $store.getters.getCart" :key="i">
                    <td>{{ item.item.id }}</td>
                    <td style="width: 10%;">
                        <nuxt-link :to="{ name: 'product-id', params: { id: item.item.id } }"><img style="width: 100%;"
                                :src="'https://bymmc.com.ua/assets/images/products/' + item.item.img" alt="">
                        </nuxt-link>
                    </td>
                    <td>
                        <nuxt-link :to="{ name: 'product-id', params: { id: item.item.id } }">{{ item.item.name }}
                        </nuxt-link>
                    </td>
                    <td>{{ item.item.price }} ₴</td>
                    <td>{{ item.item.packQty }}</td>
                    <td>
                        <div class="" style="display: flex;">
                            <button class="btn btn-danger" @click="removeCart(item.item.id)">-</button>
                            <label for="" class="ml-2 mr-2">{{ item.amount }}</label>
                            <button class="btn btn-success" @click="addCart(item.item.id)">+</button>
                        </div>
                    </td>
                    <td> {{ item.amount * item.item.price * item.item.packQty }} ₴</td>
                    <td>
                        <button class="btn btn-danger" @click="removeProduct(item.item.id)">Delete</button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'unloadToCart'
        ]),
        removeAllCart() {
            this.$swal.fire({
                title: 'Are you sure?',
                text: "All Items In The Cart Will Be Deleted!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.$swal.fire(
                        {
                            icon: 'success',
                            title: 'Transaction Successfully Performed',
                            text: "shopping cart emptied",
                        }
                    )
                    this.unloadToCart()
                }
            })
        },
        addCart(id) {
            this.$store.dispatch('addCart', id)
        },
        removeCart(id) {
            this.$store.dispatch('removeToCart', id)
        },
        removeProduct(id) {
            this.$swal.fire({
                title: 'Are you sure?',
                text: "the product will be removed!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.$swal.fire(
                        {
                            icon: 'success',
                            title: 'Success',
                            text: "product removed",
                        }
                    )
                    this.$store.dispatch('removeProduct', id)

                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
</style>