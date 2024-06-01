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
            localStorage.setItem("productInCart", JSON.stringify(this.productInCart));
            localStorage.setItem("products", JSON.stringify(this.products));
        },
    },
    created() {
        let productInCart = localStorage.getItem("productInCart");
        if (productInCart) {
            this.productInCart = JSON.parse(productInCart);
        }
        let products = localStorage.getItem("products");
        if (products) {
            this.products = JSON.parse(products);
        }
        else
        {
            this.products = [
                {
                    id: 1,
                    imgurl: "https://picsum.photos/200/300",
                    title: "Card Title",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex accusamus, voluptatem aliquam harum sequi sed corporis, fugiat natus deleniti, reiciendis asperiores aliquid odio pariatur obcaecati nihil ducimus totam tempore.",
                    value: "￥648",
                    count: 0,
                },
                {
                    id: 2,
                    imgurl: "https://picsum.photos/200/300",
                    title: "Card Title",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex accusamus, voluptatem aliquam harum sequi sed corporis, fugiat natus deleniti, reiciendis asperiores aliquid odio pariatur obcaecati nihil ducimus totam tempore.",
                    value: "￥648",
                    count: 0,
                }
            ];
            localStorage.setItem("products", JSON.stringify(this.products));
        }
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