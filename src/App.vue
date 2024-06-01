<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <PageHeader />
  <main>
    <RouterView />
  </main>
  <PageFooter />
</template>

<style lang="scss" scoped>
main {
  padding: 20px;
  min-height: 100vh;
}
</style>
<script>
import PageFooter from '@/components/PageFooter.vue'
import PageHeader from '@/components/PageHeader.vue'
export default {
  components: {
    PageFooter,
    PageHeader
  }
}
</script>
