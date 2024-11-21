<template>
    <div>
      <h1>Hotels</h1>
      <div v-for="hotel in hotels" :key="hotel.id">
        <h2>{{ hotel.name }}</h2>
        <p>{{ hotel.description }}</p>
        <router-link :to="`/hotels/${hotel.id}`">View Details</router-link>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return { hotels: [] };
    },
    mounted() {
      this.$axios.get('/hotels').then(response => {
        this.hotels = response.data;
      });
    },
  };
  </script>
