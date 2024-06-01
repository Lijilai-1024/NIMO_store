<template>
    <div class="card">
        <div class="card__image">
            <img :src="imgurl" alt="Product" />
        </div>
        <div class="card__body">
            <h4>{{ title }}</h4>
            <p>{{ content }}</p>
        </div>
        <div class="card__actions">
            <div class="value">{{ value }}</div>
            <el-button v-if="count === 0" @click="count=1" type="primary">Add to Cart</el-button>
            <el-input-number v-else v-model="count" size="default"></el-input-number>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgurl:
        {
            type: String,
            required: true
        },
        title:
        {
            type: String,
            required: true
        },
        content:
        {
            type: String,
            required: true
        },
        value:
        {
            type: String,
            required: true
        },
        initCount:
        {
            type: Number,
            required: true
        }
    },
    emits: ['setCount'],
    data() {
        return {
            count: this.initCount
        }
    },
    methods: {
        setCount() {
            this.$emit('setCount', this.count)
        }
    },
    watch: {
        count() {
            this.setCount()
        }
    }

}
</script>
<style lang=scss scoped>
.card {
    width: 320px;
    background-color: #f8fafc;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 20px;
    justify-self: center;
    align-self: center;

    &__body {
        padding: 20px 20px 5px;

        h4 {
            font-size: 28px;
            font-weight: bold;
        }

        p {
            height: 200px;
            overflow: hidden;
            font-size: 16px;
            color: #6b7280;
        }
    }

    &__image {
        img {
            width: 100%;
            border-radius: 16px 16px 0 0;
            aspect-ratio: 1;
            object-fit: cover;
            object-fit: center;
        }
    }

    &__actions {
        padding: 0 20px 16px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .value {
            font-size: 20px;
            font-weight: bold;
        }
    }
}
</style>