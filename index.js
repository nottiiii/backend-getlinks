var express = require('express')
var app = express()
var axios = require('axios')
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res) {  
  	res.render('search.html')
})

app.get('/follower/:id', function (req, res) {
  // console.log(req.params)
  axios.get(`https://api.github.com/users/${req.params.id}/followers`)
  .then(function (response) {
  	res.render('displayResult.html', {data: response.data})
  })
  .catch(function (error) {
    res.render('noResult.html')
  });
  return; 

})
 
app.listen(3000)