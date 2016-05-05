var axios = require('axios');

module.exports = {
  baseUrl: 'http://localhost:3000',

  getAllSpots: function(ajaxDoneFn) {
  axios.get(this.baseUrl)
  // if successful auth, pass the response to ajaxDoneFn
  .then(function (response) {
    console.log("response from axios get auth:", response.data);
    if (ajaxDoneFn) {
      ajaxDoneFn(response.data);
    }
  })
  // if auth fails, nothing passed
  .catch(function (response) {
    console.log("Error with authentication", response);
    ajaxDoneFn();
  });
}

  // getAllSpots: function() {
  //   console.log("get all parking spots");
  //
  //   axios.get(baseUrl, response)
  //     console.log(response)
  //   .then(function(response){
  //     console.log("Response.data:", response.data);
  //   }.bind(this))
  //   .catch(function(err){
  //     console.warn("Error");
  //     return err;
  //   })
  // },
}
