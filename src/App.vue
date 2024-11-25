<template>
        <AppSidebar v-if="!shouldHideSidebar" />
     <div class="flex-grow-1">
      <router-view  />
    </div>

</template>

<script>
import AppSidebar from '@/components/AppSidebar.vue';
export default {
  name: 'App',
  components: {
    AppSidebar,
  },
  computed: {
    shouldHideSidebar() {
      // Check if the current route's meta has 'hideSidebar'
      return this.$route.meta.hideSidebar || false;
    },



  },
}
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100vh;
}

.flex-grow-1 {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
