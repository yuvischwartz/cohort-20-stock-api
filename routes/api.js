var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


/* GET home page. */
router.get('/search/:symbol', async function(req, res, next) {
    let response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${req.params.symbol}/prev?adjusted=true&apiKey=XPMXaBjltgssWYa_xnvewf33E5tJ7fd0`)
    let json = await response.json()
    console.log(json)
    res.json(json.results[0].c)
});

// Create routes for adding a row in the portfolio table
// Create routes for removing a row in the portfolio table

module.exports = router;











// // var express = require('express');
// // var router = express.Router();
// // const fetch = require('node-fetch');


// // /* GET home page. */
// // router.get('/search/:symbol', async function(req, res, next) {
// //     let response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${req.params.symbol}/prev?adjusted=true&apiKey=ADDYOURAPIKEYHERE`)
// //     let json = await response.json()
// //     res.json(json.results[0].c)
// // });

// // // Create routes for adding a row in the portfolio table
// // // Create routes for removing a row in the portfolio table

// // module.exports = router;

// var express = require('express');
// var router = express.Router();

// const { polygonClient, restClient, websocketClient } = require("@polygon.io/client-js");
// const rest = restClient("XPMXaBjltgssWYa_xnvewf33E5tJ7fd0");

// /* GET home page. */
// router.get('/search', async function (req, res, next) {
//   let response = await rest.forex.previousClose("C:EURUSD")
//   console.log(response)
 
//   res.json({})
 
//   // rest.forex
//   // .previousClose("C:EURUSD")
//   //   .then(values => {
    
//   // })
//   //   .catch((err) => {
    
//   // });
  
// });

// module.exports = router;