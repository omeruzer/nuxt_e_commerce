import axios from 'axios'
const state = {
    cart: [],
    delivery: 100
}
const getters = {
    getCart(state) {
        return state.cart
    },

    getCartItemsCount(state) {
        var qty = 0

        state.cart.forEach(element => {
            var totalCount = element.amount * element.item.packQty
            qty = qty + totalCount
        });

        return qty;
    },

    getCartSubtotal(state) {
        var total = 0;

        state.cart.forEach(element => {
            var subTotal = element.amount * element.item.price * element.item.packQty
            total = total + subTotal
        });

        return total;
    },

    getCartTotal(state) {

        var subtotal = 0;

        state.cart.forEach(element => {
            var cartsubtotal = element.amount * element.item.price * element.item.packQty
            subtotal = subtotal + cartsubtotal
        });

        var total = state.delivery + subtotal

        return total;
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
            if (checkCart.amount == 0) {
                checkCart.amount++
            }
        }
        console.log(state.cart);
    },

    removeProduct(state, product) {
        const id = product.id
        const checkCart = state.cart.find(a => a.item.id === product.id)
        const productIndex = state.cart.indexOf(checkCart)

        state.cart.splice(productIndex, 1)

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
    removeProduct(context, id) {
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
