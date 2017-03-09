const express = require('express') 
const path = require('path');

const app = express()  ;
const port = 3000;

app.get('/', (request, response) => {  
  response.sendFile(path.join(__dirname, '', 'index.html'));
});


app.get('/demo.js', (request, response) => {  
  response.set({
    'Content-Type': 'text/javascript',
    // 'Cache-Control': 'public, max-age=315360000',// is seconds (3600 = 1h)
    'ETag': '12345'
  });
  response.sendFile(path.join(__dirname, '', 'demo.js'));
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});