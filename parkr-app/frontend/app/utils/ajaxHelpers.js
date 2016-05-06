var axios = require('axios');

module.exports = {
  baseUrl: 'http://localhost:3000',

  getAllSpots: function(ajaxDoneFn) {
  axios.get(this.baseUrl + '/parkings')
  .then(function (response) {
    console.log("response from axios get spots:", response.data);
    if (ajaxDoneFn) {
      ajaxDoneFn(response.data);
    }
  })
  .catch(function (response) {
    console.log("Error");
    ajaxDoneFn();
  });
},

  addSpot: function(parking) {
    console.log("adding spot with axios...")
    axios.post(this.baseUrl + '/parkings', parking)

    success: (parking) => {
      this.state.handleSubmit(parking);
    }
    // .then(function (response) {
    //   if (addParking) {
    //     addParking(true);
    //   }
    // })
    // .catch(function (response) {
    //   console.log("failed to add spot");
    //   if (addParking){
    //     addParking(false);
    //   }
    // });
  },
//
//   api.post('/contact', (req, res) => {
//   // create a new taco
//   collection.insert(req.body, (err, result) => {
//     res.json(result);
//   });
// });

  deleteSpot: function(id){
    axios.delete(this.baseUrl + id)
    .then(function (response) {
      console.log("deleting spot");
      this.removeParkingSpot(id);
    })
    .catch(function (response) {
      console.log("error deleting spot");
      ajaxDoneFn();
    });
  },
  removeParkingSpot(id){
    var newSpots = this.state.parkings.filter((spot) => {
      return spot.id != id;
    });
    this.setState({ parkings: newSpots })
  }

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
