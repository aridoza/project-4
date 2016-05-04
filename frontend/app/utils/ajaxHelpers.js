var axios = require('axios');

module.exports = {
  baseUrl: 'http://localhost:3000',

  getMindstuff: function(ajaxDoneFn){
    axios.get(this.baseUrl + '/mindstuffs', {

    })
    .then(function (response){
      console.log("response from axios get:", response.data);
      if (ajaxDoneFn){
        ajaxDoneFn(response.data);
      }
    })
    .catch(function(response){
      console.log("Error with axios get");
      ajaxDoneFn()
    });
  }
};
