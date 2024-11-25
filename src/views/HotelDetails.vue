<template>
    <div>
      <h1>{{ hotel.name }}</h1>
      <p>{{ hotel.description }}</p>
      <p>Price per night: ${{ hotel.price_per_night }}</p>
    </div>
  </template>

  <script>
  import axios from 'axios';
  export default {
    data() {
      return { hotel: {} };
    },
    mounted() {
      const id = this.$route.params.id;
      this.$axios.get(`/hotels/${id}`).then(response => {

      });
      console.log(this.hotel);
    },
  };
  </script>
