// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create a new comment
app.post('/comment', function(req, res) {
  var comment = req.body.comment;
  fs.appendFile('comments.txt', comment + '\n', function(err) {
    if (err) {
      res.send('Error: ' + err);
    } else {
      res.send('Comment added');
    }
  });
});

// Get all comments
app.get('/comment', function(req, res) {
  fs.readFile('comments.txt', 'utf8', function(err, data) {
    if (err) {
      res.send('Error: ' + err);
    } else {
      res.send(data);
    }
  });
});

// Delete all comments
app.delete('/comment', function(req, res) {
  fs.writeFile('comments.txt', '', function(err) {
    if (err) {
      res.send('Error: ' + err);
    } else {
      res.send('Comments deleted');
    }
  });
});

app.listen(3000, function() {
  console.log('Server running on port 3000');
});