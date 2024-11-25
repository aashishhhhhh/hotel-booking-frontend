<template>
    <div class="profile-page">
      <div class="card">
        <div class="card-header text-center">
          <h2>User Profile</h2>
        </div>
        <div class="card-body">
          <div class="profile-header">
            <h3 class="profile-name">{{ name || 'John Doe' }}</h3>
            <p class="profile-email">{{ email || 'johndoe@example.com' }}</p>
          </div>

          <div v-if="loading" class="loading">
          </div>

          <div v-else>
            <div class="profile-details">
              <h4>Details</h4>
              <ul>
                <li><strong>Username:</strong> {{ data.username || 'N/A' }}</li>
                <li><strong>Phone:</strong> {{ data.phone || 'N/A' }}</li>
                <li><strong>Address:</strong> {{ data.address || 'N/A' }}</li>
              </ul>
            </div>

            <!-- <div class="profile-activity">
              <h4>Recent Activity</h4>
              <ul>
                <li v-for="(activity, index) in data.recentActivities" :key="index">
                  {{ activity }}
                </li>
              </ul>
            </div> -->
          </div>
        </div>

        <div class="card-footer text-center">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Open Modal
    </button>
          <!-- <button class="btn btn-primary" @click="editProfile">Edit Profile</button> -->
          <button class="btn btn-secondary" @click="logout">Logout</button>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            This is a Bootstrap modal in Vue.js.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
import axios from "axios";
import Swal from 'sweetalert2';
import helpers from "@/helpers/helpers";
// import alert from "@/plugins/alert";
//   import helpers from "@/helpers/helpers";
  export default {
    name: "AppUserProfile",
    data() {
      return {
        data: {
          username: "",
          phone: "",
          address: "",
          avatar: "",
          recentActivities: [],
        },
        loading: true,
        name: "",
        email: "",
      };
    },
    methods: {
      async helpersfetchData() {
        try {
          const response = await axios.get("/api/example"); // Fetch user data
          this.data = response.data;
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          this.loading = false;
        }
      },
      editProfile() {
        // Redirect to edit profile page or open a modal
        alert("Edit profile feature coming soon!");
      },
      logout() {
        try {
                Swal.fire({
                    text: 'Are you sure you want to logout?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.get('clear-cache').then((response)=>{
                        console.log(response)
                        this.$router.push({ name: 'HomePage' });
                    });
                }
            });

        } catch (error) {
            console.log(error);
        }
      },
    },
   async mounted() {
        const userData = await helpers.getUserData();
        this.email = userData.email;
        this.name = userData.name;
    },
  };
  </script>

  <style scoped>
  .profile-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    background-color: #007bff;
    color: white;
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }

  .profile-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .profile-name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .profile-email {
    color: #555;
  }

  .profile-details,
  .profile-activity {
    margin-bottom: 20px;
  }

  .profile-details h4,
  .profile-activity h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #333;
  }

  .profile-details ul,
  .profile-activity ul {
    list-style: none;
    padding: 0;
  }

  .profile-details li,
  .profile-activity li {
    margin-bottom: 5px;
  }

  .card-footer {
    padding: 15px;
  }

  .btn {
    margin: 0 5px;
  }
  </style>
