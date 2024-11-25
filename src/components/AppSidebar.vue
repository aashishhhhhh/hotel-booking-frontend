<template>
      <div class="bg-dark text-white p-3" style="width: 250px; height: 100vh;">
        <h4>Admin Panel</h4>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/AppUserProfile">Profile</router-link>
        </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Settings</a>
          </li>
        </ul>
      </div>
  </template>

  <script>
  export default {
    name: "AppSidebar",

}
  </script>
