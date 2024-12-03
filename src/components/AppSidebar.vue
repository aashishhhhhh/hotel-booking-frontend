<template>
      <div class="bg-dark text-white p-3" style="width: 250px; height: 100vh;">
        <h4>Admin Panel</h4>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link text-white" active-class="active" to="/">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" active-class="active" to="/AppUserProfile">Profile</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link text-white" active-class="active" to="/AppDocument">Document</router-link>
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

  <style scoped>
  .nav-link.active {
  background-color: #007bff; /* Highlight color for active link */
  font-weight: bold; /* Optional: make it bold */
}
</style>
