var axios = require('axios');
var id = [];

module.exports = {

  baseUrl: 'http://localhost:3000',

  getAllSpots: function(ajaxDoneFn) {
  axios.get(this.baseUrl + '/parkings')
  .then(function (response) {
    console.log("response from axios get spots:", response.data);
    if (ajaxDoneFn) {
      ajaxDoneFn(response.data);

      for (var i = 0; i < response.data.length; i++){
        id.push(response.data[i].id);
      }
    }
        console.log(id);
  });

},


  addSpot: function(parking) {
    console.log("adding spot with axios...");
    axios.post(this.baseUrl + '/parkings', parking);
  },
//
//   api.post('/contact', (req, res) => {
//   // create a new taco
//   collection.insert(req.body, (err, result) => {
//     res.json(result);
//   });
// });

  deleteSpot: function(parking){
    console.log("deleting spot with axios...");
    console.log();
    axios.delete('http://localhost:3000/parkings/' + id, parking);
  },

  updateSpot: function(parking) {
    console.log("updating spot with axios...")
    axios.put('http://localhost:3000/parkings/' + id + '/edit', parking)
  },

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
