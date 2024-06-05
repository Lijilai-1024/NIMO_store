<template>
    <div id="app">
        <div class="main-wrapper">
            <main>
                <Card v-for="product in products" :imgurl="product.imgurl" :title="product.title" :initCount="product.count"
                    :content="product.content" :value="product.value" @set-count="addToCart(product, $event)" />
            </main>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import { useProductStore } from '@/stores/index';
import { mapState } from 'pinia';
import axios from 'axios';

export default {
    components: {
        Card,
    },
    data() {
        return {
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
    computed: {
    },
    methods: {
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
            //localStorage.setItem("productInCart", JSON.stringify(this.productInCart));
            //localStorage.setItem("products", JSON.stringify(this.products));
        },
        get_data() {
            axios.get("http://127.0.0.1:8000/products/").then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    let product_item = {};
                    product_item.id = response.data[i].id;
                    product_item.imgurl = response.data[i].img_url;
                    product_item.title = response.data[i].name;
                    product_item.content = response.data[i].description;
                    product_item.value = String(response.data[i].price);
                    product_item.count = 0;
                    this.products.push(product_item);
                }
            });
        }
    },           
    created() {
        // const productStore = useProductStore();
        // let productInCart = localStorage.getItem("productInCart");
        // if (productInCart) {
        //     this.productInCart = JSON.parse(productInCart);
        // }
        // let products = localStorage.getItem("products");
        // if (products) {
        //     this.products = JSON.parse(products);
        // }
        // else
        // {
        //     this.products.forEach(product => {
        //         productStore.products.push(product);
        //     });
        //     console.log(productStore.products);
        //     localStorage.setItem("products", JSON.stringify(this.products));
        // }
    },
    mounted() {
        this.get_data();
    },
    unmounted() {
        localStorage.setItem("products", JSON.stringify(this.products));
    }
}
</script>

<style lang="scss" scoped>
#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

}



#app .main-wrapper {
    width: 100%;
    padding: 40px 20px;
    flex: 1;
}

#app main {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    justify-content: space-between;
    align-items: center;
}


</style>