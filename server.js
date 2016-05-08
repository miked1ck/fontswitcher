var express = require('express');
var app = express();

// Serve static shit
app.use('/public', express.static(__dirname + '/src/public'));
app.get("*", function(req, res) {
   res.sendfile('./src/app.html')
});

// Run it
app.listen(8080, function () {
  console.log('Fontswitcher server is listening at http://localhost:8080');
});
