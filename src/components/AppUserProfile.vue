<template>
  <div class="profile-page">
    <div class="card">
      <div class="card-header text-center">
        <h2>User Profile</h2>
      </div>
      <div class="card-body">
        <div class="profile-header">
          <h3 class="profile-name">{{ name || "John Doe" }}</h3>
          <p class="profile-email">{{ email || "johndoe@example.com" }}</p>
        </div>


      </div>

      <div class="card-footer text-center">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          edit
        </button>
        <!-- <button class="btn btn-primary" @click="editProfile">Edit Profile</button> -->
        <button class="btn btn-secondary" @click="logout">Logout</button>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit profile</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"
              >current password (type your password to change the
              details)</label
            >
            <input
              type="password"
              class="form-control"
              v-model="currentPw"
              id="password"
              name="password"
              @input="checkPassword"
              required
            />
          </div>

          <div v-if="loading" class="load-spinner">
            {{ loading_text }}
          </div>

          <div v-else id="changepw" class="loading-spinner">
            <div class="mb-3">
              <label for="newPassowrd" class="form-label">new password</label>
              <input
                type="password"
                v-model="newPassowrd"
                class="form-control"
                id="newPassowrd"
                name="newPassowrd"
                required
              />
            </div>

            <div class="mb-3">
              <label for="confirmPassword" class="form-label"
                >confirm password</label
              >
              <input
                type="password"
                v-model="confirmPassword"
                class="form-control"
                id="confirmPassword"
                name="newPassowrd"
                required
              />
            </div>
          </div>
          <div v-if="hidebutton">
            <button type="submit" @click="changeProfile()" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
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
      loading: false,
      name: "",
      email: "",
      currentPw: "",
      loading_text: "",
      newPassowrd: "",
      confirmPassword: "",
      hidebutton: false,
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
          text: "Are you sure you want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.get("clear-cache").then((response) => {
              console.log(response);
              this.$router.push({ name: "HomePage" });
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async checkPassword() {
      this.loading = true;
      this.loading_text = "loading.....";
      const response = await helpers.checkPw(this.currentPw);
      if (response) {
        this.loading = false;
        this.hidebutton = true;
        this.loading_text = "";
      } else {
        this.loading_text = "enter the correct password";
      }
    },

    async checkMatchPw() {
      if (this.newPassowrd != this.confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonText: 'Try Again'
      });
    }
},

    async changeProfile() {

        if (this.newPassowrd != this.confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonText: 'Try Again'
      });
    }
    else{
        try {
        const response = await helpers.changePw(this.newPassowrd);
        if (response) {
            Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'password was change successfully',
            confirmButtonText: 'OK'
        });
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'new password and confirm password didnot matched',
            confirmButtonText: 'Try Again'
        });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    },
  },

  async mounted() {
    const userData = await helpers.getUserData();
    this.email = userData.email;
    this.name = userData.name;
    // const changepw = document.getElementById("changepw");
    // console.log(changepw)
    // // changepw.style.display = "none";
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

/* .loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1.5em;
} */
</style>
