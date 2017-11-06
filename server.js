const express = require('express');
const path = require('path');
const app = express();

//static files

app.use(express.static(path.join(__dirname, '/public/dist')));

app.listen(3000, ()=>{
  console.log('Server on port 3000');
});
