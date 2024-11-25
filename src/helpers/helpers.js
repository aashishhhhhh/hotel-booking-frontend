import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000'; // Laravel server URL


export default {
  // get csrf token
   getCsrfToken() {
    return axios.get('/get-csrf').then((response) => response.data.csrfToken);

},

 async logout(){
    return axios.get('/clear-cache').then((response) => console.log(response));
},

async getUserData()
{
    try {
        const response = await axios.get('/user');
        return response.data; // Return the user data directly
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Optionally rethrow the error for handling
      }
}


  // check user is logged in or not


};
