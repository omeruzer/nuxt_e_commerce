import axios from 'axios'
const state = {
    cart: []
}
const getters = {
    getCart(state) {
        return state.cart
    }
}
const mutations = {
    addCart(state, product) {
        const checkCart = state.cart.find(a => a.item.id === product.id)
        if (checkCart) {
            checkCart.amount++
        } else {
            state.cart.push({ item: product, amount: 1 })
        }
        console.log(state.cart);
    },

    removeToCart(state, product) {
        const checkCart = state.cart.find(a => a.item.id === product.id)
        if (checkCart) {
            checkCart.amount--
        }
        console.log(state.cart);
    },

    removeProduct(state,product){
        state.cart.splice(product.id,1)
    },

    unloadToCart(state) {
        state.cart = []
        console.log(state.cart);
    },
}
const actions = {
    addCart(context, id) {
        axios.get(`https://bymmc.com.ua/api/product/${id}`)
            .then((result) => { 
                context.commit('addCart', result.data[0])
            }).catch((err) => {
                console.log(err);
            });
    },
    removeToCart(context, id) {
        axios.get(`https://bymmc.com.ua/api/product/${id}`)
            .then((result) => {
                context.commit('removeToCart', result.data[0])
            }).catch((err) => {
                console.log(err);
            });
    },
    removeProduct(context, id){
        axios.get(`https://bymmc.com.ua/api/product/${id}`)
        .then((result) => {
            context.commit('removeProduct', result.data[0])
        }).catch((err) => {
            console.log(err);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
