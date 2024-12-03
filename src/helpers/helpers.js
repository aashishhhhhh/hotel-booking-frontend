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
},

async checkPw(password)
{
    const token = await  this.getCsrfToken();

    try{
        const response = await axios.post('/user/checkpw',{
            'password' : password
        },{
            headers:{
                'X-CSRF-TOKEN': token,
            }
        });
        return response.data; // return the response
    }
    catch(error)
    {
        console.error('Error fetching user data:', error);
        throw error; // Optionally rethrow the error for handling
    }
},
async changePw(password)
{
    const csrf = await this.getCsrfToken();

    try{
        const response = await axios.post('/user/changepw',{
            'password': password
        },{
            headers:{
                'X-CSRF-TOKEN':csrf
            }
        });
        return response;
    }
    catch(error)
    {
        console.error('Error fetching user data:', error);
        throw error; // Optionally rethrow the error for handling
    }
}




};
