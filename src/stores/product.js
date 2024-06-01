import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    store() {
        return{
            product_item: {
                id: 0,
                imgurl: "",
                title: "",
                content: "",
                value: "",
                count: 0,
            },
            products: [],
            productInCart: [],
        }
    },
    getters: {
    },
    actions: {
        addToCart(product, count) {
            if (this.productInCart.find(item => item.id === product.id) === undefined){
                product.count = count;
                this.productInCart.push(product);
            }
            else if (count === 0) {
                this.productInCart = this.productInCart.filter(item => item.id !== product.id);
            }
            else {
                let item = this.productInCart.find(item => item.id === product.id);
                item.count = count;
            }
            this.products.find(item => item.id === product.id).count = count;
        },
    }


})
