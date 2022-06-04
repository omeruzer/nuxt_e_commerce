<template>
    <div>
        <b-card-group deck class="">
            <b-card title="Checkout" header-tag="header" footer-tag="footer">
                <b-card-text>Quantity: {{$store.getters.getCartItemsCount}}</b-card-text>
                <b-card-text>Amount:  {{$store.getters.getCartSubtotal}} ₴ </b-card-text>
                <b-card-text>Delivery Pay:{{$store.state.cart.delivery}} ₴</b-card-text>
                <b-card-text>Total: <b>{{$store.getters.getCartTotal}} ₴</b> </b-card-text>
                <b-button id="show-btn" class="btn btn-info" @click="$bvModal.show('bv-modal-example')">go to Pay
                </b-button>
            </b-card>

            <b-modal id="bv-modal-example" hide-footer>
                <template #modal-title>
                    Pay
                </template>
                <div class="d-block text-center">
                    <div class="container">
                        <div class="row">
                            <form action="">
                                <h3>User Info</h3>
                                <div class="row">
                                    <div class="col-md-6">
                                        <b-form-input v-model="text" placeholder="Name"></b-form-input>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-input v-model="text" placeholder="Surname"></b-form-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mt-3">
                                        <b-form-input v-model="text" placeholder="E-mail"></b-form-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mt-3">
                                        <b-form-input v-model="text" placeholder="Phone"></b-form-input>
                                    </div>
                                </div>
                                <hr>
                                <h3>Address</h3>
                                <div class="row">
                                    <div class="col-md-6">
                                        <b-form-input v-model="text" placeholder="City"></b-form-input>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-input v-model="text" placeholder="State"></b-form-input>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <b-form-input v-model="text" placeholder="Address"></b-form-input>
                                    </div>
                                </div>
                                <hr>
                                <h3>Payment Info</h3>
                                <div class="row">
                                    <div class="col-md-12">
                                        <b-form-input v-model="text" placeholder="Name on Card"></b-form-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mt-3">
                                        <b-form-input v-model="text" placeholder="Card Number"></b-form-input>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <b-form-input v-model="text" placeholder="Expiry"></b-form-input>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-input v-model="text" placeholder="CVV"></b-form-input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <b-button class="btn btn-success mt-3" block @click="payment()">Pay <i class="fa fa-tags"></i> ({{$store.getters.getCartTotal}} ₴)
                </b-button>
            </b-modal>
        </b-card-group>
    </div>
</template>

<script>

export default {
    methods: {
        data() {
            return {
                form:{
                    name:null,
                    username:null,
                    email:null,
                    phone:null,
                    city:null,
                    state:null,
                    address:null,
                    nameOnCard:null,
                    cardNumber:null,
                    date:null,
                    cvv:null
                }
            }
        },
        payment() {
            this.$swal.fire({
                icon: 'success',
                title: 'Success',
                text: "we received your order",
                timer: 3000,
                showCancelButton: false,
                showConfirmButton: false
            }).then((result) => {
                this.$store.state.cart.cart=[]
                this.$bvModal.hide("bv-modal-example")
                this.$router.push('/')
            }).catch((err) => {

            });
        }
    }
}
</script>

<style lang="scss" scoped>
</style>