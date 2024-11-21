<template>
    <div class="AppSidebar">
      <h2 class="sidebar-title">Hotel Booking</h2>
      <ul class="sidebar-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/hotels">Hotels</router-link></li>
        <li><router-link to="/bookings">My Bookings</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    name: "AppSidebar",
  };
  </script>

  <style scoped>
  .AppSidebar {
    width: 250px;
    height: 100vh;
    background-color: #f8f9fa;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
  }

  .sidebar-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .sidebar-links {
    list-style: none;
    padding: 0;
  }

  .sidebar-links li {
    margin-bottom: 1rem;
  }

  .sidebar-links a {
    text-decoration: none;
    font-size: 1rem;
    color: #007bff;
    transition: color 0.3s;
  }

  .sidebar-links a:hover {
    color: #0056b3;
  }
  </style>
