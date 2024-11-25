<template>
<meta name="csrf-token" content="your-csrf-token-value">
<div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header text-center">
              <h4>App Login</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model="password"
                    required
                  />
                </div>
                <div v-if="error" class="alert alert-danger">
                  {{ error }}
                </div>
                <button v-on:click="login" class="btn btn-primary w-100">
                  Login
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
import axios from 'axios';
import helpers from '@/helpers/helpers';

  export default {
    name: "AppLogin",
    data() {
      return {
        email: '',
        password: '',
        error: null,
        csrfToken:'',
      };

    },

    methods: {
       async login()
        {
            const token = await  helpers.getCsrfToken();
            this.csrfToken = token;
            console.log(this.csrfToken)
            axios.post('/user/login', {
                email: this.email,
                password: this.password,
            },
            {
                headers:{
                    'X-CSRF-TOKEN': this.csrfToken,
                }
            }
        )
            .then((response) => {
                if (response.data.id !='') {
                    console.log(this.$router.push({ name: 'HomePage' }));
                }
                // Handle successful login here, e.g., store user data or redirect
            })
            .catch((error) => {
                console.error('Login Error:', error.response ? error.response.data : error.message);
                this.error = error.response ? error.response.data.message : error.message;
            });

        }
        // axios.post('/user/login', {
        //     email: this.email,
        //     password: this.password,
        //     })
        //     .then((response) => {
        //     console.log(response);
        //     })
        //     .catch((error) => {
        //     this.error = error.message;
        //     });

        }
  }
  </script>
