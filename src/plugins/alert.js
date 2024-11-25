import Swal from 'sweetalert2';

export default {
  install(app) {
    app.config.globalProperties.$alert = Swal.fire; // Add Swal to the global properties
  },
};
